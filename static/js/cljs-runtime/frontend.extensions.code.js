goog.provide('frontend.extensions.code');
goog.scope(function(){
  frontend.extensions.code.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$selection$active_line=shadow.js.require("module$node_modules$codemirror$addon$selection$active_line", {});
var module$node_modules$codemirror$mode$apl$apl=shadow.js.require("module$node_modules$codemirror$mode$apl$apl", {});
var module$node_modules$codemirror$mode$asciiarmor$asciiarmor=shadow.js.require("module$node_modules$codemirror$mode$asciiarmor$asciiarmor", {});
var module$node_modules$codemirror$mode$asn_1$asn_1=shadow.js.require("module$node_modules$codemirror$mode$asn_1$asn_1", {});
var module$node_modules$codemirror$mode$asterisk$asterisk=shadow.js.require("module$node_modules$codemirror$mode$asterisk$asterisk", {});
var module$node_modules$codemirror$mode$brainfuck$brainfuck=shadow.js.require("module$node_modules$codemirror$mode$brainfuck$brainfuck", {});
var module$node_modules$codemirror$mode$clike$clike=shadow.js.require("module$node_modules$codemirror$mode$clike$clike", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$mode$cmake$cmake=shadow.js.require("module$node_modules$codemirror$mode$cmake$cmake", {});
var module$node_modules$codemirror$mode$cobol$cobol=shadow.js.require("module$node_modules$codemirror$mode$cobol$cobol", {});
var module$node_modules$codemirror$mode$coffeescript$coffeescript=shadow.js.require("module$node_modules$codemirror$mode$coffeescript$coffeescript", {});
var module$node_modules$codemirror$mode$commonlisp$commonlisp=shadow.js.require("module$node_modules$codemirror$mode$commonlisp$commonlisp", {});
var module$node_modules$codemirror$mode$crystal$crystal=shadow.js.require("module$node_modules$codemirror$mode$crystal$crystal", {});
var module$node_modules$codemirror$mode$css$css=shadow.js.require("module$node_modules$codemirror$mode$css$css", {});
var module$node_modules$codemirror$mode$cypher$cypher=shadow.js.require("module$node_modules$codemirror$mode$cypher$cypher", {});
var module$node_modules$codemirror$mode$d$d=shadow.js.require("module$node_modules$codemirror$mode$d$d", {});
var module$node_modules$codemirror$mode$dart$dart=shadow.js.require("module$node_modules$codemirror$mode$dart$dart", {});
var module$node_modules$codemirror$mode$diff$diff=shadow.js.require("module$node_modules$codemirror$mode$diff$diff", {});
var module$node_modules$codemirror$mode$django$django=shadow.js.require("module$node_modules$codemirror$mode$django$django", {});
var module$node_modules$codemirror$mode$dockerfile$dockerfile=shadow.js.require("module$node_modules$codemirror$mode$dockerfile$dockerfile", {});
var module$node_modules$codemirror$mode$dtd$dtd=shadow.js.require("module$node_modules$codemirror$mode$dtd$dtd", {});
var module$node_modules$codemirror$mode$dylan$dylan=shadow.js.require("module$node_modules$codemirror$mode$dylan$dylan", {});
var module$node_modules$codemirror$mode$ebnf$ebnf=shadow.js.require("module$node_modules$codemirror$mode$ebnf$ebnf", {});
var module$node_modules$codemirror$mode$ecl$ecl=shadow.js.require("module$node_modules$codemirror$mode$ecl$ecl", {});
var module$node_modules$codemirror$mode$eiffel$eiffel=shadow.js.require("module$node_modules$codemirror$mode$eiffel$eiffel", {});
var module$node_modules$codemirror$mode$elm$elm=shadow.js.require("module$node_modules$codemirror$mode$elm$elm", {});
var module$node_modules$codemirror$mode$erlang$erlang=shadow.js.require("module$node_modules$codemirror$mode$erlang$erlang", {});
var module$node_modules$codemirror$mode$factor$factor=shadow.js.require("module$node_modules$codemirror$mode$factor$factor", {});
var module$node_modules$codemirror$mode$fcl$fcl=shadow.js.require("module$node_modules$codemirror$mode$fcl$fcl", {});
var module$node_modules$codemirror$mode$forth$forth=shadow.js.require("module$node_modules$codemirror$mode$forth$forth", {});
var module$node_modules$codemirror$mode$fortran$fortran=shadow.js.require("module$node_modules$codemirror$mode$fortran$fortran", {});
var module$node_modules$codemirror$mode$gas$gas=shadow.js.require("module$node_modules$codemirror$mode$gas$gas", {});
var module$node_modules$codemirror$mode$gfm$gfm=shadow.js.require("module$node_modules$codemirror$mode$gfm$gfm", {});
var module$node_modules$codemirror$mode$gherkin$gherkin=shadow.js.require("module$node_modules$codemirror$mode$gherkin$gherkin", {});
var module$node_modules$codemirror$mode$go$go=shadow.js.require("module$node_modules$codemirror$mode$go$go", {});
var module$node_modules$codemirror$mode$groovy$groovy=shadow.js.require("module$node_modules$codemirror$mode$groovy$groovy", {});
var module$node_modules$codemirror$mode$haml$haml=shadow.js.require("module$node_modules$codemirror$mode$haml$haml", {});
var module$node_modules$codemirror$mode$handlebars$handlebars=shadow.js.require("module$node_modules$codemirror$mode$handlebars$handlebars", {});
var module$node_modules$codemirror$mode$haskell_literate$haskell_literate=shadow.js.require("module$node_modules$codemirror$mode$haskell_literate$haskell_literate", {});
var module$node_modules$codemirror$mode$haskell$haskell=shadow.js.require("module$node_modules$codemirror$mode$haskell$haskell", {});
var module$node_modules$codemirror$mode$haxe$haxe=shadow.js.require("module$node_modules$codemirror$mode$haxe$haxe", {});
var module$node_modules$codemirror$mode$htmlembedded$htmlembedded=shadow.js.require("module$node_modules$codemirror$mode$htmlembedded$htmlembedded", {});
var module$node_modules$codemirror$mode$htmlmixed$htmlmixed=shadow.js.require("module$node_modules$codemirror$mode$htmlmixed$htmlmixed", {});
var module$node_modules$codemirror$mode$http$http=shadow.js.require("module$node_modules$codemirror$mode$http$http", {});
var module$node_modules$codemirror$mode$idl$idl=shadow.js.require("module$node_modules$codemirror$mode$idl$idl", {});
var module$node_modules$codemirror$mode$javascript$javascript=shadow.js.require("module$node_modules$codemirror$mode$javascript$javascript", {});
var module$node_modules$codemirror$mode$jinja2$jinja2=shadow.js.require("module$node_modules$codemirror$mode$jinja2$jinja2", {});
var module$node_modules$codemirror$mode$jsx$jsx=shadow.js.require("module$node_modules$codemirror$mode$jsx$jsx", {});
var module$node_modules$codemirror$mode$julia$julia=shadow.js.require("module$node_modules$codemirror$mode$julia$julia", {});
var module$node_modules$codemirror$mode$livescript$livescript=shadow.js.require("module$node_modules$codemirror$mode$livescript$livescript", {});
var module$node_modules$codemirror$mode$lua$lua=shadow.js.require("module$node_modules$codemirror$mode$lua$lua", {});
var module$node_modules$codemirror$mode$markdown$markdown=shadow.js.require("module$node_modules$codemirror$mode$markdown$markdown", {});
var module$node_modules$codemirror$mode$mathematica$mathematica=shadow.js.require("module$node_modules$codemirror$mode$mathematica$mathematica", {});
var module$node_modules$codemirror$mode$mbox$mbox=shadow.js.require("module$node_modules$codemirror$mode$mbox$mbox", {});
var module$node_modules$codemirror$mode$meta=shadow.js.require("module$node_modules$codemirror$mode$meta", {});
var module$node_modules$codemirror$mode$mirc$mirc=shadow.js.require("module$node_modules$codemirror$mode$mirc$mirc", {});
var module$node_modules$codemirror$mode$mllike$mllike=shadow.js.require("module$node_modules$codemirror$mode$mllike$mllike", {});
var module$node_modules$codemirror$mode$modelica$modelica=shadow.js.require("module$node_modules$codemirror$mode$modelica$modelica", {});
var module$node_modules$codemirror$mode$mscgen$mscgen=shadow.js.require("module$node_modules$codemirror$mode$mscgen$mscgen", {});
var module$node_modules$codemirror$mode$mumps$mumps=shadow.js.require("module$node_modules$codemirror$mode$mumps$mumps", {});
var module$node_modules$codemirror$mode$nginx$nginx=shadow.js.require("module$node_modules$codemirror$mode$nginx$nginx", {});
var module$node_modules$codemirror$mode$nsis$nsis=shadow.js.require("module$node_modules$codemirror$mode$nsis$nsis", {});
var module$node_modules$codemirror$mode$ntriples$ntriples=shadow.js.require("module$node_modules$codemirror$mode$ntriples$ntriples", {});
var module$node_modules$codemirror$mode$octave$octave=shadow.js.require("module$node_modules$codemirror$mode$octave$octave", {});
var module$node_modules$codemirror$mode$oz$oz=shadow.js.require("module$node_modules$codemirror$mode$oz$oz", {});
var module$node_modules$codemirror$mode$pascal$pascal=shadow.js.require("module$node_modules$codemirror$mode$pascal$pascal", {});
var module$node_modules$codemirror$mode$pegjs$pegjs=shadow.js.require("module$node_modules$codemirror$mode$pegjs$pegjs", {});
var module$node_modules$codemirror$mode$perl$perl=shadow.js.require("module$node_modules$codemirror$mode$perl$perl", {});
var module$node_modules$codemirror$mode$php$php=shadow.js.require("module$node_modules$codemirror$mode$php$php", {});
var module$node_modules$codemirror$mode$pig$pig=shadow.js.require("module$node_modules$codemirror$mode$pig$pig", {});
var module$node_modules$codemirror$mode$powershell$powershell=shadow.js.require("module$node_modules$codemirror$mode$powershell$powershell", {});
var module$node_modules$codemirror$mode$properties$properties=shadow.js.require("module$node_modules$codemirror$mode$properties$properties", {});
var module$node_modules$codemirror$mode$protobuf$protobuf=shadow.js.require("module$node_modules$codemirror$mode$protobuf$protobuf", {});
var module$node_modules$codemirror$mode$pug$pug=shadow.js.require("module$node_modules$codemirror$mode$pug$pug", {});
var module$node_modules$codemirror$mode$puppet$puppet=shadow.js.require("module$node_modules$codemirror$mode$puppet$puppet", {});
var module$node_modules$codemirror$mode$python$python=shadow.js.require("module$node_modules$codemirror$mode$python$python", {});
var module$node_modules$codemirror$mode$q$q=shadow.js.require("module$node_modules$codemirror$mode$q$q", {});
var module$node_modules$codemirror$mode$r$r=shadow.js.require("module$node_modules$codemirror$mode$r$r", {});
var module$node_modules$codemirror$mode$rpm$rpm=shadow.js.require("module$node_modules$codemirror$mode$rpm$rpm", {});
var module$node_modules$codemirror$mode$rst$rst=shadow.js.require("module$node_modules$codemirror$mode$rst$rst", {});
var module$node_modules$codemirror$mode$ruby$ruby=shadow.js.require("module$node_modules$codemirror$mode$ruby$ruby", {});
var module$node_modules$codemirror$mode$rust$rust=shadow.js.require("module$node_modules$codemirror$mode$rust$rust", {});
var module$node_modules$codemirror$mode$sas$sas=shadow.js.require("module$node_modules$codemirror$mode$sas$sas", {});
var module$node_modules$codemirror$mode$sass$sass=shadow.js.require("module$node_modules$codemirror$mode$sass$sass", {});
var module$node_modules$codemirror$mode$scheme$scheme=shadow.js.require("module$node_modules$codemirror$mode$scheme$scheme", {});
var module$node_modules$codemirror$mode$shell$shell=shadow.js.require("module$node_modules$codemirror$mode$shell$shell", {});
var module$node_modules$codemirror$mode$sieve$sieve=shadow.js.require("module$node_modules$codemirror$mode$sieve$sieve", {});
var module$node_modules$codemirror$mode$slim$slim=shadow.js.require("module$node_modules$codemirror$mode$slim$slim", {});
var module$node_modules$codemirror$mode$smalltalk$smalltalk=shadow.js.require("module$node_modules$codemirror$mode$smalltalk$smalltalk", {});
var module$node_modules$codemirror$mode$smarty$smarty=shadow.js.require("module$node_modules$codemirror$mode$smarty$smarty", {});
var module$node_modules$codemirror$mode$solr$solr=shadow.js.require("module$node_modules$codemirror$mode$solr$solr", {});
var module$node_modules$codemirror$mode$soy$soy=shadow.js.require("module$node_modules$codemirror$mode$soy$soy", {});
var module$node_modules$codemirror$mode$sparql$sparql=shadow.js.require("module$node_modules$codemirror$mode$sparql$sparql", {});
var module$node_modules$codemirror$mode$spreadsheet$spreadsheet=shadow.js.require("module$node_modules$codemirror$mode$spreadsheet$spreadsheet", {});
var module$node_modules$codemirror$mode$sql$sql=shadow.js.require("module$node_modules$codemirror$mode$sql$sql", {});
var module$node_modules$codemirror$mode$stex$stex=shadow.js.require("module$node_modules$codemirror$mode$stex$stex", {});
var module$node_modules$codemirror$mode$stylus$stylus=shadow.js.require("module$node_modules$codemirror$mode$stylus$stylus", {});
var module$node_modules$codemirror$mode$swift$swift=shadow.js.require("module$node_modules$codemirror$mode$swift$swift", {});
var module$node_modules$codemirror$mode$tcl$tcl=shadow.js.require("module$node_modules$codemirror$mode$tcl$tcl", {});
var module$node_modules$codemirror$mode$textile$textile=shadow.js.require("module$node_modules$codemirror$mode$textile$textile", {});
var module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki=shadow.js.require("module$node_modules$codemirror$mode$tiddlywiki$tiddlywiki", {});
var module$node_modules$codemirror$mode$tiki$tiki=shadow.js.require("module$node_modules$codemirror$mode$tiki$tiki", {});
var module$node_modules$codemirror$mode$toml$toml=shadow.js.require("module$node_modules$codemirror$mode$toml$toml", {});
var module$node_modules$codemirror$mode$tornado$tornado=shadow.js.require("module$node_modules$codemirror$mode$tornado$tornado", {});
var module$node_modules$codemirror$mode$troff$troff=shadow.js.require("module$node_modules$codemirror$mode$troff$troff", {});
var module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg=shadow.js.require("module$node_modules$codemirror$mode$ttcn_cfg$ttcn_cfg", {});
var module$node_modules$codemirror$mode$ttcn$ttcn=shadow.js.require("module$node_modules$codemirror$mode$ttcn$ttcn", {});
var module$node_modules$codemirror$mode$turtle$turtle=shadow.js.require("module$node_modules$codemirror$mode$turtle$turtle", {});
var module$node_modules$codemirror$mode$twig$twig=shadow.js.require("module$node_modules$codemirror$mode$twig$twig", {});
var module$node_modules$codemirror$mode$vb$vb=shadow.js.require("module$node_modules$codemirror$mode$vb$vb", {});
var module$node_modules$codemirror$mode$vbscript$vbscript=shadow.js.require("module$node_modules$codemirror$mode$vbscript$vbscript", {});
var module$node_modules$codemirror$mode$velocity$velocity=shadow.js.require("module$node_modules$codemirror$mode$velocity$velocity", {});
var module$node_modules$codemirror$mode$verilog$verilog=shadow.js.require("module$node_modules$codemirror$mode$verilog$verilog", {});
var module$node_modules$codemirror$mode$vhdl$vhdl=shadow.js.require("module$node_modules$codemirror$mode$vhdl$vhdl", {});
var module$node_modules$codemirror$mode$vue$vue=shadow.js.require("module$node_modules$codemirror$mode$vue$vue", {});
var module$node_modules$codemirror$mode$wast$wast=shadow.js.require("module$node_modules$codemirror$mode$wast$wast", {});
var module$node_modules$codemirror$mode$webidl$webidl=shadow.js.require("module$node_modules$codemirror$mode$webidl$webidl", {});
var module$node_modules$codemirror$mode$xml$xml=shadow.js.require("module$node_modules$codemirror$mode$xml$xml", {});
var module$node_modules$codemirror$mode$xquery$xquery=shadow.js.require("module$node_modules$codemirror$mode$xquery$xquery", {});
var module$node_modules$codemirror$mode$yacas$yacas=shadow.js.require("module$node_modules$codemirror$mode$yacas$yacas", {});
var module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter=shadow.js.require("module$node_modules$codemirror$mode$yaml_frontmatter$yaml_frontmatter", {});
var module$node_modules$codemirror$mode$yaml$yaml=shadow.js.require("module$node_modules$codemirror$mode$yaml$yaml", {});
var module$node_modules$codemirror$mode$z80$z80=shadow.js.require("module$node_modules$codemirror$mode$z80$z80", {});
frontend.extensions.code.from_textarea = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,"fromTextArea");
frontend.extensions.code.textarea_ref_name = "textarea";
frontend.extensions.code.codemirror_ref_name = "codemirror-instance";
frontend.extensions.code.extra_codemirror_options = (function frontend$extensions$code$extra_codemirror_options(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(frontend.state.get_config.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword("editor","extra-codemirror-options","editor/extra-codemirror-options",388833047),cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.code.save_file_or_block_BANG_ = (function frontend$extensions$code$save_file_or_block_BANG_(editor,textarea,config,state){
editor.save();

var value = frontend.extensions.code.goog$module$goog$object.get(textarea,"value");
var default_value = frontend.extensions.code.goog$module$goog$object.get(textarea,"defaultValue");
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,default_value)){
if(cljs.core.truth_(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config))){
var block = (function (){var G__60746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config)], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__60746) : frontend.db.pull.call(null,G__60746));
})();
var content = new cljs.core.Keyword("block","content","block/content",-161885195).cljs$core$IFn$_invoke$arity$1(block);
var map__60745 = new cljs.core.Keyword(null,"pos_meta","pos_meta",1041099485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"code-options","code-options",1113362965).cljs$core$IFn$_invoke$arity$1(state)));
var map__60745__$1 = cljs.core.__destructure_map(map__60745);
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"start_pos","start_pos",272375959));
var end_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60745__$1,new cljs.core.Keyword(null,"end_pos","end_pos",-1418940));
var offset = (cljs.core.truth_(new cljs.core.Keyword("block","pre-block?","block/pre-block?",-1671958521).cljs$core$IFn$_invoke$arity$1(block))?(0):(2));
var raw_content = logseq.graph_parser.utf8.encode(content);
var prefix = logseq.graph_parser.utf8.decode(raw_content.slice((0),(start_pos - offset)));
var surfix = logseq.graph_parser.utf8.decode(raw_content.slice((end_pos - offset)));
var new_content = ((clojure.string.blank_QMARK_(value))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(surfix)].join(''));
frontend.state.set_edit_content_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.state.get_edit_input_id(),new_content);

