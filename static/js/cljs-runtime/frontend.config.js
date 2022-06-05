goog.provide('frontend.config');
/**
 * @define {boolean}
 */
frontend.config.DEV_RELEASE = goog.define("frontend.config.DEV_RELEASE",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_release_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_release_QMARK_ = frontend.config.DEV_RELEASE;
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.dev_QMARK_ !== 'undefined')){
} else {
frontend.config.dev_QMARK_ = (function (){var or__5043__auto__ = frontend.config.dev_release_QMARK_;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return goog.DEBUG;
}
})();
}
/**
 * @define {boolean}
 */
frontend.config.PUBLISHING = goog.define("frontend.config.PUBLISHING",false);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.publishing_QMARK_ !== 'undefined')){
} else {
frontend.config.publishing_QMARK_ = frontend.config.PUBLISHING;
}
cljs.core.reset_BANG_(frontend.state.publishing_QMARK_,frontend.config.publishing_QMARK_);
frontend.config.test_QMARK_ = false;
/**
 * @define {boolean}
 */
frontend.config.FILE_SYNC_PROD_QMARK_ = goog.define("frontend.config.FILE_SYNC_PROD_QMARK_",false);
/**
 * @define {string}
 */
frontend.config.LOGIN_URL = goog.define("frontend.config.LOGIN_URL","https://logseq-test2.auth.us-east-2.amazoncognito.com/login?client_id=3ji1a0059hspovjq5fhed3uil8&response_type=code&scope=email+openid+phone&redirect_uri=logseq%3A%2F%2Fauth-callback");
/**
 * @define {string}
 */
frontend.config.API_DOMAIN = goog.define("frontend.config.API_DOMAIN","api.logseq.com");
/**
 * @define {string}
 */
