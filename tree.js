var list = $(".content-wrapper li");
list.each(function(item){
    if (list[item].children.length>0 && item>0){
        if (list[item].children[0].localName == "ul"){
            list[item].children[0].style["display"]="none";
            var span=document.createElement( "span" );
            span.innerText = "📁 ";
            span.classList.add("node_icon");
            span.style.cursor="pointer";
            list[item].firstChild.before(span);
            return true;            
        }
    }
    if(list[item].children.length>1 && item>0){
        if(list[item].children[1].localName == "ul"){
            list[item].children[1].style["display"]="none";
            var span=document.createElement( "span" );
            span.innerText = "📁 ";
            span.classList.add("node_icon");
            span.style.cursor="pointer";
            list[item].firstChild.before(span);
            return true;       
        }
    }
});

$(".content-wrapper li span.node_icon").on("click",function(){
    if (this.innerText == "📁 ") {
        this.innerText = "🗁 ";
        $(this.parentElement).find("ul")[0].style.display="block";
    } else {
        this.innerText = "📁 ";
        $(this.parentElement).find("ul")[0].style.display="none";
    }
});