return frontend.handler.editor.save_block_if_changed_BANG_.cljs$core$IFn$_invoke$arity$2(block,new_content);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config))){
var path = new cljs.core.Keyword(null,"file-path","file-path",-2005501162).cljs$core$IFn$_invoke$arity$1(config);
var content = (frontend.db.get_file.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$1(path) : frontend.db.get_file.call(null,path));
var vec__60747 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60747,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60747,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60747,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60747,(3),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60747,(4),null);
var value__$1 = (function (){var G__60750 = goog.dom.getElement(id);
if((G__60750 == null)){
return null;
} else {
return frontend.extensions.code.goog$module$goog$object.get(G__60750,"value");
}
})();
if((((!(clojure.string.blank_QMARK_(value__$1)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(value__$1),clojure.string.trim(content))))){
return frontend.handler.file.alter_file(frontend.state.get_current_repo(),path,[clojure.string.trim(value__$1),"\n"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-render-root?","re-render-root?",-1452609623),true], null));
} else {
return null;
}
} else {
return null;

}
}
} else {
return null;
}
});
frontend.extensions.code.save_file_or_block_when_blur_or_esc_BANG_ = (function frontend$extensions$code$save_file_or_block_when_blur_or_esc_BANG_(editor,textarea,config,state){
frontend.state.set_block_component_editing_mode_BANG_(false);

return frontend.extensions.code.save_file_or_block_BANG_(editor,textarea,config,state);
});
frontend.extensions.code.text__GT_cm_mode = (function frontend$extensions$code$text__GT_cm_mode(var_args){
var G__60752 = arguments.length;
switch (G__60752) {
case 1:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$1 = (function (text){
return frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(text,new cljs.core.Keyword(null,"name","name",1843675177));
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2 = (function (text,by){
if(cljs.core.truth_(text)){
var mode = clojure.string.lower_case(text);
var find_fn_name = (function (){var G__60753 = by;
var G__60753__$1 = (((G__60753 instanceof cljs.core.Keyword))?G__60753.fqn:null);
switch (G__60753__$1) {
case "name":
return "findModeByName";

break;
case "ext":
return "findModeByExtension";

break;
case "file-name":
return "findModeByFileName";

break;
default:
return "findModeByName";

}
})();
var find_fn = frontend.extensions.code.goog$module$goog$object.get(module$node_modules$codemirror$lib$codemirror,find_fn_name);
var cm_mode = (find_fn.cljs$core$IFn$_invoke$arity$1 ? find_fn.cljs$core$IFn$_invoke$arity$1(mode) : find_fn.call(null,mode));
if(cljs.core.truth_(cm_mode)){
return cm_mode.mime;
} else {
return mode;
}
} else {
return null;
}
}));

(frontend.extensions.code.text__GT_cm_mode.cljs$lang$maxFixedArity = 2);

frontend.extensions.code.render_BANG_ = (function frontend$extensions$code$render_BANG_(state){
var vec__60754 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60754,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60754,(1),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60754,(2),null);
var _code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60754,(3),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60754,(4),null);
var default_open_QMARK_ = (function (){var and__5041__auto__ = new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.state));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(frontend.state.get_edit_block()),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552)], null)));
} else {
return and__5041__auto__;
}
})();
var _ = frontend.state.set_state_BANG_(new cljs.core.Keyword("editor","code-mode?","editor/code-mode?",1404453234),false);
var original_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"data-lang","data-lang",969460304));
var mode = (cljs.core.truth_(new cljs.core.Keyword(null,"file?","file?",1755223728).cljs$core$IFn$_invoke$arity$1(config))?frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"ext","ext",-996964541)):frontend.extensions.code.text__GT_cm_mode.cljs$core$IFn$_invoke$arity$2(original_mode,new cljs.core.Keyword(null,"name","name",1843675177)));
var lisp_like_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["clojure",null,"lisp",null,"edn",null,"scheme",null], null), null),mode);
var textarea = goog.dom.getElement(id);
var default_cm_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"theme","theme",-1247880880),["solarized ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(theme)].join(''),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),lisp_like_QMARK_,new cljs.core.Keyword(null,"styleActiveLine","styleActiveLine",-677594147),true], null);
var cm_options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_cm_options,frontend.extensions.code.extra_codemirror_options(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mode","mode",654403691),mode,new cljs.core.Keyword(null,"tabindex","tabindex",338877510),(-1),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),({"Esc": (function (cm){
frontend.extensions.code.goog$module$goog$object.set(cm,"escPressed",true);

frontend.extensions.code.save_file_or_block_when_blur_or_esc_BANG_(cm,textarea,config,state);

var temp__5720__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5720__auto__)){
var block_id = temp__5720__auto__;
var block = (function (){var G__60757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uuid","block/uuid",-1991494552),block_id], null);
return (frontend.db.pull.cljs$core$IFn$_invoke$arity$1 ? frontend.db.pull.cljs$core$IFn$_invoke$arity$1(G__60757) : frontend.db.pull.call(null,G__60757));
})();
return frontend.handler.editor.edit_block_BANG_.cljs$core$IFn$_invoke$arity$3(block,new cljs.core.Keyword(null,"max","max",61366548),block_id);
} else {
return null;
}
})})], null),((frontend.config.publishing_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"cursorBlinkRate","cursorBlinkRate",1916335188),(-1)], null):null)], 0));
var editor = (cljs.core.truth_(textarea)?(function (){var G__60758 = textarea;
var G__60759 = cljs.core.clj__GT_js(cm_options);
return (frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2 ? frontend.extensions.code.from_textarea.cljs$core$IFn$_invoke$arity$2(G__60758,G__60759) : frontend.extensions.code.from_textarea.call(null,G__60758,G__60759));
})():null);
if(cljs.core.truth_(editor)){
var textarea_ref_60773 = rum.core.ref_node(state,frontend.extensions.code.textarea_ref_name);
var element_60774 = editor.getWrapperElement();
frontend.extensions.code.goog$module$goog$object.set(textarea_ref_60773,frontend.extensions.code.codemirror_ref_name,editor);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
editor.on("change",(function (_cm,_e){
var new_code = editor.getValue();
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state),frontend.extensions.calc.eval_lines(new_code));
}));
} else {
}

