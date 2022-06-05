goog.provide('frontend.components.onboarding.setups');
goog.scope(function(){
  frontend.components.onboarding.setups.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.onboarding !== 'undefined') && (typeof frontend.components.onboarding.setups !== 'undefined') && (typeof frontend.components.onboarding.setups.DEVICE !== 'undefined')){
} else {
frontend.components.onboarding.setups.DEVICE = (cljs.core.truth_(frontend.util.mobile_QMARK_())?"phone":"computer");
}
frontend.components.onboarding.setups.setups_container = rum.core.lazy_build(rum.core.build_defc,(function (flag,content){
var attrs58366 = (function (){var picker_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flag,new cljs.core.Keyword(null,"picker","picker",-659389603));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-card.flex.flex-col.items-center","div.inner-card.flex.flex-col.items-center",-382934969),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-xl","h1.text-xl",-128714254),((picker_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("heart")], null),"Welcome to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Logseq!"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),frontend.ui.icon.cljs$core$IFn$_invoke$arity$1("file-import")], null),"Import existing notes"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),((picker_QMARK_)?"First you need to choose a folder where Logseq will store your thoughts, ideas, notes.":"You can also do this later in the app.")], null),content], null);
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58366))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cp__onboarding-setups","flex","flex-1"], null)], null),attrs58366], 0))):{'className':"cp__onboarding-setups flex flex-1"}),((cljs.core.map_QMARK_(attrs58366))?null:[daiquiri.interpreter.interpret(attrs58366)]));
}),null,"frontend.components.onboarding.setups/setups-container");
frontend.components.onboarding.setups.mobile_intro = rum.core.lazy_build(rum.core.build_defc,(function (){
var attrs58367 = (cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Save them in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-bold","span.font-bold",-460884588),"iCloud Drive's Logseq directory"], null),", and sync them across devices using iCloud."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),"Save them in Logseq's directory of your device's local storage."], null)], null)], null):(cljs.core.truth_(frontend.mobile.util.native_android_QMARK_())?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"You can save them in your local storage, and use any third-party sync service to keep your notes sync with other devices. ","If you prefer to use Dropbox to sync your notes, you can use ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://play.google.com/store/apps/details?id=com.ttxapps.dropsync",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Dropsync"], null),". Or you can use ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"FolderSync"], null),"."], null):null
));
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs58367))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mobile-intro"], null)], null),attrs58367], 0))):{'className':"mobile-intro"}),((cljs.core.map_QMARK_(attrs58367))?null:[daiquiri.interpreter.interpret(attrs58367)]));
}),null,"frontend.components.onboarding.setups/mobile-intro");
frontend.components.onboarding.setups.picker = rum.core.lazy_build(rum.core.build_defcs,(function (_state){
var parsing_QMARK_ = frontend.state.sub(new cljs.core.Keyword("repo","parsing-files?","repo/parsing-files?",638499640));
return frontend.components.onboarding.setups.setups_container(new cljs.core.Keyword(null,"picker","picker",-659389603),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.flex","article.flex",645570538),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.a","section.a",303203497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Let\u2019s get you set up."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),["Where on your ",frontend.components.onboarding.setups.DEVICE," do you want to save your work?"].join(''),(cljs.core.truth_(frontend.mobile.util.native_platform_QMARK_())?frontend.components.onboarding.setups.mobile_intro():null)], null),(cljs.core.truth_((function (){var or__5043__auto__ = frontend.handler.web.nfs.supported_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose.flex.flex-col.items-center","div.choose.flex.flex-col.items-center",1128023989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.page.ls_dir_files_BANG_((function (){
return frontend.modules.shortcut.core.refresh_BANG_();
}));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.justify-center.flex-col","label.action-input.flex.items-center.justify-center.flex-col",1447564813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),parsing_QMARK_], null),(cljs.core.truth_(parsing_QMARK_)?frontend.ui.loading(""):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Choose a folder"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"Open existing directory or Create a new one"], null)], null))], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-5","div.px-5",-583544500),frontend.ui.admonition(new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"It seems that your browser doesn't support the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://web.dev/file-system-access/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"new native filesystem API"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),", please use any Chromium 86+ based browser like Chrome, Vivaldi, Edge, etc. Notice that the API doesn't support mobile browsers at the moment."], null)], null))], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.b.flex.items-center.flex-col","section.b.flex.items-center.flex-col",1416120845),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.flex","p.flex",818063624),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("zoom-question",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"22px"], null)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex-1.flex.flex-col","span.flex-1.flex.flex-col",-1099101938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"How Logseq saves your work"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-60","small.opacity-60",1913667792),"Inside the directory you choose, Logseq will create 4 folders."], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-sm.pt-5.tracking-wide","p.text-sm.pt-5.tracking-wide",-717937375),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),["Each page is a file stored only on your ",frontend.components.onboarding.setups.DEVICE,"."].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You may choose to sync it later."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5520__auto__ = (function frontend$components$onboarding$setups$iter__58378(s__58379){
return (new cljs.core.LazySeq(null,(function (){
var s__58379__$1 = s__58379;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__58379__$1);
if(temp__5720__auto__){
var s__58379__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58379__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__58379__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__58381 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__58380 = (0);
while(true){
if((i__58380 < size__5519__auto__)){
var vec__58382 = cljs.core._nth(c__5518__auto__,i__58380);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58382,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58382,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58382,(2),null);
cljs.core.chunk_append(b__58381,((cljs.core.not(title))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hr","li.hr",-431034643)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((clojure.string.ends_with_QMARK_(label,".edn"))?"is-file":null)], null),(cljs.core.truth_(icon)?frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(icon):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.uppercase","strong.uppercase",-1521442439),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50","small.opacity-50",-519407779),label], null)], null)], null)));

var G__58390 = (i__58380 + (1));
i__58380 = G__58390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),frontend$components$onboarding$setups$iter__58378(cljs.core.chunk_rest(s__58379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58381),null);
}
} else {
var vec__58385 = cljs.core.first(s__58379__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(1),null);
var icon = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58385,(2),null);
return cljs.core.cons(((cljs.core.not(title))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.hr","li.hr",-431034643)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.as-flex-center","i.as-flex-center",-901481825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((clojure.string.ends_with_QMARK_(label,".edn"))?"is-file":null)], null),(cljs.core.truth_(icon)?frontend.ui.icon.cljs$core$IFn$_invoke$arity$1(icon):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong.uppercase","strong.uppercase",-1521442439),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small.opacity-50","small.opacity-50",-519407779),label], null)], null)], null)),frontend$components$onboarding$setups$iter__58378(cljs.core.rest(s__58379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Graphics & Documents","/assets","artboard"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Daily notes","/journals","calendar-plus"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PAGES","/pages","file-text"], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["APP Internal","/logseq","tool"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Config File","/logseq/config.edn"], null)], null));
})()], null)], null)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.onboarding.setups/picker");
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.onboarding !== 'undefined') && (typeof frontend.components.onboarding.setups !== 'undefined') && (typeof frontend.components.onboarding.setups._STAR_roam_importing_QMARK_ !== 'undefined')){
} else {
frontend.components.onboarding.setups._STAR_roam_importing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.onboarding !== 'undefined') && (typeof frontend.components.onboarding.setups !== 'undefined') && (typeof frontend.components.onboarding.setups._STAR_opml_importing_QMARK_ !== 'undefined')){
} else {
frontend.components.onboarding.setups._STAR_opml_importing_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof frontend !== 'undefined') && (typeof frontend.components !== 'undefined') && (typeof frontend.components.onboarding !== 'undefined') && (typeof frontend.components.onboarding.setups !== 'undefined') && (typeof frontend.components.onboarding.setups._STAR_opml_imported_pages !== 'undefined')){
} else {
frontend.components.onboarding.setups._STAR_opml_imported_pages = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
frontend.components.onboarding.setups.importer = rum.core.lazy_build(rum.core.build_defc,(function (p__58388){
var map__58389 = p__58388;
var map__58389__$1 = cljs.core.__destructure_map(map__58389);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58389__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var roam_importing_QMARK_ = rum.core.react(frontend.components.onboarding.setups._STAR_roam_importing_QMARK_);
var opml_importing_QMARK_ = rum.core.react(frontend.components.onboarding.setups._STAR_opml_importing_QMARK_);
var finished_cb = (function (){
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Finished!",new cljs.core.Keyword(null,"success","success",1890645906));

return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
});
return frontend.components.onboarding.setups.setups_container(new cljs.core.Keyword(null,"importer","importer",570599349),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.flex.flex-col.items-center.importer.py-16.px-8","article.flex.flex-col.items-center.importer.py-16.px-8",-2146491748),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.c.text-center","section.c.text-center",-454472767),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Do you already have notes that you want to import?"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"If they are in a JSON or Markdown format Logseq can work with them."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.d.md:flex","section.d.md:flex",-2133533522),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = roam_importing_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return opml_importing_QMARK_;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),frontend.components.svg.roam_research.cljs$core$IFn$_invoke$arity$1((28))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col","div.flex.flex-col",255067761),(cljs.core.truth_(roam_importing_QMARK_)?frontend.ui.loading("Importing ..."):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"RoamResearch"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"Import a JSON Export of your Roam graph"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-roam",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_name = frontend.components.onboarding.setups.goog$module$goog$object.get(file,"name");
if(clojure.string.ends_with_QMARK_(file_name,".json")){
cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_roam_importing_QMARK_,true);

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
return frontend.handler.external.import_from_roam_json_BANG_(text,(function (){
cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_roam_importing_QMARK_,false);

return finished_cb();
}));
}));