frontend.config.WS_URL = goog.define("frontend.config.WS_URL","wss://og96xf1si7.execute-api.us-east-2.amazonaws.com/production?graphuuid=%s");
frontend.config.app_name = "logseq";
frontend.config.website = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3000":frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0)));
frontend.config.api = (cljs.core.truth_(frontend.config.dev_QMARK_)?"http://localhost:3000/api/v1/":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.website),"/api/v1/"].join(''));
frontend.config.asset_domain = frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("https://asset.%s.com",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.config.app_name], 0));
frontend.config.asset_uri = (function frontend$config$asset_uri(path){
if(frontend.config.publishing_QMARK_){
return path;
} else {
if(frontend.util.file_protocol_QMARK_()){
return clojure.string.replace(path,"/static/","./");
} else {
if(cljs.core.truth_(frontend.config.dev_QMARK_)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(frontend.config.asset_domain),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
}

}
}
});
frontend.config.markup_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"markdown","markdown",1227225089),null,new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"org","org",1495985),null,new cljs.core.Keyword(null,"rst","rst",-824162183),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null,new cljs.core.Keyword(null,"md","md",707286655),null], null), null);
frontend.config.doc_formats = (function frontend$config$doc_formats(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"one","one",935007904),null,new cljs.core.Keyword(null,"pptx","pptx",1751889346),null,new cljs.core.Keyword(null,"ppt","ppt",976691076),null,new cljs.core.Keyword(null,"xlsx","xlsx",847128521),null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),null,new cljs.core.Keyword(null,"epub","epub",-826123950),null,new cljs.core.Keyword(null,"xls","xls",732635219),null,new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"docx","docx",-566057986),null], null), null);
});
frontend.config.audio_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"wav","wav",270623362),null,new cljs.core.Keyword(null,"aac","aac",-1635091669),null,new cljs.core.Keyword(null,"m4a","m4a",-91255727),null,new cljs.core.Keyword(null,"ogg","ogg",1456573938),null,new cljs.core.Keyword(null,"flac","flac",-535998251),null,new cljs.core.Keyword(null,"mpeg","mpeg",-1021588107),null,new cljs.core.Keyword(null,"wma","wma",1555140921),null,new cljs.core.Keyword(null,"mp3","mp3",-879934022),null], null), null);
frontend.config.media_formats = clojure.set.union.cljs$core$IFn$_invoke$arity$2(logseq.graph_parser.config.img_formats(),frontend.config.audio_formats);
frontend.config.html_render_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asciidoc","asciidoc",1736965296),null,new cljs.core.Keyword(null,"adoc","adoc",-1288345346),null], null), null);
frontend.config.mobile_QMARK_ = ((frontend.util.node_test_QMARK_)?null:frontend.util.safe_re_find(/Mobi/,navigator.userAgent));
frontend.config.get_block_pattern = (function frontend$config$get_block_pattern(format){
return logseq.graph_parser.config.get_block_pattern((function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0();
}
})());
});
frontend.config.get_hr = (function frontend$config$get_hr(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32651 = format__$1;
var G__32651__$1 = (((G__32651 instanceof cljs.core.Keyword))?G__32651.fqn:null);
switch (G__32651__$1) {
case "org":
return "-----";

break;
case "markdown":
return "---";

break;
default:
return "";

}
});
frontend.config.get_bold = (function frontend$config$get_bold(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32655 = format__$1;
var G__32655__$1 = (((G__32655 instanceof cljs.core.Keyword))?G__32655.fqn:null);
switch (G__32655__$1) {
case "org":
return "*";

break;
case "markdown":
return "**";

break;
default:
return "";

}
});
frontend.config.get_italic = (function frontend$config$get_italic(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32656 = format__$1;
var G__32656__$1 = (((G__32656 instanceof cljs.core.Keyword))?G__32656.fqn:null);
switch (G__32656__$1) {
case "org":
return "/";

break;
case "markdown":
return "_";

break;
default:
return "";

}
});
frontend.config.get_underline = (function frontend$config$get_underline(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32657 = format__$1;
var G__32657__$1 = (((G__32657 instanceof cljs.core.Keyword))?G__32657.fqn:null);
switch (G__32657__$1) {
case "org":
return "_";

break;
case "markdown":
return "__";

break;
default:
return "";

}
});
frontend.config.get_strike_through = (function frontend$config$get_strike_through(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32658 = format__$1;
var G__32658__$1 = (((G__32658 instanceof cljs.core.Keyword))?G__32658.fqn:null);
switch (G__32658__$1) {
case "org":
return "+";

break;
case "markdown":
return "~~";

break;
default:
return "";

}
});
frontend.config.get_highlight = (function frontend$config$get_highlight(format){
var G__32659 = format;
var G__32659__$1 = (((G__32659 instanceof cljs.core.Keyword))?G__32659.fqn:null);
switch (G__32659__$1) {
case "org":
return "^^";

break;
case "markdown":
return "==";

break;
default:
return "";

}
});
frontend.config.get_code = (function frontend$config$get_code(format){
var format__$1 = (function (){var or__5043__auto__ = format;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(frontend.state.get_preferred_format.cljs$core$IFn$_invoke$arity$0());
}
})();
var G__32660 = format__$1;
var G__32660__$1 = (((G__32660 instanceof cljs.core.Keyword))?G__32660.fqn:null);
switch (G__32660__$1) {
case "org":
return "~";

break;
case "markdown":
return "`";

break;
default:
return "";

}
});
frontend.config.get_empty_link_and_forward_pos = (function frontend$config$get_empty_link_and_forward_pos(format){
var G__32661 = format;
var G__32661__$1 = (((G__32661 instanceof cljs.core.Keyword))?G__32661.fqn:null);
switch (G__32661__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[[][]]",(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[]()",(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.link_format = (function frontend$config$link_format(format,label,link){
if(cljs.core.truth_(label)){
var G__32662 = format;
var G__32662__$1 = (((G__32662 instanceof cljs.core.Keyword))?G__32662.fqn:null);
switch (G__32662__$1) {
case "org":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0));

break;
case "markdown":
return frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32662__$1)].join('')));

}
} else {
return link;
}
});
frontend.config.with_default_link = (function frontend$config$with_default_link(format,link){
var G__32663 = format;
var G__32663__$1 = (((G__32663 instanceof cljs.core.Keyword))?G__32663.fqn:null);
switch (G__32663__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),((4) + cljs.core.count(link))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link], 0)),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_label_link = (function frontend$config$with_label_link(format,label,link){
var G__32664 = format;
var G__32664__$1 = (((G__32664 instanceof cljs.core.Keyword))?G__32664.fqn:null);
switch (G__32664__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[%s][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link,label], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s](%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label,link], 0)),(((4) + cljs.core.count(link)) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.with_default_label = (function frontend$config$with_default_label(format,label){
var G__32665 = format;
var G__32665__$1 = (((G__32665 instanceof cljs.core.Keyword))?G__32665.fqn:null);
switch (G__32665__$1) {
case "org":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[[][%s]]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),(2)], null);

break;
case "markdown":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.util.format.cljs$core$IFn$_invoke$arity$variadic("[%s]()",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0)),((3) + cljs.core.count(label))], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(0)], null);

}
});
frontend.config.properties_wrapper_pattern = (function frontend$config$properties_wrapper_pattern(format){
var G__32666 = format;
var G__32666__$1 = (((G__32666 instanceof cljs.core.Keyword))?G__32666.fqn:null);
switch (G__32666__$1) {
case "markdown":
return "---\n%s\n---";

break;
default:
return "%s";

}
});
frontend.config.get_file_extension = (function frontend$config$get_file_extension(format){
var G__32667 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(format);
var G__32667__$1 = (((G__32667 instanceof cljs.core.Keyword))?G__32667.fqn:null);
switch (G__32667__$1) {
case "markdown":
return "md";

break;
default:
return cljs.core.name(format);

}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_journals_directory !== 'undefined')){
} else {
frontend.config.default_journals_directory = "journals";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.default_pages_directory !== 'undefined')){
} else {
frontend.config.default_pages_directory = "pages";
}
frontend.config.get_pages_directory = (function frontend$config$get_pages_directory(){
var or__5043__auto__ = frontend.state.get_pages_directory();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.default_pages_directory;
}
});
frontend.config.get_journals_directory = (function frontend$config$get_journals_directory(){
var or__5043__auto__ = frontend.state.get_journals_directory();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.config.default_journals_directory;
}
});
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_repo !== 'undefined')){
} else {
frontend.config.local_repo = "local";
}
frontend.config.demo_graph_QMARK_ = (function frontend$config$demo_graph_QMARK_(var_args){
var G__32669 = arguments.length;
switch (G__32669) {
case 0:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.demo_graph_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (graph){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(graph,frontend.config.local_repo);
}));

(frontend.config.demo_graph_QMARK_.cljs$lang$maxFixedArity = 1);

if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.recycle_dir !== 'undefined')){
} else {
frontend.config.recycle_dir = ".recycle";
}
frontend.config.config_file = "config.edn";
frontend.config.custom_css_file = "custom.css";
frontend.config.export_css_file = "export.css";
frontend.config.custom_js_file = "custom.js";
frontend.config.metadata_file = "metadata.edn";
frontend.config.pages_metadata_file = "pages-metadata.edn";
frontend.config.config_default_content = "{:meta/version 1\r\n\r\n ;; Currently, we support either \"Markdown\" or \"Org\".\r\n ;; This can overwrite your global preference so that\r\n ;; maybe your personal preferred format is Org but you'd\r\n ;; need to use Markdown for some projects.\r\n ;; :preferred-format \"\"\r\n\r\n ;; Preferred workflow style.\r\n ;; Value is either \":now\" for NOW/LATER style,\r\n ;; or \":todo\" for TODO/DOING style.\r\n :preferred-workflow :now\r\n\r\n ;; The app will ignore those directories or files.\r\n ;; E.g. \"/archived\" \"/test.md\"\r\n :hidden []\r\n\r\n ;; When creating the new journal page, the app will use your template if there is one.\r\n ;; You only need to input your template name here.\r\n :default-templates\r\n {:journals \"\"}\r\n\r\n ;; Whether to enable hover on tooltip preview feature\r\n ;; Default is true, you can also toggle this via setting page\r\n :ui/enable-tooltip? true\r\n\r\n :feature/enable-block-timestamps? false\r\n\r\n ;; Specify the date on which the week starts.\r\n ;; Goes from 0 to 6 (Monday to Sunday), default to 6\r\n :start-of-week 6\r\n\r\n ;; Specify a custom CSS import\r\n ;; This option take precedence over your local `logseq/custom.css` file\r\n ;; You may find a list of awesome logseq themes here:\r\n ;; https://github.com/logseq/awesome-logseq#css-themes\r\n ;; Example:\r\n ;; :custom-css-url \"@import url('https://cdn.jsdelivr.net/gh/dracula/logseq@master/custom.css');\"\r\n\r\n ;; When :all-pages-public? true, export repo would export all pages within that repo.\r\n ;; Regardless of whether you've set any page to public or not.\r\n ;; Example:\r\n ;; :publishing/all-pages-public? true\r\n\r\n ;; Specify default home page and sidebar status for Logseq\r\n ;; If not specified, Logseq default opens journals page on startup\r\n ;; value for `:page` is name of page\r\n ;; Possible options for `:sidebar` are\r\n ;; 1. `\"Contents\"` to open up `Contents` in sidebar by default\r\n ;; 2. `page name` to open up some page in sidebar\r\n ;; 3. Or multiple pages in an array [\"Contents\" \"Page A\" \"Page B\"]\r\n ;; If `:sidebar` is not set, sidebar will be hidden\r\n ;; Example:\r\n ;; 1. Setup page \"Changelog\" as home page and \"Contents\" in sidebar\r\n ;; :default-home {:page \"Changelog\", :sidebar \"Contents\"}\r\n ;; 2. Setup page \"Jun 3rd, 2021\" as home page without sidebar\r\n ;; :default-home {:page \"Jun 3rd, 2021\"}\r\n ;; 3. Setup page \"home\" as home page with multiple pages in sidebar\r\n ;; :default-home {:page \"home\" :sidebar [\"page a\" \"page b\"]}\r\n\r\n ;; Tell logseq to use a specific folder in the repo as a default location for notes\r\n ;; if not specified, notes are stored in `pages` directory\r\n ;; :pages-directory \"your-directory\"\r\n\r\n ;; Tell logseq to use a specific folder in the repo as a default location for journals\r\n ;; if not specified, journals are stored in `journals` directory\r\n ;; :journals-directory \"your-directory\"\r\n\r\n ;; Set this to true will convert\r\n ;; `[[Grant Ideas]]` to `[[file:./grant_ideas.org][Grant Ideas]]` for org-mode\r\n ;; For more, see https://github.com/logseq/logseq/issues/672\r\n ;; :org-mode/insert-file-link? true\r\n\r\n ;; If you prefer to use the file name as the page title\r\n ;; instead of the first heading's title\r\n ;; the only option for now is `file`\r\n ;; :page-name-order \"file\"\r\n\r\n ;; Setup custom shortcuts under `:shortcuts` key\r\n ;; Syntax:\r\n ;; 1. `+` means keys pressing simultaneously. eg: `ctrl+shift+a`\r\n ;; 2. ` ` empty space between keys represents key chords. eg: `t s` means press `s` follow by `t`\r\n ;; 3. `mod` means `Ctrl` for Windows/Linux  and `Command` for Mac\r\n ;; 4. use `false` to disable particular shortcut\r\n ;; 4. you can define multiple bindings for one action, eg `[\"ctrl+j\" \"down\"]`\r\n ;; full list of configurable shortcuts are available below:\r\n ;; https://github.com/logseq/logseq/blob/master/src/main/frontend/modules/shortcut/config.cljs\r\n ;; Example:\r\n ;; :shortcuts\r\n ;; {:editor/new-block       \"enter\"\r\n ;;  :editor/new-line        \"shift+enter\"\r\n ;;  :editor/insert-link     \"mod+shift+k\"\r\n ;;  :editor/hightlight       false\r\n ;;  :ui/toggle-settings     \"t s\"\r\n ;;  :editor/up              [\"ctrl+k\" \"up\"]\r\n ;;  :editor/down            [\"ctrl+j\" \"down\"]\r\n ;;  :editor/left            [\"ctrl+h\" \"left\"]\r\n ;;  :editor/right           [\"ctrl+l\" \"right\"]}\r\n :shortcuts {}\r\n\r\n ;; By default, pressing `Enter` in the document mode will create a new line.\r\n ;; Set this to `true` so that it's the same behaviour as the usual outliner mode.\r\n :shortcut/doc-mode-enter-for-new-block? false\r\n\r\n ;; Whether to show command doc on hover\r\n :ui/show-command-doc? true\r\n\r\n ;; Whether to show empty bullets for non-document mode (the default mode)\r\n :ui/show-empty-bullets? false\r\n\r\n ;; Pre-defined :view function to use in Query\r\n :query/views\r\n {:pprint\r\n  (fn [r] [:pre.code (pprint r)])}\r\n\r\n ;; Pre-defined :result-transform function to use in Query\r\n :query/result-transforms\r\n {:sort-by-priority\r\n  (fn [result] (sort-by (fn [h] (get h :block/priority \"Z\")) result))}\r\n\r\n ;; The app will show those queries in today's journal page,\r\n ;; the \"NOW\" query asks the tasks which need to be finished \"now\",\r\n ;; the \"NEXT\" query asks the future tasks.\r\n :default-queries\r\n {:journals\r\n  [{:title \"\uD83D\uDD28 NOW\"\r\n    :query [:find (pull ?h [*])\r\n            :in $ ?start ?today\r\n            :where\r\n            [?h :block/marker ?marker]\r\n            [(contains? #{\"NOW\" \"DOING\"} ?marker)]\r\n            [?h :block/page ?p]\r\n            [?p :block/journal? true]\r\n            [?p :block/journal-day ?d]\r\n            [(>= ?d ?start)]\r\n            [(<= ?d ?today)]]\r\n    :inputs [:14d :today]\r\n    :result-transform (fn [result]\r\n                        (sort-by (fn [h]\r\n                                   (get h :block/priority \"Z\")) result))\r\n    :collapsed? false}\r\n   {:title \"\uD83D\uDCC5 NEXT\"\r\n    :query [:find (pull ?h [*])\r\n            :in $ ?start ?next\r\n            :where\r\n            [?h :block/marker ?marker]\r\n            [(contains? #{\"NOW\" \"LATER\" \"TODO\"} ?marker)]\r\n            [?h :block/ref-pages ?p]\r\n            [?p :block/journal? true]\r\n            [?p :block/journal-day ?d]\r\n            [(> ?d ?start)]\r\n            [(< ?d ?next)]]\r\n    :inputs [:today :7d-after]\r\n    :collapsed? false}]}\r\n\r\n ;; Add your own commands to speedup.\r\n ;; E.g. [[\"js\" \"Javascript\"]]\r\n :commands\r\n []\r\n\r\n ;; By default, a block can only be collapsed if it has some children.\r\n ;; `:outliner/block-title-collapse-enabled? true` enables a block with a title\r\n ;; (multiple lines) can be collapsed too. For example:\r\n ;; - block title\r\n ;;   block content\r\n :outliner/block-title-collapse-enabled? false\r\n\r\n ;; Macros replace texts and will make you more productive.\r\n ;; For example:\r\n ;; Add this to the macros below:\r\n ;; {\"poem\" \"Rose is $1, violet's $2. Life's ordered: Org assists you.\"}\r\n ;; input \"{{{poem red,blue}}}\"\r\n ;; becomes\r\n ;; Rose is red, violet's blue. Life's ordered: Org assists you.\r\n :macros {}\r\n\r\n ;; The default level to be opened for the linked references.\r\n ;; For example, if we have some example blocks like this:\r\n ;; - a [[page]] (level 1)\r\n ;;   - b        (level 2)\r\n ;;     - c      (level 3)\r\n ;;       - d    (level 4)\r\n ;;\r\n ;; With the default value of level 2, `b` will be collapsed.\r\n ;; If we set the level's value to 3, `b` will be opened and `c` will be collapsed.\r\n :ref/default-open-blocks-level 2\r\n\r\n :ref/linked-references-collapsed-threshold 50\r\n\r\n :favorites [\"How to take dummy notes?\"]\r\n\r\n ;; any number between 0 and 1 (the greater it is the faster the changes of the next-interval of card reviews) (default 0.5)\r\n ;; :srs/learning-fraction 0.5\r\n\r\n ;; the initial interval after the first successful review of a card (default 4)\r\n ;; :srs/initial-interval 4\r\n\r\n ;; hide specific properties for blocks\r\n ;; E.g. #{:created-at :updated-at}\r\n ;; :block-hidden-properties #{}\r\n\r\n ;; logbook setup\r\n ;; :logbook/settings\r\n ;; {:with-second-support? false ;limit logbook to minutes, seconds will be eliminated\r\n ;;  :enabled-in-all-blocks true ;display logbook in all blocks after timetracking\r\n ;;  :enabled-in-timestamped-blocks false ;don't display logbook at all\r\n ;; }\r\n\r\n ;; Mobile photo uploading setup\r\n ;; :mobile/photo\r\n ;; {:allow-editing? true}\r\n\r\n ;; Extra CodeMirror options\r\n ;; :editor/extra-codemirror-options {:keyMap \"emacs\" :lineWrapping true}\r\n\r\n ;; ignore #+keyword: for parsing page references in orgmode\r\n ;; :ignored-page-references-keywords #{\"author\" \"startup\"}\r\n\r\n ;; Quick capture templates on mobile for recieving contents from other apps.\r\n ;; Each template contains three elements {time}, {text} and {url}, which can be auto-expanded\r\n ;; by received contents from other apps. Note: the {} cannot be omitted.\r\n ;; - {time}: capture time\r\n ;; - {text}: text that users selected before sharing.\r\n ;; - {url}: url or assets path for media files stored in Logseq.\r\n ;; You can also reorder them, or even only use one or two of them in the template.\r\n ;; You can also insert or format any text in the template as shown in the following examples.\r\n ;; :quick-capture-templates\r\n ;; {:text \"[[quick capture]] **{time}**: \\n - {text} from {url}\"\r\n ;;  :media \"[[quick capture]] **{time}**: \\n - {url}\"}\r\n }\r\n";
frontend.config.markers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["started",null,"doing",null,"cancelled",null,"wait",null,"waiting",null,"in-progress",null,"todo",null,"now",null,"later",null,"done",null,"canceled",null], null), null);
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.idb_db_prefix !== 'undefined')){
} else {
frontend.config.idb_db_prefix = "logseq-db/";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_db_prefix !== 'undefined')){
} else {
frontend.config.local_db_prefix = "logseq_local_";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_handle !== 'undefined')){
} else {
frontend.config.local_handle = "handle";
}
if((typeof frontend !== 'undefined') && (typeof frontend.config !== 'undefined') && (typeof frontend.config.local_handle_prefix !== 'undefined')){
} else {
frontend.config.local_handle_prefix = [frontend.config.local_handle,"/",frontend.config.local_db_prefix].join('');
}
frontend.config.local_db_QMARK_ = (function frontend$config$local_db_QMARK_(s){
return ((typeof s === 'string') && (clojure.string.starts_with_QMARK_(s,frontend.config.local_db_prefix)));
});
frontend.config.get_local_asset_absolute_path = (function frontend$config$get_local_asset_absolute_path(s){
return ["/",clojure.string.replace(s,/^[.\/]*/,"")].join('');
});
frontend.config.get_local_dir = (function frontend$config$get_local_dir(s){
return clojure.string.replace(s,frontend.config.local_db_prefix,"");
});
frontend.config.get_local_repo = (function frontend$config$get_local_repo(dir){
return [frontend.config.local_db_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('');
});
frontend.config.get_repo_dir = (function frontend$config$get_repo_dir(repo_url){
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())){
return frontend.config.get_local_dir(repo_url);
} else {
if(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_platform_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())){
var dir = frontend.config.get_local_dir(repo_url);
if(clojure.string.starts_with_QMARK_(dir,"file:")){
return dir;
} else {
return ["file:///",clojure.string.replace(dir,/^\/+/,"")].join('');
}
} else {
return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.take_last((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(repo_url,/\//)))].join('');

}
}
});
frontend.config.get_repo_path = (function frontend$config$get_repo_path(repo_url,path){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return frontend.mobile.util.native_platform_QMARK_();
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())){
return path;
} else {
var G__32670 = frontend.config.get_repo_dir(repo_url);
var G__32671 = path;
return (frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2 ? frontend.util.node_path.join.cljs$core$IFn$_invoke$arity$2(G__32670,G__32671) : frontend.util.node_path.join.call(null,G__32670,G__32671));
}
});
/**
 * Normalization happens here
 */