editor.on("blur",(function (cm,e){
if(cljs.core.truth_(e)){
frontend.util.stop(e);
} else {
}

if(cljs.core.truth_(frontend.extensions.code.goog$module$goog$object.get(cm,"escPressed"))){
} else {
frontend.extensions.code.save_file_or_block_when_blur_or_esc_BANG_(editor,textarea,config,state);
}

return frontend.state.set_block_component_editing_mode_BANG_(false);
}));

editor.on("focus",(function (_e){
return frontend.state.set_block_component_editing_mode_BANG_(true);
}));

element_60774.addEventListener("mousedown",(function (e){
frontend.util.stop(e);

frontend.state.clear_selection_BANG_();

var temp__5720__auto__ = (function (){var and__5041__auto__ = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var G__60760 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(config);
return (frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1 ? frontend.db.get_block_by_uuid.cljs$core$IFn$_invoke$arity$1(G__60760) : frontend.db.get_block_by_uuid.call(null,G__60760));
})());
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var block = temp__5720__auto__;
return frontend.state.set_editing_BANG_.cljs$core$IFn$_invoke$arity$5(id,editor.getValue(),block,null,false);
} else {
return null;
}
}));

element_60774.addEventListener("touchstart",(function (e){
return e.stopPropagation();
}));

