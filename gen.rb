require "markdown_extension"
require "liquid"
require "json"

def get_pagination(url, count, number)
    pagination = {}
    pagination["pages"] = []
    if number == 1
        f = File.new("./site/#{url}.html", "w")
        pagination["previous"]="#"
        pagination["next"]="#{url}_#{number+1}.html"
    elsif number == 2
        f = File.new("./site/#{url}_#{number}.html", "w")
        pagination["previous"]="#{url}.html"
        pagination["next"]="#{url}_#{number+1}.html"
    elsif number == count
        f = File.new("./site/#{url}_#{number}.html", "w")        
        pagination["previous"]="#{url}_#{number-1}.html"
        pagination["next"]="#"
    else
        f = File.new("./site/#{url}_#{number}.html", "w")
        pagination["previous"]="#{url}_#{number-1}.html"
        pagination["next"]="#{url}_#{number+1}.html"
    end
    1.upto(count) do |p_i|
        if p_i == 1
            page_url = "#{url}.html"
        else
            page_url = "#{url}_#{p_i}.html"
        end
        if number == p_i
            pagination["pages"] << {"active"=>true, "url"=>page_url, "number"=>"#{p_i}"}
        else
            pagination["pages"] << {"active"=>false, "url"=>page_url, "number"=>"#{p_i}"}
        end
    end
    return pagination, f
end

def add_page(site, page)
    if site.references[page.item_name]
        return {
            "item_name"=>page.item_name, 
            "references"=>site.references[page.item_name].size,
            "ctime"=>page.ctime,
            "mtime"=>page.mtime
        }
    else
        return {"item_name"=>page.item_name, "references"=>0, "ctime"=>page.ctime, "mtime"=>page.mtime}
    end
end

site = MarkdownExtension::Site.new("./logseq.toml", :logseq)
site_name = site.config.title ? site.config.title : "My Logseq"
unless Dir.exists?("./site")
    Dir.mkdir("site")
end

site.write_data_json("./site/data.json")
kg_template = Liquid::Template.parse(File.read("./template/kg.liquid"))
f = File.new("./site/kg.html", "w")
f.puts(kg_template.render('config'=>{'title'=>site_name}))
f.close

journal_list = []
site.journals.reverse.each do |journal|
    journal_template = Liquid::Template.parse(File.read("./template/journal.liquid"))
    journal_html = journal_template.render('title'=>journal.item_name, 'content'=>journal.html)
    journal_list << journal_html
end

template = Liquid::Template.parse(File.read("./template/index.liquid"))
page_count = (journal_list.size / 20) + 1
1.upto(page_count) do |page_number|
    pagination, f = get_pagination("index", page_count, page_number)
    page_start = (page_number-1)*20
    if page_number == page_count        
        f.puts(template.render('config'=>{'title'=>site_name}, 'journal_list'=>journal_list[page_start..-1], 'pagination'=>pagination))
    else
        f.puts(template.render('config'=>{'title'=>site_name}, 'journal_list'=>journal_list[page_start..page_start+20], 'pagination'=>pagination))
    end
    f.close
end

template = Liquid::Template.parse(File.read("./template/pages.liquid"))
page_count = (site.pages.size / 20) + 1
1.upto(page_count) do |page_number|
    pagination, f = get_pagination("pages", page_count, page_number)
    page_start = (page_number-1)*20
    pages = []
    if page_number == page_count
        site.pages[page_start..-1].each do |page|
            pages << add_page(site, page)
        end        
    else
        site.pages[page_start..page_start+20].each do |page|
            pages << add_page(site, page)
        end
    end
    f.puts(template.render('config'=>{'title'=>site_name}, 'pages'=>pages, 'pagination'=>pagination))
    f.close
end


template = Liquid::Template.parse(File.read("./template/page.liquid"))
site.pages.each do |page|
    filename = "./site/#{page.item_name}.html"
    f = File.new(filename, "w")
    f.puts template.render(
        'config'=>{'title'=>site_name},
        'page_title' => page.item_name,
        'page_html' => page.html)
    f.close
end

if Dir.exists?("./assets")
    `cp -r ./assets ./site/assets`
    `cp tree.js ./site/tree.js`
end