return reader.readAsText(file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please choose a JSON file.",new cljs.core.Keyword(null,"error","error",-978969032));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.action-input.flex.items-center.mx-2.my-2","label.action-input.flex.items-center.mx-2.my-2",853398969),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__5043__auto__ = roam_importing_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return opml_importing_QMARK_;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.as-flex-center","span.as-flex-center",886043029),frontend.ui.icon.cljs$core$IFn$_invoke$arity$2("sitemap",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"26px"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.flex.flex-col","span.flex.flex-col",347826015),(cljs.core.truth_(opml_importing_QMARK_)?frontend.ui.loading("Importing ..."):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"OPML"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704)," Import OPML files"], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.absolute.hidden","input.absolute.hidden",-354085487),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"import-opml",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(e.target.files));
var file_name = frontend.components.onboarding.setups.goog$module$goog$object.get(file,"name");
if(clojure.string.ends_with_QMARK_(file_name,".opml")){
cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_opml_importing_QMARK_,true);

var reader = (new FileReader());
(reader.onload = (function (e__$1){
var text = e__$1.target.result;
return frontend.handler.external.import_from_opml_BANG_(text,(function (pages){
cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_opml_imported_pages,pages);

cljs.core.reset_BANG_(frontend.components.onboarding.setups._STAR_opml_importing_QMARK_,false);

return finished_cb();
}));
}));

return reader.readAsText(file);
} else {
return frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2("Please choose a OPML file.",new cljs.core.Keyword(null,"error","error",-978969032));
}
})], null)], null)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("picker",new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(query_params)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.e","section.e",-1594885824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return frontend.handler.route.redirect_to_home_BANG_.cljs$core$IFn$_invoke$arity$0();
})], null),"Skip"], null)], null):null)], null));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"frontend.components.onboarding.setups/importer");

//# sourceMappingURL=frontend.components.onboarding.setups.js.map