editor.save();

editor.refresh();

if(cljs.core.truth_(default_open_QMARK_)){
editor.focus();
} else {
}
} else {
}

return editor;
});
frontend.extensions.code.load_and_render_BANG_ = (function frontend$extensions$code$load_and_render_BANG_(state){
var editor_atom = new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.deref(editor_atom))){
return null;
} else {
var editor = frontend.extensions.code.render_BANG_(state);
return cljs.core.reset_BANG_(editor_atom,editor);
}
});
frontend.extensions.code.editor = rum.core.lazy_build(rum.core.build_defcs,(function (state,_config,id,attr,code,_theme,_options){
var attrs60761 = (function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(temp__5720__auto__)){
var mode = temp__5720__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"calc")){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.extensions__code-lang","div.extensions__code-lang",1159233563),clojure.string.lower_case(mode)], null);
}
} else {
return null;
}
})();
return daiquiri.core.create_element("div",((cljs.core.map_QMARK_(attrs60761))?daiquiri.interpreter.element_attributes(daiquiri.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["extensions__code"], null)], null),attrs60761], 0))):{'className':"extensions__code"}),((cljs.core.map_QMARK_(attrs60761))?[daiquiri.core.create_element("div",{'className':"code-editor flex flex-1 flex-row w-full"},[(function (){var attrs60762 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),frontend.extensions.code.textarea_ref_name,new cljs.core.Keyword(null,"default-value","default-value",232220170),code], null),attr], 0));
return daiquiri.core.create_element("textarea",((cljs.core.map_QMARK_(attrs60762))?daiquiri.interpreter.element_attributes(attrs60762):null),((cljs.core.map_QMARK_(attrs60762))?null:[daiquiri.interpreter.interpret(attrs60762)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc"))?frontend.extensions.calc.results(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state)):null)])]:[daiquiri.interpreter.interpret(attrs60761),daiquiri.core.create_element("div",{'className':"code-editor flex flex-1 flex-row w-full"},[(function (){var attrs60763 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ref","ref",1289896967),frontend.extensions.code.textarea_ref_name,new cljs.core.Keyword(null,"default-value","default-value",232220170),code], null),attr], 0));
return daiquiri.core.create_element("textarea",((cljs.core.map_QMARK_(attrs60763))?daiquiri.interpreter.element_attributes(attrs60763):null),((cljs.core.map_QMARK_(attrs60763))?null:[daiquiri.interpreter.interpret(attrs60763)]));
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data-lang","data-lang",969460304).cljs$core$IFn$_invoke$arity$1(attr),"calc"))?frontend.extensions.calc.results(new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533).cljs$core$IFn$_invoke$arity$1(state)):null)])]));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state){
var vec__60764 = new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(2),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(3),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(4),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60764,(5),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"editor-atom","editor-atom",1409591060),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"calc-atom","calc-atom",202304533),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.extensions.calc.eval_lines(code)),new cljs.core.Keyword(null,"code-options","code-options",1113362965),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(options)], 0));
}),new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
frontend.extensions.code.load_and_render_BANG_(state);

return state;
}),new cljs.core.Keyword(null,"did-update","did-update",-2143702256),(function (state){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"code-options","code-options",1113362965).cljs$core$IFn$_invoke$arity$1(state),cljs.core.last(new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)));

return state;
})], null)], null),"frontend.extensions.code/editor");
frontend.commands.handle_step.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("codemirror","focus","codemirror/focus",-19393885),(function (p__60767){
var vec__60768 = p__60767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60768,(0),null);
var block = frontend.state.get_edit_block();
var block_uuid = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block);
frontend.state.clear_edit_BANG_();

return setTimeout((function (){
var block_node = frontend.util.get_first_block_by_id(block_uuid);
var textarea_ref = block_node.querySelector("textarea");
var temp__5720__auto__ = frontend.extensions.code.goog$module$goog$object.get(textarea_ref,frontend.extensions.code.codemirror_ref_name);
if(cljs.core.truth_(temp__5720__auto__)){
var codemirror_ref = temp__5720__auto__;
return codemirror_ref.focus();
} else {
return null;
}
}),(100));
}));

//# sourceMappingURL=frontend.extensions.code.js.map