frontend.config.get_file_path = (function frontend$config$get_file_path(repo_url,relative_path){
if(cljs.core.truth_((function (){var and__5041__auto__ = repo_url;
if(cljs.core.truth_(and__5041__auto__)){
return relative_path;
} else {
return and__5041__auto__;
}
})())){
var path = (cljs.core.truth_((function (){var and__5041__auto__ = frontend.util.electron_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
if(clojure.string.starts_with_QMARK_(relative_path,dir)){
return relative_path;
} else {
return [dir,"/",clojure.string.replace(relative_path,/^\//,"")].join('');
}
})():(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_ios_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
return decodeURI([dir,cljs.core.str.cljs$core$IFn$_invoke$arity$1(relative_path)].join(''));
})():(cljs.core.truth_((function (){var and__5041__auto__ = frontend.mobile.util.native_android_QMARK_();
if(cljs.core.truth_(and__5041__auto__)){
return frontend.config.local_db_QMARK_(repo_url);
} else {
return and__5041__auto__;
}
})())?(function (){var dir = frontend.config.get_repo_dir(repo_url);
var dir__$1 = ((((clojure.string.starts_with_QMARK_(dir,"file:")) || (clojure.string.starts_with_QMARK_(dir,"content:"))))?dir:["file:///",clojure.string.replace(dir,/^\/+/,"")].join(''));
return [clojure.string.replace(dir__$1,/\/+$/,""),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(relative_path)].join('');
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.first(relative_path)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(relative_path,(1)):relative_path
))));
return logseq.graph_parser.util.path_normalize(path);
} else {
return null;
}
});
frontend.config.get_config_path = (function frontend$config$get_config_path(var_args){
var G__32673 = arguments.length;
switch (G__32673) {
case 0:
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_config_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.config_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_config_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_metadata_path = (function frontend$config$get_metadata_path(var_args){
var G__32675 = arguments.length;
switch (G__32675) {
case 0:
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_metadata_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.metadata_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_metadata_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_pages_metadata_path = (function frontend$config$get_pages_metadata_path(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
case 0:
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_pages_metadata_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.pages_metadata_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_pages_metadata_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_custom_css_path = (function frontend$config$get_custom_css_path(var_args){
var G__32679 = arguments.length;
switch (G__32679) {
case 0:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.custom_css_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_custom_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_export_css_path = (function frontend$config$get_export_css_path(var_args){
var G__32681 = arguments.length;
switch (G__32681) {
case 0:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_export_css_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.export_css_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_export_css_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_custom_js_path = (function frontend$config$get_custom_js_path(var_args){
var G__32683 = arguments.length;
switch (G__32683) {
case 0:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1(frontend.state.get_current_repo());
}));

(frontend.config.get_custom_js_path.cljs$core$IFn$_invoke$arity$1 = (function (repo){
if(cljs.core.truth_(repo)){
return frontend.config.get_file_path(repo,[frontend.config.app_name,"/",frontend.config.custom_js_file].join(''));
} else {
return null;
}
}));

(frontend.config.get_custom_js_path.cljs$lang$maxFixedArity = 1);

frontend.config.get_block_hidden_properties = (function frontend$config$get_block_hidden_properties(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),frontend.state.get_current_repo(),new cljs.core.Keyword(null,"block-hidden-properties","block-hidden-properties",-155956857)], null));
});

//# sourceMappingURL=frontend.config.js.map
