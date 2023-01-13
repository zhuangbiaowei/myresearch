function set_tree(class_name){
    var list = $(class_name + " li");
    list.each(function(item){
        if (list[item].children.length>0 && item>0){
            if (list[item].children[0].localName == "ul"){
                return set_folder(list, item, 0);
            }
        }
        if(list[item].children.length>1 && item>0){
            if(list[item].children[1].localName == "ul"){
                return set_folder(list, item, 0);
            }
        }
        if(list[item].children.length>2 && item>0){
            if(list[item].children[2].localName == "ul"){
                return set_folder(list, item, 1);
            }
        }
    });
    
    $(class_name + " li span.node_icon").on("click",function(){
        if (this.innerText == "📁 ") {
            this.innerText = "🗁 ";
            $(this.parentElement).find("ul")[0].style.display="block";
        } else {
            this.innerText = "📁 ";
            $(this.parentElement).find("ul")[0].style.display="none";
        }
    });
}

function get_span(folder){
    var span = document.createElement( "span" );
    span.innerText = folder + " ";
    span.classList.add("node_icon");
    span.style.cursor="pointer";
    return span;
}

function set_folder(list, item, i){
    if ($(list[item].children[i].nextSibling)[0].data.trim()=="collapsed:: true"){
        $(list[item].children[i].nextSibling)[0].data="";        
        list[item].children[i+1].style["display"]="none";                
        list[item].firstChild.before(get_span("📁"));
        return true;
    } else {
        list[item].firstChild.before(get_span("🗁"));
        return true;
    }
}