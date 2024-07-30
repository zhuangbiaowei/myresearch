require "markdown_site"

site = MarkdownSite::Site.new("./logseq.toml", :logseq)
site.copy_assets
site.write_data_json
site.generate