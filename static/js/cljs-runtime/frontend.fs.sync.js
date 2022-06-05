goog.provide('frontend.fs.sync');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),"null",new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),"null",new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),"null",new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),"null",new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null,new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),null,new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),null,new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null,new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),null,new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026),new cljs.core.Symbol("cljs-time.core","date?","cljs-time.core/date?",1865755164,null),cljs_time.core.date_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48798){
return cljs.core.set_QMARK_(G__48798);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48799){
return cljs.core.set_QMARK_(G__48799);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.set_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48800){
return cljs.core.map_QMARK_(G__48800);
}),(function (G__48800){
return cljs.core.contains_QMARK_(G__48800,new cljs.core.Keyword(null,"path","path",-188191168));
}),(function (G__48800){
return cljs.core.contains_QMARK_(G__48800,new cljs.core.Keyword(null,"time","time",1385887882));
})], null),(function (G__48800){
return ((cljs.core.map_QMARK_(G__48800)) && (((cljs.core.contains_QMARK_(G__48800,new cljs.core.Keyword(null,"path","path",-188191168))) && (cljs.core.contains_QMARK_(G__48800,new cljs.core.Keyword(null,"time","time",1385887882))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","path","frontend.fs.sync/path",88901888),new cljs.core.Keyword("frontend.fs.sync","time","frontend.fs.sync/time",1763614026)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"time","time",1385887882)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__48804){
return cljs.core.seq_QMARK_(G__48804);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.seq_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("frontend.fs.sync","history-item","frontend.fs.sync/history-item",-1188279678),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48805){
return cljs.core.map_QMARK_(G__48805);
}),(function (G__48805){
return cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"state","state",-1988618099));
}),(function (G__48805){
return cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256));
}),(function (G__48805){
return cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085));
}),(function (G__48805){
return cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812));
}),(function (G__48805){
return cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"history","history",-247395220));
})], null),(function (G__48805){
return ((cljs.core.map_QMARK_(G__48805)) && (((cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"state","state",-1988618099))) && (((cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))) && (((cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))) && (((cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))) && (cljs.core.contains_QMARK_(G__48805,new cljs.core.Keyword(null,"history","history",-247395220))))))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),new cljs.core.Keyword("frontend.fs.sync","current-local->remote-files","frontend.fs.sync/current-local->remote-files",-963968848),new cljs.core.Keyword("frontend.fs.sync","current-remote->local-files","frontend.fs.sync/current-remote->local-files",699581517),new cljs.core.Keyword("frontend.fs.sync","queued-local->remote-files","frontend.fs.sync/queued-local->remote-files",1294573132),new cljs.core.Keyword("frontend.fs.sync","history","frontend.fs.sync/history",-523930708)], null),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"state","state",-1988618099))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"history","history",-247395220)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file","null","delete_files","null","update_files","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["rename_file",null,"delete_files",null,"update_files",null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__48813){
return cljs.core.map_QMARK_(G__48813);
}),(function (G__48813){
return cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
}),(function (G__48813){
return cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
}),(function (G__48813){
return cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
})], null),(function (G__48813){
return ((cljs.core.map_QMARK_(G__48813)) && (((cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXId","TXId",-902804781))) && (((cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXType","TXType",-476865365))) && (cljs.core.contains_QMARK_(G__48813,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317))))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","TXId","frontend.fs.sync/TXId",2021455507),new cljs.core.Keyword("frontend.fs.sync","TXType","frontend.fs.sync/TXType",-216856597),new cljs.core.Keyword("frontend.fs.sync","TXContent","frontend.fs.sync/TXContent",-963652645)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),new cljs.core.Keyword(null,"TXType","TXType",-476865365),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXId","TXId",-902804781))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXType","TXType",-476865365))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__48826_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"succ","succ",1386276271),true], null),p1__48826_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645),cljs.core.list(new cljs.core.Symbol("cljs.core","comp","cljs.core/comp",-2137591872,null),new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),new cljs.core.Keyword(null,"unknown","unknown",-935977881)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__48828_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),true], null),p1__48828_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),(function (p1__48829_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),true], null),p1__48829_SHARP_);
}));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__48831#","p1__48831#",1342206773,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"p1__48831#","p1__48831#",1342206773,null))),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),new cljs.core.Symbol(null,"%","%",-950237169,null))),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),(function (p1__48831_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586),true], null),p1__48831_SHARP_);
}),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"succ","succ",1386276271),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.fs.sync","succ-map","frontend.fs.sync/succ-map",-983786905),new cljs.core.Keyword("frontend.fs.sync","stop-map","frontend.fs.sync/stop-map",-2130733377),new cljs.core.Keyword("frontend.fs.sync","need-sync-remote","frontend.fs.sync/need-sync-remote",744154303),new cljs.core.Keyword("frontend.fs.sync","unknown-map","frontend.fs.sync/unknown-map",-1863923645)], null),null));
frontend.fs.sync.ws_addr = frontend.config.WS_URL;
frontend.fs.sync.graphs_txid = frontend.util.persist_var.persist_var(null,"graphs-txid");
frontend.fs.sync.update_graphs_txid_BANG_ = (function frontend$fs$sync$update_graphs_txid_BANG_(latest_txid,graph_uuid,user_uuid,repo){
if(cljs.core.int_QMARK_(latest_txid)){
} else {
throw (new Error("Assert failed: (int? latest-txid)"));
}

if((latest_txid >= (0))){
} else {
throw (new Error("Assert failed: (>= latest-txid 0)"));
}

frontend.fs.sync.graphs_txid.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_uuid,graph_uuid,latest_txid], null),repo);

return frontend.util.persist_var.persist_save(frontend.fs.sync.graphs_txid);
});
frontend.fs.sync.clear_graphs_txid_BANG_ = (function frontend$fs$sync$clear_graphs_txid_BANG_(repo){
frontend.fs.sync.graphs_txid.frontend$util$persist_var$IResetValue$_reset_value_BANG_$arity$3(null,null,repo);

return frontend.util.persist_var.persist_save(frontend.fs.sync.graphs_txid);
});
frontend.fs.sync.ws_ping_loop = (function frontend$fs$sync$ws_ping_loop(ws){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48864){
var state_val_48865 = (state_48864[(1)]);
if((state_val_48865 === (7))){
var inst_48846 = cljs.core.async.timeout((1000));
var state_48864__$1 = state_48864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48864__$1,(10),inst_48846);
} else {
if((state_val_48865 === (1))){
var state_48864__$1 = state_48864;
var statearr_48866_52723 = state_48864__$1;
(statearr_48866_52723[(2)] = null);

(statearr_48866_52723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (4))){
var inst_48835 = (state_48864[(7)]);
var inst_48844 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_48835);
var state_48864__$1 = state_48864;
if(inst_48844){
var statearr_48867_52724 = state_48864__$1;
(statearr_48867_52724[(1)] = (7));

} else {
var statearr_48868_52725 = state_48864__$1;
(statearr_48868_52725[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (6))){
var inst_48860 = (state_48864[(2)]);
var state_48864__$1 = state_48864;
var statearr_48869_52726 = state_48864__$1;
(statearr_48869_52726[(2)] = inst_48860);

(statearr_48869_52726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (3))){
var inst_48862 = (state_48864[(2)]);
var state_48864__$1 = state_48864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48864__$1,inst_48862);
} else {
if((state_val_48865 === (2))){
var inst_48835 = (state_48864[(7)]);
var inst_48835__$1 = ws.readyState;
var inst_48838 = [(3),null,(2),null];
var inst_48839 = (new cljs.core.PersistentArrayMap(null,2,inst_48838,null));
var inst_48840 = (new cljs.core.PersistentHashSet(null,inst_48839,null));
var inst_48841 = cljs.core.contains_QMARK_(inst_48840,inst_48835__$1);
var inst_48842 = (!(inst_48841));
var state_48864__$1 = (function (){var statearr_48870 = state_48864;
(statearr_48870[(7)] = inst_48835__$1);

return statearr_48870;
})();
if(inst_48842){
var statearr_48871_52727 = state_48864__$1;
(statearr_48871_52727[(1)] = (4));

} else {
var statearr_48872_52728 = state_48864__$1;
(statearr_48872_52728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (11))){
var inst_48854 = (state_48864[(2)]);
var state_48864__$1 = (function (){var statearr_48873 = state_48864;
(statearr_48873[(8)] = inst_48854);

return statearr_48873;
})();
var statearr_48874_52729 = state_48864__$1;
(statearr_48874_52729[(2)] = null);

(statearr_48874_52729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (9))){
var inst_48857 = (state_48864[(2)]);
var state_48864__$1 = state_48864;
var statearr_48875_52730 = state_48864__$1;
(statearr_48875_52730[(2)] = inst_48857);

(statearr_48875_52730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (5))){
var state_48864__$1 = state_48864;
var statearr_48879_52731 = state_48864__$1;
(statearr_48879_52731[(2)] = null);

(statearr_48879_52731[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (10))){
var inst_48848 = (state_48864[(2)]);
var state_48864__$1 = (function (){var statearr_48880 = state_48864;
(statearr_48880[(9)] = inst_48848);

return statearr_48880;
})();
var statearr_48881_52732 = state_48864__$1;
(statearr_48881_52732[(2)] = null);

(statearr_48881_52732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48865 === (8))){
var inst_48851 = ws.send("PING");
var inst_48852 = cljs.core.async.timeout((30000));
var state_48864__$1 = (function (){var statearr_48882 = state_48864;
(statearr_48882[(10)] = inst_48851);

return statearr_48882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48864__$1,(11),inst_48852);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0 = (function (){
var statearr_48885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48885[(0)] = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__);

(statearr_48885[(1)] = (1));

return statearr_48885;
});
var frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1 = (function (state_48864){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48864);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48886){var ex__27576__auto__ = e48886;
var statearr_48887_52733 = state_48864;
(statearr_48887_52733[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48864[(4)]))){
var statearr_48888_52734 = state_48864;
(statearr_48888_52734[(1)] = cljs.core.first((state_48864[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52735 = state_48864;
state_48864 = G__52735;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__ = function(state_48864){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1.call(this,state_48864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____0;
frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_ping_loop_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48889 = f__27596__auto__();
(statearr_48889[(6)] = c__27595__auto__);

return statearr_48889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.ws_stop_BANG_ = (function frontend$fs$sync$ws_stop_BANG_(_STAR_ws){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_STAR_ws,(function (o){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
}));

return new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).close();
});
frontend.fs.sync.ws_listen_BANG__STAR_ = (function frontend$fs$sync$ws_listen_BANG__STAR_(graph_uuid,_STAR_ws,remote_changes_chan){
cljs.core.reset_BANG_(_STAR_ws,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),(new WebSocket(frontend.util.format.cljs$core$IFn$_invoke$arity$variadic(frontend.fs.sync.ws_addr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([graph_uuid], 0)))),new cljs.core.Keyword(null,"stop","stop",-2140911342),false], null));

frontend.fs.sync.ws_ping_loop(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)));

(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).onclose = (function (_e){
if(new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)) === true){
return null;
} else {
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48897){
var state_val_48898 = (state_48897[(1)]);
if((state_val_48898 === (1))){
var inst_48893 = cljs.core.async.timeout((1000));
var inst_48894 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-connecting graph",graph_uuid], 0));
var inst_48895 = (frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 ? frontend.fs.sync.ws_listen_BANG__STAR_.cljs$core$IFn$_invoke$arity$3(graph_uuid,_STAR_ws,remote_changes_chan) : frontend.fs.sync.ws_listen_BANG__STAR_.call(null,graph_uuid,_STAR_ws,remote_changes_chan));
var state_48897__$1 = (function (){var statearr_48899 = state_48897;
(statearr_48899[(7)] = inst_48894);

(statearr_48899[(8)] = inst_48893);

return statearr_48899;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48897__$1,inst_48895);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0 = (function (){
var statearr_48900 = [null,null,null,null,null,null,null,null,null];
(statearr_48900[(0)] = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__);

(statearr_48900[(1)] = (1));

return statearr_48900;
});
var frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1 = (function (state_48897){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48897);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48904){var ex__27576__auto__ = e48904;
var statearr_48905_52736 = state_48897;
(statearr_48905_52736[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48897[(4)]))){
var statearr_48906_52737 = state_48897;
(statearr_48906_52737[(1)] = cljs.core.first((state_48897[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52738 = state_48897;
state_48897 = G__52738;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__ = function(state_48897){
switch(arguments.length){
case 0:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1.call(this,state_48897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____0;
frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto____1;
return frontend$fs$sync$ws_listen_BANG__STAR__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48911 = f__27596__auto__();
(statearr_48911[(6)] = c__27595__auto__);

return statearr_48911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}
}));

return (new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_STAR_ws)).onmessage = (function (e){
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(e.data),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if((!((new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(data) == null)))){
var temp__5718__auto__ = cljs.core.async.poll_BANG_(remote_changes_chan);
if(cljs.core.truth_(temp__5718__auto__)){
var v = temp__5718__auto__;
var last_txid = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(v);
var current_txid = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(data);
if((last_txid > current_txid)){
return cljs.core.async.offer_BANG_(remote_changes_chan,v);
} else {
return cljs.core.async.offer_BANG_(remote_changes_chan,data);
}
} else {
return cljs.core.async.offer_BANG_(remote_changes_chan,data);
}
} else {
return null;
}
}));
});
/**
 * return channel which output messages from server
 */
frontend.fs.sync.ws_listen_BANG_ = (function frontend$fs$sync$ws_listen_BANG_(graph_uuid,_STAR_ws){
var remote_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
frontend.fs.sync.ws_listen_BANG__STAR_(graph_uuid,_STAR_ws,remote_changes_chan);

return remote_changes_chan;
});
frontend.fs.sync.get_json_body = (function frontend$fs$sync$get_json_body(body){
var or__5043__auto__ = (function (){var and__5041__auto__ = (!(typeof body === 'string'));
if(and__5041__auto__){
return body;
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var or__5043__auto____$1 = (function (){var or__5043__auto____$1 = clojure.string.blank_QMARK_(body);
if(or__5043__auto____$1){
return or__5043__auto____$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__5043__auto____$1)){
return or__5043__auto____$1;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}
}
});
frontend.fs.sync.get_resp_json_body = (function frontend$fs$sync$get_resp_json_body(resp){
return frontend.fs.sync.get_json_body(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp));
});
frontend.fs.sync.request_once = (function frontend$fs$sync$request_once(api_name,body,token){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48925){
var state_val_48926 = (state_48925[(1)]);
if((state_val_48926 === (1))){
var inst_48912 = ["https://",frontend.config.API_DOMAIN,"/file-sync/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_name)].join('');
var inst_48913 = [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_48914 = cljs.core.clj__GT_js(body);
var inst_48915 = JSON.stringify(inst_48914);
var inst_48916 = [token,inst_48915,false];
var inst_48917 = cljs.core.PersistentHashMap.fromArrays(inst_48913,inst_48916);
var inst_48918 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(inst_48912,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_48917], 0));
var inst_48919 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"api-name","api-name",1420570992),new cljs.core.Keyword(null,"body","body",-2049205669)];
var state_48925__$1 = (function (){var statearr_48927 = state_48925;
(statearr_48927[(7)] = inst_48919);

return statearr_48927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48925__$1,(2),inst_48918);
} else {
if((state_val_48926 === (2))){
var inst_48919 = (state_48925[(7)]);
var inst_48921 = (state_48925[(2)]);
var inst_48922 = [inst_48921,api_name,body];
var inst_48923 = cljs.core.PersistentHashMap.fromArrays(inst_48919,inst_48922);
var state_48925__$1 = state_48925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48925__$1,inst_48923);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$request_once_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$request_once_$_state_machine__27573__auto____0 = (function (){
var statearr_48928 = [null,null,null,null,null,null,null,null];
(statearr_48928[(0)] = frontend$fs$sync$request_once_$_state_machine__27573__auto__);

(statearr_48928[(1)] = (1));

return statearr_48928;
});
var frontend$fs$sync$request_once_$_state_machine__27573__auto____1 = (function (state_48925){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48925);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48929){var ex__27576__auto__ = e48929;
var statearr_48930_52739 = state_48925;
(statearr_48930_52739[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48925[(4)]))){
var statearr_48931_52740 = state_48925;
(statearr_48931_52740[(1)] = cljs.core.first((state_48925[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52741 = state_48925;
state_48925 = G__52741;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$request_once_$_state_machine__27573__auto__ = function(state_48925){
switch(arguments.length){
case 0:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$request_once_$_state_machine__27573__auto____1.call(this,state_48925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$request_once_$_state_machine__27573__auto____0;
frontend$fs$sync$request_once_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$request_once_$_state_machine__27573__auto____1;
return frontend$fs$sync$request_once_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48932 = f__27596__auto__();
(statearr_48932[(6)] = c__27595__auto__);

return statearr_48932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.request = (function frontend$fs$sync$request(var_args){
var G__48934 = arguments.length;
switch (G__48934) {
case 4:
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4 = (function (api_name,body,token,refresh_token_fn){
return frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,token,refresh_token_fn,(0));
}));

(frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5 = (function (api_name,body,token,refresh_token_fn,retry_count){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_48975){
var state_val_48976 = (state_48975[(1)]);
if((state_val_48976 === (7))){
var inst_48937 = (state_48975[(7)]);
var inst_48971 = new cljs.core.Keyword(null,"resp","resp",1418702376).cljs$core$IFn$_invoke$arity$1(inst_48937);
var state_48975__$1 = state_48975;
var statearr_48977_52743 = state_48975__$1;
(statearr_48977_52743[(2)] = inst_48971);

(statearr_48977_52743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (1))){
var inst_48935 = frontend.fs.sync.request_once(api_name,body,token);
var state_48975__$1 = state_48975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48975__$1,(2),inst_48935);
} else {
if((state_val_48976 === (4))){
var inst_48942 = (state_48975[(8)]);
var state_48975__$1 = state_48975;
var statearr_48978_52744 = state_48975__$1;
(statearr_48978_52744[(2)] = inst_48942);

(statearr_48978_52744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (6))){
var inst_48955 = ((1000) * retry_count);
var inst_48956 = (((60000) < inst_48955) ? (60000) : inst_48955);
var inst_48957 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["will retry after",inst_48956,"ms"], 0));
var inst_48958 = ((1000) * retry_count);
var inst_48959 = (((60000) < inst_48958) ? (60000) : inst_48958);
var inst_48960 = cljs.core.async.timeout(inst_48959);
var state_48975__$1 = (function (){var statearr_48979 = state_48975;
(statearr_48979[(9)] = inst_48957);

return statearr_48979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48975__$1,(9),inst_48960);
} else {
if((state_val_48976 === (3))){
var inst_48937 = (state_48975[(7)]);
var inst_48944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48945 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_48946 = (new cljs.core.PersistentVector(null,2,(5),inst_48944,inst_48945,null));
var inst_48947 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48937,inst_48946);
var inst_48948 = frontend.fs.sync.get_json_body(inst_48947);
var inst_48949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_48948);
var inst_48950 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Unauthorized",inst_48949);
var state_48975__$1 = state_48975;
var statearr_48980_52745 = state_48975__$1;
(statearr_48980_52745[(2)] = inst_48950);

(statearr_48980_52745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (2))){
var inst_48942 = (state_48975[(8)]);
var inst_48937 = (state_48975[(7)]);
var inst_48937__$1 = (state_48975[(2)]);
var inst_48938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48939 = [new cljs.core.Keyword(null,"resp","resp",1418702376),new cljs.core.Keyword(null,"status","status",-1997798413)];
var inst_48940 = (new cljs.core.PersistentVector(null,2,(5),inst_48938,inst_48939,null));
var inst_48941 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_48937__$1,inst_48940);
var inst_48942__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_48941);
var state_48975__$1 = (function (){var statearr_48981 = state_48975;
(statearr_48981[(8)] = inst_48942__$1);

(statearr_48981[(7)] = inst_48937__$1);

return statearr_48981;
})();
if(inst_48942__$1){
var statearr_48982_52746 = state_48975__$1;
(statearr_48982_52746[(1)] = (3));

} else {
var statearr_48983_52747 = state_48975__$1;
(statearr_48983_52747[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (11))){
var inst_48969 = (state_48975[(2)]);
var state_48975__$1 = state_48975;
var statearr_48985_52748 = state_48975__$1;
(statearr_48985_52748[(2)] = inst_48969);

(statearr_48985_52748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (9))){
var inst_48962 = (state_48975[(2)]);
var inst_48963 = (refresh_token_fn.cljs$core$IFn$_invoke$arity$0 ? refresh_token_fn.cljs$core$IFn$_invoke$arity$0() : refresh_token_fn.call(null));
var state_48975__$1 = (function (){var statearr_48986 = state_48975;
(statearr_48986[(10)] = inst_48962);

return statearr_48986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48975__$1,(10),inst_48963);
} else {
if((state_val_48976 === (5))){
var inst_48953 = (state_48975[(2)]);
var state_48975__$1 = state_48975;
if(cljs.core.truth_(inst_48953)){
var statearr_48987_52749 = state_48975__$1;
(statearr_48987_52749[(1)] = (6));

} else {
var statearr_48988_52750 = state_48975__$1;
(statearr_48988_52750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48976 === (10))){
var inst_48965 = (state_48975[(2)]);
var inst_48966 = (retry_count + (1));
var inst_48967 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$5(api_name,body,inst_48965,refresh_token_fn,inst_48966);
var state_48975__$1 = state_48975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48975__$1,(11),inst_48967);
} else {
if((state_val_48976 === (8))){
var inst_48973 = (state_48975[(2)]);
var state_48975__$1 = state_48975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48975__$1,inst_48973);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_48989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48989[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_48989[(1)] = (1));

return statearr_48989;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_48975){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_48975);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e48990){var ex__27576__auto__ = e48990;
var statearr_48991_52751 = state_48975;
(statearr_48991_52751[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_48975[(4)]))){
var statearr_48992_52752 = state_48975;
(statearr_48992_52752[(1)] = cljs.core.first((state_48975[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52753 = state_48975;
state_48975 = G__52753;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_48975){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_48975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_48993 = f__27596__auto__();
(statearr_48993[(6)] = c__27595__auto__);

return statearr_48993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.request.cljs$lang$maxFixedArity = 5);

frontend.fs.sync.remove_dir_prefix = (function frontend$fs$sync$remove_dir_prefix(dir,path){
var is_mobile_url_QMARK_ = clojure.string.starts_with_QMARK_(dir,"file://");
var dir__$1 = ((is_mobile_url_QMARK_)?goog.string.urlDecode(dir):dir);
var r = clojure.string.replace(path,(new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(dir__$1))].join(''))),"");
if(clojure.string.starts_with_QMARK_(r,"/")){
return clojure.string.replace_first(r,"/","");
} else {
return r;
}
});
/**
 * <user-uuid>/<graph-uuid>/path -> path
 */
frontend.fs.sync.remove_user_graph_uuid_prefix = (function frontend$fs$sync$remove_user_graph_uuid_prefix(path){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,"/");
if(((((2) < cljs.core.count(parts))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((36),cljs.core.count((parts.cljs$core$IFn$_invoke$arity$1 ? parts.cljs$core$IFn$_invoke$arity$1((0)) : parts.call(null,(0)))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((36),cljs.core.count((parts.cljs$core$IFn$_invoke$arity$1 ? parts.cljs$core$IFn$_invoke$arity$1((1)) : parts.call(null,(1)))))))))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),parts));
} else {
return path;
}
});
frontend.fs.sync.encode_filepath = (function frontend$fs$sync$encode_filepath(filepath){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(encodeURIComponent,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,clojure.string.split.cljs$core$IFn$_invoke$arity$2(filepath,"/"))));
});

/**
 * @interface
 */
frontend.fs.sync.IRelativePath = function(){};

var frontend$fs$sync$IRelativePath$_relative_path$dyn_52764 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._relative_path[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._relative_path["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRelativePath.-relative-path",this$);
}
}
});
frontend.fs.sync._relative_path = (function frontend$fs$sync$_relative_path(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1 == null)))))){
return this$.frontend$fs$sync$IRelativePath$_relative_path$arity$1(this$);
} else {
return frontend$fs$sync$IRelativePath$_relative_path$dyn_52764(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStoppable = function(){};

var frontend$fs$sync$IStoppable$_stop_BANG_$dyn_52765 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._stop_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._stop_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStoppable.-stop!",this$);
}
}
});
frontend.fs.sync._stop_BANG_ = (function frontend$fs$sync$_stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IStoppable$_stop_BANG_$dyn_52765(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.IStopped_QMARK_ = function(){};

var frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_52766 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync._stopped_QMARK_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync._stopped_QMARK_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStopped?.-stopped?",this$);
}
}
});
frontend.fs.sync._stopped_QMARK_ = (function frontend$fs$sync$_stopped_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1 == null)))))){
return this$.frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$arity$1(this$);
} else {
return frontend$fs$sync$IStopped_QMARK_$_stopped_QMARK_$dyn_52766(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IComparable}
*/
frontend.fs.sync.FileTxn = (function (from_path,to_path,updated_QMARK_,deleted_QMARK_,txid){
this.from_path = from_path;
this.to_path = to_path;
this.updated_QMARK_ = updated_QMARK_;
this.deleted_QMARK_ = deleted_QMARK_;
this.txid = txid;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 2048;
});
(frontend.fs.sync.FileTxn.prototype.renamed_QMARK_ = (function (){
var self__ = this;
var _ = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.from_path,self__.to_path);
}));

(frontend.fs.sync.FileTxn.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileTxn.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.remove_user_graph_uuid_prefix(self__.to_path);
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.from_path,other.from_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.to_path,other.to_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.updated_QMARK_,other.updated_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.deleted_QMARK_,other.deleted_QMARK_)))))));
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.from_path,self__.to_path,self__.updated_QMARK_,self__.deleted_QMARK_], null));
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return cljs.core.compare(self__.txid,other.txid);
}));

(frontend.fs.sync.FileTxn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,w,_opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#FileTxn[\"",self__.from_path,"\" -> \"",self__.to_path,"\" (updated? ",self__.updated_QMARK_,", renamed? ",coll__$1.renamed_QMARK_(),", deleted? ",self__.deleted_QMARK_,", txid ",self__.txid,")]"], 0));
}));

(frontend.fs.sync.FileTxn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from-path","from-path",528950303,null),new cljs.core.Symbol(null,"to-path","to-path",552685785,null),new cljs.core.Symbol(null,"updated?","updated?",1525590889,null),new cljs.core.Symbol(null,"deleted?","deleted?",1153928756,null),new cljs.core.Symbol(null,"txid","txid",-1048230291,null)], null);
}));

(frontend.fs.sync.FileTxn.cljs$lang$type = true);

(frontend.fs.sync.FileTxn.cljs$lang$ctorStr = "frontend.fs.sync/FileTxn");

(frontend.fs.sync.FileTxn.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileTxn");
}));

/**
 * Positional factory function for frontend.fs.sync/FileTxn.
 */
frontend.fs.sync.__GT_FileTxn = (function frontend$fs$sync$__GT_FileTxn(from_path,to_path,updated_QMARK_,deleted_QMARK_,txid){
return (new frontend.fs.sync.FileTxn(from_path,to_path,updated_QMARK_,deleted_QMARK_,txid));
});

/**
 * convert diff(`get-diff`) to `FileTxn`
 */
frontend.fs.sync.diff__GT_filetxns = (function frontend$fs$sync$diff__GT_filetxns(p__49031){
var map__49032 = p__49031;
var map__49032__$1 = cljs.core.__destructure_map(map__49032);
var TXId = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,new cljs.core.Keyword(null,"TXId","TXId",-902804781));
var TXType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,new cljs.core.Keyword(null,"TXType","TXType",-476865365));
var TXContent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49032__$1,new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317));
var update_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("update_files",TXType);
var delete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("delete_files",TXType);
var update_or_del_type_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__49030_SHARP_){
return frontend.fs.sync.__GT_FileTxn(p1__49030_SHARP_,p1__49030_SHARP_,update_QMARK_,delete_QMARK_,TXId);
})));
var filepaths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(decodeURIComponent,clojure.string.split_lines(TXContent));
var G__49036 = TXType;
switch (G__49036) {
case "update_files":
case "delete_files":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(update_or_del_type_xf,filepaths);

break;
case "rename_file":
return (new cljs.core.List(null,frontend.fs.sync.__GT_FileTxn(cljs.core.first(filepaths),cljs.core.second(filepaths),false,false,TXId),null,(1),null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49036)].join('')));

}
});
/**
 * transducer.
 *   remove duplicate update&delete `FileTxn`s.
 */
frontend.fs.sync.distinct_update_filetxns_xf = (function frontend$fs$sync$distinct_update_filetxns_xf(rf){
var seen_update_AMPERSAND_delete_filetxns = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__52768 = null;
var G__52768__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__52768__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__52768__2 = (function (result,filetxn){
if(cljs.core.truth_((function (){var and__5041__auto__ = (function (){var or__5043__auto__ = filetxn.updated_QMARK_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return filetxn.deleted_QMARK_;
}
})();
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(seen_update_AMPERSAND_delete_filetxns),filetxn);
} else {
return and__5041__auto__;
}
})())){
return result;
} else {
seen_update_AMPERSAND_delete_filetxns.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_update_AMPERSAND_delete_filetxns.cljs$core$IDeref$_deref$arity$1(null),filetxn));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,filetxn) : rf.call(null,result,filetxn));
}
});
G__52768 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__52768__0.call(this);
case 1:
return G__52768__1.call(this,result);
case 2:
return G__52768__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52768.cljs$core$IFn$_invoke$arity$0 = G__52768__0;
G__52768.cljs$core$IFn$_invoke$arity$1 = G__52768__1;
G__52768.cljs$core$IFn$_invoke$arity$2 = G__52768__2;
return G__52768;
})()
});
/**
 * transducer.
 *   remove update&rename filetxns if they are deleted later(in greater txid filetxn).
 */
frontend.fs.sync.remove_deleted_filetxns_xf = (function frontend$fs$sync$remove_deleted_filetxns_xf(rf){
var seen_deleted_paths = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return (function() {
var G__52769 = null;
var G__52769__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__52769__1 = (function (result){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(result) : rf.call(null,result));
});
var G__52769__2 = (function (result,filetxn){
var to_path = filetxn.to_path;
var from_path = filetxn.from_path;
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_deleted_paths),to_path)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to_path,from_path)){
seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),to_path));

seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),from_path));
} else {
}

return result;
} else {
seen_deleted_paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_deleted_paths.cljs$core$IDeref$_deref$arity$1(null),to_path));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(result,filetxn) : rf.call(null,result,filetxn));
}
});
G__52769 = function(result,filetxn){
switch(arguments.length){
case 0:
return G__52769__0.call(this);
case 1:
return G__52769__1.call(this,result);
case 2:
return G__52769__2.call(this,result,filetxn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52769.cljs$core$IFn$_invoke$arity$0 = G__52769__0;
G__52769.cljs$core$IFn$_invoke$arity$1 = G__52769__1;
G__52769.cljs$core$IFn$_invoke$arity$2 = G__52769__2;
return G__52769;
})()
});
/**
 * return transducer.
 *   partition filetxns, at most N update-filetxns in each partition,
 *   for delete and rename type, only one filetxn in each partition.
 */
frontend.fs.sync.partition_filetxns = (function frontend$fs$sync$partition_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (p1__49048_SHARP_){
return p1__49048_SHARP_.updated_QMARK_;
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ts){
if(cljs.core.truth_((function (){var G__49049 = cljs.core.first(ts);
if((G__49049 == null)){
return null;
} else {
return G__49049.updated_QMARK_;
}
})())){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,ts);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,ts);
}
})),cljs.core.cat);
});
/**
 * transducer.
 *   1. diff -> `FileTxn` , see also `get-diff`
 *   2. distinct redundant update type filetxns
 *   3. partition filetxns, each partition contains same type filetxns,
 *   for update type, at most N items in each partition
 *   for delete & rename type, only 1 item in each partition.
 *   4. remove update or rename filetxns if they are deleted in later filetxns.
 *   NOTE: this xf should apply on reversed diffs sequence (sort by txid)
 */
frontend.fs.sync.diffs__GT_partitioned_filetxns = (function frontend$fs$sync$diffs__GT_partitioned_filetxns(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.diff__GT_filetxns),cljs.core.cat,frontend.fs.sync.distinct_update_filetxns_xf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.fs.sync.remove_deleted_filetxns_xf,frontend.fs.sync.partition_filetxns(n)], 0));
});
frontend.fs.sync.filepath__GT_diff = (function frontend$fs$sync$filepath__GT_diff(index,p__49050){
var map__49051 = p__49050;
var map__49051__$1 = cljs.core.__destructure_map(map__49051);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
var user_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048));
var graph_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522));
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"TXId","TXId",-902804781),(index + (1)),new cljs.core.Keyword(null,"TXType","TXType",-476865365),"update_files",new cljs.core.Keyword(null,"TXContent","TXContent",-1258329317),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [user_uuid,graph_uuid,relative_path], null))], null);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","diff","frontend.fs.sync/diff",-1781252929),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/diff %)"));
}

return _PERCENT_;
});
/**
 * transducer.
 *   1. filepaths -> diff
 *   2. diffs->partitioned-filetxns
 */
frontend.fs.sync.filepaths__GT_partitioned_filetxns = (function frontend$fs$sync$filepaths__GT_partitioned_filetxns(n,graph_uuid,user_uuid){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"relative-path","relative-path",1848635172),p,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),user_uuid,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),graph_uuid], null);
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.filepath__GT_diff),frontend.fs.sync.diffs__GT_partitioned_filetxns(n));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
*/
frontend.fs.sync.FileMetadata = (function (size,etag,path,last_modified,remote_QMARK_,normalized_path){
this.size = size;
this.etag = etag;
this.path = path;
this.last_modified = last_modified;
this.remote_QMARK_ = remote_QMARK_;
this.normalized_path = normalized_path;
this.cljs$lang$protocol_mask$partition0$ = 2153775104;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(frontend.fs.sync.FileMetadata.prototype.get_normalized_path = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.normalized_path)){
} else {
(self__.normalized_path = (function (){var G__49054 = self__.path;
var G__49054__$1 = ((clojure.string.starts_with_QMARK_(self__.path,"/"))?clojure.string.replace_first(G__49054,"/",""):G__49054);
if(cljs.core.truth_(self__.remote_QMARK_)){
return frontend.fs.sync.remove_user_graph_uuid_prefix(G__49054__$1);
} else {
return G__49054__$1;
}
})());
}

return self__.normalized_path;
}));

(frontend.fs.sync.FileMetadata.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileMetadata.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.size,other.size)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(o__$1.get_normalized_path(),other.get_normalized_path())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.etag,other.etag)))));
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),self__.size,new cljs.core.Keyword(null,"etag","etag",-329255476),self__.etag,new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(frontend.fs.sync.FileMetadata.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,w,_opts){
var self__ = this;
var ___$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"size","size",1098693007),self__.size,new cljs.core.Keyword(null,"etag","etag",-329255476),self__.etag,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"remote?","remote?",-517415110),self__.remote_QMARK_], null))], 0));
}));

(frontend.fs.sync.FileMetadata.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"etag","etag",1311276051,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"last-modified","last-modified",-1061023978,null),new cljs.core.Symbol(null,"remote?","remote?",1123116417,null),cljs.core.with_meta(new cljs.core.Symbol(null,"normalized-path","normalized-path",-994676232,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.FileMetadata.cljs$lang$type = true);

(frontend.fs.sync.FileMetadata.cljs$lang$ctorStr = "frontend.fs.sync/FileMetadata");

(frontend.fs.sync.FileMetadata.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileMetadata");
}));

/**
 * Positional factory function for frontend.fs.sync/FileMetadata.
 */
frontend.fs.sync.__GT_FileMetadata = (function frontend$fs$sync$__GT_FileMetadata(size,etag,path,last_modified,remote_QMARK_,normalized_path){
return (new frontend.fs.sync.FileMetadata(size,etag,path,last_modified,remote_QMARK_,normalized_path));
});

frontend.fs.sync.relative_path = (function frontend$fs$sync$relative_path(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.frontend$fs$sync$IRelativePath$))))?true:false):false)){
return o.frontend$fs$sync$IRelativePath$_relative_path$arity$1(null);
} else {
if(typeof o === 'string'){
return frontend.fs.sync.remove_user_graph_uuid_prefix(o);
} else {
throw (new Error(["unsupport type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(o))].join('')));

}
}
});

/**
 * @interface
 */
frontend.fs.sync.IRSAPI = function(){};

var frontend$fs$sync$IRSAPI$set_env$dyn_52779 = (function (this$,prod_QMARK_){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.set_env[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__5391__auto__.call(null,this$,prod_QMARK_));
} else {
var m__5389__auto__ = (frontend.fs.sync.set_env["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,prod_QMARK_) : m__5389__auto__.call(null,this$,prod_QMARK_));
} else {
throw cljs.core.missing_protocol("IRSAPI.set-env",this$);
}
}
});
/**
 * set environment
 */
frontend.fs.sync.set_env = (function frontend$fs$sync$set_env(this$,prod_QMARK_){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$set_env$arity$2 == null)))))){
return this$.frontend$fs$sync$IRSAPI$set_env$arity$2(this$,prod_QMARK_);
} else {
return frontend$fs$sync$IRSAPI$set_env$dyn_52779(this$,prod_QMARK_);
}
});

var frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_52780 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_local_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_local_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.get-local-files-meta",this$);
}
}
});
/**
 * get local files' metadata
 */
frontend.fs.sync.get_local_files_meta = (function frontend$fs$sync$get_local_files_meta(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$get_local_files_meta$dyn_52780(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_52781 = (function (this$,graph_uuid,base_path){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_local_all_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__5391__auto__.call(null,this$,graph_uuid,base_path));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_local_all_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,base_path) : m__5389__auto__.call(null,this$,graph_uuid,base_path));
} else {
throw cljs.core.missing_protocol("IRSAPI.get-local-all-files-meta",this$);
}
}
});
/**
 * get all local files' metadata
 */
frontend.fs.sync.get_local_all_files_meta = (function frontend$fs$sync$get_local_all_files_meta(this$,graph_uuid,base_path){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 == null)))))){
return this$.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3(this$,graph_uuid,base_path);
} else {
return frontend$fs$sync$IRSAPI$get_local_all_files_meta$dyn_52781(this$,graph_uuid,base_path);
}
});

var frontend$fs$sync$IRSAPI$rename_local_file$dyn_52782 = (function (this$,graph_uuid,base_path,from,to){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.rename_local_file[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__5391__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
var m__5389__auto__ = (frontend.fs.sync.rename_local_file["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,from,to) : m__5389__auto__.call(null,this$,graph_uuid,base_path,from,to));
} else {
throw cljs.core.missing_protocol("IRSAPI.rename-local-file",this$);
}
}
});
frontend.fs.sync.rename_local_file = (function frontend$fs$sync$rename_local_file(this$,graph_uuid,base_path,from,to){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$rename_local_file$arity$5(this$,graph_uuid,base_path,from,to);
} else {
return frontend$fs$sync$IRSAPI$rename_local_file$dyn_52782(this$,graph_uuid,base_path,from,to);
}
});

var frontend$fs$sync$IRSAPI$update_local_files$dyn_52783 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_local_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_local_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-local-files",this$);
}
}
});
/**
 * remote -> local
 */
frontend.fs.sync.update_local_files = (function frontend$fs$sync$update_local_files(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_local_files$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_local_files$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$update_local_files$dyn_52783(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$delete_local_files$dyn_52784 = (function (this$,graph_uuid,base_path,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_local_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_local_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(this$,graph_uuid,base_path,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths));
} else {
throw cljs.core.missing_protocol("IRSAPI.delete-local-files",this$);
}
}
});
frontend.fs.sync.delete_local_files = (function frontend$fs$sync$delete_local_files(this$,graph_uuid,base_path,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 == null)))))){
return this$.frontend$fs$sync$IRSAPI$delete_local_files$arity$4(this$,graph_uuid,base_path,filepaths);
} else {
return frontend$fs$sync$IRSAPI$delete_local_files$dyn_52784(this$,graph_uuid,base_path,filepaths);
}
});

var frontend$fs$sync$IRSAPI$update_remote_file$dyn_52785 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_remote_file[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_remote_file["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepath,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepath,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-remote-file",this$);
}
}
});
/**
 * local -> remote, return err or txid
 */
frontend.fs.sync.update_remote_file = (function frontend$fs$sync$update_remote_file(this$,graph_uuid,base_path,filepath,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_remote_file$arity$5(this$,graph_uuid,base_path,filepath,local_txid);
} else {
return frontend$fs$sync$IRSAPI$update_remote_file$dyn_52785(this$,graph_uuid,base_path,filepath,local_txid);
}
});

var frontend$fs$sync$IRSAPI$update_remote_files$dyn_52786 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.update_remote_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.update_remote_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.update-remote-files",this$);
}
}
});
/**
 * local -> remote, return err or txid
 */
frontend.fs.sync.update_remote_files = (function frontend$fs$sync$update_remote_files(this$,graph_uuid,base_path,filepaths,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$update_remote_files$arity$5(this$,graph_uuid,base_path,filepaths,local_txid);
} else {
return frontend$fs$sync$IRSAPI$update_remote_files$dyn_52786(this$,graph_uuid,base_path,filepaths,local_txid);
}
});

var frontend$fs$sync$IRSAPI$delete_remote_files$dyn_52787 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_remote_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5391__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_remote_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$5(this$,graph_uuid,base_path,filepaths,local_txid) : m__5389__auto__.call(null,this$,graph_uuid,base_path,filepaths,local_txid));
} else {
throw cljs.core.missing_protocol("IRSAPI.delete-remote-files",this$);
}
}
});
/**
 * return err or txid
 */
frontend.fs.sync.delete_remote_files = (function frontend$fs$sync$delete_remote_files(this$,graph_uuid,base_path,filepaths,local_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 == null)))))){
return this$.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5(this$,graph_uuid,base_path,filepaths,local_txid);
} else {
return frontend$fs$sync$IRSAPI$delete_remote_files$dyn_52787(this$,graph_uuid,base_path,filepaths,local_txid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IRemoteAPI = function(){};

var frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_52788 = (function (this$,graph_uuid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_all_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5391__auto__.call(null,this$,graph_uuid));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_all_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5389__auto__.call(null,this$,graph_uuid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-all-files-meta",this$);
}
}
});
/**
 * get all remote files' metadata
 */
frontend.fs.sync.get_remote_all_files_meta = (function frontend$fs$sync$get_remote_all_files_meta(this$,graph_uuid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(this$,graph_uuid);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$dyn_52788(this$,graph_uuid);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_52789 = (function (this$,graph_uuid,filepaths){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_files_meta[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__5391__auto__.call(null,this$,graph_uuid,filepaths));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_files_meta["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepaths) : m__5389__auto__.call(null,this$,graph_uuid,filepaths));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-files-meta",this$);
}
}
});
/**
 * get remote files' metadata
 */
frontend.fs.sync.get_remote_files_meta = (function frontend$fs$sync$get_remote_files_meta(this$,graph_uuid,filepaths){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(this$,graph_uuid,filepaths);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_files_meta$dyn_52789(this$,graph_uuid,filepaths);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_52790 = (function (this$,graph_name_opt,graph_uuid_opt){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__5391__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_name_opt,graph_uuid_opt) : m__5389__auto__.call(null,this$,graph_name_opt,graph_uuid_opt));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-graph",this$);
}
}
});
/**
 * get graph info by GRAPH-NAME-OPT or GRAPH-UUID-OPT
 */
frontend.fs.sync.get_remote_graph = (function frontend$fs$sync$get_remote_graph(this$,graph_name_opt,graph_uuid_opt){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(this$,graph_name_opt,graph_uuid_opt);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_graph$dyn_52790(this$,graph_name_opt,graph_uuid_opt);
}
});

var frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_52791 = (function (this$,graph_uuid,filepath){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_remote_file_versions[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__5391__auto__.call(null,this$,graph_uuid,filepath));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_remote_file_versions["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,filepath) : m__5389__auto__.call(null,this$,graph_uuid,filepath));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-remote-file-versions",this$);
}
}
});
/**
 * get file's version list
 */
frontend.fs.sync.get_remote_file_versions = (function frontend$fs$sync$get_remote_file_versions(this$,graph_uuid,filepath){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3(this$,graph_uuid,filepath);
} else {
return frontend$fs$sync$IRemoteAPI$get_remote_file_versions$dyn_52791(this$,graph_uuid,filepath);
}
});

var frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_52796 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.list_remote_graphs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.list_remote_graphs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.list-remote-graphs",this$);
}
}
});
/**
 * list all remote graphs
 */
frontend.fs.sync.list_remote_graphs = (function frontend$fs$sync$list_remote_graphs(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(this$);
} else {
return frontend$fs$sync$IRemoteAPI$list_remote_graphs$dyn_52796(this$);
}
});

var frontend$fs$sync$IRemoteAPI$get_diff$dyn_52798 = (function (this$,graph_uuid,from_txid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_diff[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__5391__auto__.call(null,this$,graph_uuid,from_txid));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_diff["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(this$,graph_uuid,from_txid) : m__5389__auto__.call(null,this$,graph_uuid,from_txid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.get-diff",this$);
}
}
});
/**
 * get diff from FROM-TXID, return [txns, latest-txid, min-txid]
 */
frontend.fs.sync.get_diff = (function frontend$fs$sync$get_diff(this$,graph_uuid,from_txid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$get_diff$arity$3 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(this$,graph_uuid,from_txid);
} else {
return frontend$fs$sync$IRemoteAPI$get_diff$dyn_52798(this$,graph_uuid,from_txid);
}
});

var frontend$fs$sync$IRemoteAPI$create_graph$dyn_52799 = (function (this$,graph_name){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.create_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__5391__auto__.call(null,this$,graph_name));
} else {
var m__5389__auto__ = (frontend.fs.sync.create_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_name) : m__5389__auto__.call(null,this$,graph_name));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.create-graph",this$);
}
}
});
/**
 * create graph
 */
frontend.fs.sync.create_graph = (function frontend$fs$sync$create_graph(this$,graph_name){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$create_graph$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$create_graph$arity$2(this$,graph_name);
} else {
return frontend$fs$sync$IRemoteAPI$create_graph$dyn_52799(this$,graph_name);
}
});

var frontend$fs$sync$IRemoteAPI$delete_graph$dyn_52800 = (function (this$,graph_uuid){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.delete_graph[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5391__auto__.call(null,this$,graph_uuid));
} else {
var m__5389__auto__ = (frontend.fs.sync.delete_graph["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,graph_uuid) : m__5389__auto__.call(null,this$,graph_uuid));
} else {
throw cljs.core.missing_protocol("IRemoteAPI.delete-graph",this$);
}
}
});
/**
 * delete graph
 */
frontend.fs.sync.delete_graph = (function frontend$fs$sync$delete_graph(this$,graph_uuid){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2 == null)))))){
return this$.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2(this$,graph_uuid);
} else {
return frontend$fs$sync$IRemoteAPI$delete_graph$dyn_52800(this$,graph_uuid);
}
});


/**
 * @interface
 */
frontend.fs.sync.IToken = function(){};

var frontend$fs$sync$IToken$get_token$dyn_52802 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_token[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_token["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.get-token",this$);
}
}
});
frontend.fs.sync.get_token = (function frontend$fs$sync$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$get_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$get_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$get_token$dyn_52802(this$);
}
});

var frontend$fs$sync$IToken$refresh_token$dyn_52803 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.refresh_token[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.refresh_token["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IToken.refresh-token",this$);
}
}
});
frontend.fs.sync.refresh_token = (function frontend$fs$sync$refresh_token(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IToken$refresh_token$arity$1 == null)))))){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(this$);
} else {
return frontend$fs$sync$IToken$refresh_token$dyn_52803(this$);
}
});

frontend.fs.sync.check_files_exists = (function frontend$fs$sync$check_files_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49101){
var state_val_49102 = (state_49101[(1)]);
if((state_val_49102 === (1))){
var inst_49087 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_49101__$1 = state_49101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49101__$1,(2),inst_49087);
} else {
if((state_val_49102 === (2))){
var inst_49090 = (state_49101[(7)]);
var inst_49089 = (state_49101[(2)]);
var inst_49090__$1 = cljs.core.ex_cause(inst_49089);
var inst_49091 = (inst_49090__$1 == null);
var state_49101__$1 = (function (){var statearr_49104 = state_49101;
(statearr_49104[(7)] = inst_49090__$1);

return statearr_49104;
})();
if(cljs.core.truth_(inst_49091)){
var statearr_49105_52805 = state_49101__$1;
(statearr_49105_52805[(1)] = (3));

} else {
var statearr_49106_52806 = state_49101__$1;
(statearr_49106_52806[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49102 === (3))){
var state_49101__$1 = state_49101;
var statearr_49107_52807 = state_49101__$1;
(statearr_49107_52807[(2)] = null);

(statearr_49107_52807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49102 === (4))){
var inst_49090 = (state_49101[(7)]);
var inst_49094 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49090),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_paths)].join('');
var inst_49095 = ["Assert failed: ",inst_49094,"\n","(nil? cause)"].join('');
var inst_49096 = (new Error(inst_49095));
var inst_49097 = (function(){throw inst_49096})();
var state_49101__$1 = state_49101;
var statearr_49108_52808 = state_49101__$1;
(statearr_49108_52808[(2)] = inst_49097);

(statearr_49108_52808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49102 === (5))){
var inst_49099 = (state_49101[(2)]);
var state_49101__$1 = state_49101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49101__$1,inst_49099);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_49109 = [null,null,null,null,null,null,null,null];
(statearr_49109[(0)] = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__);

(statearr_49109[(1)] = (1));

return statearr_49109;
});
var frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1 = (function (state_49101){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49101);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49110){var ex__27576__auto__ = e49110;
var statearr_49111_52809 = state_49101;
(statearr_49111_52809[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49101[(4)]))){
var statearr_49112_52810 = state_49101;
(statearr_49112_52810[(1)] = cljs.core.first((state_49101[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52811 = state_49101;
state_49101 = G__52811;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__ = function(state_49101){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1.call(this,state_49101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49113 = f__27596__auto__();
(statearr_49113[(6)] = c__27595__auto__);

return statearr_49113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.check_files_not_exists = (function frontend$fs$sync$check_files_not_exists(base_path,file_paths){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49127){
var state_val_49128 = (state_49127[(1)]);
if((state_val_49128 === (1))){
var inst_49114 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,file_paths);
var state_49127__$1 = state_49127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49127__$1,(2),inst_49114);
} else {
if((state_val_49128 === (2))){
var inst_49116 = (state_49127[(2)]);
var inst_49117 = cljs.core.ex_cause(inst_49116);
var inst_49118 = (inst_49117 == null);
var inst_49119 = cljs.core.not(inst_49118);
var state_49127__$1 = state_49127;
if(inst_49119){
var statearr_49129_52813 = state_49127__$1;
(statearr_49129_52813[(1)] = (3));

} else {
var statearr_49130_52814 = state_49127__$1;
(statearr_49130_52814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49128 === (3))){
var state_49127__$1 = state_49127;
var statearr_49131_52815 = state_49127__$1;
(statearr_49131_52815[(2)] = null);

(statearr_49131_52815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49128 === (4))){
var inst_49122 = (new Error("Assert failed: (some? cause)"));
var inst_49123 = (function(){throw inst_49122})();
var state_49127__$1 = state_49127;
var statearr_49132_52816 = state_49127__$1;
(statearr_49132_52816[(2)] = inst_49123);

(statearr_49132_52816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49128 === (5))){
var inst_49125 = (state_49127[(2)]);
var state_49127__$1 = state_49127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49127__$1,inst_49125);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_49134 = [null,null,null,null,null,null,null];
(statearr_49134[(0)] = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__);

(statearr_49134[(1)] = (1));

return statearr_49134;
});
var frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1 = (function (state_49127){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49127);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49135){var ex__27576__auto__ = e49135;
var statearr_49136_52817 = state_49127;
(statearr_49136_52817[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49127[(4)]))){
var statearr_49137_52818 = state_49127;
(statearr_49137_52818[(1)] = cljs.core.first((state_49127[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52819 = state_49127;
state_49127 = G__52819;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__ = function(state_49127){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1.call(this,state_49127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_files_not_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49138 = f__27596__auto__();
(statearr_49138[(6)] = c__27595__auto__);

return statearr_49138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.retry_rsapi = (function frontend$fs$sync$retry_rsapi(f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49173){
var state_val_49174 = (state_49173[(1)]);
if((state_val_49174 === (7))){
var inst_49159 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
if(cljs.core.truth_(inst_49159)){
var statearr_49177_52820 = state_49173__$1;
(statearr_49177_52820[(1)] = (11));

} else {
var statearr_49178_52821 = state_49173__$1;
(statearr_49178_52821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (1))){
var inst_49140 = (3);
var state_49173__$1 = (function (){var statearr_49180 = state_49173;
(statearr_49180[(7)] = inst_49140);

return statearr_49180;
})();
var statearr_49181_52822 = state_49173__$1;
(statearr_49181_52822[(2)] = null);

(statearr_49181_52822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (4))){
var inst_49144 = (state_49173[(8)]);
var inst_49145 = (state_49173[(9)]);
var inst_49144__$1 = (state_49173[(2)]);
var inst_49145__$1 = (inst_49144__$1 instanceof cljs.core.ExceptionInfo);
var state_49173__$1 = (function (){var statearr_49182 = state_49173;
(statearr_49182[(8)] = inst_49144__$1);

(statearr_49182[(9)] = inst_49145__$1);

return statearr_49182;
})();
if(cljs.core.truth_(inst_49145__$1)){
var statearr_49183_52823 = state_49173__$1;
(statearr_49183_52823[(1)] = (5));

} else {
var statearr_49186_52824 = state_49173__$1;
(statearr_49186_52824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (13))){
var inst_49167 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49187_52825 = state_49173__$1;
(statearr_49187_52825[(2)] = inst_49167);

(statearr_49187_52825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (6))){
var inst_49145 = (state_49173[(9)]);
var state_49173__$1 = state_49173;
var statearr_49188_52826 = state_49173__$1;
(statearr_49188_52826[(2)] = inst_49145);

(statearr_49188_52826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (3))){
var inst_49169 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49173__$1,inst_49169);
} else {
if((state_val_49174 === (12))){
var inst_49144 = (state_49173[(8)]);
var state_49173__$1 = state_49173;
var statearr_49189_52827 = state_49173__$1;
(statearr_49189_52827[(2)] = inst_49144);

(statearr_49189_52827[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (2))){
var inst_49142 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var state_49173__$1 = state_49173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49173__$1,(4),inst_49142);
} else {
if((state_val_49174 === (11))){
var inst_49140 = (state_49173[(7)]);
var inst_49161 = ["retry(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49140),") ..."].join('');
var inst_49162 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_49161], 0));
var inst_49163 = (inst_49140 - (1));
var inst_49140__$1 = inst_49163;
var state_49173__$1 = (function (){var statearr_49190 = state_49173;
(statearr_49190[(10)] = inst_49162);

(statearr_49190[(7)] = inst_49140__$1);

return statearr_49190;
})();
var statearr_49191_52828 = state_49173__$1;
(statearr_49191_52828[(2)] = null);

(statearr_49191_52828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (9))){
var inst_49151 = (state_49173[(11)]);
var state_49173__$1 = state_49173;
var statearr_49192_52829 = state_49173__$1;
(statearr_49192_52829[(2)] = inst_49151);

(statearr_49192_52829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (5))){
var inst_49144 = (state_49173[(8)]);
var inst_49151 = (state_49173[(11)]);
var inst_49148 = cljs.core.ex_cause(inst_49144);
var inst_49150 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49148);
var inst_49151__$1 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_49150,"operation timed out");
var state_49173__$1 = (function (){var statearr_49193 = state_49173;
(statearr_49193[(11)] = inst_49151__$1);

return statearr_49193;
})();
if(cljs.core.truth_(inst_49151__$1)){
var statearr_49194_52830 = state_49173__$1;
(statearr_49194_52830[(1)] = (8));

} else {
var statearr_49195_52831 = state_49173__$1;
(statearr_49195_52831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (10))){
var inst_49156 = (state_49173[(2)]);
var state_49173__$1 = state_49173;
var statearr_49196_52832 = state_49173__$1;
(statearr_49196_52832[(2)] = inst_49156);

(statearr_49196_52832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49174 === (8))){
var inst_49140 = (state_49173[(7)]);
var inst_49153 = (inst_49140 > (0));
var state_49173__$1 = state_49173;
var statearr_49197_52833 = state_49173__$1;
(statearr_49197_52833[(2)] = inst_49153);

(statearr_49197_52833[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0 = (function (){
var statearr_49198 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49198[(0)] = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__);

(statearr_49198[(1)] = (1));

return statearr_49198;
});
var frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1 = (function (state_49173){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49173);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49199){var ex__27576__auto__ = e49199;
var statearr_49200_52834 = state_49173;
(statearr_49200_52834[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49173[(4)]))){
var statearr_49201_52835 = state_49173;
(statearr_49201_52835[(1)] = cljs.core.first((state_49173[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52836 = state_49173;
state_49173 = G__52836;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__ = function(state_49173){
switch(arguments.length){
case 0:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1.call(this,state_49173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____0;
frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto____1;
return frontend$fs$sync$retry_rsapi_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49202 = f__27596__auto__();
(statearr_49202[(6)] = c__27595__auto__);

return statearr_49202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRSAPI}
*/
frontend.fs.sync.RSAPI = (function (){
});
(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49216){
var state_val_49217 = (state_49216[(1)]);
if((state_val_49217 === (1))){
var inst_49207 = (state_49216[(7)]);
var inst_49207__$1 = frontend.state.get_auth_id_token();
var state_49216__$1 = (function (){var statearr_49218 = state_49216;
(statearr_49218[(7)] = inst_49207__$1);

return statearr_49218;
})();
if(cljs.core.truth_(inst_49207__$1)){
var statearr_49219_52837 = state_49216__$1;
(statearr_49219_52837[(1)] = (2));

} else {
var statearr_49220_52838 = state_49216__$1;
(statearr_49220_52838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49217 === (2))){
var inst_49207 = (state_49216[(7)]);
var state_49216__$1 = state_49216;
var statearr_49221_52839 = state_49216__$1;
(statearr_49221_52839[(2)] = inst_49207);

(statearr_49221_52839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49217 === (3))){
var inst_49210 = this$__$1.refresh_token();
var state_49216__$1 = state_49216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49216__$1,(5),inst_49210);
} else {
if((state_val_49217 === (4))){
var inst_49214 = (state_49216[(2)]);
var state_49216__$1 = state_49216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49216__$1,inst_49214);
} else {
if((state_val_49217 === (5))){
var inst_49212 = (state_49216[(2)]);
var state_49216__$1 = state_49216;
var statearr_49222_52840 = state_49216__$1;
(statearr_49222_52840[(2)] = inst_49212);

(statearr_49222_52840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49224 = [null,null,null,null,null,null,null,null];
(statearr_49224[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49224[(1)] = (1));

return statearr_49224;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49216){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49216);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49226){var ex__27576__auto__ = e49226;
var statearr_49227_52841 = state_49216;
(statearr_49227_52841[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49216[(4)]))){
var statearr_49228_52842 = state_49216;
(statearr_49228_52842[(1)] = cljs.core.first((state_49216[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52843 = state_49216;
state_49216 = G__52843;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49216){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49231 = f__27596__auto__();
(statearr_49231[(6)] = c__27595__auto__);

return statearr_49231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49237){
var state_val_49238 = (state_49237[(1)]);
if((state_val_49238 === (1))){
var inst_49232 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_49237__$1 = state_49237;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49237__$1,(2),inst_49232);
} else {
if((state_val_49238 === (2))){
var inst_49234 = (state_49237[(2)]);
var inst_49235 = frontend.state.get_auth_id_token();
var state_49237__$1 = (function (){var statearr_49239 = state_49237;
(statearr_49239[(7)] = inst_49234);

return statearr_49239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49237__$1,inst_49235);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49244 = [null,null,null,null,null,null,null,null];
(statearr_49244[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49244[(1)] = (1));

return statearr_49244;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49237){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49237);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49245){var ex__27576__auto__ = e49245;
var statearr_49246_52886 = state_49237;
(statearr_49246_52886[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49237[(4)]))){
var statearr_49247_52887 = state_49237;
(statearr_49247_52887[(1)] = cljs.core.first((state_49237[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52888 = state_49237;
state_49237 = G__52888;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49237){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49251 = f__27596__auto__();
(statearr_49251[(6)] = c__27595__auto__);

return statearr_49251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49260){
var state_val_49261 = (state_49260[(1)]);
if((state_val_49261 === (1))){
var inst_49252 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49260__$1 = state_49260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49260__$1,(2),inst_49252);
} else {
if((state_val_49261 === (2))){
var inst_49254 = (state_49260[(2)]);
var inst_49255 = (function (){var token = inst_49254;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_49256 = frontend.fs.sync.retry_rsapi(inst_49255);
var state_49260__$1 = state_49260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49260__$1,(3),inst_49256);
} else {
if((state_val_49261 === (3))){
var inst_49258 = (state_49260[(2)]);
var state_49260__$1 = state_49260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49260__$1,inst_49258);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49264 = [null,null,null,null,null,null,null];
(statearr_49264[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49264[(1)] = (1));

return statearr_49264;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49260){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49260);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49265){var ex__27576__auto__ = e49265;
var statearr_49266_52890 = state_49260;
(statearr_49266_52890[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49260[(4)]))){
var statearr_49267_52891 = state_49260;
(statearr_49267_52891[(1)] = cljs.core.first((state_49260[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52892 = state_49260;
state_49260 = G__52892;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49260){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49270 = f__27596__auto__();
(statearr_49270[(6)] = c__27595__auto__);

return statearr_49270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 = (function (_,graph_uuid,base_path){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49290){
var state_val_49291 = (state_49290[(1)]);
if((state_val_49291 === (1))){
var inst_49273 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-all-files-meta",graph_uuid,base_path], 0)));
});
})();
var inst_49274 = frontend.fs.sync.retry_rsapi(inst_49273);
var state_49290__$1 = state_49290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49290__$1,(2),inst_49274);
} else {
if((state_val_49291 === (2))){
var inst_49276 = (state_49290[(7)]);
var inst_49276__$1 = (state_49290[(2)]);
var inst_49277 = (inst_49276__$1 instanceof cljs.core.ExceptionInfo);
var state_49290__$1 = (function (){var statearr_49292 = state_49290;
(statearr_49292[(7)] = inst_49276__$1);

return statearr_49292;
})();
if(cljs.core.truth_(inst_49277)){
var statearr_49293_52893 = state_49290__$1;
(statearr_49293_52893[(1)] = (3));

} else {
var statearr_49294_52894 = state_49290__$1;
(statearr_49294_52894[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49291 === (3))){
var inst_49276 = (state_49290[(7)]);
var state_49290__$1 = state_49290;
var statearr_49295_52895 = state_49290__$1;
(statearr_49295_52895[(2)] = inst_49276);

(statearr_49295_52895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49291 === (4))){
var inst_49276 = (state_49290[(7)]);
var inst_49282 = (function (){var r = inst_49276;
return (function (p__49281){
var vec__49296 = p__49281;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49296,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49296,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_49283 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_49276);
var inst_49284 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49282,inst_49283);
var inst_49285 = cljs.core.set(inst_49284);
var state_49290__$1 = state_49290;
var statearr_49299_52896 = state_49290__$1;
(statearr_49299_52896[(2)] = inst_49285);

(statearr_49299_52896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49291 === (5))){
var inst_49287 = (state_49290[(2)]);
var state_49290__$1 = state_49290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49290__$1,inst_49287);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49301 = [null,null,null,null,null,null,null,null];
(statearr_49301[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49301[(1)] = (1));

return statearr_49301;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49290){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49290);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49302){var ex__27576__auto__ = e49302;
var statearr_49303_52897 = state_49290;
(statearr_49303_52897[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49290[(4)]))){
var statearr_49304_52898 = state_49290;
(statearr_49304_52898[(1)] = cljs.core.first((state_49290[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52899 = state_49290;
state_49290 = G__52899;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49290){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49306 = f__27596__auto__();
(statearr_49306[(6)] = c__27595__auto__);

return statearr_49306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths], 0));

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49324){
var state_val_49325 = (state_49324[(1)]);
if((state_val_49325 === (1))){
var inst_49307 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49324__$1 = state_49324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49324__$1,(2),inst_49307);
} else {
if((state_val_49325 === (2))){
var inst_49309 = (state_49324[(2)]);
var inst_49310 = (function (){var token = inst_49309;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-local-files",graph_uuid,base_path,filepaths,token], 0)));
});
})();
var inst_49311 = frontend.fs.sync.retry_rsapi(inst_49310);
var state_49324__$1 = state_49324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49324__$1,(3),inst_49311);
} else {
if((state_val_49325 === (3))){
var inst_49313 = (state_49324[(2)]);
var inst_49314 = frontend.state.developer_mode_QMARK_();
var state_49324__$1 = (function (){var statearr_49328 = state_49324;
(statearr_49328[(7)] = inst_49313);

return statearr_49328;
})();
if(cljs.core.truth_(inst_49314)){
var statearr_49329_52904 = state_49324__$1;
(statearr_49329_52904[(1)] = (4));

} else {
var statearr_49330_52905 = state_49324__$1;
(statearr_49330_52905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49325 === (4))){
var inst_49319 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_49324__$1 = state_49324;
var statearr_49331_52906 = state_49324__$1;
(statearr_49331_52906[(2)] = inst_49319);

(statearr_49331_52906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49325 === (5))){
var state_49324__$1 = state_49324;
var statearr_49332_52907 = state_49324__$1;
(statearr_49332_52907[(2)] = null);

(statearr_49332_52907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49325 === (6))){
var inst_49313 = (state_49324[(7)]);
var inst_49322 = (state_49324[(2)]);
var state_49324__$1 = (function (){var statearr_49333 = state_49324;
(statearr_49333[(8)] = inst_49322);

return statearr_49333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49324__$1,inst_49313);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49335 = [null,null,null,null,null,null,null,null,null];
(statearr_49335[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49335[(1)] = (1));

return statearr_49335;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49324){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49324);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49337){var ex__27576__auto__ = e49337;
var statearr_49338_52908 = state_49324;
(statearr_49338_52908[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49324[(4)]))){
var statearr_49339_52909 = state_49324;
(statearr_49339_52909[(1)] = cljs.core.first((state_49324[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52910 = state_49324;
state_49324 = G__52910;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49324){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49340 = f__27596__auto__();
(statearr_49340[(6)] = c__27595__auto__);

return statearr_49340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49358){
var state_val_49359 = (state_49358[(1)]);
if((state_val_49359 === (1))){
var inst_49344 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-local-files-meta",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_49345 = frontend.fs.sync.retry_rsapi(inst_49344);
var state_49358__$1 = state_49358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49358__$1,(2),inst_49345);
} else {
if((state_val_49359 === (2))){
var inst_49347 = (state_49358[(7)]);
var inst_49347__$1 = (state_49358[(2)]);
var inst_49348 = (inst_49347__$1 instanceof cljs.core.ExceptionInfo);
var state_49358__$1 = (function (){var statearr_49360 = state_49358;
(statearr_49360[(7)] = inst_49347__$1);

return statearr_49360;
})();
if(cljs.core.truth_(inst_49348)){
var statearr_49361_52912 = state_49358__$1;
(statearr_49361_52912[(1)] = (3));

} else {
var statearr_49362_52913 = state_49358__$1;
(statearr_49362_52913[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (3))){
var inst_49347 = (state_49358[(7)]);
var state_49358__$1 = state_49358;
var statearr_49363_52915 = state_49358__$1;
(statearr_49363_52915[(2)] = inst_49347);

(statearr_49363_52915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (4))){
var inst_49347 = (state_49358[(7)]);
var inst_49352 = (function (){var r = inst_49347;
return (function (p__49351){
var vec__49364 = p__49351;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49364,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49364,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_49353 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_49347);
var inst_49354 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49352,inst_49353);
var state_49358__$1 = state_49358;
var statearr_49371_52916 = state_49358__$1;
(statearr_49371_52916[(2)] = inst_49354);

(statearr_49371_52916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49359 === (5))){
var inst_49356 = (state_49358[(2)]);
var state_49358__$1 = state_49358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49358__$1,inst_49356);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49373 = [null,null,null,null,null,null,null,null];
(statearr_49373[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49373[(1)] = (1));

return statearr_49373;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49358){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49358);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49375){var ex__27576__auto__ = e49375;
var statearr_49376_52917 = state_49358;
(statearr_49376_52917[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49358[(4)]))){
var statearr_49377_52918 = state_49358;
(statearr_49377_52918[(1)] = cljs.core.first((state_49358[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52920 = state_49358;
state_49358 = G__52920;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49358){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49380 = f__27596__auto__();
(statearr_49380[(6)] = c__27595__auto__);

return statearr_49380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49390){
var state_val_49391 = (state_49390[(1)]);
if((state_val_49391 === (1))){
var inst_49382 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49390__$1 = state_49390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49390__$1,(2),inst_49382);
} else {
if((state_val_49391 === (2))){
var inst_49384 = (state_49390[(2)]);
var inst_49385 = (function (){var token = inst_49384;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-files",graph_uuid,base_path,filepaths,local_txid,token], 0)));
});
})();
var inst_49386 = frontend.fs.sync.retry_rsapi(inst_49385);
var state_49390__$1 = state_49390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49390__$1,(3),inst_49386);
} else {
if((state_val_49391 === (3))){
var inst_49388 = (state_49390[(2)]);
var state_49390__$1 = state_49390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49390__$1,inst_49388);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49392 = [null,null,null,null,null,null,null];
(statearr_49392[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49392[(1)] = (1));

return statearr_49392;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49390){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49390);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49393){var ex__27576__auto__ = e49393;
var statearr_49394_52925 = state_49390;
(statearr_49394_52925[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49390[(4)]))){
var statearr_49396_52926 = state_49390;
(statearr_49396_52926[(1)] = cljs.core.first((state_49390[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52927 = state_49390;
state_49390 = G__52927;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49390){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49397 = f__27596__auto__();
(statearr_49397[(6)] = c__27595__auto__);

return statearr_49397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49408){
var state_val_49409 = (state_49408[(1)]);
if((state_val_49409 === (1))){
var state_49408__$1 = state_49408;
if(cljs.core.truth_(prod_QMARK_)){
var statearr_49410_52928 = state_49408__$1;
(statearr_49410_52928[(1)] = (3));

} else {
var statearr_49411_52929 = state_49408__$1;
(statearr_49411_52929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49409 === (2))){
var inst_49405 = (state_49408[(2)]);
var state_49408__$1 = state_49408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49408__$1,inst_49405);
} else {
if((state_val_49409 === (3))){
var state_49408__$1 = state_49408;
var statearr_49413_52930 = state_49408__$1;
(statearr_49413_52930[(2)] = "prod");

(statearr_49413_52930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49409 === (4))){
var state_49408__$1 = state_49408;
var statearr_49414_52931 = state_49408__$1;
(statearr_49414_52931[(2)] = "dev");

(statearr_49414_52931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49409 === (5))){
var inst_49401 = (state_49408[(2)]);
var inst_49402 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["set-env",inst_49401], 0));
var inst_49403 = cljs.core.async.interop.p__GT_c(inst_49402);
var state_49408__$1 = state_49408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49408__$1,(2),inst_49403);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49417 = [null,null,null,null,null,null,null];
(statearr_49417[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49417[(1)] = (1));

return statearr_49417;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49408){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49408);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49418){var ex__27576__auto__ = e49418;
var statearr_49419_52934 = state_49408;
(statearr_49419_52934[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49408[(4)]))){
var statearr_49420_52935 = state_49408;
(statearr_49420_52935[(1)] = cljs.core.first((state_49408[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52936 = state_49408;
state_49408 = G__52936;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49408){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49421 = f__27596__auto__();
(statearr_49421[(6)] = c__27595__auto__);

return statearr_49421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49431){
var state_val_49432 = (state_49431[(1)]);
if((state_val_49432 === (1))){
var inst_49422 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49431__$1 = state_49431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49431__$1,(2),inst_49422);
} else {
if((state_val_49432 === (2))){
var inst_49424 = (state_49431[(2)]);
var inst_49425 = (function (){var token = inst_49424;
return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update-remote-file",graph_uuid,base_path,filepath,local_txid,token], 0)));
});
})();
var inst_49426 = frontend.fs.sync.retry_rsapi(inst_49425);
var state_49431__$1 = state_49431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49431__$1,(3),inst_49426);
} else {
if((state_val_49432 === (3))){
var inst_49428 = (state_49431[(2)]);
var state_49431__$1 = state_49431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49431__$1,inst_49428);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49434 = [null,null,null,null,null,null,null];
(statearr_49434[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49434[(1)] = (1));

return statearr_49434;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49431){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49431);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49435){var ex__27576__auto__ = e49435;
var statearr_49436_52937 = state_49431;
(statearr_49436_52937[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49431[(4)]))){
var statearr_49438_52938 = state_49431;
(statearr_49438_52938[(1)] = cljs.core.first((state_49431[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52939 = state_49431;
state_49431 = G__52939;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49431){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49439 = f__27596__auto__();
(statearr_49439[(6)] = c__27595__auto__);

return statearr_49439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 = (function (_,graph_uuid,base_path,from,to){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.retry_rsapi((function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rename-local-file",graph_uuid,base_path,from,to], 0)));
}));
}));

(frontend.fs.sync.RSAPI.prototype.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 = (function (_,graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49452){
var state_val_49453 = (state_49452[(1)]);
if((state_val_49453 === (1))){
var inst_49441 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["delete-local-files",graph_uuid,base_path,filepaths], 0)));
});
})();
var inst_49442 = frontend.fs.sync.retry_rsapi(inst_49441);
var state_49452__$1 = state_49452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49452__$1,(2),inst_49442);
} else {
if((state_val_49453 === (2))){
var inst_49444 = (state_49452[(2)]);
var inst_49445 = frontend.state.developer_mode_QMARK_();
var state_49452__$1 = (function (){var statearr_49456 = state_49452;
(statearr_49456[(7)] = inst_49444);

return statearr_49456;
})();
if(cljs.core.truth_(inst_49445)){
var statearr_49457_52955 = state_49452__$1;
(statearr_49457_52955[(1)] = (3));

} else {
var statearr_49458_52960 = state_49452__$1;
(statearr_49458_52960[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49453 === (3))){
var inst_49447 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_49452__$1 = state_49452;
var statearr_49459_52965 = state_49452__$1;
(statearr_49459_52965[(2)] = inst_49447);

(statearr_49459_52965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49453 === (4))){
var state_49452__$1 = state_49452;
var statearr_49460_52966 = state_49452__$1;
(statearr_49460_52966[(2)] = null);

(statearr_49460_52966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49453 === (5))){
var inst_49444 = (state_49452[(7)]);
var inst_49450 = (state_49452[(2)]);
var state_49452__$1 = (function (){var statearr_49461 = state_49452;
(statearr_49461[(8)] = inst_49450);

return statearr_49461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49452__$1,inst_49444);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49462 = [null,null,null,null,null,null,null,null,null];
(statearr_49462[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49462[(1)] = (1));

return statearr_49462;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49452){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49452);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49463){var ex__27576__auto__ = e49463;
var statearr_49464_52973 = state_49452;
(statearr_49464_52973[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49452[(4)]))){
var statearr_49465_52978 = state_49452;
(statearr_49465_52978[(1)] = cljs.core.first((state_49452[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52979 = state_49452;
state_49452 = G__52979;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49452){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49466 = f__27596__auto__();
(statearr_49466[(6)] = c__27595__auto__);

return statearr_49466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RSAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.RSAPI.cljs$lang$type = true);

(frontend.fs.sync.RSAPI.cljs$lang$ctorStr = "frontend.fs.sync/RSAPI");

(frontend.fs.sync.RSAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/RSAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/RSAPI.
 */
frontend.fs.sync.__GT_RSAPI = (function frontend$fs$sync$__GT_RSAPI(){
return (new frontend.fs.sync.RSAPI());
});


/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRSAPI}
*/
frontend.fs.sync.CapacitorAPI = (function (){
});
(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49479){
var state_val_49480 = (state_49479[(1)]);
if((state_val_49480 === (1))){
var inst_49469 = (state_49479[(7)]);
var inst_49469__$1 = frontend.state.get_auth_id_token();
var state_49479__$1 = (function (){var statearr_49481 = state_49479;
(statearr_49481[(7)] = inst_49469__$1);

return statearr_49481;
})();
if(cljs.core.truth_(inst_49469__$1)){
var statearr_49482_52989 = state_49479__$1;
(statearr_49482_52989[(1)] = (2));

} else {
var statearr_49483_52990 = state_49479__$1;
(statearr_49483_52990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (2))){
var inst_49469 = (state_49479[(7)]);
var state_49479__$1 = state_49479;
var statearr_49484_52992 = state_49479__$1;
(statearr_49484_52992[(2)] = inst_49469);

(statearr_49484_52992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49480 === (3))){
var inst_49472 = this$__$1.refresh_token();
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49479__$1,(5),inst_49472);
} else {
if((state_val_49480 === (4))){
var inst_49476 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49479__$1,inst_49476);
} else {
if((state_val_49480 === (5))){
var inst_49474 = (state_49479[(2)]);
var state_49479__$1 = state_49479;
var statearr_49488_53006 = state_49479__$1;
(statearr_49488_53006[(2)] = inst_49474);

(statearr_49488_53006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49489 = [null,null,null,null,null,null,null,null];
(statearr_49489[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49489[(1)] = (1));

return statearr_49489;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49479){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49479);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49490){var ex__27576__auto__ = e49490;
var statearr_49491_53016 = state_49479;
(statearr_49491_53016[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49479[(4)]))){
var statearr_49492_53017 = state_49479;
(statearr_49492_53017[(1)] = cljs.core.first((state_49479[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53018 = state_49479;
state_49479 = G__53018;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49479){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49493 = f__27596__auto__();
(statearr_49493[(6)] = c__27595__auto__);

return statearr_49493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49502){
var state_val_49503 = (state_49502[(1)]);
if((state_val_49503 === (1))){
var inst_49497 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_49502__$1 = state_49502;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49502__$1,(2),inst_49497);
} else {
if((state_val_49503 === (2))){
var inst_49499 = (state_49502[(2)]);
var inst_49500 = frontend.state.get_auth_id_token();
var state_49502__$1 = (function (){var statearr_49504 = state_49502;
(statearr_49504[(7)] = inst_49499);

return statearr_49504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49502__$1,inst_49500);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49505 = [null,null,null,null,null,null,null,null];
(statearr_49505[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49505[(1)] = (1));

return statearr_49505;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49502){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49502);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49506){var ex__27576__auto__ = e49506;
var statearr_49507_53019 = state_49502;
(statearr_49507_53019[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49502[(4)]))){
var statearr_49508_53024 = state_49502;
(statearr_49508_53024[(1)] = cljs.core.first((state_49502[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53028 = state_49502;
state_49502 = G__53028;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49502){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49509 = f__27596__auto__();
(statearr_49509[(6)] = c__27595__auto__);

return statearr_49509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$delete_remote_files$arity$5 = (function (this$,graph_uuid,_base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var token = cljs.core.async._LT__BANG_(this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null));
var r = cljs.core.async._LT__BANG_(cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteRemoteFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"txid","txid",1606205478),local_txid,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)))));
if((r instanceof cljs.core.ExceptionInfo)){
return r;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(r),"txid");
}
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$get_local_all_files_meta$arity$3 = (function (_,_graph_uuid,base_path){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49535){
var state_val_49536 = (state_49535[(1)]);
if((state_val_49536 === (1))){
var inst_49515 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017)];
var inst_49516 = [base_path];
var inst_49517 = cljs.core.PersistentHashMap.fromArrays(inst_49515,inst_49516);
var inst_49518 = cljs.core.clj__GT_js(inst_49517);
var inst_49519 = frontend.mobile.util.file_sync.getLocalAllFilesMeta(inst_49518);
var inst_49520 = cljs.core.async.interop.p__GT_c(inst_49519);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49535__$1,(2),inst_49520);
} else {
if((state_val_49536 === (2))){
var inst_49522 = (state_49535[(7)]);
var inst_49522__$1 = (state_49535[(2)]);
var inst_49523 = (inst_49522__$1 instanceof cljs.core.ExceptionInfo);
var state_49535__$1 = (function (){var statearr_49537 = state_49535;
(statearr_49537[(7)] = inst_49522__$1);

return statearr_49537;
})();
if(cljs.core.truth_(inst_49523)){
var statearr_49538_53047 = state_49535__$1;
(statearr_49538_53047[(1)] = (3));

} else {
var statearr_49539_53048 = state_49535__$1;
(statearr_49539_53048[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (3))){
var inst_49522 = (state_49535[(7)]);
var state_49535__$1 = state_49535;
var statearr_49540_53049 = state_49535__$1;
(statearr_49540_53049[(2)] = inst_49522);

(statearr_49540_53049[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (4))){
var inst_49522 = (state_49535[(7)]);
var inst_49527 = (function (){var r = inst_49522;
return (function (p__49526){
var vec__49541 = p__49526;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49541,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49541,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_49528 = inst_49522.result;
var inst_49529 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_49528);
var inst_49530 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49527,inst_49529);
var inst_49531 = cljs.core.set(inst_49530);
var state_49535__$1 = state_49535;
var statearr_49545_53052 = state_49535__$1;
(statearr_49545_53052[(2)] = inst_49531);

(statearr_49545_53052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49536 === (5))){
var inst_49533 = (state_49535[(2)]);
var state_49535__$1 = state_49535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49535__$1,inst_49533);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49547 = [null,null,null,null,null,null,null,null];
(statearr_49547[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49547[(1)] = (1));

return statearr_49547;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49535){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49535);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49549){var ex__27576__auto__ = e49549;
var statearr_49550_53061 = state_49535;
(statearr_49550_53061[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49535[(4)]))){
var statearr_49551_53062 = state_49535;
(statearr_49551_53062[(1)] = cljs.core.first((state_49535[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53063 = state_49535;
state_49535 = G__53063;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49535){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49552 = f__27596__auto__();
(statearr_49552[(6)] = c__27595__auto__);

return statearr_49552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_local_files$arity$4 = (function (this$,graph_uuid,base_path,filepaths){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49567){
var state_val_49568 = (state_49567[(1)]);
if((state_val_49568 === (1))){
var inst_49553 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49567__$1 = state_49567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49567__$1,(2),inst_49553);
} else {
if((state_val_49568 === (2))){
var inst_49555 = (state_49567[(2)]);
var inst_49556 = (function (){var token = inst_49555;
return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.updateLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),graph_uuid,new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))));
});
})();
var inst_49557 = frontend.fs.sync.retry_rsapi(inst_49556);
var state_49567__$1 = state_49567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49567__$1,(3),inst_49557);
} else {
if((state_val_49568 === (3))){
var inst_49559 = (state_49567[(2)]);
var inst_49560 = frontend.state.developer_mode_QMARK_();
var state_49567__$1 = (function (){var statearr_49569 = state_49567;
(statearr_49569[(7)] = inst_49559);

return statearr_49569;
})();
if(cljs.core.truth_(inst_49560)){
var statearr_49570_53076 = state_49567__$1;
(statearr_49570_53076[(1)] = (4));

} else {
var statearr_49571_53077 = state_49567__$1;
(statearr_49571_53077[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49568 === (4))){
var inst_49562 = frontend.fs.sync.check_files_exists(base_path,filepaths);
var state_49567__$1 = state_49567;
var statearr_49572_53078 = state_49567__$1;
(statearr_49572_53078[(2)] = inst_49562);

(statearr_49572_53078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49568 === (5))){
var state_49567__$1 = state_49567;
var statearr_49573_53083 = state_49567__$1;
(statearr_49573_53083[(2)] = null);

(statearr_49573_53083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49568 === (6))){
var inst_49559 = (state_49567[(7)]);
var inst_49565 = (state_49567[(2)]);
var state_49567__$1 = (function (){var statearr_49574 = state_49567;
(statearr_49574[(8)] = inst_49565);

return statearr_49574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49567__$1,inst_49559);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49575 = [null,null,null,null,null,null,null,null,null];
(statearr_49575[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49575[(1)] = (1));

return statearr_49575;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49567){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49567);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49576){var ex__27576__auto__ = e49576;
var statearr_49577_53092 = state_49567;
(statearr_49577_53092[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49567[(4)]))){
var statearr_49578_53093 = state_49567;
(statearr_49578_53093[(1)] = cljs.core.first((state_49567[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53102 = state_49567;
state_49567 = G__53102;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49567){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49579 = f__27596__auto__();
(statearr_49579[(6)] = c__27595__auto__);

return statearr_49579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$get_local_files_meta$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49602){
var state_val_49603 = (state_49602[(1)]);
if((state_val_49603 === (1))){
var inst_49580 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318)];
var inst_49581 = [base_path,filepaths];
var inst_49582 = cljs.core.PersistentHashMap.fromArrays(inst_49580,inst_49581);
var inst_49583 = cljs.core.clj__GT_js(inst_49582);
var inst_49584 = frontend.mobile.util.file_sync.getLocalFilesMeta(inst_49583);
var inst_49585 = cljs.core.async.interop.p__GT_c(inst_49584);
var state_49602__$1 = state_49602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49602__$1,(2),inst_49585);
} else {
if((state_val_49603 === (2))){
var inst_49587 = (state_49602[(7)]);
var inst_49587__$1 = (state_49602[(2)]);
var inst_49588 = (inst_49587__$1 instanceof cljs.core.ExceptionInfo);
var state_49602__$1 = (function (){var statearr_49606 = state_49602;
(statearr_49606[(7)] = inst_49587__$1);

return statearr_49606;
})();
if(cljs.core.truth_(inst_49588)){
var statearr_49607_53114 = state_49602__$1;
(statearr_49607_53114[(1)] = (3));

} else {
var statearr_49608_53115 = state_49602__$1;
(statearr_49608_53115[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (3))){
var inst_49587 = (state_49602[(7)]);
var state_49602__$1 = state_49602;
var statearr_49609_53116 = state_49602__$1;
(statearr_49609_53116[(2)] = inst_49587);

(statearr_49609_53116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (4))){
var inst_49587 = (state_49602[(7)]);
var inst_49594 = (function (){var r = inst_49587;
return (function (p__49593){
var vec__49610 = p__49593;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49610,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49610,(1),null);
return frontend.fs.sync.__GT_FileMetadata(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"size"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,"md5"),path,null,false,null);
});
})();
var inst_49595 = inst_49587.result;
var inst_49596 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_49595);
var inst_49597 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49594,inst_49596);
var inst_49598 = cljs.core.set(inst_49597);
var state_49602__$1 = state_49602;
var statearr_49613_53123 = state_49602__$1;
(statearr_49613_53123[(2)] = inst_49598);

(statearr_49613_53123[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49603 === (5))){
var inst_49600 = (state_49602[(2)]);
var state_49602__$1 = state_49602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49602__$1,inst_49600);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49614 = [null,null,null,null,null,null,null,null];
(statearr_49614[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49614[(1)] = (1));

return statearr_49614;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49602){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49602);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49615){var ex__27576__auto__ = e49615;
var statearr_49616_53128 = state_49602;
(statearr_49616_53128[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49602[(4)]))){
var statearr_49617_53129 = state_49602;
(statearr_49617_53129[(1)] = cljs.core.first((state_49602[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53135 = state_49602;
state_49602 = G__53135;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49602){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49618 = f__27596__auto__();
(statearr_49618[(6)] = c__27595__auto__);

return statearr_49618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_files$arity$5 = (function (this$,graph_uuid,base_path,filepaths,local_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49639){
var state_val_49640 = (state_49639[(1)]);
if((state_val_49640 === (1))){
var inst_49619 = this$__$1.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49639__$1,(2),inst_49619);
} else {
if((state_val_49640 === (2))){
var inst_49621 = (state_49639[(2)]);
var inst_49622 = [new cljs.core.Keyword(null,"graphUUID","graphUUID",673814859),new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),new cljs.core.Keyword(null,"txid","txid",1606205478),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_49623 = [graph_uuid,base_path,filepaths,local_txid,inst_49621];
var inst_49624 = cljs.core.PersistentHashMap.fromArrays(inst_49622,inst_49623);
var inst_49625 = cljs.core.clj__GT_js(inst_49624);
var inst_49626 = frontend.mobile.util.file_sync.updateRemoteFiles(inst_49625);
var inst_49627 = cljs.core.async.interop.p__GT_c(inst_49626);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49639__$1,(3),inst_49627);
} else {
if((state_val_49640 === (3))){
var inst_49629 = (state_49639[(7)]);
var inst_49629__$1 = (state_49639[(2)]);
var inst_49630 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("frontend.fs.sync","debug-update-remote-files","frontend.fs.sync/debug-update-remote-files",-1146829271),inst_49629__$1], 0));
var inst_49631 = (inst_49629__$1 instanceof cljs.core.ExceptionInfo);
var state_49639__$1 = (function (){var statearr_49641 = state_49639;
(statearr_49641[(8)] = inst_49630);

(statearr_49641[(7)] = inst_49629__$1);

return statearr_49641;
})();
if(cljs.core.truth_(inst_49631)){
var statearr_49642_53154 = state_49639__$1;
(statearr_49642_53154[(1)] = (4));

} else {
var statearr_49643_53155 = state_49639__$1;
(statearr_49643_53155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (4))){
var inst_49629 = (state_49639[(7)]);
var state_49639__$1 = state_49639;
var statearr_49644_53156 = state_49639__$1;
(statearr_49644_53156[(2)] = inst_49629);

(statearr_49644_53156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (5))){
var inst_49629 = (state_49639[(7)]);
var inst_49634 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_49629);
var inst_49635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49634,"txid");
var state_49639__$1 = state_49639;
var statearr_49645_53157 = state_49639__$1;
(statearr_49645_53157[(2)] = inst_49635);

(statearr_49645_53157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49640 === (6))){
var inst_49637 = (state_49639[(2)]);
var state_49639__$1 = state_49639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49639__$1,inst_49637);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49646 = [null,null,null,null,null,null,null,null,null];
(statearr_49646[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49646[(1)] = (1));

return statearr_49646;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49639){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49639);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49647){var ex__27576__auto__ = e49647;
var statearr_49648_53158 = state_49639;
(statearr_49648_53158[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49639[(4)]))){
var statearr_49649_53159 = state_49639;
(statearr_49649_53159[(1)] = cljs.core.first((state_49639[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53160 = state_49639;
state_49639 = G__53160;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49639){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49650 = f__27596__auto__();
(statearr_49650[(6)] = c__27595__auto__);

return statearr_49650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$set_env$arity$2 = (function (_,prod_QMARK_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49664){
var state_val_49665 = (state_49664[(1)]);
if((state_val_49665 === (1))){
var inst_49651 = [new cljs.core.Keyword(null,"env","env",-1815813235)];
var state_49664__$1 = (function (){var statearr_49666 = state_49664;
(statearr_49666[(7)] = inst_49651);

return statearr_49666;
})();
if(cljs.core.truth_(prod_QMARK_)){
var statearr_49667_53161 = state_49664__$1;
(statearr_49667_53161[(1)] = (3));

} else {
var statearr_49668_53162 = state_49664__$1;
(statearr_49668_53162[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (2))){
var inst_49662 = (state_49664[(2)]);
var state_49664__$1 = state_49664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49664__$1,inst_49662);
} else {
if((state_val_49665 === (3))){
var state_49664__$1 = state_49664;
var statearr_49669_53163 = state_49664__$1;
(statearr_49669_53163[(2)] = "prod");

(statearr_49669_53163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (4))){
var state_49664__$1 = state_49664;
var statearr_49670_53164 = state_49664__$1;
(statearr_49670_53164[(2)] = "dev");

(statearr_49670_53164[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49665 === (5))){
var inst_49651 = (state_49664[(7)]);
var inst_49655 = (state_49664[(2)]);
var inst_49656 = [inst_49655];
var inst_49657 = cljs.core.PersistentHashMap.fromArrays(inst_49651,inst_49656);
var inst_49658 = cljs.core.clj__GT_js(inst_49657);
var inst_49659 = frontend.mobile.util.file_sync.setEnv(inst_49658);
var inst_49660 = cljs.core.async.interop.p__GT_c(inst_49659);
var state_49664__$1 = state_49664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49664__$1,(2),inst_49660);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49671 = [null,null,null,null,null,null,null,null];
(statearr_49671[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49671[(1)] = (1));

return statearr_49671;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49664){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49664);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49672){var ex__27576__auto__ = e49672;
var statearr_49673_53165 = state_49664;
(statearr_49673_53165[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49664[(4)]))){
var statearr_49674_53166 = state_49664;
(statearr_49674_53166[(1)] = cljs.core.first((state_49664[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53167 = state_49664;
state_49664 = G__53167;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49664){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49675 = f__27596__auto__();
(statearr_49675[(6)] = c__27595__auto__);

return statearr_49675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$update_remote_file$arity$5 = (function (this$,graph_uuid,base_path,filepath,local_txid){
var self__ = this;
var this$__$1 = this;
return this$__$1.frontend$fs$sync$IRSAPI$update_remote_files$arity$5(null,graph_uuid,base_path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath], null),local_txid);
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$rename_local_file$arity$5 = (function (_,_graph_uuid,base_path,from,to){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49685){
var state_val_49686 = (state_49685[(1)]);
if((state_val_49686 === (1))){
var inst_49676 = [new cljs.core.Keyword(null,"basePath","basePath",-169642017),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007)];
var inst_49677 = [base_path,from,to];
var inst_49678 = cljs.core.PersistentHashMap.fromArrays(inst_49676,inst_49677);
var inst_49679 = cljs.core.clj__GT_js(inst_49678);
var inst_49680 = frontend.mobile.util.file_sync.renameLocalFile(inst_49679);
var inst_49681 = cljs.core.async.interop.p__GT_c(inst_49680);
var state_49685__$1 = state_49685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49685__$1,(2),inst_49681);
} else {
if((state_val_49686 === (2))){
var inst_49683 = (state_49685[(2)]);
var state_49685__$1 = state_49685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49685__$1,inst_49683);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49687 = [null,null,null,null,null,null,null];
(statearr_49687[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49687[(1)] = (1));

return statearr_49687;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49685){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49685);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49688){var ex__27576__auto__ = e49688;
var statearr_49689_53168 = state_49685;
(statearr_49689_53168[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49685[(4)]))){
var statearr_49690_53169 = state_49685;
(statearr_49690_53169[(1)] = cljs.core.first((state_49685[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53170 = state_49685;
state_49685 = G__53170;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49685){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49691 = f__27596__auto__();
(statearr_49691[(6)] = c__27595__auto__);

return statearr_49691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.prototype.frontend$fs$sync$IRSAPI$delete_local_files$arity$4 = (function (_,_graph_uuid,base_path,filepaths){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49703){
var state_val_49704 = (state_49703[(1)]);
if((state_val_49704 === (1))){
var inst_49692 = (function (){return (function (){
return cljs.core.async.interop.p__GT_c(frontend.mobile.util.file_sync.deleteLocalFiles(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basePath","basePath",-169642017),base_path,new cljs.core.Keyword(null,"filePaths","filePaths",2113645318),filepaths], null))));
});
})();
var inst_49693 = frontend.fs.sync.retry_rsapi(inst_49692);
var state_49703__$1 = state_49703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49703__$1,(2),inst_49693);
} else {
if((state_val_49704 === (2))){
var inst_49695 = (state_49703[(2)]);
var inst_49696 = frontend.state.developer_mode_QMARK_();
var state_49703__$1 = (function (){var statearr_49705 = state_49703;
(statearr_49705[(7)] = inst_49695);

return statearr_49705;
})();
if(cljs.core.truth_(inst_49696)){
var statearr_49706_53171 = state_49703__$1;
(statearr_49706_53171[(1)] = (3));

} else {
var statearr_49707_53172 = state_49703__$1;
(statearr_49707_53172[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49704 === (3))){
var inst_49698 = frontend.fs.sync.check_files_not_exists(base_path,filepaths);
var state_49703__$1 = state_49703;
var statearr_49708_53173 = state_49703__$1;
(statearr_49708_53173[(2)] = inst_49698);

(statearr_49708_53173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49704 === (4))){
var state_49703__$1 = state_49703;
var statearr_49709_53174 = state_49703__$1;
(statearr_49709_53174[(2)] = null);

(statearr_49709_53174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49704 === (5))){
var inst_49695 = (state_49703[(7)]);
var inst_49701 = (state_49703[(2)]);
var state_49703__$1 = (function (){var statearr_49710 = state_49703;
(statearr_49710[(8)] = inst_49701);

return statearr_49710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49703__$1,inst_49695);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49711 = [null,null,null,null,null,null,null,null,null];
(statearr_49711[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49711[(1)] = (1));

return statearr_49711;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49703){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49703);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49712){var ex__27576__auto__ = e49712;
var statearr_49713_53175 = state_49703;
(statearr_49713_53175[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49703[(4)]))){
var statearr_49714_53176 = state_49703;
(statearr_49714_53176[(1)] = cljs.core.first((state_49703[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53177 = state_49703;
state_49703 = G__53177;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49703){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49715 = f__27596__auto__();
(statearr_49715[(6)] = c__27595__auto__);

return statearr_49715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.CapacitorAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.CapacitorAPI.cljs$lang$type = true);

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorStr = "frontend.fs.sync/CapacitorAPI");

(frontend.fs.sync.CapacitorAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/CapacitorAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/CapacitorAPI.
 */
frontend.fs.sync.__GT_CapacitorAPI = (function frontend$fs$sync$__GT_CapacitorAPI(){
return (new frontend.fs.sync.CapacitorAPI());
});

frontend.fs.sync.rsapi = (cljs.core.truth_(frontend.util.electron_QMARK_())?frontend.fs.sync.__GT_RSAPI():(cljs.core.truth_(frontend.mobile.util.native_ios_QMARK_())?frontend.fs.sync.__GT_CapacitorAPI():null
));

/**
* @constructor
 * @implements {frontend.fs.sync.IToken}
 * @implements {frontend.fs.sync.IRemoteAPI}
*/
frontend.fs.sync.RemoteAPI = (function (){
});
(frontend.fs.sync.RemoteAPI.prototype.request = (function (api_name,body){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49738){
var state_val_49739 = (state_49738[(1)]);
if((state_val_49739 === (1))){
var inst_49718 = this$.frontend$fs$sync$IToken$get_token$arity$1(null);
var state_49738__$1 = state_49738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49738__$1,(3),inst_49718);
} else {
if((state_val_49739 === (2))){
var inst_49724 = (state_49738[(7)]);
var inst_49724__$1 = (state_49738[(2)]);
var inst_49725 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_49724__$1);
var inst_49726 = (cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_49725) : cljs_http.client.unexceptional_status_QMARK_.call(null,inst_49725));
var state_49738__$1 = (function (){var statearr_49744 = state_49738;
(statearr_49744[(7)] = inst_49724__$1);

return statearr_49744;
})();
if(cljs.core.truth_(inst_49726)){
var statearr_49745_53178 = state_49738__$1;
(statearr_49745_53178[(1)] = (4));

} else {
var statearr_49746_53179 = state_49738__$1;
(statearr_49746_53179[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (3))){
var inst_49720 = (state_49738[(2)]);
var inst_49721 = (function (){return (function (){
return this$.frontend$fs$sync$IToken$refresh_token$arity$1(null);
});
})();
var inst_49722 = frontend.fs.sync.request.cljs$core$IFn$_invoke$arity$4(api_name,body,inst_49720,inst_49721);
var state_49738__$1 = state_49738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49738__$1,(2),inst_49722);
} else {
if((state_val_49739 === (4))){
var inst_49724 = (state_49738[(7)]);
var inst_49728 = frontend.fs.sync.get_resp_json_body(inst_49724);
var state_49738__$1 = state_49738;
var statearr_49747_53180 = state_49738__$1;
(statearr_49747_53180[(2)] = inst_49728);

(statearr_49747_53180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (5))){
var inst_49724 = (state_49738[(7)]);
var inst_49730 = [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_49731 = frontend.fs.sync.get_resp_json_body(inst_49724);
var inst_49732 = [inst_49724,inst_49731];
var inst_49733 = cljs.core.PersistentHashMap.fromArrays(inst_49730,inst_49732);
var inst_49734 = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request failed",inst_49733);
var state_49738__$1 = state_49738;
var statearr_49748_53181 = state_49738__$1;
(statearr_49748_53181[(2)] = inst_49734);

(statearr_49748_53181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49739 === (6))){
var inst_49736 = (state_49738[(2)]);
var state_49738__$1 = state_49738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49738__$1,inst_49736);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49749 = [null,null,null,null,null,null,null,null];
(statearr_49749[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49749[(1)] = (1));

return statearr_49749;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49738){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49738);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49750){var ex__27576__auto__ = e49750;
var statearr_49751_53182 = state_49738;
(statearr_49751_53182[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49738[(4)]))){
var statearr_49752_53183 = state_49738;
(statearr_49752_53183[(1)] = cljs.core.first((state_49738[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53184 = state_49738;
state_49738 = G__53184;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49738){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49753 = f__27596__auto__();
(statearr_49753[(6)] = c__27595__auto__);

return statearr_49753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.update_files = (function (graph_uuid,txid,files){
var self__ = this;
var this$ = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_(files),typeof txid === 'number'], null)], null);

return this$.request("update_files",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid,new cljs.core.Keyword(null,"TXId","TXId",-902804781),txid,new cljs.core.Keyword(null,"Files","Files",1992500914),files], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$get_token$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49764){
var state_val_49765 = (state_49764[(1)]);
if((state_val_49765 === (1))){
var inst_49755 = (state_49764[(7)]);
var inst_49755__$1 = frontend.state.get_auth_id_token();
var state_49764__$1 = (function (){var statearr_49769 = state_49764;
(statearr_49769[(7)] = inst_49755__$1);

return statearr_49769;
})();
if(cljs.core.truth_(inst_49755__$1)){
var statearr_49770_53185 = state_49764__$1;
(statearr_49770_53185[(1)] = (2));

} else {
var statearr_49771_53186 = state_49764__$1;
(statearr_49771_53186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49765 === (2))){
var inst_49755 = (state_49764[(7)]);
var state_49764__$1 = state_49764;
var statearr_49774_53187 = state_49764__$1;
(statearr_49774_53187[(2)] = inst_49755);

(statearr_49774_53187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49765 === (3))){
var inst_49758 = this$__$1.frontend$fs$sync$IToken$refresh_token$arity$1(null);
var state_49764__$1 = state_49764;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49764__$1,(5),inst_49758);
} else {
if((state_val_49765 === (4))){
var inst_49762 = (state_49764[(2)]);
var state_49764__$1 = state_49764;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49764__$1,inst_49762);
} else {
if((state_val_49765 === (5))){
var inst_49760 = (state_49764[(2)]);
var state_49764__$1 = state_49764;
var statearr_49785_53188 = state_49764__$1;
(statearr_49785_53188[(2)] = inst_49760);

(statearr_49785_53188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49786 = [null,null,null,null,null,null,null,null];
(statearr_49786[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49786[(1)] = (1));

return statearr_49786;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49764){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49764);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49787){var ex__27576__auto__ = e49787;
var statearr_49788_53189 = state_49764;
(statearr_49788_53189[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49764[(4)]))){
var statearr_49789_53190 = state_49764;
(statearr_49789_53190[(1)] = cljs.core.first((state_49764[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53191 = state_49764;
state_49764 = G__53191;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49764){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49790 = f__27596__auto__();
(statearr_49790[(6)] = c__27595__auto__);

return statearr_49790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IToken$refresh_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49796){
var state_val_49797 = (state_49796[(1)]);
if((state_val_49797 === (1))){
var inst_49791 = frontend.handler.user.refresh_id_token_AMPERSAND_access_token();
var state_49796__$1 = state_49796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49796__$1,(2),inst_49791);
} else {
if((state_val_49797 === (2))){
var inst_49793 = (state_49796[(2)]);
var inst_49794 = frontend.state.get_auth_id_token();
var state_49796__$1 = (function (){var statearr_49798 = state_49796;
(statearr_49798[(7)] = inst_49793);

return statearr_49798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49796__$1,inst_49794);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49799 = [null,null,null,null,null,null,null,null];
(statearr_49799[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49799[(1)] = (1));

return statearr_49799;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49796){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49796);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49800){var ex__27576__auto__ = e49800;
var statearr_49801_53192 = state_49796;
(statearr_49801_53192[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49796[(4)]))){
var statearr_49802_53193 = state_49796;
(statearr_49802_53193[(1)] = cljs.core.first((state_49796[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53194 = state_49796;
state_49796 = G__53194;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49796){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49803 = f__27596__auto__();
(statearr_49803[(6)] = c__27595__auto__);

return statearr_49803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2 = (function (this$,graph_uuid){
var self__ = this;
var this$__$1 = this;
var file_meta_list = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49843){
var state_val_49844 = (state_49843[(1)]);
if((state_val_49844 === (7))){
var inst_49839 = (state_49843[(2)]);
var state_49843__$1 = state_49843;
var statearr_49847_53195 = state_49843__$1;
(statearr_49847_53195[(2)] = inst_49839);

(statearr_49847_53195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (1))){
var inst_49804 = null;
var inst_49805 = null;
var state_49843__$1 = (function (){var statearr_49849 = state_49843;
(statearr_49849[(7)] = inst_49805);

(statearr_49849[(8)] = inst_49804);

return statearr_49849;
})();
var statearr_49850_53196 = state_49843__$1;
(statearr_49850_53196[(2)] = null);

(statearr_49850_53196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (4))){
var inst_49816 = (state_49843[(9)]);
var inst_49816__$1 = (state_49843[(2)]);
var inst_49817 = (inst_49816__$1 instanceof cljs.core.ExceptionInfo);
var state_49843__$1 = (function (){var statearr_49852 = state_49843;
(statearr_49852[(9)] = inst_49816__$1);

return statearr_49852;
})();
if(cljs.core.truth_(inst_49817)){
var statearr_49853_53197 = state_49843__$1;
(statearr_49853_53197[(1)] = (5));

} else {
var statearr_49854_53198 = state_49843__$1;
(statearr_49854_53198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (13))){
var inst_49837 = (state_49843[(2)]);
var state_49843__$1 = state_49843;
var statearr_49856_53199 = state_49843__$1;
(statearr_49856_53199[(2)] = inst_49837);

(statearr_49856_53199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (6))){
var inst_49805 = (state_49843[(7)]);
var inst_49826 = (state_49843[(10)]);
var inst_49804 = (state_49843[(8)]);
var inst_49816 = (state_49843[(9)]);
var inst_49821 = (state_49843[(11)]);
var inst_49820 = (state_49843[(12)]);
var inst_49820__$1 = new cljs.core.Keyword(null,"NextDir","NextDir",-113026321).cljs$core$IFn$_invoke$arity$1(inst_49816);
var inst_49821__$1 = new cljs.core.Keyword(null,"NextContinuationToken","NextContinuationToken",1106322029).cljs$core$IFn$_invoke$arity$1(inst_49816);
var inst_49822 = new cljs.core.Keyword(null,"Objects","Objects",-610644271).cljs$core$IFn$_invoke$arity$1(inst_49816);
var inst_49823 = (function (){var dir = inst_49804;
var continuation_token = inst_49805;
var r = inst_49816;
var next_dir = inst_49820__$1;
var next_continuation_token = inst_49821__$1;
var objs = inst_49822;
return (function (p1__49716_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__49716_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__49716_SHARP_),frontend.fs.sync.remove_user_graph_uuid_prefix(decodeURIComponent(new cljs.core.Keyword(null,"Key","Key",1553874408).cljs$core$IFn$_invoke$arity$1(p1__49716_SHARP_))),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__49716_SHARP_),true,null);
});
})();
var inst_49824 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_49823,inst_49822);
var inst_49825 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,file_meta_list,inst_49824);
var inst_49826__$1 = cljs.core.empty_QMARK_(inst_49820__$1);
var state_49843__$1 = (function (){var statearr_49861 = state_49843;
(statearr_49861[(13)] = inst_49825);

(statearr_49861[(10)] = inst_49826__$1);

(statearr_49861[(11)] = inst_49821__$1);

(statearr_49861[(12)] = inst_49820__$1);

return statearr_49861;
})();
if(inst_49826__$1){
var statearr_49863_53200 = state_49843__$1;
(statearr_49863_53200[(1)] = (8));

} else {
var statearr_49864_53201 = state_49843__$1;
(statearr_49864_53201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (3))){
var inst_49841 = (state_49843[(2)]);
var state_49843__$1 = state_49843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49843__$1,inst_49841);
} else {
if((state_val_49844 === (12))){
var inst_49821 = (state_49843[(11)]);
var inst_49820 = (state_49843[(12)]);
var inst_49804 = inst_49820;
var inst_49805 = inst_49821;
var state_49843__$1 = (function (){var statearr_49866 = state_49843;
(statearr_49866[(7)] = inst_49805);

(statearr_49866[(8)] = inst_49804);

return statearr_49866;
})();
var statearr_49867_53202 = state_49843__$1;
(statearr_49867_53202[(2)] = null);

(statearr_49867_53202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (2))){
var inst_49805 = (state_49843[(7)]);
var inst_49804 = (state_49843[(8)]);
var inst_49807 = cljs.core.PersistentHashMap.EMPTY;
var inst_49808 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second);
var inst_49809 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Dir","Dir",1454706553),new cljs.core.Keyword(null,"ContinuationToken","ContinuationToken",-770030188)];
var inst_49810 = [graph_uuid,inst_49804,inst_49805];
var inst_49811 = cljs.core.PersistentHashMap.fromArrays(inst_49809,inst_49810);
var inst_49812 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(inst_49808,inst_49811);
var inst_49813 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_49807,inst_49812);
var inst_49814 = this$__$1.request("get_all_files",inst_49813);
var state_49843__$1 = state_49843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49843__$1,(4),inst_49814);
} else {
if((state_val_49844 === (11))){
var inst_49833 = cljs.core.persistent_BANG_(file_meta_list);
var state_49843__$1 = state_49843;
var statearr_49869_53203 = state_49843__$1;
(statearr_49869_53203[(2)] = inst_49833);

(statearr_49869_53203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (9))){
var inst_49826 = (state_49843[(10)]);
var state_49843__$1 = state_49843;
var statearr_49870_53204 = state_49843__$1;
(statearr_49870_53204[(2)] = inst_49826);

(statearr_49870_53204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (5))){
var inst_49816 = (state_49843[(9)]);
var state_49843__$1 = state_49843;
var statearr_49871_53205 = state_49843__$1;
(statearr_49871_53205[(2)] = inst_49816);

(statearr_49871_53205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (10))){
var inst_49831 = (state_49843[(2)]);
var state_49843__$1 = state_49843;
if(cljs.core.truth_(inst_49831)){
var statearr_49872_53206 = state_49843__$1;
(statearr_49872_53206[(1)] = (11));

} else {
var statearr_49873_53207 = state_49843__$1;
(statearr_49873_53207[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49844 === (8))){
var inst_49821 = (state_49843[(11)]);
var inst_49828 = cljs.core.empty_QMARK_(inst_49821);
var state_49843__$1 = state_49843;
var statearr_49874_53210 = state_49843__$1;
(statearr_49874_53210[(2)] = inst_49828);

(statearr_49874_53210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49875[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49875[(1)] = (1));

return statearr_49875;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49843){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49843);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49876){var ex__27576__auto__ = e49876;
var statearr_49877_53211 = state_49843;
(statearr_49877_53211[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49843[(4)]))){
var statearr_49878_53212 = state_49843;
(statearr_49878_53212[(1)] = cljs.core.first((state_49843[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53213 = state_49843;
state_49843 = G__53213;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49843){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49879 = f__27596__auto__();
(statearr_49879[(6)] = c__27595__auto__);

return statearr_49879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3 = (function (this$,graph_uuid,filepaths){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.coll_QMARK_(filepaths)], null)], null);

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49897){
var state_val_49898 = (state_49897[(1)]);
if((state_val_49898 === (1))){
var inst_49880 = (state_49897[(7)]);
var inst_49880__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.encode_filepath,filepaths);
var inst_49881 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"Files","Files",1992500914)];
var inst_49882 = [graph_uuid,inst_49880__$1];
var inst_49883 = cljs.core.PersistentHashMap.fromArrays(inst_49881,inst_49882);
var inst_49884 = this$__$1.request("get_files_meta",inst_49883);
var state_49897__$1 = (function (){var statearr_49900 = state_49897;
(statearr_49900[(7)] = inst_49880__$1);

return statearr_49900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49897__$1,(2),inst_49884);
} else {
if((state_val_49898 === (2))){
var inst_49886 = (state_49897[(8)]);
var inst_49886__$1 = (state_49897[(2)]);
var inst_49887 = (inst_49886__$1 instanceof cljs.core.ExceptionInfo);
var state_49897__$1 = (function (){var statearr_49901 = state_49897;
(statearr_49901[(8)] = inst_49886__$1);

return statearr_49901;
})();
if(cljs.core.truth_(inst_49887)){
var statearr_49902_53214 = state_49897__$1;
(statearr_49902_53214[(1)] = (3));

} else {
var statearr_49903_53215 = state_49897__$1;
(statearr_49903_53215[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49898 === (3))){
var inst_49886 = (state_49897[(8)]);
var state_49897__$1 = state_49897;
var statearr_49904_53216 = state_49897__$1;
(statearr_49904_53216[(2)] = inst_49886);

(statearr_49904_53216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49898 === (4))){
var inst_49880 = (state_49897[(7)]);
var inst_49886 = (state_49897[(8)]);
var inst_49890 = cljs.core.PersistentHashSet.EMPTY;
var inst_49891 = (function (){var encoded_filepaths = inst_49880;
var r = inst_49886;
return (function (p1__49717_SHARP_){
return frontend.fs.sync.__GT_FileMetadata(new cljs.core.Keyword(null,"Size","Size",-2021182042).cljs$core$IFn$_invoke$arity$1(p1__49717_SHARP_),new cljs.core.Keyword(null,"ETag","ETag",1263651331).cljs$core$IFn$_invoke$arity$1(p1__49717_SHARP_),decodeURIComponent(new cljs.core.Keyword(null,"FilePath","FilePath",1522398781).cljs$core$IFn$_invoke$arity$1(p1__49717_SHARP_)),new cljs.core.Keyword(null,"LastModified","LastModified",1702988258).cljs$core$IFn$_invoke$arity$1(p1__49717_SHARP_),true,null);
});
})();
var inst_49892 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_49891);
var inst_49893 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(inst_49890,inst_49892,inst_49886);
var state_49897__$1 = state_49897;
var statearr_49905_53217 = state_49897__$1;
(statearr_49905_53217[(2)] = inst_49893);

(statearr_49905_53217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49898 === (5))){
var inst_49895 = (state_49897[(2)]);
var state_49897__$1 = state_49897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49897__$1,inst_49895);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49906 = [null,null,null,null,null,null,null,null,null];
(statearr_49906[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49906[(1)] = (1));

return statearr_49906;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49897){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49897);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49907){var ex__27576__auto__ = e49907;
var statearr_49908_53218 = state_49897;
(statearr_49908_53218[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49897[(4)]))){
var statearr_49909_53219 = state_49897;
(statearr_49909_53219[(1)] = cljs.core.first((state_49897[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53220 = state_49897;
state_49897 = G__53220;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49897){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49910 = f__27596__auto__();
(statearr_49910[(6)] = c__27595__auto__);

return statearr_49910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3 = (function (this$,graph_name_opt,graph_uuid_opt){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5043__auto__ = graph_name_opt;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return graph_uuid_opt;
}
})()], null)], null);

return this$__$1.request("get_graph",(function (){var G__49911 = cljs.core.PersistentArrayMap.EMPTY;
var G__49911__$1 = ((cljs.core.seq(graph_name_opt))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49911,new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name_opt):G__49911);
if(cljs.core.seq(graph_uuid_opt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49911__$1,new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid_opt);
} else {
return G__49911__$1;
}
})());
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_remote_file_versions$arity$3 = (function (this$,graph_uuid,filepath){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("get_file_version_list",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid,new cljs.core.Keyword(null,"File","File",-1707525042),frontend.fs.sync.encode_filepath(filepath)], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("list_graphs");
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$get_diff$arity$3 = (function (this$,graph_uuid,from_txid){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49933){
var state_val_49934 = (state_49933[(1)]);
if((state_val_49934 === (1))){
var inst_49912 = [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),new cljs.core.Keyword(null,"FromTXId","FromTXId",-1493550374)];
var inst_49913 = [graph_uuid,from_txid];
var inst_49914 = cljs.core.PersistentHashMap.fromArrays(inst_49912,inst_49913);
var inst_49915 = this$__$1.request("get_diff",inst_49914);
var state_49933__$1 = state_49933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49933__$1,(2),inst_49915);
} else {
if((state_val_49934 === (2))){
var inst_49917 = (state_49933[(7)]);
var inst_49917__$1 = (state_49933[(2)]);
var inst_49918 = (inst_49917__$1 instanceof cljs.core.ExceptionInfo);
var state_49933__$1 = (function (){var statearr_49939 = state_49933;
(statearr_49939[(7)] = inst_49917__$1);

return statearr_49939;
})();
if(cljs.core.truth_(inst_49918)){
var statearr_49940_53221 = state_49933__$1;
(statearr_49940_53221[(1)] = (3));

} else {
var statearr_49941_53222 = state_49933__$1;
(statearr_49941_53222[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (3))){
var inst_49917 = (state_49933[(7)]);
var state_49933__$1 = state_49933;
var statearr_49942_53223 = state_49933__$1;
(statearr_49942_53223[(2)] = inst_49917);

(statearr_49942_53223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (4))){
var inst_49917 = (state_49933[(7)]);
var inst_49921 = new cljs.core.Keyword(null,"Transactions","Transactions",-836353760).cljs$core$IFn$_invoke$arity$1(inst_49917);
var inst_49922 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"TXId","TXId",-902804781),inst_49921);
var inst_49923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49924 = cljs.core.last(inst_49922);
var inst_49925 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_49924);
var inst_49926 = cljs.core.first(inst_49922);
var inst_49927 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_49926);
var inst_49928 = [inst_49922,inst_49925,inst_49927];
var inst_49929 = (new cljs.core.PersistentVector(null,3,(5),inst_49923,inst_49928,null));
var state_49933__$1 = state_49933;
var statearr_49944_53224 = state_49933__$1;
(statearr_49944_53224[(2)] = inst_49929);

(statearr_49944_53224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49934 === (5))){
var inst_49931 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49933__$1,inst_49931);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_49945 = [null,null,null,null,null,null,null,null];
(statearr_49945[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_49945[(1)] = (1));

return statearr_49945;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_49933){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49933);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49946){var ex__27576__auto__ = e49946;
var statearr_49947_53225 = state_49933;
(statearr_49947_53225[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49933[(4)]))){
var statearr_49948_53226 = state_49933;
(statearr_49948_53226[(1)] = cljs.core.first((state_49933[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53227 = state_49933;
state_49933 = G__53227;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_49933){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_49933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49949 = f__27596__auto__();
(statearr_49949[(6)] = c__27595__auto__);

return statearr_49949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$create_graph$arity$2 = (function (this$,graph_name){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("create_graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"GraphName","GraphName",-960661337),graph_name], null));
}));

(frontend.fs.sync.RemoteAPI.prototype.frontend$fs$sync$IRemoteAPI$delete_graph$arity$2 = (function (this$,graph_uuid){
var self__ = this;
var this$__$1 = this;
return this$__$1.request("delete_graph",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),graph_uuid], null));
}));

(frontend.fs.sync.RemoteAPI.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(frontend.fs.sync.RemoteAPI.cljs$lang$type = true);

(frontend.fs.sync.RemoteAPI.cljs$lang$ctorStr = "frontend.fs.sync/RemoteAPI");

(frontend.fs.sync.RemoteAPI.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/RemoteAPI");
}));

/**
 * Positional factory function for frontend.fs.sync/RemoteAPI.
 */
frontend.fs.sync.__GT_RemoteAPI = (function frontend$fs$sync$__GT_RemoteAPI(){
return (new frontend.fs.sync.RemoteAPI());
});

frontend.fs.sync.remoteapi = frontend.fs.sync.__GT_RemoteAPI();
frontend.fs.sync.add_new_version_file = (function frontend$fs$sync$add_new_version_file(repo,path,content){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_49957){
var state_val_49958 = (state_49957[(1)]);
if((state_val_49958 === (1))){
var inst_49950 = frontend.config.get_local_dir(repo);
var inst_49951 = electron.ipc.ipc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["addVersionFile",inst_49950,path,content], 0));
var inst_49952 = cljs.core.async.interop.p__GT_c(inst_49951);
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49957__$1,(2),inst_49952);
} else {
if((state_val_49958 === (2))){
var inst_49954 = (state_49957[(2)]);
var inst_49955 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["add-new-version-file: ",inst_49954], 0));
var state_49957__$1 = state_49957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49957__$1,inst_49955);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0 = (function (){
var statearr_49959 = [null,null,null,null,null,null,null];
(statearr_49959[(0)] = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__);

(statearr_49959[(1)] = (1));

return statearr_49959;
});
var frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1 = (function (state_49957){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_49957);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e49960){var ex__27576__auto__ = e49960;
var statearr_49961_53228 = state_49957;
(statearr_49961_53228[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_49957[(4)]))){
var statearr_49962_53229 = state_49957;
(statearr_49962_53229[(1)] = cljs.core.first((state_49957[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53230 = state_49957;
state_49957 = G__53230;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__ = function(state_49957){
switch(arguments.length){
case 0:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1.call(this,state_49957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____0;
frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto____1;
return frontend$fs$sync$add_new_version_file_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_49963 = f__27596__auto__();
(statearr_49963[(6)] = c__27595__auto__);

return statearr_49963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.is_journals_or_pages_QMARK_ = (function frontend$fs$sync$is_journals_or_pages_QMARK_(filetxn){
var rel_path = frontend.fs.sync.relative_path(filetxn);
return ((clojure.string.starts_with_QMARK_(rel_path,"journals/")) || (clojure.string.starts_with_QMARK_(rel_path,"pages/")));
});
/**
 * when we need to create a new version file:
 *   1. when apply a 'update' filetxn, it already exists(same page name) locally and has delete diffs
 *   2. when apply a 'delete' filetxn, its origin remote content and local content are different
 *   - TODO: we need to store origin remote content md5 in server db
 *   3. create version files only for files under 'journals/', 'pages/' dir
 */
frontend.fs.sync.need_add_version_file_QMARK_ = (function frontend$fs$sync$need_add_version_file_QMARK_(filetxn,origin_db_content){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50004){
var state_val_50005 = (state_50004[(1)]);
if((state_val_50005 === (7))){
var inst_49999 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50007_53231 = state_50004__$1;
(statearr_50007_53231[(2)] = inst_49999);

(statearr_50007_53231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (1))){
var inst_49968 = filetxn.renamed_QMARK_();
var state_50004__$1 = state_50004;
if(cljs.core.truth_(inst_49968)){
var statearr_50010_53232 = state_50004__$1;
(statearr_50010_53232[(1)] = (2));

} else {
var statearr_50011_53233 = state_50004__$1;
(statearr_50011_53233[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (4))){
var inst_50001 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50004__$1,inst_50001);
} else {
if((state_val_50005 === (15))){
var inst_49985 = (state_50004[(7)]);
var state_50004__$1 = state_50004;
var statearr_50012_53234 = state_50004__$1;
(statearr_50012_53234[(2)] = inst_49985);

(statearr_50012_53234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (13))){
var inst_49983 = (state_50004[(8)]);
var state_50004__$1 = state_50004;
var statearr_50014_53235 = state_50004__$1;
(statearr_50014_53235[(2)] = inst_49983);

(statearr_50014_53235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (6))){
var inst_49974 = filetxn.updated_QMARK_;
var state_50004__$1 = state_50004;
if(cljs.core.truth_(inst_49974)){
var statearr_50015_53236 = state_50004__$1;
(statearr_50015_53236[(1)] = (8));

} else {
var statearr_50016_53237 = state_50004__$1;
(statearr_50016_53237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (17))){
var inst_49991 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50017_53238 = state_50004__$1;
(statearr_50017_53238[(2)] = inst_49991);

(statearr_50017_53238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (3))){
var inst_49971 = filetxn.deleted_QMARK_;
var state_50004__$1 = state_50004;
if(cljs.core.truth_(inst_49971)){
var statearr_50018_53239 = state_50004__$1;
(statearr_50018_53239[(1)] = (5));

} else {
var statearr_50019_53240 = state_50004__$1;
(statearr_50019_53240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (12))){
var inst_49985 = (state_50004[(7)]);
var inst_49982 = (state_50004[(9)]);
var inst_49985__$1 = (inst_49982 == null);
var state_50004__$1 = (function (){var statearr_50020 = state_50004;
(statearr_50020[(7)] = inst_49985__$1);

return statearr_50020;
})();
if(cljs.core.truth_(inst_49985__$1)){
var statearr_50021_53241 = state_50004__$1;
(statearr_50021_53241[(1)] = (15));

} else {
var statearr_50022_53242 = state_50004__$1;
(statearr_50022_53242[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (2))){
var state_50004__$1 = state_50004;
var statearr_50023_53243 = state_50004__$1;
(statearr_50023_53243[(2)] = false);

(statearr_50023_53243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (11))){
var inst_49983 = (state_50004[(8)]);
var inst_49982 = (state_50004[(2)]);
var inst_49983__$1 = origin_db_content;
var state_50004__$1 = (function (){var statearr_50024 = state_50004;
(statearr_50024[(8)] = inst_49983__$1);

(statearr_50024[(9)] = inst_49982);

return statearr_50024;
})();
if(cljs.core.truth_(inst_49983__$1)){
var statearr_50026_53244 = state_50004__$1;
(statearr_50026_53244[(1)] = (12));

} else {
var statearr_50027_53245 = state_50004__$1;
(statearr_50027_53245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (9))){
var state_50004__$1 = state_50004;
var statearr_50028_53246 = state_50004__$1;
(statearr_50028_53246[(2)] = null);

(statearr_50028_53246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (5))){
var state_50004__$1 = state_50004;
var statearr_50029_53247 = state_50004__$1;
(statearr_50029_53247[(2)] = false);

(statearr_50029_53247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (14))){
var inst_49994 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50030_53248 = state_50004__$1;
(statearr_50030_53248[(2)] = inst_49994);

(statearr_50030_53248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (16))){
var inst_49982 = (state_50004[(9)]);
var inst_49988 = frontend.diff.diff(origin_db_content,inst_49982);
var inst_49989 = cljs.core.some(new cljs.core.Keyword(null,"removed","removed",609626430),inst_49988);
var state_50004__$1 = state_50004;
var statearr_50031_53249 = state_50004__$1;
(statearr_50031_53249[(2)] = inst_49989);

(statearr_50031_53249[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (10))){
var inst_49997 = (state_50004[(2)]);
var state_50004__$1 = state_50004;
var statearr_50032_53250 = state_50004__$1;
(statearr_50032_53250[(2)] = inst_49997);

(statearr_50032_53250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50005 === (8))){
var inst_49976 = frontend.fs.sync.relative_path(filetxn);
var inst_49977 = frontend.state.get_current_repo();
var inst_49978 = frontend.config.get_file_path(inst_49977,inst_49976);
var inst_49979 = frontend.fs.read_file.cljs$core$IFn$_invoke$arity$2("",inst_49978);
var inst_49980 = cljs.core.async.interop.p__GT_c(inst_49979);
var state_50004__$1 = state_50004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50004__$1,(11),inst_49980);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_50033 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50033[(0)] = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__);

(statearr_50033[(1)] = (1));

return statearr_50033;
});
var frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1 = (function (state_50004){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50004);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50034){var ex__27576__auto__ = e50034;
var statearr_50035_53251 = state_50004;
(statearr_50035_53251[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50004[(4)]))){
var statearr_50037_53252 = state_50004;
(statearr_50037_53252[(1)] = cljs.core.first((state_50004[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53253 = state_50004;
state_50004 = G__53253;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__ = function(state_50004){
switch(arguments.length){
case 0:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1.call(this,state_50004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$need_add_version_file_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50042 = f__27596__auto__();
(statearr_50042[(6)] = c__27595__auto__);

return statearr_50042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.apply_filetxns = (function frontend$fs$sync$apply_filetxns(graph_uuid,base_path,filetxns){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50187){
var state_val_50188 = (state_50187[(1)]);
if((state_val_50188 === (7))){
var inst_50050 = (state_50187[(7)]);
var inst_50049 = (state_50187[(8)]);
var inst_50058 = (state_50187[(2)]);
var inst_50059 = frontend.fs.sync.relative_path(inst_50049);
var inst_50060 = frontend.fs.sync.relative_path(inst_50050);
var inst_50061 = frontend.fs.sync.rename_local_file(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_50059,inst_50060);
var state_50187__$1 = (function (){var statearr_50193 = state_50187;
(statearr_50193[(9)] = inst_50058);

return statearr_50193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50187__$1,(8),inst_50061);
} else {
if((state_val_50188 === (20))){
var inst_50084 = (state_50187[(10)]);
var inst_50082 = (state_50187[(11)]);
var inst_50085 = (state_50187[(12)]);
var inst_50083 = (state_50187[(13)]);
var inst_50102 = (state_50187[(2)]);
var inst_50103 = (inst_50085 + (1));
var tmp50189 = inst_50084;
var tmp50190 = inst_50082;
var tmp50191 = inst_50083;
var inst_50082__$1 = tmp50190;
var inst_50083__$1 = tmp50191;
var inst_50084__$1 = tmp50189;
var inst_50085__$1 = inst_50103;
var state_50187__$1 = (function (){var statearr_50195 = state_50187;
(statearr_50195[(10)] = inst_50084__$1);

(statearr_50195[(11)] = inst_50082__$1);

(statearr_50195[(12)] = inst_50085__$1);

(statearr_50195[(14)] = inst_50102);

(statearr_50195[(13)] = inst_50083__$1);

return statearr_50195;
})();
var statearr_50196_53254 = state_50187__$1;
(statearr_50196_53254[(2)] = null);

(statearr_50196_53254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (27))){
var inst_50121 = (state_50187[(15)]);
var inst_50120 = (state_50187[(16)]);
var inst_50068 = (state_50187[(17)]);
var inst_50124 = frontend.fs.sync.relative_path(inst_50120);
var inst_50125 = frontend.fs.sync.add_new_version_file(inst_50068,inst_50124,inst_50121);
var state_50187__$1 = state_50187;
var statearr_50197_53255 = state_50187__$1;
(statearr_50197_53255[(2)] = inst_50125);

(statearr_50197_53255[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (1))){
var inst_50045 = cljs.core.first(filetxns);
var inst_50046 = inst_50045.renamed_QMARK_();
var state_50187__$1 = state_50187;
if(cljs.core.truth_(inst_50046)){
var statearr_50199_53256 = state_50187__$1;
(statearr_50199_53256[(1)] = (2));

} else {
var statearr_50200_53257 = state_50187__$1;
(statearr_50200_53257[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (24))){
var inst_50106 = (state_50187[(18)]);
var inst_50111 = cljs.core.chunk_first(inst_50106);
var inst_50112 = cljs.core.chunk_rest(inst_50106);
var inst_50113 = cljs.core.count(inst_50111);
var inst_50082 = inst_50112;
var inst_50083 = inst_50111;
var inst_50084 = inst_50113;
var inst_50085 = (0);
var state_50187__$1 = (function (){var statearr_50201 = state_50187;
(statearr_50201[(10)] = inst_50084);

(statearr_50201[(11)] = inst_50082);

(statearr_50201[(12)] = inst_50085);

(statearr_50201[(13)] = inst_50083);

return statearr_50201;
})();
var statearr_50202_53258 = state_50187__$1;
(statearr_50202_53258[(2)] = null);

(statearr_50202_53258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (39))){
var inst_50174 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
if(cljs.core.truth_(inst_50174)){
var statearr_50203_53259 = state_50187__$1;
(statearr_50203_53259[(1)] = (40));

} else {
var statearr_50204_53260 = state_50187__$1;
(statearr_50204_53260[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (4))){
var inst_50185 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50187__$1,inst_50185);
} else {
if((state_val_50188 === (15))){
var inst_50095 = (state_50187[(19)]);
var inst_50085 = (state_50187[(12)]);
var inst_50083 = (state_50187[(13)]);
var inst_50094 = (state_50187[(20)]);
var inst_50093 = cljs.core._nth(inst_50083,inst_50085);
var inst_50094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50093,(0),null);
var inst_50095__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50093,(1),null);
var inst_50096 = frontend.fs.sync.need_add_version_file_QMARK_(inst_50094__$1,inst_50095__$1);
var state_50187__$1 = (function (){var statearr_50205 = state_50187;
(statearr_50205[(19)] = inst_50095__$1);

(statearr_50205[(20)] = inst_50094__$1);

return statearr_50205;
})();
if(cljs.core.truth_(inst_50096)){
var statearr_50206_53261 = state_50187__$1;
(statearr_50206_53261[(1)] = (18));

} else {
var statearr_50207_53262 = state_50187__$1;
(statearr_50207_53262[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (21))){
var inst_50106 = (state_50187[(18)]);
var inst_50109 = cljs.core.chunked_seq_QMARK_(inst_50106);
var state_50187__$1 = state_50187;
if(inst_50109){
var statearr_50208_53263 = state_50187__$1;
(statearr_50208_53263[(1)] = (24));

} else {
var statearr_50209_53264 = state_50187__$1;
(statearr_50209_53264[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (31))){
var state_50187__$1 = state_50187;
var statearr_50210_53265 = state_50187__$1;
(statearr_50210_53265[(2)] = null);

(statearr_50210_53265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (32))){
var inst_50181 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50211_53266 = state_50187__$1;
(statearr_50211_53266[(2)] = inst_50181);

(statearr_50211_53266[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (40))){
var state_50187__$1 = state_50187;
var statearr_50212_53267 = state_50187__$1;
(statearr_50212_53267[(2)] = true);

(statearr_50212_53267[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (33))){
var state_50187__$1 = state_50187;
var statearr_50213_53268 = state_50187__$1;
(statearr_50213_53268[(2)] = null);

(statearr_50213_53268[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (13))){
var inst_50084 = (state_50187[(10)]);
var inst_50085 = (state_50187[(12)]);
var inst_50087 = (inst_50085 < inst_50084);
var inst_50088 = inst_50087;
var state_50187__$1 = state_50187;
if(cljs.core.truth_(inst_50088)){
var statearr_50216_53269 = state_50187__$1;
(statearr_50216_53269[(1)] = (15));

} else {
var statearr_50217_53270 = state_50187__$1;
(statearr_50217_53270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (22))){
var state_50187__$1 = state_50187;
var statearr_50218_53271 = state_50187__$1;
(statearr_50218_53271[(2)] = null);

(statearr_50218_53271[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (36))){
var inst_50165 = (state_50187[(21)]);
var inst_50166 = (state_50187[(22)]);
var inst_50165__$1 = (state_50187[(2)]);
var inst_50166__$1 = (inst_50165__$1 instanceof cljs.core.ExceptionInfo);
var state_50187__$1 = (function (){var statearr_50219 = state_50187;
(statearr_50219[(21)] = inst_50165__$1);

(statearr_50219[(22)] = inst_50166__$1);

return statearr_50219;
})();
if(cljs.core.truth_(inst_50166__$1)){
var statearr_50220_53272 = state_50187__$1;
(statearr_50220_53272[(1)] = (37));

} else {
var statearr_50221_53273 = state_50187__$1;
(statearr_50221_53273[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (41))){
var inst_50165 = (state_50187[(21)]);
var state_50187__$1 = state_50187;
var statearr_50222_53274 = state_50187__$1;
(statearr_50222_53274[(2)] = inst_50165);

(statearr_50222_53274[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (29))){
var inst_50106 = (state_50187[(18)]);
var inst_50128 = (state_50187[(2)]);
var inst_50131 = cljs.core.next(inst_50106);
var inst_50082 = inst_50131;
var inst_50083 = null;
var inst_50084 = (0);
var inst_50085 = (0);
var state_50187__$1 = (function (){var statearr_50223 = state_50187;
(statearr_50223[(10)] = inst_50084);

(statearr_50223[(11)] = inst_50082);

(statearr_50223[(12)] = inst_50085);

(statearr_50223[(13)] = inst_50083);

(statearr_50223[(23)] = inst_50128);

return statearr_50223;
})();
var statearr_50224_53275 = state_50187__$1;
(statearr_50224_53275[(2)] = null);

(statearr_50224_53275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (6))){
var inst_50055 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_50056 = (function(){throw inst_50055})();
var state_50187__$1 = state_50187;
var statearr_50225_53276 = state_50187__$1;
(statearr_50225_53276[(2)] = inst_50056);

(statearr_50225_53276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (28))){
var state_50187__$1 = state_50187;
var statearr_50230_53277 = state_50187__$1;
(statearr_50230_53277[(2)] = null);

(statearr_50230_53277[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (25))){
var inst_50106 = (state_50187[(18)]);
var inst_50121 = (state_50187[(15)]);
var inst_50120 = (state_50187[(16)]);
var inst_50119 = cljs.core.first(inst_50106);
var inst_50120__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50119,(0),null);
var inst_50121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50119,(1),null);
var inst_50122 = frontend.fs.sync.need_add_version_file_QMARK_(inst_50120__$1,inst_50121__$1);
var state_50187__$1 = (function (){var statearr_50232 = state_50187;
(statearr_50232[(15)] = inst_50121__$1);

(statearr_50232[(16)] = inst_50120__$1);

return statearr_50232;
})();
if(cljs.core.truth_(inst_50122)){
var statearr_50233_53278 = state_50187__$1;
(statearr_50233_53278[(1)] = (27));

} else {
var statearr_50234_53279 = state_50187__$1;
(statearr_50234_53279[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (34))){
var inst_50155 = (new Error("Assert failed: (= 1 (count filetxns))"));
var inst_50156 = (function(){throw inst_50155})();
var state_50187__$1 = state_50187;
var statearr_50236_53280 = state_50187__$1;
(statearr_50236_53280[(2)] = inst_50156);

(statearr_50236_53280[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (17))){
var inst_50139 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50238_53281 = state_50187__$1;
(statearr_50238_53281[(2)] = inst_50139);

(statearr_50238_53281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (3))){
var inst_50065 = cljs.core.first(filetxns);
var inst_50066 = inst_50065.updated_QMARK_;
var state_50187__$1 = state_50187;
if(cljs.core.truth_(inst_50066)){
var statearr_50239_53282 = state_50187__$1;
(statearr_50239_53282[(1)] = (9));

} else {
var statearr_50240_53283 = state_50187__$1;
(statearr_50240_53283[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (12))){
var inst_50072 = (state_50187[(24)]);
var inst_50076 = (state_50187[(2)]);
var inst_50081 = cljs.core.seq(inst_50072);
var inst_50082 = inst_50081;
var inst_50083 = null;
var inst_50084 = (0);
var inst_50085 = (0);
var state_50187__$1 = (function (){var statearr_50242 = state_50187;
(statearr_50242[(10)] = inst_50084);

(statearr_50242[(25)] = inst_50076);

(statearr_50242[(11)] = inst_50082);

(statearr_50242[(12)] = inst_50085);

(statearr_50242[(13)] = inst_50083);

return statearr_50242;
})();
var statearr_50243_53284 = state_50187__$1;
(statearr_50243_53284[(2)] = null);

(statearr_50243_53284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (2))){
var inst_50048 = cljs.core.first(filetxns);
var inst_50049 = inst_50048.from_path;
var inst_50050 = inst_50048.to_path;
var inst_50051 = cljs.core.count(filetxns);
var inst_50052 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_50051);
var state_50187__$1 = (function (){var statearr_50244 = state_50187;
(statearr_50244[(7)] = inst_50050);

(statearr_50244[(8)] = inst_50049);

return statearr_50244;
})();
if(inst_50052){
var statearr_50246_53285 = state_50187__$1;
(statearr_50246_53285[(1)] = (5));

} else {
var statearr_50247_53286 = state_50187__$1;
(statearr_50247_53286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (23))){
var inst_50137 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50249_53287 = state_50187__$1;
(statearr_50249_53287[(2)] = inst_50137);

(statearr_50249_53287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (35))){
var inst_50146 = (state_50187[(26)]);
var inst_50158 = (state_50187[(2)]);
var inst_50159 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50160 = frontend.fs.sync.relative_path(inst_50146);
var inst_50161 = [inst_50160];
var inst_50162 = (new cljs.core.PersistentVector(null,1,(5),inst_50159,inst_50161,null));
var inst_50163 = frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_50162);
var state_50187__$1 = (function (){var statearr_50250 = state_50187;
(statearr_50250[(27)] = inst_50158);

return statearr_50250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50187__$1,(36),inst_50163);
} else {
if((state_val_50188 === (19))){
var state_50187__$1 = state_50187;
var statearr_50251_53288 = state_50187__$1;
(statearr_50251_53288[(2)] = null);

(statearr_50251_53288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (11))){
var inst_50183 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50252_53289 = state_50187__$1;
(statearr_50252_53289[(2)] = inst_50183);

(statearr_50252_53289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (9))){
var inst_50068 = (state_50187[(17)]);
var inst_50068__$1 = frontend.state.get_current_repo();
var inst_50070 = (function (){var repo = inst_50068__$1;
return (function (p1__50043_SHARP_){
if(frontend.fs.sync.is_journals_or_pages_QMARK_(p1__50043_SHARP_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50043_SHARP_,(function (){var G__50253 = repo;
var G__50254 = frontend.config.get_file_path(repo,frontend.fs.sync.relative_path(p1__50043_SHARP_));
return (frontend.db.get_file.cljs$core$IFn$_invoke$arity$2 ? frontend.db.get_file.cljs$core$IFn$_invoke$arity$2(G__50253,G__50254) : frontend.db.get_file.call(null,G__50253,G__50254));
})()], null);
} else {
return null;
}
});
})();
var inst_50071 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(inst_50070,filetxns);
var inst_50072 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,inst_50071);
var inst_50073 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,filetxns);
var inst_50074 = frontend.fs.sync.update_local_files(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_50073);
var state_50187__$1 = (function (){var statearr_50255 = state_50187;
(statearr_50255[(24)] = inst_50072);

(statearr_50255[(17)] = inst_50068__$1);

return statearr_50255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50187__$1,(12),inst_50074);
} else {
if((state_val_50188 === (5))){
var state_50187__$1 = state_50187;
var statearr_50256_53290 = state_50187__$1;
(statearr_50256_53290[(2)] = null);

(statearr_50256_53290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (14))){
var inst_50141 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50261_53291 = state_50187__$1;
(statearr_50261_53291[(2)] = inst_50141);

(statearr_50261_53291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (26))){
var inst_50134 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50263_53292 = state_50187__$1;
(statearr_50263_53292[(2)] = inst_50134);

(statearr_50263_53292[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (16))){
var inst_50106 = (state_50187[(18)]);
var inst_50082 = (state_50187[(11)]);
var inst_50106__$1 = cljs.core.seq(inst_50082);
var state_50187__$1 = (function (){var statearr_50264 = state_50187;
(statearr_50264[(18)] = inst_50106__$1);

return statearr_50264;
})();
if(inst_50106__$1){
var statearr_50266_53293 = state_50187__$1;
(statearr_50266_53293[(1)] = (21));

} else {
var statearr_50267_53294 = state_50187__$1;
(statearr_50267_53294[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (38))){
var inst_50166 = (state_50187[(22)]);
var state_50187__$1 = state_50187;
var statearr_50268_53295 = state_50187__$1;
(statearr_50268_53295[(2)] = inst_50166);

(statearr_50268_53295[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (30))){
var inst_50146 = cljs.core.first(filetxns);
var inst_50151 = cljs.core.count(filetxns);
var inst_50152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),inst_50151);
var state_50187__$1 = (function (){var statearr_50270 = state_50187;
(statearr_50270[(26)] = inst_50146);

return statearr_50270;
})();
if(inst_50152){
var statearr_50271_53296 = state_50187__$1;
(statearr_50271_53296[(1)] = (33));

} else {
var statearr_50272_53297 = state_50187__$1;
(statearr_50272_53297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (10))){
var inst_50143 = cljs.core.first(filetxns);
var inst_50144 = inst_50143.deleted_QMARK_;
var state_50187__$1 = state_50187;
if(cljs.core.truth_(inst_50144)){
var statearr_50274_53298 = state_50187__$1;
(statearr_50274_53298[(1)] = (30));

} else {
var statearr_50275_53299 = state_50187__$1;
(statearr_50275_53299[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (18))){
var inst_50095 = (state_50187[(19)]);
var inst_50068 = (state_50187[(17)]);
var inst_50094 = (state_50187[(20)]);
var inst_50098 = frontend.fs.sync.relative_path(inst_50094);
var inst_50099 = frontend.fs.sync.add_new_version_file(inst_50068,inst_50098,inst_50095);
var state_50187__$1 = state_50187;
var statearr_50276_53300 = state_50187__$1;
(statearr_50276_53300[(2)] = inst_50099);

(statearr_50276_53300[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (42))){
var inst_50178 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50281_53301 = state_50187__$1;
(statearr_50281_53301[(2)] = inst_50178);

(statearr_50281_53301[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (37))){
var inst_50165 = (state_50187[(21)]);
var inst_50169 = cljs.core.ex_cause(inst_50165);
var inst_50170 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50169);
var inst_50171 = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(inst_50170,"No such file or directory");
var state_50187__$1 = state_50187;
var statearr_50283_53302 = state_50187__$1;
(statearr_50283_53302[(2)] = inst_50171);

(statearr_50283_53302[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50188 === (8))){
var inst_50063 = (state_50187[(2)]);
var state_50187__$1 = state_50187;
var statearr_50284_53303 = state_50187__$1;
(statearr_50284_53303[(2)] = inst_50063);

(statearr_50284_53303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0 = (function (){
var statearr_50287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50287[(0)] = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__);

(statearr_50287[(1)] = (1));

return statearr_50287;
});
var frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1 = (function (state_50187){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50187);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50288){var ex__27576__auto__ = e50288;
var statearr_50290_53304 = state_50187;
(statearr_50290_53304[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50187[(4)]))){
var statearr_50291_53305 = state_50187;
(statearr_50291_53305[(1)] = cljs.core.first((state_50187[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53306 = state_50187;
state_50187 = G__53306;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__ = function(state_50187){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1.call(this,state_50187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50292 = f__27596__auto__();
(statearr_50292[(6)] = c__27595__auto__);

return statearr_50292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});




/**
 * won't call update-graph-txid! when *txid is nil
 */
frontend.fs.sync.apply_filetxns_partitions = (function frontend$fs$sync$apply_filetxns_partitions(_STAR_sync_state,user_uuid,graph_uuid,base_path,filetxns_partitions,repo,_STAR_txid,_STAR_stopped,before_f,after_f){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50370){
var state_val_50371 = (state_50370[(1)]);
if((state_val_50371 === (7))){
var inst_50299 = (state_50370[(7)]);
var inst_50311 = (state_50370[(8)]);
var inst_50309 = (state_50370[(9)]);
var inst_50309__$1 = cljs.core.first(inst_50299);
var inst_50310 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_50309__$1);
var inst_50311__$1 = before_f;
var state_50370__$1 = (function (){var statearr_50372 = state_50370;
(statearr_50372[(10)] = inst_50310);

(statearr_50372[(8)] = inst_50311__$1);

(statearr_50372[(9)] = inst_50309__$1);

return statearr_50372;
})();
if(cljs.core.truth_(inst_50311__$1)){
var statearr_50373_53307 = state_50370__$1;
(statearr_50373_53307[(1)] = (10));

} else {
var statearr_50374_53308 = state_50370__$1;
(statearr_50374_53308[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (20))){
var inst_50310 = (state_50370[(10)]);
var inst_50331 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__remove_current_remote__GT_local_files,inst_50310);
var state_50370__$1 = state_50370;
var statearr_50375_53309 = state_50370__$1;
(statearr_50375_53309[(2)] = inst_50331);

(statearr_50375_53309[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (27))){
var inst_50341 = (state_50370[(11)]);
var state_50370__$1 = state_50370;
var statearr_50377_53310 = state_50370__$1;
(statearr_50377_53310[(2)] = inst_50341);

(statearr_50377_53310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (1))){
var inst_50298 = filetxns_partitions;
var inst_50299 = inst_50298;
var state_50370__$1 = (function (){var statearr_50379 = state_50370;
(statearr_50379[(7)] = inst_50299);

return statearr_50379;
})();
var statearr_50380_53312 = state_50370__$1;
(statearr_50380_53312[(2)] = null);

(statearr_50380_53312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (24))){
var inst_50341 = (state_50370[(11)]);
var inst_50310 = (state_50370[(10)]);
var inst_50334 = (state_50370[(12)]);
var inst_50299 = (state_50370[(7)]);
var inst_50329 = (state_50370[(13)]);
var inst_50309 = (state_50370[(9)]);
var inst_50338 = (function (){var filetxns_partitions_STAR_ = inst_50299;
var filetxns = inst_50309;
var paths = inst_50310;
var _ = inst_50334;
var r = inst_50329;
return (function (p1__50295_SHARP_){
return p1__50295_SHARP_.txid;
});
})();
var inst_50339 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_50338,inst_50309);
var inst_50340 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,inst_50339);
var inst_50341__$1 = after_f;
var state_50370__$1 = (function (){var statearr_50381 = state_50370;
(statearr_50381[(11)] = inst_50341__$1);

(statearr_50381[(14)] = inst_50340);

return statearr_50381;
})();
if(cljs.core.truth_(inst_50341__$1)){
var statearr_50382_53314 = state_50370__$1;
(statearr_50382_53314[(1)] = (26));

} else {
var statearr_50383_53315 = state_50370__$1;
(statearr_50383_53315[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (4))){
var inst_50303 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_50304 = [true];
var inst_50305 = cljs.core.PersistentHashMap.fromArrays(inst_50303,inst_50304);
var state_50370__$1 = state_50370;
var statearr_50384_53316 = state_50370__$1;
(statearr_50384_53316[(2)] = inst_50305);

(statearr_50384_53316[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (15))){
var inst_50321 = (state_50370[(2)]);
var state_50370__$1 = (function (){var statearr_50386 = state_50370;
(statearr_50386[(15)] = inst_50321);

return statearr_50386;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_50388_53317 = state_50370__$1;
(statearr_50388_53317[(1)] = (16));

} else {
var statearr_50389_53318 = state_50370__$1;
(statearr_50389_53318[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (21))){
var state_50370__$1 = state_50370;
var statearr_50390_53319 = state_50370__$1;
(statearr_50390_53319[(2)] = null);

(statearr_50390_53319[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (31))){
var inst_50351 = (state_50370[(2)]);
var state_50370__$1 = (function (){var statearr_50391 = state_50370;
(statearr_50391[(16)] = inst_50351);

return statearr_50391;
})();
if(cljs.core.truth_(_STAR_txid)){
var statearr_50392_53320 = state_50370__$1;
(statearr_50392_53320[(1)] = (32));

} else {
var statearr_50393_53321 = state_50370__$1;
(statearr_50393_53321[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (32))){
var inst_50340 = (state_50370[(14)]);
var inst_50353 = cljs.core.reset_BANG_(_STAR_txid,inst_50340);
var inst_50354 = frontend.fs.sync.update_graphs_txid_BANG_(inst_50340,graph_uuid,user_uuid,repo);
var state_50370__$1 = (function (){var statearr_50394 = state_50370;
(statearr_50394[(17)] = inst_50353);

return statearr_50394;
})();
var statearr_50395_53322 = state_50370__$1;
(statearr_50395_53322[(2)] = inst_50354);

(statearr_50395_53322[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (33))){
var state_50370__$1 = state_50370;
var statearr_50396_53323 = state_50370__$1;
(statearr_50396_53323[(2)] = null);

(statearr_50396_53323[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (13))){
var inst_50309 = (state_50370[(9)]);
var inst_50318 = (before_f.cljs$core$IFn$_invoke$arity$1 ? before_f.cljs$core$IFn$_invoke$arity$1(inst_50309) : before_f.call(null,inst_50309));
var state_50370__$1 = state_50370;
var statearr_50397_53324 = state_50370__$1;
(statearr_50397_53324[(2)] = inst_50318);

(statearr_50397_53324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (22))){
var inst_50329 = (state_50370[(13)]);
var inst_50334 = (state_50370[(2)]);
var inst_50335 = (inst_50329 instanceof cljs.core.ExceptionInfo);
var state_50370__$1 = (function (){var statearr_50398 = state_50370;
(statearr_50398[(12)] = inst_50334);

return statearr_50398;
})();
if(cljs.core.truth_(inst_50335)){
var statearr_50399_53325 = state_50370__$1;
(statearr_50399_53325[(1)] = (23));

} else {
var statearr_50400_53326 = state_50370__$1;
(statearr_50400_53326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (29))){
var inst_50309 = (state_50370[(9)]);
var inst_50348 = (after_f.cljs$core$IFn$_invoke$arity$1 ? after_f.cljs$core$IFn$_invoke$arity$1(inst_50309) : after_f.call(null,inst_50309));
var state_50370__$1 = state_50370;
var statearr_50401_53327 = state_50370__$1;
(statearr_50401_53327[(2)] = inst_50348);

(statearr_50401_53327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (6))){
var inst_50366 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
var statearr_50402_53328 = state_50370__$1;
(statearr_50402_53328[(2)] = inst_50366);

(statearr_50402_53328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (28))){
var inst_50346 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
if(cljs.core.truth_(inst_50346)){
var statearr_50403_53329 = state_50370__$1;
(statearr_50403_53329[(1)] = (29));

} else {
var statearr_50404_53330 = state_50370__$1;
(statearr_50404_53330[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (25))){
var inst_50361 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
var statearr_50405_53331 = state_50370__$1;
(statearr_50405_53331[(2)] = inst_50361);

(statearr_50405_53331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (34))){
var inst_50299 = (state_50370[(7)]);
var inst_50357 = (state_50370[(2)]);
var inst_50358 = cljs.core.next(inst_50299);
var inst_50299__$1 = inst_50358;
var state_50370__$1 = (function (){var statearr_50406 = state_50370;
(statearr_50406[(7)] = inst_50299__$1);

(statearr_50406[(18)] = inst_50357);

return statearr_50406;
})();
var statearr_50407_53332 = state_50370__$1;
(statearr_50407_53332[(2)] = null);

(statearr_50407_53332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (17))){
var state_50370__$1 = state_50370;
var statearr_50408_53333 = state_50370__$1;
(statearr_50408_53333[(2)] = null);

(statearr_50408_53333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (3))){
var inst_50368 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50370__$1,inst_50368);
} else {
if((state_val_50371 === (12))){
var inst_50316 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
if(cljs.core.truth_(inst_50316)){
var statearr_50410_53334 = state_50370__$1;
(statearr_50410_53334[(1)] = (13));

} else {
var statearr_50411_53335 = state_50370__$1;
(statearr_50411_53335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (2))){
var inst_50301 = cljs.core.deref(_STAR_stopped);
var state_50370__$1 = state_50370;
if(cljs.core.truth_(inst_50301)){
var statearr_50412_53336 = state_50370__$1;
(statearr_50412_53336[(1)] = (4));

} else {
var statearr_50413_53337 = state_50370__$1;
(statearr_50413_53337[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (23))){
var inst_50329 = (state_50370[(13)]);
var state_50370__$1 = state_50370;
var statearr_50414_53338 = state_50370__$1;
(statearr_50414_53338[(2)] = inst_50329);

(statearr_50414_53338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (19))){
var inst_50329 = (state_50370[(2)]);
var state_50370__$1 = (function (){var statearr_50415 = state_50370;
(statearr_50415[(13)] = inst_50329);

return statearr_50415;
})();
if(cljs.core.truth_(_STAR_sync_state)){
var statearr_50416_53339 = state_50370__$1;
(statearr_50416_53339[(1)] = (20));

} else {
var statearr_50417_53340 = state_50370__$1;
(statearr_50417_53340[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (11))){
var inst_50311 = (state_50370[(8)]);
var state_50370__$1 = state_50370;
var statearr_50418_53341 = state_50370__$1;
(statearr_50418_53341[(2)] = inst_50311);

(statearr_50418_53341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (9))){
var inst_50364 = (state_50370[(2)]);
var state_50370__$1 = state_50370;
var statearr_50419_53342 = state_50370__$1;
(statearr_50419_53342[(2)] = inst_50364);

(statearr_50419_53342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (5))){
var inst_50299 = (state_50370[(7)]);
var inst_50307 = cljs.core.seq(inst_50299);
var state_50370__$1 = state_50370;
if(inst_50307){
var statearr_50421_53343 = state_50370__$1;
(statearr_50421_53343[(1)] = (7));

} else {
var statearr_50422_53344 = state_50370__$1;
(statearr_50422_53344[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (14))){
var state_50370__$1 = state_50370;
var statearr_50423_53345 = state_50370__$1;
(statearr_50423_53345[(2)] = null);

(statearr_50423_53345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (26))){
var inst_50343 = cljs.core.fn_QMARK_(after_f);
var state_50370__$1 = state_50370;
var statearr_50424_53346 = state_50370__$1;
(statearr_50424_53346[(2)] = inst_50343);

(statearr_50424_53346[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (16))){
var inst_50310 = (state_50370[(10)]);
var inst_50323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_STAR_sync_state,frontend.fs.sync.sync_state__add_current_remote__GT_local_files,inst_50310);
var state_50370__$1 = state_50370;
var statearr_50425_53347 = state_50370__$1;
(statearr_50425_53347[(2)] = inst_50323);

(statearr_50425_53347[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (30))){
var state_50370__$1 = state_50370;
var statearr_50426_53348 = state_50370__$1;
(statearr_50426_53348[(2)] = null);

(statearr_50426_53348[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (10))){
var inst_50313 = cljs.core.fn_QMARK_(before_f);
var state_50370__$1 = state_50370;
var statearr_50427_53349 = state_50370__$1;
(statearr_50427_53349[(2)] = inst_50313);

(statearr_50427_53349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50371 === (18))){
var inst_50309 = (state_50370[(9)]);
var inst_50326 = (state_50370[(2)]);
var inst_50327 = frontend.fs.sync.apply_filetxns(graph_uuid,base_path,inst_50309);
var state_50370__$1 = (function (){var statearr_50428 = state_50370;
(statearr_50428[(19)] = inst_50326);

return statearr_50428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50370__$1,(19),inst_50327);
} else {
if((state_val_50371 === (8))){
var state_50370__$1 = state_50370;
var statearr_50429_53351 = state_50370__$1;
(statearr_50429_53351[(2)] = null);

(statearr_50429_53351[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0 = (function (){
var statearr_50430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50430[(0)] = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__);

(statearr_50430[(1)] = (1));

return statearr_50430;
});
var frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1 = (function (state_50370){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50370);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50431){var ex__27576__auto__ = e50431;
var statearr_50432_53352 = state_50370;
(statearr_50432_53352[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50370[(4)]))){
var statearr_50433_53353 = state_50370;
(statearr_50433_53353[(1)] = cljs.core.first((state_50370[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53354 = state_50370;
state_50370 = G__53354;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__ = function(state_50370){
switch(arguments.length){
case 0:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1.call(this,state_50370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____0;
frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto____1;
return frontend$fs$sync$apply_filetxns_partitions_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50434 = f__27596__auto__();
(statearr_50434[(6)] = c__27595__auto__);

return statearr_50434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
if((typeof frontend !== 'undefined') && (typeof frontend.fs !== 'undefined') && (typeof frontend.fs.sync !== 'undefined') && (typeof frontend.fs.sync.need_sync_remote_QMARK_ !== 'undefined')){
} else {
frontend.fs.sync.need_sync_remote_QMARK_ = (function (){var method_table__5639__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5640__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5641__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5643__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50435 = cljs.core.get_global_hierarchy;
return (fexpr__50435.cljs$core$IFn$_invoke$arity$0 ? fexpr__50435.cljs$core$IFn$_invoke$arity$0() : fexpr__50435.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.fs.sync","need-sync-remote?"),(function (v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max","max",61366548),v)){
return new cljs.core.Keyword(null,"max","max",61366548);
} else {
if(((cljs.core.vector_QMARK_(v)) && (typeof cljs.core.first(v) === 'number'))){
return new cljs.core.Keyword(null,"txid","txid",1606205478);
} else {
if((v instanceof cljs.core.ExceptionInfo)){
return new cljs.core.Keyword(null,"exceptional-response","exceptional-response",-71987345);
} else {
if((v instanceof cljs.core.async.impl.channels.ManyToManyChannel)){
return new cljs.core.Keyword(null,"chan","chan",-2103021695);
} else {
return null;
}
}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5643__auto__,method_table__5639__auto__,prefer_table__5640__auto__,method_cache__5641__auto__,cached_hierarchy__5642__auto__));
})();
}
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"max","max",61366548),(function (_){
return true;
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"txid","txid",1606205478),(function (p__50436){
var vec__50437 = p__50436;
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50437,(0),null);
var remote__GT_local_syncer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50437,(1),null);
var remote_txid = txid;
var local_txid = remote__GT_local_syncer.txid;
return (((local_txid == null)) || ((remote_txid > local_txid)));
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"exceptional-response","exceptional-response",-71987345),(function (resp){
var data = cljs.core.ex_data(resp);
var cause = cljs.core.ex_cause(resp);
var or__5043__auto__ = (function (){var and__5041__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
if(and__5041__auto__){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cause),"txid_to_validate");
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((409),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"status","status",-1997798413)], null)));
}
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"chan","chan",-2103021695),(function (c){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50444){
var state_val_50445 = (state_50444[(1)]);
if((state_val_50445 === (1))){
var state_50444__$1 = state_50444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50444__$1,(2),c);
} else {
if((state_val_50445 === (2))){
var inst_50441 = (state_50444[(2)]);
var inst_50442 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_50441);
var state_50444__$1 = state_50444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50444__$1,inst_50442);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_50446 = [null,null,null,null,null,null,null];
(statearr_50446[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_50446[(1)] = (1));

return statearr_50446;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_50444){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50444);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50447){var ex__27576__auto__ = e50447;
var statearr_50448_53355 = state_50444;
(statearr_50448_53355[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50444[(4)]))){
var statearr_50449_53356 = state_50444;
(statearr_50449_53356[(1)] = cljs.core.first((state_50444[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53357 = state_50444;
state_50444 = G__53357;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_50444){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_50444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50450 = f__27596__auto__();
(statearr_50450[(6)] = c__27595__auto__);

return statearr_50450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));
frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return false;
}));

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {frontend.fs.sync.IRelativePath}
 * @implements {cljs.core.IPrintWithWriter}
*/
frontend.fs.sync.FileChangeEvent = (function (type,dir,path,stat){
this.type = type;
this.dir = dir;
this.path = path;
this.stat = stat;
this.cljs$lang$protocol_mask$partition0$ = 2149580800;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(frontend.fs.sync.FileChangeEvent.prototype.frontend$fs$sync$IRelativePath$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.FileChangeEvent.prototype.frontend$fs$sync$IRelativePath$_relative_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return frontend.fs.sync.remove_dir_prefix(self__.dir,self__.path);
}));

(frontend.fs.sync.FileChangeEvent.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.dir,other.dir)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,other.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)))));
}));

(frontend.fs.sync.FileChangeEvent.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,w,_opts){
var self__ = this;
var ___$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),self__.type,new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.dir,new cljs.core.Keyword(null,"path","path",-188191168),self__.path,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(self__.stat)], null))], 0));
}));

(frontend.fs.sync.FileChangeEvent.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"dir","dir",-919681108,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"stat","stat",269931691,null)], null);
}));

(frontend.fs.sync.FileChangeEvent.cljs$lang$type = true);

(frontend.fs.sync.FileChangeEvent.cljs$lang$ctorStr = "frontend.fs.sync/FileChangeEvent");

(frontend.fs.sync.FileChangeEvent.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"frontend.fs.sync/FileChangeEvent");
}));

/**
 * Positional factory function for frontend.fs.sync/FileChangeEvent.
 */
frontend.fs.sync.__GT_FileChangeEvent = (function frontend$fs$sync$__GT_FileChangeEvent(type,dir,path,stat){
return (new frontend.fs.sync.FileChangeEvent(type,dir,path,stat));
});

/**
 * return transducer.
 *   partition `FileChangeEvent`s, at most N file-change-events in each partition.
 *   only one type in a partition.
 */
frontend.fs.sync.partition_file_change_events = (function frontend$fs$sync$partition_file_change_events(n){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$1((function (e){
var G__50452 = e.type;
switch (G__50452) {
case "add":
case "change":
return new cljs.core.Keyword(null,"add-or-change","add-or-change",1006483131);

break;
case "unlink":
return new cljs.core.Keyword(null,"unlink","unlink",-1436843875);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50452)].join('')));

}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__50451_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(n,p1__50451_SHARP_);
})),cljs.core.cat);
});
frontend.fs.sync.local_changes_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((100));
/**
 * file-watcher callback
 */
frontend.fs.sync.file_watch_handler = (function frontend$fs$sync$file_watch_handler(type,p__50453){
var map__50454 = p__50453;
var map__50454__$1 = cljs.core.__destructure_map(map__50454);
var _payload = map__50454__$1;
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var _content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"_content","_content",-555820160));
var stat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50454__$1,new cljs.core.Keyword(null,"stat","stat",-1370599836));
if(cljs.core.truth_((function (){var G__50455 = frontend.state.get_file_sync_state();
var G__50455__$1 = (((G__50455 == null))?null:(frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.fs.sync.sync_state__stopped_QMARK_.cljs$core$IFn$_invoke$arity$1(G__50455) : frontend.fs.sync.sync_state__stopped_QMARK_.call(null,G__50455)));
if((G__50455__$1 == null)){
return null;
} else {
return cljs.core.not(G__50455__$1);
}
})())){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50461){
var state_val_50462 = (state_50461[(1)]);
if((state_val_50462 === (1))){
var inst_50457 = frontend.fs.sync.__GT_FileChangeEvent(type,dir,path,stat);
var state_50461__$1 = state_50461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50461__$1,(2),frontend.fs.sync.local_changes_chan,inst_50457);
} else {
if((state_val_50462 === (2))){
var inst_50459 = (state_50461[(2)]);
var state_50461__$1 = state_50461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50461__$1,inst_50459);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0 = (function (){
var statearr_50463 = [null,null,null,null,null,null,null];
(statearr_50463[(0)] = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__);

(statearr_50463[(1)] = (1));

return statearr_50463;
});
var frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1 = (function (state_50461){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50461);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50464){var ex__27576__auto__ = e50464;
var statearr_50465_53359 = state_50461;
(statearr_50465_53359[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50461[(4)]))){
var statearr_50466_53360 = state_50461;
(statearr_50466_53360[(1)] = cljs.core.first((state_50461[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53361 = state_50461;
state_50461 = G__53361;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__ = function(state_50461){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1.call(this,state_50461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____0;
frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto____1;
return frontend$fs$sync$file_watch_handler_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50479 = f__27596__auto__();
(statearr_50479[(6)] = c__27595__auto__);

return statearr_50479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
return null;
}
});
/**
 * create a new sync-state
 */
frontend.fs.sync.sync_state = (function frontend$fs$sync$sync_state(){
var _PERCENT_ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword("frontend.fs.sync","starting","frontend.fs.sync/starting",-2095162330),new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY], null);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__update_state = (function frontend$fs$sync$sync_state__update_state(sync_state,next_state){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),next_state)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/state next-state)"));
}

var _PERCENT_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sync_state,new cljs.core.Keyword(null,"state","state",-1988618099),next_state);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__add_current_remote__GT_local_files = (function frontend$fs$sync$sync_state__add_current_remote__GT_local_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),cljs.core.into,paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__add_current_local__GT_remote_files = (function frontend$fs$sync$sync_state__add_current_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),cljs.core.into,paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__update_queued_local__GT_remote_files = (function frontend$fs$sync$sync_state__update_queued_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"queued-local->remote-files","queued-local->remote-files",1051660812),(function (_,n){
return cljs.core.set(n);
}),paths);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.add_history_items = (function frontend$fs$sync$add_history_items(history,paths,now){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),cljs.core.take.cljs$core$IFn$_invoke$arity$1((20))),cljs.core.into.cljs$core$IFn$_invoke$arity$2(history,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (path){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"time","time",1385887882),now], null);
}),paths)));
});
frontend.fs.sync.sync_state__remove_current_remote__GT_local_files = (function frontend$fs$sync$sync_state__remove_current_remote__GT_local_files(sync_state,paths){
var _PERCENT_ = (function (){var now = cljs_time.core.now();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-remote->local-files","current-remote->local-files",1479283085),clojure.set.difference,paths),new cljs.core.Keyword(null,"history","history",-247395220),frontend.fs.sync.add_history_items,paths,now);
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__remove_current_local__GT_remote_files = (function frontend$fs$sync$sync_state__remove_current_local__GT_remote_files(sync_state,paths){
var _PERCENT_ = (function (){var now = cljs_time.core.now();
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(sync_state,new cljs.core.Keyword(null,"current-local->remote-files","current-local->remote-files",-183130256),clojure.set.difference,paths),new cljs.core.Keyword(null,"history","history",-247395220),frontend.fs.sync.add_history_items,paths,now);
})();
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","sync-state","frontend.fs.sync/sync-state",-1582588613),_PERCENT_)){
} else {
throw (new Error("Assert failed: (s/valid? :frontend.fs.sync/sync-state %)"));
}

return _PERCENT_;
});
frontend.fs.sync.sync_state__stopped_QMARK_ = (function frontend$fs$sync$sync_state__stopped_QMARK_(sync_state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(sync_state));
});

/**
 * @interface
 */
frontend.fs.sync.IRemote__GT_LocalSync = function(){};

var frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_53365 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.stop_remote__GT_local_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.stop-remote->local!",this$);
}
}
});
frontend.fs.sync.stop_remote__GT_local_BANG_ = (function frontend$fs$sync$stop_remote__GT_local_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$dyn_53365(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_53366 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_remote__GT_local_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.sync-remote->local!",this$);
}
}
});
/**
 * return ExceptionInfo when error occurs
 */
frontend.fs.sync.sync_remote__GT_local_BANG_ = (function frontend$fs$sync$sync_remote__GT_local_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$dyn_53366(this$);
}
});

var frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_53367 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_remote__GT_local_all_files_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRemote->LocalSync.sync-remote->local-all-files!",this$);
}
}
});
/**
 * sync all files, return ExceptionInfo when error occurs
 */
frontend.fs.sync.sync_remote__GT_local_all_files_BANG_ = (function frontend$fs$sync$sync_remote__GT_local_all_files_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$dyn_53367(this$);
}
});


/**
 * @interface
 */
frontend.fs.sync.ILocal__GT_RemoteSync = function(){};

var frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_53372 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_ignore_files[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_ignore_files["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.get-ignore-files",this$);
}
}
});
/**
 * ignored-files won't be synced to remote
 */
frontend.fs.sync.get_ignore_files = (function frontend$fs$sync$get_ignore_files(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$dyn_53372(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_53373 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.get_monitored_dirs[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.get_monitored_dirs["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.get-monitored-dirs",this$);
}
}
});
frontend.fs.sync.get_monitored_dirs = (function frontend$fs$sync$get_monitored_dirs(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$dyn_53373(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_53374 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.stop_local__GT_remote_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.stop-local->remote!",this$);
}
}
});
frontend.fs.sync.stop_local__GT_remote_BANG_ = (function frontend$fs$sync$stop_local__GT_remote_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$dyn_53374(this$);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_53375 = (function (this$,from_chan){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.ratelimit[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__5391__auto__.call(null,this$,from_chan));
} else {
var m__5389__auto__ = (frontend.fs.sync.ratelimit["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,from_chan) : m__5389__auto__.call(null,this$,from_chan));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.ratelimit",this$);
}
}
});
/**
 * get watched local file-change events from FROM-CHAN,
 *   return chan returning events with rate limited
 */
frontend.fs.sync.ratelimit = (function frontend$fs$sync$ratelimit(this$,from_chan){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2(this$,from_chan);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$dyn_53375(this$,from_chan);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_53376 = (function (this$,es){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__5391__auto__.call(null,this$,es));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_local__GT_remote_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(this$,es) : m__5389__auto__.call(null,this$,es));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.sync-local->remote!",this$);
}
}
});
/**
 * es is a sequence of `FileChangeEvent`, all items have same type.
 */
frontend.fs.sync.sync_local__GT_remote_BANG_ = (function frontend$fs$sync$sync_local__GT_remote_BANG_(this$,es){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(this$,es);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$dyn_53376(this$,es);
}
});

var frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_53377 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (frontend.fs.sync.sync_local__GT_remote_all_files_BANG_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocal->RemoteSync.sync-local->remote-all-files!",this$);
}
}
});
/**
 * compare all local files to remote ones, sync when not equal.
 *   if local-txid != remote-txid, return {:need-sync-remote true}
 */
frontend.fs.sync.sync_local__GT_remote_all_files_BANG_ = (function frontend$fs$sync$sync_local__GT_remote_all_files_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1 == null)))))){
return this$.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(this$);
} else {
return frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$dyn_53377(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {frontend.fs.sync.IRemote__GT_LocalSync}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.Remote__GT_LocalSyncer = (function (user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped,__meta,__extmap,__hash){
this.user_uuid = user_uuid;
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this.repo = repo;
this._STAR_txid = _STAR_txid;
this._STAR_sync_state = _STAR_sync_state;
this.local__GT_remote_syncer = local__GT_remote_syncer;
this._STAR_stopped = _STAR_stopped;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.set_local__GT_remote_syncer_BANG_ = (function (s){
var self__ = this;
var _ = this;
return (self__.local__GT_remote_syncer = s);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.sync_files_remote__GT_local_BANG_ = (function (relative_filepaths,latest_txid){
var self__ = this;
var _ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50581){
var state_val_50582 = (state_50581[(1)]);
if((state_val_50582 === (7))){
var inst_50561 = cljs.core.deref(self__._STAR_stopped);
var state_50581__$1 = state_50581;
if(cljs.core.truth_(inst_50561)){
var statearr_50584_53390 = state_50581__$1;
(statearr_50584_53390[(1)] = (9));

} else {
var statearr_50585_53391 = state_50581__$1;
(statearr_50585_53391[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (1))){
var inst_50542 = (state_50581[(7)]);
var inst_50541 = frontend.fs.sync.filepaths__GT_partitioned_filetxns((10),self__.graph_uuid,self__.user_uuid);
var inst_50542__$1 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_50541,relative_filepaths);
var inst_50543 = cljs.core.flatten(inst_50542__$1);
var inst_50544 = cljs.core.empty_QMARK_(inst_50543);
var state_50581__$1 = (function (){var statearr_50586 = state_50581;
(statearr_50586[(7)] = inst_50542__$1);

return statearr_50586;
})();
if(inst_50544){
var statearr_50587_53392 = state_50581__$1;
(statearr_50587_53392[(1)] = (2));

} else {
var statearr_50588_53393 = state_50581__$1;
(statearr_50588_53393[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (4))){
var inst_50554 = (state_50581[(8)]);
var inst_50554__$1 = (state_50581[(2)]);
var inst_50555 = (inst_50554__$1 instanceof cljs.core.ExceptionInfo);
var state_50581__$1 = (function (){var statearr_50589 = state_50581;
(statearr_50589[(8)] = inst_50554__$1);

return statearr_50589;
})();
if(cljs.core.truth_(inst_50555)){
var statearr_50590_53394 = state_50581__$1;
(statearr_50590_53394[(1)] = (6));

} else {
var statearr_50591_53395 = state_50581__$1;
(statearr_50591_53395[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (13))){
var state_50581__$1 = state_50581;
var statearr_50592_53396 = state_50581__$1;
(statearr_50592_53396[(2)] = null);

(statearr_50592_53396[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (6))){
var inst_50554 = (state_50581[(8)]);
var inst_50557 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_50558 = [inst_50554];
var inst_50559 = cljs.core.PersistentHashMap.fromArrays(inst_50557,inst_50558);
var state_50581__$1 = state_50581;
var statearr_50594_53397 = state_50581__$1;
(statearr_50594_53397[(2)] = inst_50559);

(statearr_50594_53397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (3))){
var inst_50542 = (state_50581[(7)]);
var inst_50550 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_50542,self__.repo,null,self__._STAR_stopped,null,null);
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50581__$1,(5),inst_50550);
} else {
if((state_val_50582 === (12))){
var inst_50568 = frontend.fs.sync.update_graphs_txid_BANG_(latest_txid,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_50569 = cljs.core.reset_BANG_(self__._STAR_txid,latest_txid);
var inst_50570 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_50571 = [true];
var inst_50572 = cljs.core.PersistentHashMap.fromArrays(inst_50570,inst_50571);
var state_50581__$1 = (function (){var statearr_50619 = state_50581;
(statearr_50619[(9)] = inst_50569);

(statearr_50619[(10)] = inst_50568);

return statearr_50619;
})();
var statearr_50620_53398 = state_50581__$1;
(statearr_50620_53398[(2)] = inst_50572);

(statearr_50620_53398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (2))){
var inst_50546 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_50547 = [true];
var inst_50548 = cljs.core.PersistentHashMap.fromArrays(inst_50546,inst_50547);
var state_50581__$1 = state_50581;
var statearr_50621_53399 = state_50581__$1;
(statearr_50621_53399[(2)] = inst_50548);

(statearr_50621_53399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (11))){
var inst_50577 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
var statearr_50622_53400 = state_50581__$1;
(statearr_50622_53400[(2)] = inst_50577);

(statearr_50622_53400[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (9))){
var inst_50563 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_50564 = [true];
var inst_50565 = cljs.core.PersistentHashMap.fromArrays(inst_50563,inst_50564);
var state_50581__$1 = state_50581;
var statearr_50623_53401 = state_50581__$1;
(statearr_50623_53401[(2)] = inst_50565);

(statearr_50623_53401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (5))){
var inst_50552 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
var statearr_50624_53403 = state_50581__$1;
(statearr_50624_53403[(2)] = inst_50552);

(statearr_50624_53403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (14))){
var inst_50575 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
var statearr_50625_53405 = state_50581__$1;
(statearr_50625_53405[(2)] = inst_50575);

(statearr_50625_53405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (10))){
var state_50581__$1 = state_50581;
var statearr_50626_53406 = state_50581__$1;
(statearr_50626_53406[(1)] = (12));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (8))){
var inst_50579 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50581__$1,inst_50579);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_50628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50628[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_50628[(1)] = (1));

return statearr_50628;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_50581){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50581);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50629){var ex__27576__auto__ = e50629;
var statearr_50630_53407 = state_50581;
(statearr_50630_53407[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50581[(4)]))){
var statearr_50631_53408 = state_50581;
(statearr_50631_53408[(1)] = cljs.core.first((state_50581[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53409 = state_50581;
state_50581 = G__53409;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_50581){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_50581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50633 = f__27596__auto__();
(statearr_50633[(6)] = c__27595__auto__);

return statearr_50633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k50533,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__50636 = k50533;
var G__50636__$1 = (((G__50636 instanceof cljs.core.Keyword))?G__50636.fqn:null);
switch (G__50636__$1) {
case "user-uuid":
return self__.user_uuid;

break;
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "repo":
return self__.repo;

break;
case "*txid":
return self__._STAR_txid;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "local->remote-syncer":
return self__.local__GT_remote_syncer;

break;
case "*stopped":
return self__._STAR_stopped;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50533,else__5343__auto__);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__50644){
var vec__50645 = p__50644;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50645,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50645,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.vreset_BANG_(self__._STAR_stopped,true);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50738){
var state_val_50739 = (state_50738[(1)]);
if((state_val_50739 === (7))){
var inst_50663 = (state_50738[(7)]);
var inst_50668 = (inst_50663 - (1));
var inst_50669 = cljs.core.deref(self__._STAR_txid);
var inst_50670 = (inst_50668 > inst_50669);
var state_50738__$1 = state_50738;
var statearr_50740_53412 = state_50738__$1;
(statearr_50740_53412[(2)] = inst_50670);

(statearr_50740_53412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (20))){
var inst_50715 = cljs.core.deref(self__._STAR_stopped);
var state_50738__$1 = state_50738;
if(cljs.core.truth_(inst_50715)){
var statearr_50741_53413 = state_50738__$1;
(statearr_50741_53413[(1)] = (22));

} else {
var statearr_50742_53414 = state_50738__$1;
(statearr_50742_53414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (27))){
var inst_50732 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50743_53415 = state_50738__$1;
(statearr_50743_53415[(2)] = inst_50732);

(statearr_50743_53415[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (1))){
var inst_50651 = cljs.core.deref(self__._STAR_txid);
var inst_50652 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_diff$arity$3(null,self__.graph_uuid,inst_50651);
var state_50738__$1 = state_50738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50738__$1,(2),inst_50652);
} else {
if((state_val_50739 === (24))){
var inst_50734 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50744_53416 = state_50738__$1;
(statearr_50744_53416[(2)] = inst_50734);

(statearr_50744_53416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (4))){
var inst_50665 = (state_50738[(8)]);
var inst_50654 = (state_50738[(9)]);
var inst_50663 = (state_50738[(7)]);
var inst_50661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(0),null);
var inst_50662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(1),null);
var inst_50663__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50654,(2),null);
var inst_50665__$1 = (inst_50663__$1 == null);
var state_50738__$1 = (function (){var statearr_50745 = state_50738;
(statearr_50745[(8)] = inst_50665__$1);

(statearr_50745[(10)] = inst_50661);

(statearr_50745[(11)] = inst_50662);

(statearr_50745[(7)] = inst_50663__$1);

return statearr_50745;
})();
if(cljs.core.truth_(inst_50665__$1)){
var statearr_50746_53417 = state_50738__$1;
(statearr_50746_53417[(1)] = (6));

} else {
var statearr_50747_53418 = state_50738__$1;
(statearr_50747_53418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (15))){
var inst_50662 = (state_50738[(11)]);
var inst_50691 = frontend.fs.sync.update_graphs_txid_BANG_(inst_50662,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_50692 = cljs.core.reset_BANG_(self__._STAR_txid,inst_50662);
var inst_50693 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_50694 = [true];
var inst_50695 = cljs.core.PersistentHashMap.fromArrays(inst_50693,inst_50694);
var state_50738__$1 = (function (){var statearr_50748 = state_50738;
(statearr_50748[(12)] = inst_50692);

(statearr_50748[(13)] = inst_50691);

return statearr_50748;
})();
var statearr_50749_53421 = state_50738__$1;
(statearr_50749_53421[(2)] = inst_50695);

(statearr_50749_53421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (21))){
var inst_50736 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50738__$1,inst_50736);
} else {
if((state_val_50739 === (13))){
var state_50738__$1 = state_50738;
var statearr_50750_53422 = state_50738__$1;
(statearr_50750_53422[(2)] = null);

(statearr_50750_53422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (22))){
var inst_50717 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_50718 = [true];
var inst_50719 = cljs.core.PersistentHashMap.fromArrays(inst_50717,inst_50718);
var state_50738__$1 = state_50738;
var statearr_50751_53423 = state_50738__$1;
(statearr_50751_53423[(2)] = inst_50719);

(statearr_50751_53423[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (29))){
var state_50738__$1 = state_50738;
var statearr_50752_53424 = state_50738__$1;
(statearr_50752_53424[(2)] = null);

(statearr_50752_53424[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (6))){
var inst_50665 = (state_50738[(8)]);
var state_50738__$1 = state_50738;
var statearr_50753_53425 = state_50738__$1;
(statearr_50753_53425[(2)] = inst_50665);

(statearr_50753_53425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (28))){
var inst_50725 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_50726 = [true];
var inst_50727 = cljs.core.PersistentHashMap.fromArrays(inst_50725,inst_50726);
var state_50738__$1 = state_50738;
var statearr_50754_53426 = state_50738__$1;
(statearr_50754_53426[(2)] = inst_50727);

(statearr_50754_53426[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (25))){
var inst_50708 = (state_50738[(14)]);
var state_50738__$1 = state_50738;
var statearr_50755_53427 = state_50738__$1;
(statearr_50755_53427[(2)] = inst_50708);

(statearr_50755_53427[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (17))){
var inst_50701 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50756_53428 = state_50738__$1;
(statearr_50756_53428[(2)] = inst_50701);

(statearr_50756_53428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (3))){
var inst_50654 = (state_50738[(9)]);
var state_50738__$1 = state_50738;
var statearr_50757_53429 = state_50738__$1;
(statearr_50757_53429[(2)] = inst_50654);

(statearr_50757_53429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (12))){
var inst_50654 = (state_50738[(9)]);
var inst_50661 = (state_50738[(10)]);
var inst_50687 = (state_50738[(15)]);
var inst_50662 = (state_50738[(11)]);
var inst_50663 = (state_50738[(7)]);
var inst_50682 = frontend.fs.sync.diffs__GT_partitioned_filetxns((10));
var inst_50683 = (function (){var diff_r = inst_50654;
var vec__50658 = inst_50654;
var diff_txns = inst_50661;
var latest_txid = inst_50662;
var min_txid = inst_50663;
return (function (r,i){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.reverse(i));
});
})();
var inst_50684 = cljs.core.completing.cljs$core$IFn$_invoke$arity$1(inst_50683);
var inst_50685 = cljs.core.List.EMPTY;
var inst_50686 = cljs.core.reverse(inst_50661);
var inst_50687__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(inst_50682,inst_50684,inst_50685,inst_50686);
var inst_50688 = cljs.core.flatten(inst_50687__$1);
var inst_50689 = cljs.core.empty_QMARK_(inst_50688);
var state_50738__$1 = (function (){var statearr_50758 = state_50738;
(statearr_50758[(15)] = inst_50687__$1);

return statearr_50758;
})();
if(inst_50689){
var statearr_50759_53432 = state_50738__$1;
(statearr_50759_53432[(1)] = (15));

} else {
var statearr_50760_53433 = state_50738__$1;
(statearr_50760_53433[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (2))){
var inst_50654 = (state_50738[(9)]);
var inst_50654__$1 = (state_50738[(2)]);
var inst_50655 = (inst_50654__$1 instanceof cljs.core.ExceptionInfo);
var state_50738__$1 = (function (){var statearr_50761 = state_50738;
(statearr_50761[(9)] = inst_50654__$1);

return statearr_50761;
})();
if(cljs.core.truth_(inst_50655)){
var statearr_50762_53434 = state_50738__$1;
(statearr_50762_53434[(1)] = (3));

} else {
var statearr_50763_53435 = state_50738__$1;
(statearr_50763_53435[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (23))){
var inst_50708 = (state_50738[(14)]);
var inst_50721 = new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586).cljs$core$IFn$_invoke$arity$1(inst_50708);
var state_50738__$1 = state_50738;
if(cljs.core.truth_(inst_50721)){
var statearr_50764_53436 = state_50738__$1;
(statearr_50764_53436[(1)] = (25));

} else {
var statearr_50765_53437 = state_50738__$1;
(statearr_50765_53437[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (19))){
var inst_50708 = (state_50738[(14)]);
var inst_50711 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_50712 = [inst_50708];
var inst_50713 = cljs.core.PersistentHashMap.fromArrays(inst_50711,inst_50712);
var state_50738__$1 = state_50738;
var statearr_50780_53438 = state_50738__$1;
(statearr_50780_53438[(2)] = inst_50713);

(statearr_50780_53438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (11))){
var inst_50706 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50781_53439 = state_50738__$1;
(statearr_50781_53439[(2)] = inst_50706);

(statearr_50781_53439[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (9))){
var inst_50663 = (state_50738[(7)]);
var inst_50674 = cljs.core.deref(self__._STAR_txid);
var inst_50675 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["min-txid",inst_50663,"request-txid",inst_50674], 0));
var inst_50676 = [new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586)];
var inst_50677 = [true];
var inst_50678 = cljs.core.PersistentHashMap.fromArrays(inst_50676,inst_50677);
var state_50738__$1 = (function (){var statearr_50782 = state_50738;
(statearr_50782[(16)] = inst_50675);

return statearr_50782;
})();
var statearr_50783_53440 = state_50738__$1;
(statearr_50783_53440[(2)] = inst_50678);

(statearr_50783_53440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (5))){
var inst_50708 = (state_50738[(14)]);
var inst_50708__$1 = (state_50738[(2)]);
var inst_50709 = (inst_50708__$1 instanceof cljs.core.ExceptionInfo);
var state_50738__$1 = (function (){var statearr_50784 = state_50738;
(statearr_50784[(14)] = inst_50708__$1);

return statearr_50784;
})();
if(cljs.core.truth_(inst_50709)){
var statearr_50785_53441 = state_50738__$1;
(statearr_50785_53441[(1)] = (19));

} else {
var statearr_50786_53442 = state_50738__$1;
(statearr_50786_53442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (14))){
var inst_50704 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50787_53443 = state_50738__$1;
(statearr_50787_53443[(2)] = inst_50704);

(statearr_50787_53443[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (26))){
var state_50738__$1 = state_50738;
var statearr_50788_53444 = state_50738__$1;
(statearr_50788_53444[(1)] = (28));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (16))){
var inst_50687 = (state_50738[(15)]);
var inst_50697 = frontend.fs.sync.apply_filetxns_partitions(self__._STAR_sync_state,self__.user_uuid,self__.graph_uuid,self__.base_path,inst_50687,self__.repo,self__._STAR_txid,self__._STAR_stopped,null,null);
var state_50738__$1 = state_50738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50738__$1,(18),inst_50697);
} else {
if((state_val_50739 === (30))){
var inst_50730 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50791_53445 = state_50738__$1;
(statearr_50791_53445[(2)] = inst_50730);

(statearr_50791_53445[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (10))){
var inst_50662 = (state_50738[(11)]);
var inst_50680 = cljs.core.pos_int_QMARK_(inst_50662);
var state_50738__$1 = state_50738;
if(inst_50680){
var statearr_50793_53446 = state_50738__$1;
(statearr_50793_53446[(1)] = (12));

} else {
var statearr_50794_53447 = state_50738__$1;
(statearr_50794_53447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (18))){
var inst_50699 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
var statearr_50796_53448 = state_50738__$1;
(statearr_50796_53448[(2)] = inst_50699);

(statearr_50796_53448[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50739 === (8))){
var inst_50672 = (state_50738[(2)]);
var state_50738__$1 = state_50738;
if(cljs.core.truth_(inst_50672)){
var statearr_50797_53449 = state_50738__$1;
(statearr_50797_53449[(1)] = (9));

} else {
var statearr_50798_53450 = state_50738__$1;
(statearr_50798_53450[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_50801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50801[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_50801[(1)] = (1));

return statearr_50801;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_50738){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50738);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50803){var ex__27576__auto__ = e50803;
var statearr_50804_53451 = state_50738;
(statearr_50804_53451[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50738[(4)]))){
var statearr_50805_53452 = state_50738;
(statearr_50805_53452[(1)] = cljs.core.first((state_50738[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53453 = state_50738;
state_50738 = G__53453;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_50738){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_50738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50807 = f__27596__auto__();
(statearr_50807[(6)] = c__27595__auto__);

return statearr_50807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50828){
var state_val_50829 = (state_50828[(1)]);
if((state_val_50829 === (1))){
var inst_50809 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_50810 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_50828__$1 = (function (){var statearr_50832 = state_50828;
(statearr_50832[(7)] = inst_50810);

return statearr_50832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50828__$1,(2),inst_50809);
} else {
if((state_val_50829 === (2))){
var inst_50810 = (state_50828[(7)]);
var inst_50812 = (state_50828[(2)]);
var state_50828__$1 = (function (){var statearr_50833 = state_50828;
(statearr_50833[(8)] = inst_50812);

return statearr_50833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50828__$1,(3),inst_50810);
} else {
if((state_val_50829 === (3))){
var inst_50812 = (state_50828[(8)]);
var inst_50815 = (state_50828[(2)]);
var inst_50816 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_50812,inst_50815);
var inst_50817 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_50828__$1 = (function (){var statearr_50834 = state_50828;
(statearr_50834[(9)] = inst_50816);

return statearr_50834;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50828__$1,(4),inst_50817);
} else {
if((state_val_50829 === (4))){
var inst_50816 = (state_50828[(9)]);
var inst_50819 = (state_50828[(2)]);
var inst_50820 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_50819);
var inst_50821 = cljs.core.count(inst_50816);
var inst_50822 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(remote->local)]",inst_50821,"files need to sync"], 0));
var inst_50823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_50816);
var inst_50824 = this$__$1.sync_files_remote__GT_local_BANG_(inst_50823,inst_50820);
var state_50828__$1 = (function (){var statearr_50836 = state_50828;
(statearr_50836[(10)] = inst_50822);

return statearr_50836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50828__$1,(5),inst_50824);
} else {
if((state_val_50829 === (5))){
var inst_50826 = (state_50828[(2)]);
var state_50828__$1 = state_50828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50828__$1,inst_50826);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_50837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50837[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_50837[(1)] = (1));

return statearr_50837;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_50828){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50828);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50838){var ex__27576__auto__ = e50838;
var statearr_50839_53456 = state_50828;
(statearr_50839_53456[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50828[(4)]))){
var statearr_50840_53457 = state_50828;
(statearr_50840_53457[(1)] = cljs.core.first((state_50828[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53458 = state_50828;
state_50828 = G__53458;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_50828){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_50828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50841 = f__27596__auto__();
(statearr_50841[(6)] = c__27595__auto__);

return statearr_50841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.Remote->LocalSyncer{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50532){
var self__ = this;
var G__50532__$1 = this;
return (new cljs.core.RecordIter((0),G__50532__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1517379967 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50534,other50535){
var self__ = this;
var this50534__$1 = this;
return (((!((other50535 == null)))) && ((((this50534__$1.constructor === other50535.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.user_uuid,other50535.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.graph_uuid,other50535.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.base_path,other50535.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.repo,other50535.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1._STAR_txid,other50535._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1._STAR_sync_state,other50535._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.local__GT_remote_syncer,other50535.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1._STAR_stopped,other50535._STAR_stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50534__$1.__extmap,other50535.__extmap)))))))))))))))))))));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k50533){
var self__ = this;
var this__5347__auto____$1 = this;
var G__50865 = k50533;
var G__50865__$1 = (((G__50865 instanceof cljs.core.Keyword))?G__50865.fqn:null);
switch (G__50865__$1) {
case "user-uuid":
case "graph-uuid":
case "base-path":
case "repo":
case "*txid":
case "*sync-state":
case "local->remote-syncer":
case "*stopped":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50533);

}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__50532){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__50866 = cljs.core.keyword_identical_QMARK_;
var expr__50867 = k__5349__auto__;
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(G__50532,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,G__50532,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,G__50532,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__50532,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__50532,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,G__50532,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,G__50532,self__._STAR_stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50866.cljs$core$IFn$_invoke$arity$2 ? pred__50866.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__50867) : pred__50866.call(null,new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),expr__50867)))){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__50532,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__50532),null));
}
}
}
}
}
}
}
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*stopped","*stopped",1256342585),self__._STAR_stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__50532){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Remote__GT_LocalSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_txid,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__._STAR_stopped,G__50532,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*stopped","*stopped",-1398093184,null)], null);
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$type = true);

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Remote->LocalSyncer",null,(1),null));
}));

(frontend.fs.sync.Remote__GT_LocalSyncer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/Remote->LocalSyncer");
}));

/**
 * Positional factory function for frontend.fs.sync/Remote->LocalSyncer.
 */
frontend.fs.sync.__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$__GT_Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped){
return (new frontend.fs.sync.Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,local__GT_remote_syncer,_STAR_stopped,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/Remote->LocalSyncer, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_Remote__GT_LocalSyncer = (function frontend$fs$sync$map__GT_Remote__GT_LocalSyncer(G__50537){
var extmap__5382__auto__ = (function (){var G__50875 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50537,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585)], 0));
if(cljs.core.record_QMARK_(G__50537)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50875);
} else {
return G__50875;
}
})();
return (new frontend.fs.sync.Remote__GT_LocalSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__50537),new cljs.core.Keyword(null,"*stopped","*stopped",1256342585).cljs$core$IFn$_invoke$arity$1(G__50537),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

/**
 * return true when file changed compared with remote
 */
frontend.fs.sync.file_changed_QMARK_ = (function frontend$fs$sync$file_changed_QMARK_(graph_uuid,file_path_without_base_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50902){
var state_val_50903 = (state_50902[(1)]);
if((state_val_50903 === (1))){
var inst_50886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50887 = [file_path_without_base_path];
var inst_50888 = (new cljs.core.PersistentVector(null,1,(5),inst_50886,inst_50887,null));
var inst_50889 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_files_meta$arity$3(null,graph_uuid,inst_50888);
var state_50902__$1 = state_50902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50902__$1,(2),inst_50889);
} else {
if((state_val_50903 === (2))){
var inst_50891 = (state_50902[(2)]);
var inst_50892 = cljs.core.first(inst_50891);
var inst_50893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50894 = [file_path_without_base_path];
var inst_50895 = (new cljs.core.PersistentVector(null,1,(5),inst_50893,inst_50894,null));
var inst_50896 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,graph_uuid,base_path,inst_50895);
var state_50902__$1 = (function (){var statearr_50910 = state_50902;
(statearr_50910[(7)] = inst_50892);

return statearr_50910;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50902__$1,(3),inst_50896);
} else {
if((state_val_50903 === (3))){
var inst_50892 = (state_50902[(7)]);
var inst_50898 = (state_50902[(2)]);
var inst_50899 = cljs.core.first(inst_50898);
var inst_50900 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_50892,inst_50899);
var state_50902__$1 = state_50902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50902__$1,inst_50900);
} else {
return null;
}
}
}
});
return (function() {
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_50913 = [null,null,null,null,null,null,null,null];
(statearr_50913[(0)] = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__);

(statearr_50913[(1)] = (1));

return statearr_50913;
});
var frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1 = (function (state_50902){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50902);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50915){var ex__27576__auto__ = e50915;
var statearr_50916_53464 = state_50902;
(statearr_50916_53464[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50902[(4)]))){
var statearr_50919_53465 = state_50902;
(statearr_50919_53465[(1)] = cljs.core.first((state_50902[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53466 = state_50902;
state_50902 = G__53466;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__ = function(state_50902){
switch(arguments.length){
case 0:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1.call(this,state_50902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$file_changed_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50927 = f__27596__auto__();
(statearr_50927[(6)] = c__27595__auto__);

return statearr_50927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.local_file_exists_QMARK_ = (function frontend$fs$sync$local_file_exists_QMARK_(relative_path,base_path){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_50955){
var state_val_50956 = (state_50955[(1)]);
if((state_val_50956 === (1))){
var inst_50944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50946 = [relative_path];
var inst_50948 = (new cljs.core.PersistentVector(null,1,(5),inst_50944,inst_50946,null));
var inst_50949 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",base_path,inst_50948);
var state_50955__$1 = state_50955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50955__$1,(2),inst_50949);
} else {
if((state_val_50956 === (2))){
var inst_50951 = (state_50955[(2)]);
var inst_50952 = cljs.core.ex_cause(inst_50951);
var inst_50953 = (inst_50952 == null);
var state_50955__$1 = state_50955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50955__$1,inst_50953);
} else {
return null;
}
}
});
return (function() {
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = null;
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0 = (function (){
var statearr_50983 = [null,null,null,null,null,null,null];
(statearr_50983[(0)] = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__);

(statearr_50983[(1)] = (1));

return statearr_50983;
});
var frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1 = (function (state_50955){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_50955);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e50984){var ex__27576__auto__ = e50984;
var statearr_50985_53467 = state_50955;
(statearr_50985_53467[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_50955[(4)]))){
var statearr_50986_53468 = state_50955;
(statearr_50986_53468[(1)] = cljs.core.first((state_50955[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53469 = state_50955;
state_50955 = G__53469;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__ = function(state_50955){
switch(arguments.length){
case 0:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1.call(this,state_50955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____0;
frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto____1;
return frontend$fs$sync$local_file_exists_QMARK__$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_50987 = f__27596__auto__();
(statearr_50987[(6)] = c__27595__auto__);

return statearr_50987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.contains_path_QMARK_ = (function frontend$fs$sync$contains_path_QMARK_(regexps,path){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50997_SHARP_,p2__50996_SHARP_){
if(cljs.core.truth_(cljs.core.re_find(p2__50996_SHARP_,path))){
return cljs.core.reduced(true);
} else {
return null;
}
}),false,regexps);
});
/**
 * filter local-change events:
 *   - for 'unlink' event
 *  - when related file exists on local dir, ignore this event
 *   - for 'add' | 'change' event
 *  - when related file's content is same as remote file, ignore it
 */
frontend.fs.sync.filter_local_changes_pred = (function frontend$fs$sync$filter_local_changes_pred(e,basepath,graph_uuid){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51052){
var state_val_51053 = (state_51052[(1)]);
if((state_val_51053 === (7))){
var inst_51034 = (state_51052[(2)]);
var state_51052__$1 = state_51052;
var statearr_51055_53470 = state_51052__$1;
(statearr_51055_53470[(2)] = inst_51034);

(statearr_51055_53470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (1))){
var inst_51015 = frontend.fs.sync.relative_path(e);
var inst_51048 = e.type;
var state_51052__$1 = (function (){var statearr_51056 = state_51052;
(statearr_51056[(7)] = inst_51015);

return statearr_51056;
})();
var G__51057_53471 = inst_51048;
switch (G__51057_53471) {
case "unlink":
var statearr_51059_53473 = state_51052__$1;
(statearr_51059_53473[(1)] = (3));


break;
case "add":
case "change":
var statearr_51060_53474 = state_51052__$1;
(statearr_51060_53474[(1)] = (8));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51057_53471)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (4))){
var inst_51023 = (state_51052[(8)]);
var inst_51023__$1 = (state_51052[(2)]);
var inst_51025 = (inst_51023__$1 == null);
var state_51052__$1 = (function (){var statearr_51061 = state_51052;
(statearr_51061[(8)] = inst_51023__$1);

return statearr_51061;
})();
if(cljs.core.truth_(inst_51025)){
var statearr_51062_53475 = state_51052__$1;
(statearr_51062_53475[(1)] = (5));

} else {
var statearr_51063_53476 = state_51052__$1;
(statearr_51063_53476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (13))){
var inst_51043 = (state_51052[(2)]);
var state_51052__$1 = state_51052;
var statearr_51064_53477 = state_51052__$1;
(statearr_51064_53477[(2)] = inst_51043);

(statearr_51064_53477[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (6))){
var inst_51023 = (state_51052[(8)]);
var inst_51032 = cljs.core.ex_cause(inst_51023);
var state_51052__$1 = state_51052;
var statearr_51065_53478 = state_51052__$1;
(statearr_51065_53478[(2)] = inst_51032);

(statearr_51065_53478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (3))){
var inst_51015 = (state_51052[(7)]);
var inst_51018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51019 = [inst_51015];
var inst_51020 = (new cljs.core.PersistentVector(null,1,(5),inst_51018,inst_51019,null));
var inst_51021 = frontend.fs.sync.get_local_files_meta(frontend.fs.sync.rsapi,"",basepath,inst_51020);
var state_51052__$1 = state_51052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51052__$1,(4),inst_51021);
} else {
if((state_val_51053 === (12))){
var inst_51046 = (state_51052[(2)]);
var state_51052__$1 = state_51052;
var statearr_51067_53479 = state_51052__$1;
(statearr_51067_53479[(2)] = inst_51046);

(statearr_51067_53479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (2))){
var inst_51050 = (state_51052[(2)]);
var state_51052__$1 = state_51052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51052__$1,inst_51050);
} else {
if((state_val_51053 === (11))){
var inst_51038 = (state_51052[(9)]);
var state_51052__$1 = state_51052;
var statearr_51068_53481 = state_51052__$1;
(statearr_51068_53481[(2)] = inst_51038);

(statearr_51068_53481[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (9))){
var inst_51038 = (state_51052[(9)]);
var inst_51038__$1 = (state_51052[(2)]);
var state_51052__$1 = (function (){var statearr_51069 = state_51052;
(statearr_51069[(9)] = inst_51038__$1);

return statearr_51069;
})();
if(cljs.core.truth_(inst_51038__$1)){
var statearr_51070_53482 = state_51052__$1;
(statearr_51070_53482[(1)] = (10));

} else {
var statearr_51071_53483 = state_51052__$1;
(statearr_51071_53483[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (5))){
var state_51052__$1 = state_51052;
var statearr_51072_53484 = state_51052__$1;
(statearr_51072_53484[(2)] = null);

(statearr_51072_53484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51053 === (10))){
var inst_51015 = (state_51052[(7)]);
var inst_51041 = frontend.fs.sync.file_changed_QMARK_(graph_uuid,inst_51015,basepath);
var state_51052__$1 = state_51052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51052__$1,(13),inst_51041);
} else {
if((state_val_51053 === (8))){
var inst_51015 = (state_51052[(7)]);
var inst_51036 = frontend.fs.sync.local_file_exists_QMARK_(inst_51015,basepath);
var state_51052__$1 = state_51052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51052__$1,(9),inst_51036);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0 = (function (){
var statearr_51076 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51076[(0)] = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__);

(statearr_51076[(1)] = (1));

return statearr_51076;
});
var frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1 = (function (state_51052){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51052);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51077){var ex__27576__auto__ = e51077;
var statearr_51078_53486 = state_51052;
(statearr_51078_53486[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51052[(4)]))){
var statearr_51080_53487 = state_51052;
(statearr_51080_53487[(1)] = cljs.core.first((state_51052[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53488 = state_51052;
state_51052 = G__53488;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__ = function(state_51052){
switch(arguments.length){
case 0:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1.call(this,state_51052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____0;
frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto____1;
return frontend$fs$sync$filter_local_changes_pred_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51081 = f__27596__auto__();
(statearr_51081[(6)] = c__27595__auto__);

return statearr_51081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {frontend.fs.sync.ILocal__GT_RemoteSync}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.Local__GT_RemoteSyncer = (function (user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped,__meta,__extmap,__hash){
this.user_uuid = user_uuid;
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this.repo = repo;
this._STAR_sync_state = _STAR_sync_state;
this.rate = rate;
this._STAR_txid = _STAR_txid;
this.remote__GT_local_syncer = remote__GT_local_syncer;
this.stop_chan = stop_chan;
this.stopped = stopped;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.filter_file_change_events_fn = (function (){
var self__ = this;
var this$ = this;
return (function (e){
var and__5041__auto__ = (e instanceof frontend.fs.sync.FileChangeEvent);
if(and__5041__auto__){
var and__5041__auto____$1 = clojure.string.starts_with_QMARK_(e.dir,self__.base_path);
if(and__5041__auto____$1){
var and__5041__auto____$2 = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null),frontend.fs.sync.relative_path(e)));
if(and__5041__auto____$2){
return frontend.fs.sync.contains_path_QMARK_(this$.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null),frontend.fs.sync.relative_path(e));
} else {
return and__5041__auto____$2;
}
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
});
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.filtered_chan = (function (n){
var self__ = this;
var this$ = this;
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(n,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(this$.filter_file_change_events_fn()));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.set_remote__GT_local_syncer_BANG_ = (function (s){
var self__ = this;
var _ = this;
return (self__.remote__GT_local_syncer = s);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k51088,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__51143 = k51088;
var G__51143__$1 = (((G__51143 instanceof cljs.core.Keyword))?G__51143.fqn:null);
switch (G__51143__$1) {
case "user-uuid":
return self__.user_uuid;

break;
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "repo":
return self__.repo;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "rate":
return self__.rate;

break;
case "*txid":
return self__._STAR_txid;

break;
case "remote->local-syncer":
return self__.remote__GT_local_syncer;

break;
case "stop-chan":
return self__.stop_chan;

break;
case "stopped":
return self__.stopped;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51088,else__5343__auto__);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__51145){
var vec__51146 = p__51145;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [/\.DS_Store$/,null,/logseq\/graphs-txid.edn$/,null,/logseq\/bak\/.*/,null,/version-files\/.*/,null,/logseq\/\.recycle\/.*/,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [/^pages\//,null,/^logseq\//,null,/^assets\//,null,/^journals\//,null], null), null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.close_BANG_(self__.stop_chan);

return (self__.stopped = true);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2 = (function (this$,from_chan){
var self__ = this;
var this$__$1 = this;
var c = this$__$1.filtered_chan((10000));
var filter_e_fn = this$__$1.filter_file_change_events_fn();
var c__27595__auto___53490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51258){
var state_val_51259 = (state_51258[(1)]);
if((state_val_51259 === (7))){
var inst_51205 = (state_51258[(2)]);
var inst_51206 = cljs.core.__destructure_map(inst_51205);
var inst_51207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var inst_51208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"e","e",1381269198));
var inst_51209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51206,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_51258__$1 = (function (){var statearr_51261 = state_51258;
(statearr_51261[(7)] = inst_51207);

(statearr_51261[(8)] = inst_51208);

return statearr_51261;
})();
if(cljs.core.truth_(inst_51209)){
var statearr_51262_53491 = state_51258__$1;
(statearr_51262_53491[(1)] = (17));

} else {
var statearr_51263_53492 = state_51258__$1;
(statearr_51263_53492[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (20))){
var inst_51152 = (state_51258[(9)]);
var inst_51214 = cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(c,inst_51152,false);
var inst_51215 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,null);
var inst_51216 = cljs.core.async.timeout(self__.rate);
var inst_51217 = cljs.core.PersistentVector.EMPTY;
var inst_51151 = inst_51216;
var inst_51152__$1 = inst_51217;
var state_51258__$1 = (function (){var statearr_51264 = state_51258;
(statearr_51264[(9)] = inst_51152__$1);

(statearr_51264[(10)] = inst_51214);

(statearr_51264[(11)] = inst_51151);

(statearr_51264[(12)] = inst_51215);

return statearr_51264;
})();
var statearr_51265_53493 = state_51258__$1;
(statearr_51265_53493[(2)] = null);

(statearr_51265_53493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (27))){
var inst_51223 = (state_51258[(13)]);
var state_51258__$1 = state_51258;
var statearr_51266_53494 = state_51258__$1;
(statearr_51266_53494[(2)] = inst_51223);

(statearr_51266_53494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (1))){
var inst_51149 = cljs.core.async.timeout(self__.rate);
var inst_51150 = cljs.core.PersistentVector.EMPTY;
var inst_51151 = inst_51149;
var inst_51152 = inst_51150;
var state_51258__$1 = (function (){var statearr_51267 = state_51258;
(statearr_51267[(9)] = inst_51152);

(statearr_51267[(11)] = inst_51151);

return statearr_51267;
})();
var statearr_51268_53495 = state_51258__$1;
(statearr_51268_53495[(2)] = null);

(statearr_51268_53495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (24))){
var inst_51208 = (state_51258[(8)]);
var inst_51242 = (inst_51208 == null);
var state_51258__$1 = state_51258;
if(cljs.core.truth_(inst_51242)){
var statearr_51269_53496 = state_51258__$1;
(statearr_51269_53496[(1)] = (33));

} else {
var statearr_51270_53497 = state_51258__$1;
(statearr_51270_53497[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (4))){
var inst_51170 = (state_51258[(14)]);
var inst_51151 = (state_51258[(11)]);
var inst_51172 = (state_51258[(15)]);
var inst_51170__$1 = (state_51258[(2)]);
var inst_51171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51170__$1,(0),null);
var inst_51172__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51170__$1,(1),null);
var inst_51173 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51172__$1,inst_51151);
var state_51258__$1 = (function (){var statearr_51271 = state_51258;
(statearr_51271[(14)] = inst_51170__$1);

(statearr_51271[(16)] = inst_51171);

(statearr_51271[(15)] = inst_51172__$1);

return statearr_51271;
})();
if(inst_51173){
var statearr_51273_53498 = state_51258__$1;
(statearr_51273_53498[(1)] = (5));

} else {
var statearr_51274_53499 = state_51258__$1;
(statearr_51274_53499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (15))){
var state_51258__$1 = state_51258;
var statearr_51277_53500 = state_51258__$1;
(statearr_51277_53500[(2)] = null);

(statearr_51277_53500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (21))){
var inst_51208 = (state_51258[(8)]);
var inst_51220 = (inst_51208 == null);
var inst_51221 = cljs.core.not(inst_51220);
var state_51258__$1 = state_51258;
if(inst_51221){
var statearr_51279_53501 = state_51258__$1;
(statearr_51279_53501[(1)] = (23));

} else {
var statearr_51280_53502 = state_51258__$1;
(statearr_51280_53502[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (31))){
var inst_51152 = (state_51258[(9)]);
var inst_51151 = (state_51258[(11)]);
var tmp51275 = inst_51152;
var tmp51276 = inst_51151;
var inst_51151__$1 = tmp51276;
var inst_51152__$1 = tmp51275;
var state_51258__$1 = (function (){var statearr_51281 = state_51258;
(statearr_51281[(9)] = inst_51152__$1);

(statearr_51281[(11)] = inst_51151__$1);

return statearr_51281;
})();
var statearr_51282_53503 = state_51258__$1;
(statearr_51282_53503[(2)] = null);

(statearr_51282_53503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (32))){
var inst_51240 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51283_53504 = state_51258__$1;
(statearr_51283_53504[(2)] = inst_51240);

(statearr_51283_53504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (33))){
var inst_51244 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["close ratelimit chan"], 0));
var inst_51245 = cljs.core.async.close_BANG_(c);
var state_51258__$1 = (function (){var statearr_51284 = state_51258;
(statearr_51284[(17)] = inst_51244);

return statearr_51284;
})();
var statearr_51285_53505 = state_51258__$1;
(statearr_51285_53505[(2)] = inst_51245);

(statearr_51285_53505[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (13))){
var inst_51201 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51289_53506 = state_51258__$1;
(statearr_51289_53506[(2)] = inst_51201);

(statearr_51289_53506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (22))){
var inst_51252 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51290_53507 = state_51258__$1;
(statearr_51290_53507[(2)] = inst_51252);

(statearr_51290_53507[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (29))){
var inst_51227 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51291_53508 = state_51258__$1;
(statearr_51291_53508[(2)] = inst_51227);

(statearr_51291_53508[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (6))){
var inst_51164 = (state_51258[(18)]);
var inst_51172 = (state_51258[(15)]);
var inst_51179 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51172,inst_51164);
var state_51258__$1 = state_51258;
if(inst_51179){
var statearr_51292_53509 = state_51258__$1;
(statearr_51292_53509[(1)] = (8));

} else {
var statearr_51293_53510 = state_51258__$1;
(statearr_51293_53510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (28))){
var inst_51230 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
if(cljs.core.truth_(inst_51230)){
var statearr_51296_53511 = state_51258__$1;
(statearr_51296_53511[(1)] = (30));

} else {
var statearr_51297_53512 = state_51258__$1;
(statearr_51297_53512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (25))){
var inst_51250 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51298_53513 = state_51258__$1;
(statearr_51298_53513[(2)] = inst_51250);

(statearr_51298_53513[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (34))){
var state_51258__$1 = state_51258;
var statearr_51300_53514 = state_51258__$1;
(statearr_51300_53514[(2)] = null);

(statearr_51300_53514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (17))){
var inst_51211 = cljs.core.async.close_BANG_(c);
var state_51258__$1 = state_51258;
var statearr_51301_53515 = state_51258__$1;
(statearr_51301_53515[(2)] = inst_51211);

(statearr_51301_53515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (3))){
var inst_51256 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51258__$1,inst_51256);
} else {
if((state_val_51259 === (12))){
var inst_51172 = (state_51258[(15)]);
var inst_51195 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51172,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_51258__$1 = state_51258;
if(inst_51195){
var statearr_51302_53516 = state_51258__$1;
(statearr_51302_53516[(1)] = (14));

} else {
var statearr_51303_53517 = state_51258__$1;
(statearr_51303_53517[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (2))){
var inst_51165 = (state_51258[(19)]);
var inst_51151 = (state_51258[(11)]);
var inst_51164 = (state_51258[(18)]);
var inst_51164__$1 = from_chan;
var inst_51165__$1 = self__.stop_chan;
var inst_51166 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51167 = [inst_51151,inst_51164__$1,inst_51165__$1];
var inst_51168 = (new cljs.core.PersistentVector(null,3,(5),inst_51166,inst_51167,null));
var state_51258__$1 = (function (){var statearr_51304 = state_51258;
(statearr_51304[(19)] = inst_51165__$1);

(statearr_51304[(18)] = inst_51164__$1);

return statearr_51304;
})();
return cljs.core.async.ioc_alts_BANG_(state_51258__$1,(4),inst_51168);
} else {
if((state_val_51259 === (23))){
var inst_51223 = (state_51258[(13)]);
var inst_51208 = (state_51258[(8)]);
var inst_51223__$1 = (filter_e_fn.cljs$core$IFn$_invoke$arity$1 ? filter_e_fn.cljs$core$IFn$_invoke$arity$1(inst_51208) : filter_e_fn.call(null,inst_51208));
var state_51258__$1 = (function (){var statearr_51305 = state_51258;
(statearr_51305[(13)] = inst_51223__$1);

return statearr_51305;
})();
if(cljs.core.truth_(inst_51223__$1)){
var statearr_51306_53518 = state_51258__$1;
(statearr_51306_53518[(1)] = (26));

} else {
var statearr_51307_53519 = state_51258__$1;
(statearr_51307_53519[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (35))){
var inst_51248 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51308_53520 = state_51258__$1;
(statearr_51308_53520[(2)] = inst_51248);

(statearr_51308_53520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (19))){
var inst_51254 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51309_53521 = state_51258__$1;
(statearr_51309_53521[(2)] = inst_51254);

(statearr_51309_53521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (11))){
var inst_51191 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_51192 = [true];
var inst_51193 = cljs.core.PersistentHashMap.fromArrays(inst_51191,inst_51192);
var state_51258__$1 = state_51258;
var statearr_51310_53522 = state_51258__$1;
(statearr_51310_53522[(2)] = inst_51193);

(statearr_51310_53522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (9))){
var inst_51165 = (state_51258[(19)]);
var inst_51172 = (state_51258[(15)]);
var inst_51189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51172,inst_51165);
var state_51258__$1 = state_51258;
if(inst_51189){
var statearr_51311_53523 = state_51258__$1;
(statearr_51311_53523[(1)] = (11));

} else {
var statearr_51312_53524 = state_51258__$1;
(statearr_51312_53524[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (5))){
var inst_51175 = [new cljs.core.Keyword(null,"timeout","timeout",-318625318)];
var inst_51176 = [true];
var inst_51177 = cljs.core.PersistentHashMap.fromArrays(inst_51175,inst_51176);
var state_51258__$1 = state_51258;
var statearr_51313_53525 = state_51258__$1;
(statearr_51313_53525[(2)] = inst_51177);

(statearr_51313_53525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (14))){
var inst_51171 = (state_51258[(16)]);
var state_51258__$1 = state_51258;
var statearr_51314_53526 = state_51258__$1;
(statearr_51314_53526[(2)] = inst_51171);

(statearr_51314_53526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (26))){
var inst_51208 = (state_51258[(8)]);
var inst_51225 = frontend.fs.sync.filter_local_changes_pred(inst_51208,self__.base_path,self__.graph_uuid);
var state_51258__$1 = state_51258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51258__$1,(29),inst_51225);
} else {
if((state_val_51259 === (16))){
var inst_51199 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51316_53527 = state_51258__$1;
(statearr_51316_53527[(2)] = inst_51199);

(statearr_51316_53527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (30))){
var inst_51152 = (state_51258[(9)]);
var inst_51151 = (state_51258[(11)]);
var inst_51208 = (state_51258[(8)]);
var inst_51232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_51152,inst_51208);
var inst_51233 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_51232);
var inst_51234 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(frontend.fs.sync.relative_path,inst_51233);
var inst_51235 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_queued_local__GT_remote_files,inst_51234);
var tmp51315 = inst_51151;
var inst_51151__$1 = tmp51315;
var inst_51152__$1 = inst_51233;
var state_51258__$1 = (function (){var statearr_51317 = state_51258;
(statearr_51317[(20)] = inst_51235);

(statearr_51317[(9)] = inst_51152__$1);

(statearr_51317[(11)] = inst_51151__$1);

return statearr_51317;
})();
var statearr_51318_53528 = state_51258__$1;
(statearr_51318_53528[(2)] = null);

(statearr_51318_53528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (10))){
var inst_51203 = (state_51258[(2)]);
var state_51258__$1 = state_51258;
var statearr_51321_53529 = state_51258__$1;
(statearr_51321_53529[(2)] = inst_51203);

(statearr_51321_53529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (18))){
var inst_51207 = (state_51258[(7)]);
var state_51258__$1 = state_51258;
if(cljs.core.truth_(inst_51207)){
var statearr_51322_53530 = state_51258__$1;
(statearr_51322_53530[(1)] = (20));

} else {
var statearr_51323_53531 = state_51258__$1;
(statearr_51323_53531[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51259 === (8))){
var inst_51170 = (state_51258[(14)]);
var inst_51184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51170,(0),null);
var inst_51185 = [new cljs.core.Keyword(null,"e","e",1381269198)];
var inst_51186 = [inst_51184];
var inst_51187 = cljs.core.PersistentHashMap.fromArrays(inst_51185,inst_51186);
var state_51258__$1 = state_51258;
var statearr_51324_53532 = state_51258__$1;
(statearr_51324_53532[(2)] = inst_51187);

(statearr_51324_53532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51325[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51325[(1)] = (1));

return statearr_51325;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51258){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51258);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51326){var ex__27576__auto__ = e51326;
var statearr_51327_53533 = state_51258;
(statearr_51327_53533[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51258[(4)]))){
var statearr_51328_53534 = state_51258;
(statearr_51328_53534[(1)] = cljs.core.first((state_51258[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53535 = state_51258;
state_51258 = G__53535;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51258){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51329 = f__27596__auto__();
(statearr_51329[(6)] = c__27595__auto___53490);

return statearr_51329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return c;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2 = (function (this$,es){
var self__ = this;
var this$__$1 = this;
if(cljs.core.empty_QMARK_(es)){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51335){
var state_val_51336 = (state_51335[(1)]);
if((state_val_51336 === (1))){
var inst_51331 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_51332 = [true];
var inst_51333 = cljs.core.PersistentHashMap.fromArrays(inst_51331,inst_51332);
var state_51335__$1 = state_51335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51335__$1,inst_51333);
} else {
return null;
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51338 = [null,null,null,null,null,null,null];
(statearr_51338[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51338[(1)] = (1));

return statearr_51338;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51335){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51335);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51339){var ex__27576__auto__ = e51339;
var statearr_51340_53536 = state_51335;
(statearr_51340_53536[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51335[(4)]))){
var statearr_51341_53537 = state_51335;
(statearr_51341_53537[(1)] = cljs.core.first((state_51335[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53538 = state_51335;
state_51335 = G__53538;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51335){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51342 = f__27596__auto__();
(statearr_51342[(6)] = c__27595__auto__);

return statearr_51342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
} else {
var type = cljs.core.first(es).type;
var ignore_files = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var es__GT_paths_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__51082_SHARP_){
return frontend.fs.sync.relative_path(p1__51082_SHARP_);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__51083_SHARP_){
return cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,p1__51083_SHARP_));
})));
var paths = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(es__GT_paths_xf,es);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote",paths], 0));

var r = (function (){var G__51343 = type;
switch (G__51343) {
case "add":
case "change":
return frontend.fs.sync.update_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
case "unlink":
frontend.fs.sync.delete_local_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths);

return frontend.fs.sync.delete_remote_files(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path,paths,cljs.core.deref(self__._STAR_txid));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51343)].join('')));

}
})();
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51378){
var state_val_51379 = (state_51378[(1)]);
if((state_val_51379 === (7))){
var state_51378__$1 = state_51378;
var statearr_51382_53540 = state_51378__$1;
(statearr_51382_53540[(1)] = (9));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (1))){
var inst_51344 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__add_current_local__GT_remote_files,paths);
var state_51378__$1 = (function (){var statearr_51385 = state_51378;
(statearr_51385[(7)] = inst_51344);

return statearr_51385;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51378__$1,(2),r);
} else {
if((state_val_51379 === (4))){
var inst_51346 = (state_51378[(8)]);
var inst_51354 = typeof inst_51346 === 'number';
var state_51378__$1 = state_51378;
if(cljs.core.truth_(inst_51354)){
var statearr_51393_53541 = state_51378__$1;
(statearr_51393_53541[(1)] = (6));

} else {
var statearr_51394_53542 = state_51378__$1;
(statearr_51394_53542[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (6))){
var inst_51346 = (state_51378[(8)]);
var inst_51356 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote! update txid",inst_51346], 0));
var inst_51357 = frontend.fs.sync.update_graphs_txid_BANG_(inst_51346,self__.graph_uuid,self__.user_uuid,self__.repo);
var inst_51358 = cljs.core.reset_BANG_(self__._STAR_txid,inst_51346);
var inst_51359 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_51360 = [true];
var inst_51361 = cljs.core.PersistentHashMap.fromArrays(inst_51359,inst_51360);
var state_51378__$1 = (function (){var statearr_51396 = state_51378;
(statearr_51396[(9)] = inst_51356);

(statearr_51396[(10)] = inst_51357);

(statearr_51396[(11)] = inst_51358);

return statearr_51396;
})();
var statearr_51398_53543 = state_51378__$1;
(statearr_51398_53543[(2)] = inst_51361);

(statearr_51398_53543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (3))){
var inst_51350 = [new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663)];
var inst_51351 = [true];
var inst_51352 = cljs.core.PersistentHashMap.fromArrays(inst_51350,inst_51351);
var state_51378__$1 = state_51378;
var statearr_51401_53544 = state_51378__$1;
(statearr_51401_53544[(2)] = inst_51352);

(statearr_51401_53544[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (2))){
var inst_51346 = (state_51378[(8)]);
var inst_51346__$1 = (state_51378[(2)]);
var inst_51347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__remove_current_local__GT_remote_files,paths);
var inst_51348 = frontend.fs.sync.need_sync_remote_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_51346__$1);
var state_51378__$1 = (function (){var statearr_51402 = state_51378;
(statearr_51402[(8)] = inst_51346__$1);

(statearr_51402[(12)] = inst_51347);

return statearr_51402;
})();
if(cljs.core.truth_(inst_51348)){
var statearr_51403_53545 = state_51378__$1;
(statearr_51403_53545[(1)] = (3));

} else {
var statearr_51404_53546 = state_51378__$1;
(statearr_51404_53546[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (11))){
var inst_51371 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51405_53547 = state_51378__$1;
(statearr_51405_53547[(2)] = inst_51371);

(statearr_51405_53547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (9))){
var inst_51346 = (state_51378[(8)]);
var inst_51364 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sync-local->remote unknown:",inst_51346], 0));
var inst_51365 = [new cljs.core.Keyword(null,"unknown","unknown",-935977881)];
var inst_51366 = [inst_51346];
var inst_51367 = cljs.core.PersistentHashMap.fromArrays(inst_51365,inst_51366);
var state_51378__$1 = (function (){var statearr_51406 = state_51378;
(statearr_51406[(13)] = inst_51364);

return statearr_51406;
})();
var statearr_51407_53548 = state_51378__$1;
(statearr_51407_53548[(2)] = inst_51367);

(statearr_51407_53548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (5))){
var inst_51375 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51378__$1,inst_51375);
} else {
if((state_val_51379 === (10))){
var state_51378__$1 = state_51378;
var statearr_51408_53549 = state_51378__$1;
(statearr_51408_53549[(2)] = null);

(statearr_51408_53549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51379 === (8))){
var inst_51373 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
var statearr_51409_53550 = state_51378__$1;
(statearr_51409_53550[(2)] = inst_51373);

(statearr_51409_53550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51413[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51413[(1)] = (1));

return statearr_51413;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51378){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51378);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51415){var ex__27576__auto__ = e51415;
var statearr_51416_53551 = state_51378;
(statearr_51416_53551[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51378[(4)]))){
var statearr_51417_53552 = state_51378;
(statearr_51417_53552[(1)] = cljs.core.first((state_51378[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53553 = state_51378;
state_51378 = G__53553;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51378){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51421 = f__27596__auto__();
(statearr_51421[(6)] = c__27595__auto__);

return statearr_51421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51496){
var state_val_51497 = (state_51496[(1)]);
if((state_val_51497 === (7))){
var inst_51442 = (state_51496[(7)]);
var inst_51449 = cljs.core.empty_QMARK_(inst_51442);
var state_51496__$1 = state_51496;
if(inst_51449){
var statearr_51498_53554 = state_51496__$1;
(statearr_51498_53554[(1)] = (9));

} else {
var statearr_51499_53555 = state_51496__$1;
(statearr_51499_53555[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (20))){
var inst_51462 = (state_51496[(8)]);
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51462)){
var statearr_51500_53556 = state_51496__$1;
(statearr_51500_53556[(1)] = (22));

} else {
var statearr_51501_53557 = state_51496__$1;
(statearr_51501_53557[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (27))){
var inst_51486 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51502_53558 = state_51496__$1;
(statearr_51502_53558[(2)] = inst_51486);

(statearr_51502_53558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (1))){
var inst_51423 = (state_51496[(9)]);
var inst_51423__$1 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_all_files_meta$arity$2(null,self__.graph_uuid);
var inst_51424 = frontend.fs.sync.get_local_all_files_meta(frontend.fs.sync.rsapi,self__.graph_uuid,self__.base_path);
var state_51496__$1 = (function (){var statearr_51505 = state_51496;
(statearr_51505[(10)] = inst_51424);

(statearr_51505[(9)] = inst_51423__$1);

return statearr_51505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51496__$1,(2),inst_51423__$1);
} else {
if((state_val_51497 === (24))){
var inst_51482 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51482)){
var statearr_51508_53559 = state_51496__$1;
(statearr_51508_53559[(1)] = (25));

} else {
var statearr_51509_53560 = state_51496__$1;
(statearr_51509_53560[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (4))){
var state_51496__$1 = state_51496;
if(cljs.core.truth_(self__.stopped)){
var statearr_51510_53561 = state_51496__$1;
(statearr_51510_53561[(1)] = (6));

} else {
var statearr_51511_53562 = state_51496__$1;
(statearr_51511_53562[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (15))){
var inst_51461 = (state_51496[(11)]);
var inst_51474 = (state_51496[(2)]);
var state_51496__$1 = (function (){var statearr_51517 = state_51496;
(statearr_51517[(12)] = inst_51474);

return statearr_51517;
})();
if(cljs.core.truth_(inst_51461)){
var statearr_51522_53563 = state_51496__$1;
(statearr_51522_53563[(1)] = (19));

} else {
var statearr_51524_53564 = state_51496__$1;
(statearr_51524_53564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (21))){
var inst_51488 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51533_53565 = state_51496__$1;
(statearr_51533_53565[(2)] = inst_51488);

(statearr_51533_53565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (13))){
var inst_51465 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_51466 = cljs.core.deref(inst_51465);
var state_51496__$1 = state_51496;
if(cljs.core.truth_(inst_51466)){
var statearr_51542_53566 = state_51496__$1;
(statearr_51542_53566[(1)] = (16));

} else {
var statearr_51543_53567 = state_51496__$1;
(statearr_51543_53567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (22))){
var inst_51462 = (state_51496[(8)]);
var state_51496__$1 = state_51496;
var statearr_51544_53568 = state_51496__$1;
(statearr_51544_53568[(2)] = inst_51462);

(statearr_51544_53568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (6))){
var inst_51445 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_51446 = [true];
var inst_51447 = cljs.core.PersistentHashMap.fromArrays(inst_51445,inst_51446);
var state_51496__$1 = state_51496;
var statearr_51545_53569 = state_51496__$1;
(statearr_51545_53569[(2)] = inst_51447);

(statearr_51545_53569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (25))){
var inst_51460 = (state_51496[(13)]);
var state_51496__$1 = state_51496;
var statearr_51550_53570 = state_51496__$1;
(statearr_51550_53570[(2)] = inst_51460);

(statearr_51550_53570[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (17))){
var inst_51460 = (state_51496[(13)]);
var state_51496__$1 = state_51496;
var statearr_51558_53571 = state_51496__$1;
(statearr_51558_53571[(2)] = inst_51460);

(statearr_51558_53571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (3))){
var inst_51424 = (state_51496[(10)]);
var inst_51426 = (state_51496[(14)]);
var inst_51423 = (state_51496[(9)]);
var inst_51428 = (state_51496[(2)]);
var inst_51429 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_51428,inst_51426);
var inst_51430 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_ignore_files$arity$1(null);
var inst_51431 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$get_monitored_dirs$arity$1(null);
var inst_51432 = (function (){var remote_all_files_meta_c = inst_51423;
var local_all_files_meta_c = inst_51424;
var remote_all_files_meta = inst_51426;
var local_all_files_meta = inst_51428;
var diff_local_files = inst_51429;
var ignore_files = inst_51430;
var monitored_dirs = inst_51431;
return (function (p1__51084_SHARP_){
return frontend.fs.sync.__GT_FileChangeEvent("change",self__.base_path,p1__51084_SHARP_.get_normalized_path(),null);
});
})();
var inst_51433 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(inst_51432);
var inst_51434 = (function (){var remote_all_files_meta_c = inst_51423;
var local_all_files_meta_c = inst_51424;
var remote_all_files_meta = inst_51426;
var local_all_files_meta = inst_51428;
var diff_local_files = inst_51429;
var ignore_files = inst_51430;
var monitored_dirs = inst_51431;
return (function (p1__51085_SHARP_){
var path = frontend.fs.sync.relative_path(p1__51085_SHARP_);
var and__5041__auto__ = cljs.core.not(frontend.fs.sync.contains_path_QMARK_(ignore_files,path));
if(and__5041__auto__){
return frontend.fs.sync.contains_path_QMARK_(monitored_dirs,path);
} else {
return and__5041__auto__;
}
});
})();
var inst_51435 = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(inst_51434);
var inst_51436 = frontend.fs.sync.partition_file_change_events((10));
var inst_51437 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(inst_51433,inst_51435,inst_51436);
var inst_51438 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(inst_51437,inst_51429);
var inst_51439 = cljs.core.flatten(inst_51438);
var inst_51440 = cljs.core.count(inst_51439);
var inst_51441 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[full-sync(local->remote)]",inst_51440,"files need to sync"], 0));
var inst_51442 = inst_51438;
var state_51496__$1 = (function (){var statearr_51594 = state_51496;
(statearr_51594[(7)] = inst_51442);

(statearr_51594[(15)] = inst_51441);

return statearr_51594;
})();
var statearr_51595_53572 = state_51496__$1;
(statearr_51595_53572[(2)] = null);

(statearr_51595_53572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (12))){
var inst_51460 = (state_51496[(13)]);
var inst_51459 = (state_51496[(2)]);
var inst_51460__$1 = cljs.core.__destructure_map(inst_51459);
var inst_51461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51460__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_51462 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51460__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_51463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51460__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_51496__$1 = (function (){var statearr_51606 = state_51496;
(statearr_51606[(16)] = inst_51463);

(statearr_51606[(11)] = inst_51461);

(statearr_51606[(13)] = inst_51460__$1);

(statearr_51606[(8)] = inst_51462);

return statearr_51606;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_51607_53573 = state_51496__$1;
(statearr_51607_53573[(1)] = (13));

} else {
var statearr_51608_53574 = state_51496__$1;
(statearr_51608_53574[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (2))){
var inst_51424 = (state_51496[(10)]);
var inst_51426 = (state_51496[(2)]);
var state_51496__$1 = (function (){var statearr_51613 = state_51496;
(statearr_51613[(14)] = inst_51426);

return statearr_51613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51496__$1,(3),inst_51424);
} else {
if((state_val_51497 === (23))){
var inst_51463 = (state_51496[(16)]);
var state_51496__$1 = state_51496;
var statearr_51617_53575 = state_51496__$1;
(statearr_51617_53575[(2)] = inst_51463);

(statearr_51617_53575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (19))){
var inst_51442 = (state_51496[(7)]);
var inst_51476 = cljs.core.next(inst_51442);
var inst_51442__$1 = inst_51476;
var state_51496__$1 = (function (){var statearr_51618 = state_51496;
(statearr_51618[(7)] = inst_51442__$1);

return statearr_51618;
})();
var statearr_51623_53576 = state_51496__$1;
(statearr_51623_53576[(2)] = null);

(statearr_51623_53576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (11))){
var inst_51490 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51628_53577 = state_51496__$1;
(statearr_51628_53577[(2)] = inst_51490);

(statearr_51628_53577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (9))){
var inst_51451 = [new cljs.core.Keyword(null,"succ","succ",1386276271)];
var inst_51452 = [true];
var inst_51453 = cljs.core.PersistentHashMap.fromArrays(inst_51451,inst_51452);
var state_51496__$1 = state_51496;
var statearr_51632_53578 = state_51496__$1;
(statearr_51632_53578[(2)] = inst_51453);

(statearr_51632_53578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (5))){
var inst_51494 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51496__$1,inst_51494);
} else {
if((state_val_51497 === (14))){
var inst_51460 = (state_51496[(13)]);
var state_51496__$1 = state_51496;
var statearr_51637_53579 = state_51496__$1;
(statearr_51637_53579[(2)] = inst_51460);

(statearr_51637_53579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (26))){
var state_51496__$1 = state_51496;
var statearr_51638_53580 = state_51496__$1;
(statearr_51638_53580[(2)] = null);

(statearr_51638_53580[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (16))){
var inst_51460 = (state_51496[(13)]);
var inst_51468 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_51460);
var state_51496__$1 = state_51496;
var statearr_51651_53581 = state_51496__$1;
(statearr_51651_53581[(2)] = inst_51468);

(statearr_51651_53581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (10))){
var inst_51442 = (state_51496[(7)]);
var inst_51456 = cljs.core.first(inst_51442);
var inst_51457 = this$__$1.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_51456);
var state_51496__$1 = state_51496;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51496__$1,(12),inst_51457);
} else {
if((state_val_51497 === (18))){
var inst_51471 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51652_53582 = state_51496__$1;
(statearr_51652_53582[(2)] = inst_51471);

(statearr_51652_53582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51497 === (8))){
var inst_51492 = (state_51496[(2)]);
var state_51496__$1 = state_51496;
var statearr_51653_53583 = state_51496__$1;
(statearr_51653_53583[(2)] = inst_51492);

(statearr_51653_53583[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51654[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51654[(1)] = (1));

return statearr_51654;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51496){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51496);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51655){var ex__27576__auto__ = e51655;
var statearr_51656_53584 = state_51496;
(statearr_51656_53584[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51496[(4)]))){
var statearr_51657_53585 = state_51496;
(statearr_51657_53585[(1)] = cljs.core.first((state_51496[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53586 = state_51496;
state_51496 = G__53586;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51496){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51658 = f__27596__auto__();
(statearr_51658[(6)] = c__27595__auto__);

return statearr_51658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.Local->RemoteSyncer{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51087){
var self__ = this;
var G__51087__$1 = this;
return (new cljs.core.RecordIter((0),G__51087__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (791760177 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51089,other51090){
var self__ = this;
var this51089__$1 = this;
return (((!((other51090 == null)))) && ((((this51089__$1.constructor === other51090.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.user_uuid,other51090.user_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.graph_uuid,other51090.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.base_path,other51090.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.repo,other51090.repo)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1._STAR_sync_state,other51090._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.rate,other51090.rate)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1._STAR_txid,other51090._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.remote__GT_local_syncer,other51090.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.stop_chan,other51090.stop_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.stopped,other51090.stopped)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51089__$1.__extmap,other51090.__extmap)))))))))))))))))))))))));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),null,new cljs.core.Keyword(null,"rate","rate",-1428659698),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"repo","repo",-1999060679),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k51088){
var self__ = this;
var this__5347__auto____$1 = this;
var G__51664 = k51088;
var G__51664__$1 = (((G__51664 instanceof cljs.core.Keyword))?G__51664.fqn:null);
switch (G__51664__$1) {
case "user-uuid":
case "graph-uuid":
case "base-path":
case "repo":
case "*sync-state":
case "rate":
case "*txid":
case "remote->local-syncer":
case "stop-chan":
case "stopped":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51088);

}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__51087){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__51665 = cljs.core.keyword_identical_QMARK_;
var expr__51666 = k__5349__auto__;
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(G__51087,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,G__51087,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,G__51087,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"repo","repo",-1999060679),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,G__51087,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,G__51087,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"rate","rate",-1428659698),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,G__51087,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,G__51087,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,G__51087,self__.stop_chan,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,G__51087,self__.stopped,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51665.cljs$core$IFn$_invoke$arity$2 ? pred__51665.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__51666) : pred__51665.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__51666)))){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,G__51087,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__51087),null));
}
}
}
}
}
}
}
}
}
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),self__.user_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"repo","repo",-1999060679),self__.repo,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rate","rate",-1428659698),self__.rate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),self__.stop_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null))], null),self__.__extmap));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__51087){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.Local__GT_RemoteSyncer(self__.user_uuid,self__.graph_uuid,self__.base_path,self__.repo,self__._STAR_sync_state,self__.rate,self__._STAR_txid,self__.remote__GT_local_syncer,self__.stop_chan,self__.stopped,G__51087,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"user-uuid","user-uuid",1364577479,null),new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"repo","repo",-358529152,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"rate","rate",211871829,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"stop-chan","stop-chan",-825853786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$type = true);

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/Local->RemoteSyncer",null,(1),null));
}));

(frontend.fs.sync.Local__GT_RemoteSyncer.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/Local->RemoteSyncer");
}));

/**
 * Positional factory function for frontend.fs.sync/Local->RemoteSyncer.
 */
frontend.fs.sync.__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$__GT_Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped){
return (new frontend.fs.sync.Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,rate,_STAR_txid,remote__GT_local_syncer,stop_chan,stopped,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/Local->RemoteSyncer, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_Local__GT_RemoteSyncer = (function frontend$fs$sync$map__GT_Local__GT_RemoteSyncer(G__51091){
var extmap__5382__auto__ = (function (){var G__51679 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51091,new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"repo","repo",-1999060679),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"rate","rate",-1428659698),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983),new cljs.core.Keyword(null,"stopped","stopped",-1490414640)], 0));
if(cljs.core.record_QMARK_(G__51091)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51679);
} else {
return G__51679;
}
})();
return (new frontend.fs.sync.Local__GT_RemoteSyncer(new cljs.core.Keyword(null,"user-uuid","user-uuid",-275954048).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"repo","repo",-1999060679).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"rate","rate",-1428659698).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"stop-chan","stop-chan",1828581983).cljs$core$IFn$_invoke$arity$1(G__51091),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__51091),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

/**
 * drop all stuffs in CH
 */
frontend.fs.sync.drain_chan = (function frontend$fs$sync$drain_chan(ch){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.async.poll_BANG_(ch);
})));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {frontend.fs.sync.IStoppable}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
frontend.fs.sync.SyncManager = (function (graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan,__meta,__extmap,__hash){
this.graph_uuid = graph_uuid;
this.base_path = base_path;
this._STAR_sync_state = _STAR_sync_state;
this.local__GT_remote_syncer = local__GT_remote_syncer;
this.remote__GT_local_syncer = remote__GT_local_syncer;
this.full_sync_chan = full_sync_chan;
this.stop_sync_chan = stop_sync_chan;
this.remote__GT_local_sync_chan = remote__GT_local_sync_chan;
this.local__GT_remote_sync_chan = local__GT_remote_sync_chan;
this.local_changes_chan = local_changes_chan;
this.ratelimit_local_changes_chan = ratelimit_local_changes_chan;
this._STAR_txid = _STAR_txid;
this.state = state;
this._remote_change_chan = _remote_change_chan;
this.__STAR_ws = __STAR_ws;
this.stopped = stopped;
this.ops_chan = ops_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(frontend.fs.sync.SyncManager.prototype.schedule = (function (next_state,args){
var self__ = this;
var this$ = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("frontend.fs.sync","state","frontend.fs.sync/state",2030214349),next_state)], null)], null);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[SyncManager",self__.graph_uuid,"]",(function (){var and__5041__auto__ = self__.state;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(self__.state);
} else {
return and__5041__auto__;
}
})(),"->",(function (){var and__5041__auto__ = next_state;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.name(next_state);
} else {
return and__5041__auto__;
}
})()], 0));

(self__.state = next_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_state,next_state);

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51737){
var state_val_51738 = (state_51737[(1)]);
if((state_val_51738 === (7))){
var inst_51720 = this$.remote__GT_local(null,args);
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(8),inst_51720);
} else {
if((state_val_51738 === (1))){
var state_51737__$1 = state_51737;
var G__51739_53588 = self__.state;
var G__51739_53589__$1 = (((G__51739_53588 instanceof cljs.core.Keyword))?G__51739_53588.fqn:null);
switch (G__51739_53589__$1) {
case "frontend.fs.sync/idle":
var statearr_51740_53591 = state_51737__$1;
(statearr_51740_53591[(1)] = (3));


break;
case "frontend.fs.sync/local->remote":
var statearr_51742_53592 = state_51737__$1;
(statearr_51742_53592[(1)] = (5));


break;
case "frontend.fs.sync/remote->local":
var statearr_51743_53593 = state_51737__$1;
(statearr_51743_53593[(1)] = (7));


break;
case "frontend.fs.sync/local->remote-full-sync":
var statearr_51744_53594 = state_51737__$1;
(statearr_51744_53594[(1)] = (9));


break;
case "frontend.fs.sync/remote->local-full-sync":
var statearr_51745_53595 = state_51737__$1;
(statearr_51745_53595[(1)] = (11));


break;
case "frontend.fs.sync/stop":
var statearr_51746_53596 = state_51737__$1;
(statearr_51746_53596[(1)] = (13));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51739_53589__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (4))){
var inst_51714 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51747_53597 = state_51737__$1;
(statearr_51747_53597[(2)] = inst_51714);

(statearr_51747_53597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (13))){
var inst_51732 = this$.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1(null);
var state_51737__$1 = state_51737;
var statearr_51749_53598 = state_51737__$1;
(statearr_51749_53598[(2)] = inst_51732);

(statearr_51749_53598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (6))){
var inst_51718 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51750_53599 = state_51737__$1;
(statearr_51750_53599[(2)] = inst_51718);

(statearr_51750_53599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (3))){
var inst_51712 = this$.idle();
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(4),inst_51712);
} else {
if((state_val_51738 === (12))){
var inst_51730 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51751_53600 = state_51737__$1;
(statearr_51751_53600[(2)] = inst_51730);

(statearr_51751_53600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (2))){
var inst_51735 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51737__$1,inst_51735);
} else {
if((state_val_51738 === (11))){
var inst_51728 = this$.remote__GT_local_full_sync(null);
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(12),inst_51728);
} else {
if((state_val_51738 === (9))){
var inst_51724 = this$.full_sync();
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(10),inst_51724);
} else {
if((state_val_51738 === (5))){
var inst_51716 = this$.local__GT_remote(args);
var state_51737__$1 = state_51737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51737__$1,(6),inst_51716);
} else {
if((state_val_51738 === (10))){
var inst_51726 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51752_53601 = state_51737__$1;
(statearr_51752_53601[(2)] = inst_51726);

(statearr_51752_53601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51738 === (8))){
var inst_51722 = (state_51737[(2)]);
var state_51737__$1 = state_51737;
var statearr_51753_53602 = state_51737__$1;
(statearr_51753_53602[(2)] = inst_51722);

(statearr_51753_53602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_51754 = [null,null,null,null,null,null,null];
(statearr_51754[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_51754[(1)] = (1));

return statearr_51754;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51737){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51737);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e51755){var ex__27576__auto__ = e51755;
var statearr_51756_53603 = state_51737;
(statearr_51756_53603[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51737[(4)]))){
var statearr_51757_53604 = state_51737;
(statearr_51757_53604[(1)] = cljs.core.first((state_51737[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53605 = state_51737;
state_51737 = G__53605;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51737){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_51758 = f__27596__auto__();
(statearr_51758[(6)] = c__27595__auto__);

return statearr_51758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.start = (function (){
var self__ = this;
var this$ = this;
(self__.ops_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.dropping_buffer((10))));

(self__.__STAR_ws = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));

(self__._remote_change_chan = frontend.fs.sync.ws_listen_BANG_(self__.graph_uuid,self__.__STAR_ws));

(self__.ratelimit_local_changes_chan = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$ratelimit$arity$2(null,self__.local_changes_chan));

var c__27595__auto___53606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_51940){
var state_val_51941 = (state_51940[(1)]);
if((state_val_51941 === (7))){
var inst_51872 = (state_51940[(2)]);
var inst_51873 = cljs.core.__destructure_map(inst_51872);
var inst_51874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_51875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_51876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_51877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51873,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var state_51940__$1 = (function (){var statearr_51942 = state_51940;
(statearr_51942[(7)] = inst_51875);

(statearr_51942[(8)] = inst_51876);

(statearr_51942[(9)] = inst_51877);

return statearr_51942;
})();
if(cljs.core.truth_(inst_51874)){
var statearr_51943_53607 = state_51940__$1;
(statearr_51943_53607[(1)] = (26));

} else {
var statearr_51944_53608 = state_51940__$1;
(statearr_51944_53608[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (20))){
var inst_51852 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_51853 = [true];
var inst_51854 = cljs.core.PersistentHashMap.fromArrays(inst_51852,inst_51853);
var state_51940__$1 = state_51940;
var statearr_51945_53609 = state_51940__$1;
(statearr_51945_53609[(2)] = inst_51854);

(statearr_51945_53609[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (27))){
var inst_51875 = (state_51940[(7)]);
var state_51940__$1 = state_51940;
if(cljs.core.truth_(inst_51875)){
var statearr_51946_53610 = state_51940__$1;
(statearr_51946_53610[(1)] = (30));

} else {
var statearr_51947_53611 = state_51940__$1;
(statearr_51947_53611[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (1))){
var state_51940__$1 = state_51940;
var statearr_51948_53612 = state_51940__$1;
(statearr_51948_53612[(2)] = null);

(statearr_51948_53612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (24))){
var state_51940__$1 = state_51940;
var statearr_51949_53613 = state_51940__$1;
(statearr_51949_53613[(2)] = null);

(statearr_51949_53613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (39))){
var inst_51909 = (state_51940[(2)]);
var state_51940__$1 = (function (){var statearr_51950 = state_51940;
(statearr_51950[(10)] = inst_51909);

return statearr_51950;
})();
var statearr_51951_53614 = state_51940__$1;
(statearr_51951_53614[(2)] = null);

(statearr_51951_53614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (46))){
var state_51940__$1 = state_51940;
var statearr_51952_53615 = state_51940__$1;
(statearr_51952_53615[(2)] = null);

(statearr_51952_53615[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (4))){
var inst_51793 = (state_51940[(11)]);
var inst_51807 = (state_51940[(12)]);
var inst_51809 = (state_51940[(13)]);
var inst_51807__$1 = (state_51940[(2)]);
var inst_51808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51807__$1,(0),null);
var inst_51809__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51807__$1,(1),null);
var inst_51810 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809__$1,inst_51793);
var state_51940__$1 = (function (){var statearr_51953 = state_51940;
(statearr_51953[(12)] = inst_51807__$1);

(statearr_51953[(13)] = inst_51809__$1);

(statearr_51953[(14)] = inst_51808);

return statearr_51953;
})();
if(inst_51810){
var statearr_51954_53616 = state_51940__$1;
(statearr_51954_53616[(1)] = (5));

} else {
var statearr_51955_53617 = state_51940__$1;
(statearr_51955_53617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (15))){
var inst_51809 = (state_51940[(13)]);
var inst_51797 = (state_51940[(15)]);
var inst_51839 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,inst_51797);
var state_51940__$1 = state_51940;
if(inst_51839){
var statearr_51956_53618 = state_51940__$1;
(statearr_51956_53618[(1)] = (17));

} else {
var statearr_51958_53619 = state_51940__$1;
(statearr_51958_53619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (48))){
var inst_51926 = (state_51940[(2)]);
var state_51940__$1 = (function (){var statearr_51959 = state_51940;
(statearr_51959[(16)] = inst_51926);

return statearr_51959;
})();
var statearr_51961_53620 = state_51940__$1;
(statearr_51961_53620[(2)] = null);

(statearr_51961_53620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (21))){
var inst_51809 = (state_51940[(13)]);
var inst_51856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_51940__$1 = state_51940;
if(inst_51856){
var statearr_51962_53621 = state_51940__$1;
(statearr_51962_53621[(1)] = (23));

} else {
var statearr_51963_53622 = state_51940__$1;
(statearr_51963_53622[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (31))){
var inst_51877 = (state_51940[(9)]);
var state_51940__$1 = state_51940;
if(cljs.core.truth_(inst_51877)){
var statearr_51964_53623 = state_51940__$1;
(statearr_51964_53623[(1)] = (41));

} else {
var statearr_51965_53624 = state_51940__$1;
(statearr_51965_53624[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (32))){
var inst_51934 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51966_53625 = state_51940__$1;
(statearr_51966_53625[(2)] = inst_51934);

(statearr_51966_53625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (40))){
var inst_51906 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51967_53626 = state_51940__$1;
(statearr_51967_53626[(2)] = inst_51906);

(statearr_51967_53626[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (33))){
var inst_51889 = [new cljs.core.Keyword(null,"txid","txid",1606205478)];
var inst_51890 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$get_remote_graph$arity$3(null,null,self__.graph_uuid);
var state_51940__$1 = (function (){var statearr_51970 = state_51940;
(statearr_51970[(17)] = inst_51889);

return statearr_51970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51940__$1,(36),inst_51890);
} else {
if((state_val_51941 === (13))){
var inst_51868 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51971_53627 = state_51940__$1;
(statearr_51971_53627[(2)] = inst_51868);

(statearr_51971_53627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (22))){
var inst_51862 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51972_53628 = state_51940__$1;
(statearr_51972_53628[(2)] = inst_51862);

(statearr_51972_53628[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (36))){
var inst_51889 = (state_51940[(17)]);
var inst_51892 = (state_51940[(2)]);
var inst_51893 = new cljs.core.Keyword(null,"TXId","TXId",-902804781).cljs$core$IFn$_invoke$arity$1(inst_51892);
var inst_51894 = [inst_51893];
var inst_51895 = cljs.core.PersistentHashMap.fromArrays(inst_51889,inst_51894);
var state_51940__$1 = state_51940;
var statearr_51973_53629 = state_51940__$1;
(statearr_51973_53629[(2)] = inst_51895);

(statearr_51973_53629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (41))){
var inst_51877 = (state_51940[(9)]);
var inst_51913 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_51914 = [inst_51877];
var inst_51915 = cljs.core.PersistentHashMap.fromArrays(inst_51913,inst_51914);
var state_51940__$1 = state_51940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51940__$1,(44),self__.ops_chan,inst_51915);
} else {
if((state_val_51941 === (43))){
var inst_51932 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51974_53630 = state_51940__$1;
(statearr_51974_53630[(2)] = inst_51932);

(statearr_51974_53630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (29))){
var inst_51884 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51975_53631 = state_51940__$1;
(statearr_51975_53631[(2)] = inst_51884);

(statearr_51975_53631[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (44))){
var inst_51917 = (state_51940[(2)]);
var state_51940__$1 = (function (){var statearr_51976 = state_51940;
(statearr_51976[(18)] = inst_51917);

return statearr_51976;
})();
var statearr_51977_53632 = state_51940__$1;
(statearr_51977_53632[(2)] = null);

(statearr_51977_53632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (6))){
var inst_51794 = (state_51940[(19)]);
var inst_51809 = (state_51940[(13)]);
var inst_51816 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,inst_51794);
var state_51940__$1 = state_51940;
if(inst_51816){
var statearr_51978_53633 = state_51940__$1;
(statearr_51978_53633[(1)] = (8));

} else {
var statearr_51979_53634 = state_51940__$1;
(statearr_51979_53634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (28))){
var inst_51936 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51989_53635 = state_51940__$1;
(statearr_51989_53635[(2)] = inst_51936);

(statearr_51989_53635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (25))){
var inst_51860 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_51991_53636 = state_51940__$1;
(statearr_51991_53636[(2)] = inst_51860);

(statearr_51991_53636[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (34))){
var inst_51875 = (state_51940[(7)]);
var state_51940__$1 = state_51940;
var statearr_51992_53637 = state_51940__$1;
(statearr_51992_53637[(2)] = inst_51875);

(statearr_51992_53637[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (17))){
var inst_51807 = (state_51940[(12)]);
var inst_51844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51807,(0),null);
var inst_51845 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local changes:",inst_51844], 0));
var inst_51846 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_51847 = [inst_51844];
var inst_51848 = cljs.core.PersistentHashMap.fromArrays(inst_51846,inst_51847);
var state_51940__$1 = (function (){var statearr_51994 = state_51940;
(statearr_51994[(20)] = inst_51845);

return statearr_51994;
})();
var statearr_51995_53638 = state_51940__$1;
(statearr_51995_53638[(2)] = inst_51848);

(statearr_51995_53638[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (3))){
var inst_51938 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51940__$1,inst_51938);
} else {
if((state_val_51941 === (12))){
var inst_51809 = (state_51940[(13)]);
var inst_51796 = (state_51940[(21)]);
var inst_51828 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,inst_51796);
var state_51940__$1 = state_51940;
if(inst_51828){
var statearr_51996_53639 = state_51940__$1;
(statearr_51996_53639[(1)] = (14));

} else {
var statearr_51997_53640 = state_51940__$1;
(statearr_51997_53640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (2))){
var inst_51795 = (state_51940[(22)]);
var inst_51794 = (state_51940[(19)]);
var inst_51793 = (state_51940[(11)]);
var inst_51797 = (state_51940[(15)]);
var inst_51801 = (state_51940[(23)]);
var inst_51796 = (state_51940[(21)]);
var inst_51793__$1 = self__.stop_sync_chan;
var inst_51794__$1 = self__.remote__GT_local_sync_chan;
var inst_51795__$1 = self__.full_sync_chan;
var inst_51796__$1 = self__._remote_change_chan;
var inst_51797__$1 = self__.ratelimit_local_changes_chan;
var inst_51799 = ((20) * (60));
var inst_51800 = (inst_51799 * (1000));
var inst_51801__$1 = cljs.core.async.timeout(inst_51800);
var inst_51803 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51804 = [inst_51793__$1,inst_51794__$1,inst_51795__$1,inst_51796__$1,inst_51797__$1,inst_51801__$1];
var inst_51805 = (new cljs.core.PersistentVector(null,6,(5),inst_51803,inst_51804,null));
var state_51940__$1 = (function (){var statearr_51998 = state_51940;
(statearr_51998[(22)] = inst_51795__$1);

(statearr_51998[(19)] = inst_51794__$1);

(statearr_51998[(11)] = inst_51793__$1);

(statearr_51998[(15)] = inst_51797__$1);

(statearr_51998[(23)] = inst_51801__$1);

(statearr_51998[(21)] = inst_51796__$1);

return statearr_51998;
})();
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_51940__$1,(4),inst_51805,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"priority","priority",1431093715),true], 0));
} else {
if((state_val_51941 === (23))){
var inst_51808 = (state_51940[(14)]);
var state_51940__$1 = state_51940;
var statearr_51999_53641 = state_51940__$1;
(statearr_51999_53641[(2)] = inst_51808);

(statearr_51999_53641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (47))){
var inst_51930 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_52000_53642 = state_51940__$1;
(statearr_52000_53642[(2)] = inst_51930);

(statearr_52000_53642[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (35))){
var inst_51898 = (state_51940[(24)]);
var inst_51898__$1 = (state_51940[(2)]);
var inst_51899 = (inst_51898__$1 == null);
var inst_51900 = cljs.core.not(inst_51899);
var state_51940__$1 = (function (){var statearr_52001 = state_51940;
(statearr_52001[(24)] = inst_51898__$1);

return statearr_52001;
})();
if(inst_51900){
var statearr_52002_53643 = state_51940__$1;
(statearr_52002_53643[(1)] = (37));

} else {
var statearr_52003_53644 = state_51940__$1;
(statearr_52003_53644[(1)] = (38));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (19))){
var inst_51864 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_52004_53645 = state_51940__$1;
(statearr_52004_53645[(2)] = inst_51864);

(statearr_52004_53645[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (11))){
var inst_51824 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_51825 = [true];
var inst_51826 = cljs.core.PersistentHashMap.fromArrays(inst_51824,inst_51825);
var state_51940__$1 = state_51940;
var statearr_52005_53646 = state_51940__$1;
(statearr_52005_53646[(2)] = inst_51826);

(statearr_52005_53646[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (9))){
var inst_51795 = (state_51940[(22)]);
var inst_51809 = (state_51940[(13)]);
var inst_51822 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,inst_51795);
var state_51940__$1 = state_51940;
if(inst_51822){
var statearr_52006_53647 = state_51940__$1;
(statearr_52006_53647[(1)] = (11));

} else {
var statearr_52007_53648 = state_51940__$1;
(statearr_52007_53648[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (5))){
var inst_51812 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_51813 = [true];
var inst_51814 = cljs.core.PersistentHashMap.fromArrays(inst_51812,inst_51813);
var state_51940__$1 = state_51940;
var statearr_52008_53649 = state_51940__$1;
(statearr_52008_53649[(2)] = inst_51814);

(statearr_52008_53649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (14))){
var inst_51807 = (state_51940[(12)]);
var inst_51833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51807,(0),null);
var inst_51834 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote change:",inst_51833], 0));
var inst_51835 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_51836 = [inst_51833];
var inst_51837 = cljs.core.PersistentHashMap.fromArrays(inst_51835,inst_51836);
var state_51940__$1 = (function (){var statearr_52009 = state_51940;
(statearr_52009[(25)] = inst_51834);

return statearr_52009;
})();
var statearr_52010_53650 = state_51940__$1;
(statearr_52010_53650[(2)] = inst_51837);

(statearr_52010_53650[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (45))){
var inst_51921 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_51922 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_51923 = [true];
var inst_51924 = cljs.core.PersistentHashMap.fromArrays(inst_51922,inst_51923);
var state_51940__$1 = (function (){var statearr_52011 = state_51940;
(statearr_52011[(26)] = inst_51921);

return statearr_52011;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51940__$1,(48),self__.ops_chan,inst_51924);
} else {
if((state_val_51941 === (26))){
var inst_51879 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_51880 = [new cljs.core.Keyword(null,"stop","stop",-2140911342)];
var inst_51881 = [true];
var inst_51882 = cljs.core.PersistentHashMap.fromArrays(inst_51880,inst_51881);
var state_51940__$1 = (function (){var statearr_52012 = state_51940;
(statearr_52012[(27)] = inst_51879);

return statearr_52012;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51940__$1,(29),self__.ops_chan,inst_51882);
} else {
if((state_val_51941 === (16))){
var inst_51866 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_52014_53651 = state_51940__$1;
(statearr_52014_53651[(2)] = inst_51866);

(statearr_52014_53651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (38))){
var state_51940__$1 = state_51940;
var statearr_52022_53652 = state_51940__$1;
(statearr_52022_53652[(2)] = null);

(statearr_52022_53652[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (30))){
var inst_51875 = (state_51940[(7)]);
var inst_51887 = inst_51875 === true;
var state_51940__$1 = state_51940;
if(cljs.core.truth_(inst_51887)){
var statearr_52023_53653 = state_51940__$1;
(statearr_52023_53653[(1)] = (33));

} else {
var statearr_52024_53654 = state_51940__$1;
(statearr_52024_53654[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (10))){
var inst_51870 = (state_51940[(2)]);
var state_51940__$1 = state_51940;
var statearr_52025_53655 = state_51940__$1;
(statearr_52025_53655[(2)] = inst_51870);

(statearr_52025_53655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (18))){
var inst_51809 = (state_51940[(13)]);
var inst_51801 = (state_51940[(23)]);
var inst_51850 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51809,inst_51801);
var state_51940__$1 = state_51940;
if(inst_51850){
var statearr_52026_53656 = state_51940__$1;
(statearr_52026_53656[(1)] = (20));

} else {
var statearr_52027_53657 = state_51940__$1;
(statearr_52027_53657[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (42))){
var inst_51876 = (state_51940[(8)]);
var state_51940__$1 = state_51940;
if(cljs.core.truth_(inst_51876)){
var statearr_52028_53658 = state_51940__$1;
(statearr_52028_53658[(1)] = (45));

} else {
var statearr_52029_53659 = state_51940__$1;
(statearr_52029_53659[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51941 === (37))){
var inst_51898 = (state_51940[(24)]);
var inst_51902 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_51903 = [inst_51898];
var inst_51904 = cljs.core.PersistentHashMap.fromArrays(inst_51902,inst_51903);
var state_51940__$1 = state_51940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51940__$1,(40),self__.ops_chan,inst_51904);
} else {
if((state_val_51941 === (8))){
var inst_51818 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_51819 = [true];
var inst_51820 = cljs.core.PersistentHashMap.fromArrays(inst_51818,inst_51819);
var state_51940__$1 = state_51940;
var statearr_52032_53661 = state_51940__$1;
(statearr_52032_53661[(2)] = inst_51820);

(statearr_52032_53661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52033[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52033[(1)] = (1));

return statearr_52033;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_51940){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_51940);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52034){var ex__27576__auto__ = e52034;
var statearr_52036_53663 = state_51940;
(statearr_52036_53663[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_51940[(4)]))){
var statearr_52037_53665 = state_51940;
(statearr_52037_53665[(1)] = cljs.core.first((state_51940[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53666 = state_51940;
state_51940 = G__53666;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_51940){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_51940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52040 = f__27596__auto__();
(statearr_52040[(6)] = c__27595__auto___53606);

return statearr_52040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));


return this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
}));

(frontend.fs.sync.SyncManager.prototype.idle = (function (){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52099){
var state_val_52100 = (state_52099[(1)]);
if((state_val_52100 === (7))){
var inst_52046 = (state_52099[(7)]);
var inst_52056 = [new cljs.core.Keyword(null,"remote","remote",-1593576576)];
var inst_52057 = [inst_52046];
var inst_52058 = cljs.core.PersistentHashMap.fromArrays(inst_52056,inst_52057);
var inst_52059 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local","frontend.fs.sync/remote->local",1736732107),inst_52058);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(10),inst_52059);
} else {
if((state_val_52100 === (20))){
var state_52099__$1 = state_52099;
var statearr_52101_53668 = state_52099__$1;
(statearr_52101_53668[(1)] = (23));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (1))){
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(2),self__.ops_chan);
} else {
if((state_val_52100 === (24))){
var state_52099__$1 = state_52099;
var statearr_52103_53669 = state_52099__$1;
(statearr_52103_53669[(2)] = null);

(statearr_52103_53669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (4))){
var inst_52046 = (state_52099[(7)]);
var state_52099__$1 = state_52099;
if(cljs.core.truth_(inst_52046)){
var statearr_52104_53670 = state_52099__$1;
(statearr_52104_53670[(1)] = (7));

} else {
var statearr_52105_53671 = state_52099__$1;
(statearr_52105_53671[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (15))){
var inst_52072 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote-full-sync","frontend.fs.sync/local->remote-full-sync",-231971794),null);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(18),inst_52072);
} else {
if((state_val_52100 === (21))){
var inst_52089 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52106_53672 = state_52099__$1;
(statearr_52106_53672[(2)] = inst_52089);

(statearr_52106_53672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (13))){
var inst_52093 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52107_53673 = state_52099__$1;
(statearr_52107_53673[(2)] = inst_52093);

(statearr_52107_53673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (22))){
var inst_52079 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52108_53674 = state_52099__$1;
(statearr_52108_53674[(2)] = inst_52079);

(statearr_52108_53674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (6))){
var inst_52053 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52109_53675 = state_52099__$1;
(statearr_52109_53675[(2)] = inst_52053);

(statearr_52109_53675[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (25))){
var inst_52087 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52110_53676 = state_52099__$1;
(statearr_52110_53676[(2)] = inst_52087);

(statearr_52110_53676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (17))){
var inst_52091 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52111_53677 = state_52099__$1;
(statearr_52111_53677[(2)] = inst_52091);

(statearr_52111_53677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (3))){
var inst_52051 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(6),inst_52051);
} else {
if((state_val_52100 === (12))){
var inst_52048 = (state_52099[(8)]);
var state_52099__$1 = state_52099;
if(cljs.core.truth_(inst_52048)){
var statearr_52112_53678 = state_52099__$1;
(statearr_52112_53678[(1)] = (15));

} else {
var statearr_52113_53679 = state_52099__$1;
(statearr_52113_53679[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (2))){
var inst_52043 = (state_52099[(2)]);
var inst_52044 = cljs.core.__destructure_map(inst_52043);
var inst_52045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_52046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"remote->local","remote->local",2046829451));
var inst_52047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356));
var inst_52048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906));
var inst_52049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52044,new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000));
var state_52099__$1 = (function (){var statearr_52115 = state_52099;
(statearr_52115[(8)] = inst_52048);

(statearr_52115[(9)] = inst_52049);

(statearr_52115[(7)] = inst_52046);

(statearr_52115[(10)] = inst_52047);

return statearr_52115;
})();
if(cljs.core.truth_(inst_52045)){
var statearr_52116_53680 = state_52099__$1;
(statearr_52116_53680[(1)] = (3));

} else {
var statearr_52117_53681 = state_52099__$1;
(statearr_52117_53681[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (23))){
var inst_52082 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(26),inst_52082);
} else {
if((state_val_52100 === (19))){
var inst_52077 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","remote->local-full-sync","frontend.fs.sync/remote->local-full-sync",765993304),null);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(22),inst_52077);
} else {
if((state_val_52100 === (11))){
var inst_52047 = (state_52099[(10)]);
var inst_52064 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_52065 = [inst_52047];
var inst_52066 = cljs.core.PersistentHashMap.fromArrays(inst_52064,inst_52065);
var inst_52067 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","local->remote","frontend.fs.sync/local->remote",-1502065196),inst_52066);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52099__$1,(14),inst_52067);
} else {
if((state_val_52100 === (9))){
var inst_52095 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52118_53682 = state_52099__$1;
(statearr_52118_53682[(2)] = inst_52095);

(statearr_52118_53682[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (5))){
var inst_52097 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52099__$1,inst_52097);
} else {
if((state_val_52100 === (14))){
var inst_52069 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52119_53683 = state_52099__$1;
(statearr_52119_53683[(2)] = inst_52069);

(statearr_52119_53683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (26))){
var inst_52084 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52120_53684 = state_52099__$1;
(statearr_52120_53684[(2)] = inst_52084);

(statearr_52120_53684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (16))){
var inst_52049 = (state_52099[(9)]);
var state_52099__$1 = state_52099;
if(cljs.core.truth_(inst_52049)){
var statearr_52121_53685 = state_52099__$1;
(statearr_52121_53685[(1)] = (19));

} else {
var statearr_52123_53686 = state_52099__$1;
(statearr_52123_53686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (10))){
var inst_52061 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52124_53687 = state_52099__$1;
(statearr_52124_53687[(2)] = inst_52061);

(statearr_52124_53687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (18))){
var inst_52074 = (state_52099[(2)]);
var state_52099__$1 = state_52099;
var statearr_52125_53688 = state_52099__$1;
(statearr_52125_53688[(2)] = inst_52074);

(statearr_52125_53688[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52100 === (8))){
var inst_52047 = (state_52099[(10)]);
var state_52099__$1 = state_52099;
if(cljs.core.truth_(inst_52047)){
var statearr_52126_53689 = state_52099__$1;
(statearr_52126_53689[(1)] = (11));

} else {
var statearr_52127_53690 = state_52099__$1;
(statearr_52127_53690[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52128 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52128[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52128[(1)] = (1));

return statearr_52128;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52099){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52099);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52129){var ex__27576__auto__ = e52129;
var statearr_52130_53691 = state_52099;
(statearr_52130_53691[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52099[(4)]))){
var statearr_52131_53692 = state_52099;
(statearr_52131_53692[(1)] = cljs.core.first((state_52099[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53693 = state_52099;
state_52099 = G__53693;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52099){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52132 = f__27596__auto__();
(statearr_52132[(6)] = c__27595__auto__);

return statearr_52132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.full_sync = (function (){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52186){
var state_val_52187 = (state_52186[(1)]);
if((state_val_52187 === (7))){
var inst_52137 = (state_52186[(7)]);
var state_52186__$1 = state_52186;
var statearr_52188_53694 = state_52186__$1;
(statearr_52188_53694[(2)] = inst_52137);

(statearr_52188_53694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (20))){
var inst_52140 = (state_52186[(8)]);
var inst_52174 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-sync",inst_52140], 0));
var inst_52175 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52186__$1 = (function (){var statearr_52189 = state_52186;
(statearr_52189[(9)] = inst_52174);

return statearr_52189;
})();
var statearr_52190_53695 = state_52186__$1;
(statearr_52190_53695[(2)] = inst_52175);

(statearr_52190_53695[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (1))){
var inst_52134 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_all_files_BANG_$arity$1(null);
var state_52186__$1 = state_52186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52186__$1,(2),inst_52134);
} else {
if((state_val_52187 === (4))){
var inst_52137 = (state_52186[(7)]);
var state_52186__$1 = state_52186;
var statearr_52191_53696 = state_52186__$1;
(statearr_52191_53696[(2)] = inst_52137);

(statearr_52191_53696[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (15))){
var inst_52162 = (state_52186[(2)]);
var inst_52163 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_52164 = [true];
var inst_52165 = cljs.core.PersistentHashMap.fromArrays(inst_52163,inst_52164);
var state_52186__$1 = (function (){var statearr_52192 = state_52186;
(statearr_52192[(10)] = inst_52162);

return statearr_52192;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52186__$1,(16),self__.ops_chan,inst_52165);
} else {
if((state_val_52187 === (21))){
var state_52186__$1 = state_52186;
var statearr_52193_53697 = state_52186__$1;
(statearr_52193_53697[(2)] = null);

(statearr_52193_53697[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (13))){
var inst_52141 = (state_52186[(11)]);
var state_52186__$1 = state_52186;
if(cljs.core.truth_(inst_52141)){
var statearr_52194_53698 = state_52186__$1;
(statearr_52194_53698[(1)] = (17));

} else {
var statearr_52195_53699 = state_52186__$1;
(statearr_52195_53699[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (22))){
var inst_52178 = (state_52186[(2)]);
var state_52186__$1 = state_52186;
var statearr_52196_53700 = state_52186__$1;
(statearr_52196_53700[(2)] = inst_52178);

(statearr_52196_53700[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (6))){
var inst_52137 = (state_52186[(7)]);
var inst_52146 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote-all-files!-result","frontend.fs.sync/sync-local->remote-all-files!-result",1562687327),inst_52137);
var state_52186__$1 = state_52186;
var statearr_52197_53701 = state_52186__$1;
(statearr_52197_53701[(2)] = inst_52146);

(statearr_52197_53701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (17))){
var inst_52171 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_52186__$1 = state_52186;
var statearr_52198_53703 = state_52186__$1;
(statearr_52198_53703[(2)] = inst_52171);

(statearr_52198_53703[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (3))){
var inst_52143 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_52144 = cljs.core.deref(inst_52143);
var state_52186__$1 = state_52186;
if(cljs.core.truth_(inst_52144)){
var statearr_52199_53705 = state_52186__$1;
(statearr_52199_53705[(1)] = (6));

} else {
var statearr_52200_53706 = state_52186__$1;
(statearr_52200_53706[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (12))){
var inst_52157 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_52158 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_52159 = [true];
var inst_52160 = cljs.core.PersistentHashMap.fromArrays(inst_52158,inst_52159);
var state_52186__$1 = (function (){var statearr_52201 = state_52186;
(statearr_52201[(12)] = inst_52157);

return statearr_52201;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52186__$1,(15),self__.ops_chan,inst_52160);
} else {
if((state_val_52187 === (2))){
var inst_52137 = (state_52186[(7)]);
var inst_52136 = (state_52186[(2)]);
var inst_52137__$1 = cljs.core.__destructure_map(inst_52136);
var inst_52138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52137__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_52139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52137__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_52140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52137__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_52141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52137__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_52186__$1 = (function (){var statearr_52202 = state_52186;
(statearr_52202[(13)] = inst_52139);

(statearr_52202[(11)] = inst_52141);

(statearr_52202[(8)] = inst_52140);

(statearr_52202[(7)] = inst_52137__$1);

(statearr_52202[(14)] = inst_52138);

return statearr_52202;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_52203_53707 = state_52186__$1;
(statearr_52203_53707[(1)] = (3));

} else {
var statearr_52204_53708 = state_52186__$1;
(statearr_52204_53708[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (19))){
var inst_52180 = (state_52186[(2)]);
var state_52186__$1 = state_52186;
var statearr_52205_53709 = state_52186__$1;
(statearr_52205_53709[(2)] = inst_52180);

(statearr_52205_53709[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (11))){
var inst_52184 = (state_52186[(2)]);
var state_52186__$1 = state_52186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52186__$1,inst_52184);
} else {
if((state_val_52187 === (9))){
var inst_52154 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52186__$1 = state_52186;
var statearr_52206_53710 = state_52186__$1;
(statearr_52206_53710[(2)] = inst_52154);

(statearr_52206_53710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (5))){
var inst_52138 = (state_52186[(14)]);
var inst_52152 = (state_52186[(2)]);
var state_52186__$1 = (function (){var statearr_52207 = state_52186;
(statearr_52207[(15)] = inst_52152);

return statearr_52207;
})();
if(cljs.core.truth_(inst_52138)){
var statearr_52208_53711 = state_52186__$1;
(statearr_52208_53711[(1)] = (9));

} else {
var statearr_52209_53712 = state_52186__$1;
(statearr_52209_53712[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (14))){
var inst_52182 = (state_52186[(2)]);
var state_52186__$1 = state_52186;
var statearr_52210_53713 = state_52186__$1;
(statearr_52210_53713[(2)] = inst_52182);

(statearr_52210_53713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (16))){
var inst_52167 = (state_52186[(2)]);
var inst_52168 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52186__$1 = (function (){var statearr_52211 = state_52186;
(statearr_52211[(16)] = inst_52167);

return statearr_52211;
})();
var statearr_52212_53715 = state_52186__$1;
(statearr_52212_53715[(2)] = inst_52168);

(statearr_52212_53715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (10))){
var inst_52139 = (state_52186[(13)]);
var state_52186__$1 = state_52186;
if(cljs.core.truth_(inst_52139)){
var statearr_52213_53720 = state_52186__$1;
(statearr_52213_53720[(1)] = (12));

} else {
var statearr_52214_53721 = state_52186__$1;
(statearr_52214_53721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (18))){
var inst_52140 = (state_52186[(8)]);
var state_52186__$1 = state_52186;
if(cljs.core.truth_(inst_52140)){
var statearr_52215_53722 = state_52186__$1;
(statearr_52215_53722[(1)] = (20));

} else {
var statearr_52216_53723 = state_52186__$1;
(statearr_52216_53723[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52187 === (8))){
var inst_52149 = (state_52186[(2)]);
var state_52186__$1 = state_52186;
var statearr_52217_53725 = state_52186__$1;
(statearr_52217_53725[(2)] = inst_52149);

(statearr_52217_53725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52224[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52224[(1)] = (1));

return statearr_52224;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52186){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52186);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52229){var ex__27576__auto__ = e52229;
var statearr_52231_53728 = state_52186;
(statearr_52231_53728[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52186[(4)]))){
var statearr_52236_53729 = state_52186;
(statearr_52236_53729[(1)] = cljs.core.first((state_52186[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53730 = state_52186;
state_52186 = G__53730;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52186){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52304 = f__27596__auto__();
(statearr_52304[(6)] = c__27595__auto__);

return statearr_52304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local_full_sync = (function (_next_state){
var self__ = this;
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52331){
var state_val_52332 = (state_52331[(1)]);
if((state_val_52332 === (7))){
var inst_52312 = (state_52331[(7)]);
var state_52331__$1 = state_52331;
if(cljs.core.truth_(inst_52312)){
var statearr_52346_53733 = state_52331__$1;
(statearr_52346_53733[(1)] = (9));

} else {
var statearr_52347_53734 = state_52331__$1;
(statearr_52347_53734[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (1))){
var inst_52307 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_all_files_BANG_$arity$1(null);
var state_52331__$1 = state_52331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52331__$1,(2),inst_52307);
} else {
if((state_val_52332 === (4))){
var inst_52313 = (state_52331[(8)]);
var state_52331__$1 = state_52331;
if(cljs.core.truth_(inst_52313)){
var statearr_52349_53735 = state_52331__$1;
(statearr_52349_53735[(1)] = (6));

} else {
var statearr_52351_53736 = state_52331__$1;
(statearr_52351_53736[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (6))){
var inst_52318 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_52331__$1 = state_52331;
var statearr_52352_53737 = state_52331__$1;
(statearr_52352_53737[(2)] = inst_52318);

(statearr_52352_53737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (3))){
var inst_52315 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52331__$1 = state_52331;
var statearr_52353_53738 = state_52331__$1;
(statearr_52353_53738[(2)] = inst_52315);

(statearr_52353_53738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (2))){
var inst_52309 = (state_52331[(2)]);
var inst_52310 = cljs.core.__destructure_map(inst_52309);
var inst_52311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52310,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_52312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52310,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_52313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52310,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var state_52331__$1 = (function (){var statearr_52355 = state_52331;
(statearr_52355[(7)] = inst_52312);

(statearr_52355[(8)] = inst_52313);

return statearr_52355;
})();
if(cljs.core.truth_(inst_52311)){
var statearr_52356_53739 = state_52331__$1;
(statearr_52356_53739[(1)] = (3));

} else {
var statearr_52357_53740 = state_52331__$1;
(statearr_52357_53740[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (11))){
var inst_52325 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
var statearr_52358_53741 = state_52331__$1;
(statearr_52358_53741[(2)] = inst_52325);

(statearr_52358_53741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (9))){
var inst_52312 = (state_52331[(7)]);
var inst_52321 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local-full-sync",inst_52312], 0));
var inst_52322 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52331__$1 = (function (){var statearr_52359 = state_52331;
(statearr_52359[(9)] = inst_52321);

return statearr_52359;
})();
var statearr_52360_53743 = state_52331__$1;
(statearr_52360_53743[(2)] = inst_52322);

(statearr_52360_53743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (5))){
var inst_52329 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52331__$1,inst_52329);
} else {
if((state_val_52332 === (10))){
var state_52331__$1 = state_52331;
var statearr_52361_53744 = state_52331__$1;
(statearr_52361_53744[(2)] = null);

(statearr_52361_53744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52332 === (8))){
var inst_52327 = (state_52331[(2)]);
var state_52331__$1 = state_52331;
var statearr_52362_53745 = state_52331__$1;
(statearr_52362_53745[(2)] = inst_52327);

(statearr_52362_53745[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52363 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52363[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52363[(1)] = (1));

return statearr_52363;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52331){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52331);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52364){var ex__27576__auto__ = e52364;
var statearr_52365_53746 = state_52331;
(statearr_52365_53746[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52331[(4)]))){
var statearr_52366_53747 = state_52331;
(statearr_52366_53747[(1)] = cljs.core.first((state_52331[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53748 = state_52331;
state_52331 = G__53748;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52331){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52367 = f__27596__auto__();
(statearr_52367[(6)] = c__27595__auto__);

return statearr_52367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.remote__GT_local = (function (_next_state,p__52368){
var self__ = this;
var map__52369 = p__52368;
var map__52369__$1 = cljs.core.__destructure_map(map__52369);
var remote_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52369__$1,new cljs.core.Keyword(null,"remote","remote",-1593576576));
var this$ = this;
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52443){
var state_val_52444 = (state_52443[(1)]);
if((state_val_52444 === (7))){
var inst_52384 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
if(cljs.core.truth_(inst_52384)){
var statearr_52445_53751 = state_52443__$1;
(statearr_52445_53751[(1)] = (8));

} else {
var statearr_52446_53752 = state_52443__$1;
(statearr_52446_53752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (20))){
var inst_52439 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
var statearr_52447_53753 = state_52443__$1;
(statearr_52447_53753[(2)] = inst_52439);

(statearr_52447_53753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (27))){
var inst_52394 = (state_52443[(7)]);
var state_52443__$1 = state_52443;
if(cljs.core.truth_(inst_52394)){
var statearr_52448_53756 = state_52443__$1;
(statearr_52448_53756[(1)] = (29));

} else {
var statearr_52449_53757 = state_52443__$1;
(statearr_52449_53757[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (1))){
var inst_52371 = (state_52443[(8)]);
var inst_52371__$1 = remote_val;
var inst_52372 = (inst_52371__$1 == null);
var state_52443__$1 = (function (){var statearr_52450 = state_52443;
(statearr_52450[(8)] = inst_52371__$1);

return statearr_52450;
})();
if(cljs.core.truth_(inst_52372)){
var statearr_52451_53762 = state_52443__$1;
(statearr_52451_53762[(1)] = (2));

} else {
var statearr_52452_53763 = state_52443__$1;
(statearr_52452_53763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (24))){
var inst_52395 = (state_52443[(9)]);
var state_52443__$1 = state_52443;
if(cljs.core.truth_(inst_52395)){
var statearr_52453_53764 = state_52443__$1;
(statearr_52453_53764[(1)] = (26));

} else {
var statearr_52454_53765 = state_52443__$1;
(statearr_52454_53765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (4))){
var inst_52377 = (state_52443[(10)]);
var inst_52377__$1 = (state_52443[(2)]);
var inst_52378 = (inst_52377__$1 == null);
var state_52443__$1 = (function (){var statearr_52455 = state_52443;
(statearr_52455[(10)] = inst_52377__$1);

return statearr_52455;
})();
if(cljs.core.truth_(inst_52378)){
var statearr_52456_53766 = state_52443__$1;
(statearr_52456_53766[(1)] = (5));

} else {
var statearr_52457_53767 = state_52443__$1;
(statearr_52457_53767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (15))){
var inst_52392 = (state_52443[(11)]);
var inst_52401 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-remote->local!-result","frontend.fs.sync/sync-remote->local!-result",1960942280),inst_52392);
var state_52443__$1 = state_52443;
var statearr_52458_53768 = state_52443__$1;
(statearr_52458_53768[(2)] = inst_52401);

(statearr_52458_53768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (21))){
var inst_52414 = (state_52443[(2)]);
var inst_52415 = [new cljs.core.Keyword(null,"local->remote-full-sync","local->remote-full-sync",-542133906)];
var inst_52416 = [true];
var inst_52417 = cljs.core.PersistentHashMap.fromArrays(inst_52415,inst_52416);
var state_52443__$1 = (function (){var statearr_52459 = state_52443;
(statearr_52459[(12)] = inst_52414);

return statearr_52459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52443__$1,(22),self__.ops_chan,inst_52417);
} else {
if((state_val_52444 === (31))){
var inst_52433 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
var statearr_52460_53770 = state_52443__$1;
(statearr_52460_53770[(2)] = inst_52433);

(statearr_52460_53770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (13))){
var inst_52392 = (state_52443[(11)]);
var state_52443__$1 = state_52443;
var statearr_52461_53771 = state_52443__$1;
(statearr_52461_53771[(2)] = inst_52392);

(statearr_52461_53771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (22))){
var inst_52419 = (state_52443[(2)]);
var inst_52420 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52443__$1 = (function (){var statearr_52462 = state_52443;
(statearr_52462[(13)] = inst_52419);

return statearr_52462;
})();
var statearr_52463_53772 = state_52443__$1;
(statearr_52463_53772[(2)] = inst_52420);

(statearr_52463_53772[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (29))){
var inst_52394 = (state_52443[(7)]);
var inst_52429 = cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["remote->local err",inst_52394], 0));
var inst_52430 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52443__$1 = (function (){var statearr_52464 = state_52443;
(statearr_52464[(14)] = inst_52429);

return statearr_52464;
})();
var statearr_52465_53773 = state_52443__$1;
(statearr_52465_53773[(2)] = inst_52430);

(statearr_52465_53773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (6))){
var inst_52377 = (state_52443[(10)]);
var inst_52381 = cljs.core.deref(self__._STAR_txid);
var inst_52382 = (inst_52377 <= inst_52381);
var state_52443__$1 = state_52443;
var statearr_52466_53774 = state_52443__$1;
(statearr_52466_53774[(2)] = inst_52382);

(statearr_52466_53774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (28))){
var inst_52435 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
var statearr_52467_53775 = state_52443__$1;
(statearr_52467_53775[(2)] = inst_52435);

(statearr_52467_53775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (25))){
var inst_52437 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
var statearr_52468_53776 = state_52443__$1;
(statearr_52468_53776[(2)] = inst_52437);

(statearr_52468_53776[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (17))){
var inst_52404 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
var statearr_52469_53778 = state_52443__$1;
(statearr_52469_53778[(2)] = inst_52404);

(statearr_52469_53778[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (3))){
var inst_52371 = (state_52443[(8)]);
var inst_52375 = new cljs.core.Keyword(null,"txid","txid",1606205478).cljs$core$IFn$_invoke$arity$1(inst_52371);
var state_52443__$1 = state_52443;
var statearr_52470_53779 = state_52443__$1;
(statearr_52470_53779[(2)] = inst_52375);

(statearr_52470_53779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (12))){
var inst_52398 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_52399 = cljs.core.deref(inst_52398);
var state_52443__$1 = state_52443;
if(cljs.core.truth_(inst_52399)){
var statearr_52471_53780 = state_52443__$1;
(statearr_52471_53780[(1)] = (15));

} else {
var statearr_52472_53781 = state_52443__$1;
(statearr_52472_53781[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (2))){
var state_52443__$1 = state_52443;
var statearr_52473_53782 = state_52443__$1;
(statearr_52473_53782[(2)] = null);

(statearr_52473_53782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (23))){
var inst_52423 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52443__$1 = state_52443;
var statearr_52474_53783 = state_52443__$1;
(statearr_52474_53783[(2)] = inst_52423);

(statearr_52474_53783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (19))){
var inst_52393 = (state_52443[(15)]);
var state_52443__$1 = state_52443;
if(cljs.core.truth_(inst_52393)){
var statearr_52475_53784 = state_52443__$1;
(statearr_52475_53784[(1)] = (23));

} else {
var statearr_52476_53785 = state_52443__$1;
(statearr_52476_53785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (11))){
var inst_52392 = (state_52443[(11)]);
var inst_52391 = (state_52443[(2)]);
var inst_52392__$1 = cljs.core.__destructure_map(inst_52391);
var inst_52393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52392__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_52394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52392__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var inst_52395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52392__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var inst_52396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52392__$1,new cljs.core.Keyword(null,"need-remote->local-full-sync","need-remote->local-full-sync",745344586));
var state_52443__$1 = (function (){var statearr_52477 = state_52443;
(statearr_52477[(16)] = inst_52396);

(statearr_52477[(11)] = inst_52392__$1);

(statearr_52477[(7)] = inst_52394);

(statearr_52477[(9)] = inst_52395);

(statearr_52477[(15)] = inst_52393);

return statearr_52477;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_52478_53786 = state_52443__$1;
(statearr_52478_53786[(1)] = (12));

} else {
var statearr_52479_53787 = state_52443__$1;
(statearr_52479_53787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (9))){
var inst_52389 = self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$sync_remote__GT_local_BANG_$arity$1(null);
var state_52443__$1 = state_52443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52443__$1,(11),inst_52389);
} else {
if((state_val_52444 === (5))){
var state_52443__$1 = state_52443;
var statearr_52480_53790 = state_52443__$1;
(statearr_52480_53790[(2)] = null);

(statearr_52480_53790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (14))){
var inst_52396 = (state_52443[(16)]);
var inst_52407 = (state_52443[(2)]);
var state_52443__$1 = (function (){var statearr_52481 = state_52443;
(statearr_52481[(17)] = inst_52407);

return statearr_52481;
})();
if(cljs.core.truth_(inst_52396)){
var statearr_52482_53795 = state_52443__$1;
(statearr_52482_53795[(1)] = (18));

} else {
var statearr_52483_53796 = state_52443__$1;
(statearr_52483_53796[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (26))){
var inst_52426 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390),null);
var state_52443__$1 = state_52443;
var statearr_52484_53797 = state_52443__$1;
(statearr_52484_53797[(2)] = inst_52426);

(statearr_52484_53797[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (16))){
var inst_52392 = (state_52443[(11)]);
var state_52443__$1 = state_52443;
var statearr_52490_53798 = state_52443__$1;
(statearr_52490_53798[(2)] = inst_52392);

(statearr_52490_53798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (30))){
var state_52443__$1 = state_52443;
var statearr_52491_53799 = state_52443__$1;
(statearr_52491_53799[(2)] = null);

(statearr_52491_53799[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52444 === (10))){
var inst_52441 = (state_52443[(2)]);
var state_52443__$1 = state_52443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52443__$1,inst_52441);
} else {
if((state_val_52444 === (18))){
var inst_52409 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_52410 = [new cljs.core.Keyword(null,"remote->local-full-sync","remote->local-full-sync",-1658033000)];
var inst_52411 = [true];
var inst_52412 = cljs.core.PersistentHashMap.fromArrays(inst_52410,inst_52411);
var state_52443__$1 = (function (){var statearr_52492 = state_52443;
(statearr_52492[(18)] = inst_52409);

return statearr_52492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52443__$1,(21),self__.ops_chan,inst_52412);
} else {
if((state_val_52444 === (8))){
var inst_52386 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52443__$1 = state_52443;
var statearr_52493_53801 = state_52443__$1;
(statearr_52493_53801[(2)] = inst_52386);

(statearr_52493_53801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52494[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52494[(1)] = (1));

return statearr_52494;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52443){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52443);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52495){var ex__27576__auto__ = e52495;
var statearr_52496_53802 = state_52443;
(statearr_52496_53802[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52443[(4)]))){
var statearr_52497_53803 = state_52443;
(statearr_52497_53803[(1)] = cljs.core.first((state_52443[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53804 = state_52443;
state_52443 = G__53804;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52443){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52499 = f__27596__auto__();
(statearr_52499[(6)] = c__27595__auto__);

return statearr_52499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.local__GT_remote = (function (p__52500){
var self__ = this;
var map__52501 = p__52500;
var map__52501__$1 = cljs.core.__destructure_map(map__52501);
var local_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52501__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var this$ = this;
if((!((local_change == null)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_change),"\n","(some? local-change)"].join('')));
}

var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52555){
var state_val_52556 = (state_52555[(1)]);
if((state_val_52556 === (7))){
var inst_52509 = (state_52555[(7)]);
var state_52555__$1 = state_52555;
var statearr_52557_53806 = state_52555__$1;
(statearr_52557_53806[(2)] = inst_52509);

(statearr_52557_53806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (1))){
var inst_52503 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52504 = [local_change];
var inst_52505 = (new cljs.core.PersistentVector(null,1,(5),inst_52503,inst_52504,null));
var inst_52506 = self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$sync_local__GT_remote_BANG_$arity$2(null,inst_52505);
var state_52555__$1 = state_52555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52555__$1,(2),inst_52506);
} else {
if((state_val_52556 === (4))){
var inst_52509 = (state_52555[(7)]);
var state_52555__$1 = state_52555;
var statearr_52558_53807 = state_52555__$1;
(statearr_52558_53807[(2)] = inst_52509);

(statearr_52558_53807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (15))){
var inst_52533 = (state_52555[(2)]);
var inst_52534 = [new cljs.core.Keyword(null,"local->remote","local->remote",-1724677356)];
var inst_52535 = [new cljs.core.Keyword(null,"local","local",-1497766724)];
var inst_52536 = [local_change];
var inst_52537 = cljs.core.PersistentHashMap.fromArrays(inst_52535,inst_52536);
var inst_52538 = [inst_52537];
var inst_52539 = cljs.core.PersistentHashMap.fromArrays(inst_52534,inst_52538);
var state_52555__$1 = (function (){var statearr_52559 = state_52555;
(statearr_52559[(8)] = inst_52533);

return statearr_52559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52555__$1,(16),self__.ops_chan,inst_52539);
} else {
if((state_val_52556 === (13))){
var inst_52512 = (state_52555[(9)]);
var state_52555__$1 = state_52555;
if(cljs.core.truth_(inst_52512)){
var statearr_52560_53808 = state_52555__$1;
(statearr_52560_53808[(1)] = (17));

} else {
var statearr_52561_53809 = state_52555__$1;
(statearr_52561_53809[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (6))){
var inst_52509 = (state_52555[(7)]);
var inst_52517 = cljs.spec.alpha.assert_STAR_(new cljs.core.Keyword("frontend.fs.sync","sync-local->remote!-result","frontend.fs.sync/sync-local->remote!-result",-1428038618),inst_52509);
var state_52555__$1 = state_52555;
var statearr_52562_53810 = state_52555__$1;
(statearr_52562_53810[(2)] = inst_52517);

(statearr_52562_53810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (17))){
var inst_52512 = (state_52555[(9)]);
var inst_52545 = frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["local->remote",inst_52512], 0));
var inst_52546 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52555__$1 = (function (){var statearr_52563 = state_52555;
(statearr_52563[(10)] = inst_52545);

return statearr_52563;
})();
var statearr_52564_53811 = state_52555__$1;
(statearr_52564_53811[(2)] = inst_52546);

(statearr_52564_53811[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (3))){
var inst_52514 = new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",(20),(1),true,(1480),(1482),cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]));
var inst_52515 = cljs.core.deref(inst_52514);
var state_52555__$1 = state_52555;
if(cljs.core.truth_(inst_52515)){
var statearr_52565_53814 = state_52555__$1;
(statearr_52565_53814[(1)] = (6));

} else {
var statearr_52566_53815 = state_52555__$1;
(statearr_52566_53815[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (12))){
var inst_52528 = frontend.fs.sync.drain_chan(self__.ops_chan);
var inst_52529 = [new cljs.core.Keyword(null,"remote->local","remote->local",2046829451)];
var inst_52530 = [true];
var inst_52531 = cljs.core.PersistentHashMap.fromArrays(inst_52529,inst_52530);
var state_52555__$1 = (function (){var statearr_52567 = state_52555;
(statearr_52567[(11)] = inst_52528);

return statearr_52567;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52555__$1,(15),self__.ops_chan,inst_52531);
} else {
if((state_val_52556 === (2))){
var inst_52509 = (state_52555[(7)]);
var inst_52508 = (state_52555[(2)]);
var inst_52509__$1 = cljs.core.__destructure_map(inst_52508);
var inst_52510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52509__$1,new cljs.core.Keyword(null,"succ","succ",1386276271));
var inst_52511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52509__$1,new cljs.core.Keyword(null,"need-sync-remote","need-sync-remote",938481663));
var inst_52512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52509__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881));
var state_52555__$1 = (function (){var statearr_52568 = state_52555;
(statearr_52568[(12)] = inst_52510);

(statearr_52568[(7)] = inst_52509__$1);

(statearr_52568[(13)] = inst_52511);

(statearr_52568[(9)] = inst_52512);

return statearr_52568;
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
var statearr_52569_53816 = state_52555__$1;
(statearr_52569_53816[(1)] = (3));

} else {
var statearr_52570_53817 = state_52555__$1;
(statearr_52570_53817[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (19))){
var inst_52549 = (state_52555[(2)]);
var state_52555__$1 = state_52555;
var statearr_52578_53818 = state_52555__$1;
(statearr_52578_53818[(2)] = inst_52549);

(statearr_52578_53818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (11))){
var inst_52553 = (state_52555[(2)]);
var state_52555__$1 = state_52555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52555__$1,inst_52553);
} else {
if((state_val_52556 === (9))){
var inst_52525 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52555__$1 = state_52555;
var statearr_52584_53819 = state_52555__$1;
(statearr_52584_53819[(2)] = inst_52525);

(statearr_52584_53819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (5))){
var inst_52510 = (state_52555[(12)]);
var inst_52523 = (state_52555[(2)]);
var state_52555__$1 = (function (){var statearr_52585 = state_52555;
(statearr_52585[(14)] = inst_52523);

return statearr_52585;
})();
if(cljs.core.truth_(inst_52510)){
var statearr_52586_53821 = state_52555__$1;
(statearr_52586_53821[(1)] = (9));

} else {
var statearr_52587_53822 = state_52555__$1;
(statearr_52587_53822[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (14))){
var inst_52551 = (state_52555[(2)]);
var state_52555__$1 = state_52555;
var statearr_52588_53824 = state_52555__$1;
(statearr_52588_53824[(2)] = inst_52551);

(statearr_52588_53824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (16))){
var inst_52541 = (state_52555[(2)]);
var inst_52542 = this$.schedule(new cljs.core.Keyword("frontend.fs.sync","idle","frontend.fs.sync/idle",-1718623805),null);
var state_52555__$1 = (function (){var statearr_52589 = state_52555;
(statearr_52589[(15)] = inst_52541);

return statearr_52589;
})();
var statearr_52590_53825 = state_52555__$1;
(statearr_52590_53825[(2)] = inst_52542);

(statearr_52590_53825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (10))){
var inst_52511 = (state_52555[(13)]);
var state_52555__$1 = state_52555;
if(cljs.core.truth_(inst_52511)){
var statearr_52591_53826 = state_52555__$1;
(statearr_52591_53826[(1)] = (12));

} else {
var statearr_52592_53827 = state_52555__$1;
(statearr_52592_53827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (18))){
var state_52555__$1 = state_52555;
var statearr_52593_53828 = state_52555__$1;
(statearr_52593_53828[(2)] = null);

(statearr_52593_53828[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52556 === (8))){
var inst_52520 = (state_52555[(2)]);
var state_52555__$1 = state_52555;
var statearr_52594_53829 = state_52555__$1;
(statearr_52594_53829[(2)] = inst_52520);

(statearr_52594_53829[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$state_machine__27573__auto__ = null;
var frontend$fs$sync$state_machine__27573__auto____0 = (function (){
var statearr_52595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52595[(0)] = frontend$fs$sync$state_machine__27573__auto__);

(statearr_52595[(1)] = (1));

return statearr_52595;
});
var frontend$fs$sync$state_machine__27573__auto____1 = (function (state_52555){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52555);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52596){var ex__27576__auto__ = e52596;
var statearr_52597_53830 = state_52555;
(statearr_52597_53830[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52555[(4)]))){
var statearr_52598_53831 = state_52555;
(statearr_52598_53831[(1)] = cljs.core.first((state_52555[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53832 = state_52555;
state_52555 = G__53832;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$state_machine__27573__auto__ = function(state_52555){
switch(arguments.length){
case 0:
return frontend$fs$sync$state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$state_machine__27573__auto____1.call(this,state_52555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$state_machine__27573__auto____0;
frontend$fs$sync$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$state_machine__27573__auto____1;
return frontend$fs$sync$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52599 = f__27596__auto__();
(statearr_52599[(6)] = c__27595__auto__);

return statearr_52599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k51705,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__52601 = k51705;
var G__52601__$1 = (((G__52601 instanceof cljs.core.Keyword))?G__52601.fqn:null);
switch (G__52601__$1) {
case "graph-uuid":
return self__.graph_uuid;

break;
case "base-path":
return self__.base_path;

break;
case "*sync-state":
return self__._STAR_sync_state;

break;
case "local->remote-syncer":
return self__.local__GT_remote_syncer;

break;
case "remote->local-syncer":
return self__.remote__GT_local_syncer;

break;
case "full-sync-chan":
return self__.full_sync_chan;

break;
case "stop-sync-chan":
return self__.stop_sync_chan;

break;
case "remote->local-sync-chan":
return self__.remote__GT_local_sync_chan;

break;
case "local->remote-sync-chan":
return self__.local__GT_remote_sync_chan;

break;
case "local-changes-chan":
return self__.local_changes_chan;

break;
case "ratelimit-local-changes-chan":
return self__.ratelimit_local_changes_chan;

break;
case "*txid":
return self__._STAR_txid;

break;
case "state":
return self__.state;

break;
case "_remote-change-chan":
return self__._remote_change_chan;

break;
case "_*ws":
return self__.__STAR_ws;

break;
case "stopped":
return self__.stopped;

break;
case "ops-chan":
return self__.ops_chan;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51705,else__5343__auto__);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__52602){
var vec__52603 = p__52602;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52603,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52603,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#frontend.fs.sync.SyncManager{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan],null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51704){
var self__ = this;
var G__51704__$1 = this;
return (new cljs.core.RecordIter((0),G__51704__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (366090620 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51706,other51707){
var self__ = this;
var this51706__$1 = this;
return (((!((other51707 == null)))) && ((((this51706__$1.constructor === other51707.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.graph_uuid,other51707.graph_uuid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.base_path,other51707.base_path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1._STAR_sync_state,other51707._STAR_sync_state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.local__GT_remote_syncer,other51707.local__GT_remote_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.remote__GT_local_syncer,other51707.remote__GT_local_syncer)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.full_sync_chan,other51707.full_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.stop_sync_chan,other51707.stop_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.remote__GT_local_sync_chan,other51707.remote__GT_local_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.local__GT_remote_sync_chan,other51707.local__GT_remote_sync_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.local_changes_chan,other51707.local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.ratelimit_local_changes_chan,other51707.ratelimit_local_changes_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1._STAR_txid,other51707._STAR_txid)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.state,other51707.state)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1._remote_change_chan,other51707._remote_change_chan)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.__STAR_ws,other51707.__STAR_ws)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.stopped,other51707.stopped)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.ops_chan,other51707.ops_chan)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51706__$1.__extmap,other51707.__extmap)))))))))))))))))))))))))))))))))))))));
}));

(frontend.fs.sync.SyncManager.prototype.frontend$fs$sync$IStoppable$ = cljs.core.PROTOCOL_SENTINEL);

(frontend.fs.sync.SyncManager.prototype.frontend$fs$sync$IStoppable$_stop_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.stopped)){
return null;
} else {
(self__.stopped = true);

frontend.fs.sync.ws_stop_BANG_(self__.__STAR_ws);

cljs.core.async.offer_BANG_(self__.stop_sync_chan,true);

cljs.core.async.close_BANG_(self__.ops_chan);

self__.local__GT_remote_syncer.frontend$fs$sync$ILocal__GT_RemoteSync$stop_local__GT_remote_BANG_$arity$1(null);

self__.remote__GT_local_syncer.frontend$fs$sync$IRemote__GT_LocalSync$stop_remote__GT_local_BANG_$arity$1(null);

frontend.debug.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["stop sync-manager, graph-uuid",self__.graph_uuid,"base-path",self__.base_path], null)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__._STAR_sync_state,frontend.fs.sync.sync_state__update_state,new cljs.core.Keyword("frontend.fs.sync","stop","frontend.fs.sync/stop",-1853385390));
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),null,new cljs.core.Keyword(null,"base-path","base-path",495760020),null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k51705){
var self__ = this;
var this__5347__auto____$1 = this;
var G__52618 = k51705;
var G__52618__$1 = (((G__52618 instanceof cljs.core.Keyword))?G__52618.fqn:null);
switch (G__52618__$1) {
case "graph-uuid":
case "base-path":
case "*sync-state":
case "local->remote-syncer":
case "remote->local-syncer":
case "full-sync-chan":
case "stop-sync-chan":
case "remote->local-sync-chan":
case "local->remote-sync-chan":
case "local-changes-chan":
case "ratelimit-local-changes-chan":
case "*txid":
case "state":
case "_remote-change-chan":
case "_*ws":
case "stopped":
case "ops-chan":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51705);

}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__51704){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__52619 = cljs.core.keyword_identical_QMARK_;
var expr__52620 = k__5349__auto__;
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),expr__52620)))){
return (new frontend.fs.sync.SyncManager(G__51704,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"base-path","base-path",495760020),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,G__51704,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,G__51704,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,G__51704,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,G__51704,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,G__51704,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,G__51704,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,G__51704,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,G__51704,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,G__51704,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,G__51704,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"*txid","*txid",-1788150316),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,G__51704,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state","state",-1988618099),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,G__51704,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,G__51704,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,G__51704,self__.stopped,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"stopped","stopped",-1490414640),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,G__51704,self__.ops_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52619.cljs$core$IFn$_invoke$arity$2 ? pred__52619.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__52620) : pred__52619.call(null,new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),expr__52620)))){
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,G__51704,self__.__meta,self__.__extmap,null));
} else {
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__51704),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),self__.graph_uuid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"base-path","base-path",495760020),self__.base_path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),self__._STAR_sync_state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),self__.local__GT_remote_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),self__.remote__GT_local_syncer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),self__.full_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),self__.stop_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),self__.remote__GT_local_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),self__.local__GT_remote_sync_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),self__.local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),self__.ratelimit_local_changes_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"*txid","*txid",-1788150316),self__._STAR_txid,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state","state",-1988618099),self__.state,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),self__._remote_change_chan,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),self__.__STAR_ws,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"stopped","stopped",-1490414640),self__.stopped,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587),self__.ops_chan,null))], null),self__.__extmap));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__51704){
var self__ = this;
var this__5339__auto____$1 = this;
return (new frontend.fs.sync.SyncManager(self__.graph_uuid,self__.base_path,self__._STAR_sync_state,self__.local__GT_remote_syncer,self__.remote__GT_local_syncer,self__.full_sync_chan,self__.stop_sync_chan,self__.remote__GT_local_sync_chan,self__.local__GT_remote_sync_chan,self__.local_changes_chan,self__.ratelimit_local_changes_chan,self__._STAR_txid,self__.state,self__._remote_change_chan,self__.__STAR_ws,self__.stopped,self__.ops_chan,G__51704,self__.__extmap,self__.__hash));
}));

(frontend.fs.sync.SyncManager.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(frontend.fs.sync.SyncManager.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"graph-uuid","graph-uuid",-1473678247,null),new cljs.core.Symbol(null,"base-path","base-path",2136291547,null),new cljs.core.Symbol(null,"*sync-state","*sync-state",1139173717,null),cljs.core.with_meta(new cljs.core.Symbol(null,"local->remote-syncer","local->remote-syncer",195649351,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Local->RemoteSyncer","Local->RemoteSyncer",-1763578057,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"remote->local-syncer","remote->local-syncer",576154816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Remote->LocalSyncer","Remote->LocalSyncer",2008798237,null)], null)),new cljs.core.Symbol(null,"full-sync-chan","full-sync-chan",1008379583,null),new cljs.core.Symbol(null,"stop-sync-chan","stop-sync-chan",208244183,null),new cljs.core.Symbol(null,"remote->local-sync-chan","remote->local-sync-chan",190695604,null),new cljs.core.Symbol(null,"local->remote-sync-chan","local->remote-sync-chan",-198836339,null),new cljs.core.Symbol(null,"local-changes-chan","local-changes-chan",-276483993,null),cljs.core.with_meta(new cljs.core.Symbol(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-155010768,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"*txid","*txid",-147618789,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_remote-change-chan","_remote-change-chan",1313532448,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"_*ws","_*ws",829664121,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"stopped","stopped",150116887,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ops-chan","ops-chan",-782726182,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(frontend.fs.sync.SyncManager.cljs$lang$type = true);

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"frontend.fs.sync/SyncManager",null,(1),null));
}));

(frontend.fs.sync.SyncManager.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"frontend.fs.sync/SyncManager");
}));

/**
 * Positional factory function for frontend.fs.sync/SyncManager.
 */
frontend.fs.sync.__GT_SyncManager = (function frontend$fs$sync$__GT_SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan){
return (new frontend.fs.sync.SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,ratelimit_local_changes_chan,_STAR_txid,state,_remote_change_chan,__STAR_ws,stopped,ops_chan,null,null,null));
});

/**
 * Factory function for frontend.fs.sync/SyncManager, taking a map of keywords to field values.
 */
frontend.fs.sync.map__GT_SyncManager = (function frontend$fs$sync$map__GT_SyncManager(G__51708){
var extmap__5382__auto__ = (function (){var G__52622 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51708,new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-path","base-path",495760020),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295),new cljs.core.Keyword(null,"*txid","*txid",-1788150316),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406),new cljs.core.Keyword(null,"stopped","stopped",-1490414640),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587)], 0));
if(cljs.core.record_QMARK_(G__51708)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52622);
} else {
return G__52622;
}
})();
return (new frontend.fs.sync.SyncManager(new cljs.core.Keyword(null,"graph-uuid","graph-uuid",1180757522).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"*sync-state","*sync-state",-501357810).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"local->remote-syncer","local->remote-syncer",-1444882176).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"remote->local-syncer","remote->local-syncer",-1064376711).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"full-sync-chan","full-sync-chan",-632151944).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"stop-sync-chan","stop-sync-chan",-1432287344).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"remote->local-sync-chan","remote->local-sync-chan",-1449835923).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"local->remote-sync-chan","local->remote-sync-chan",-1839367866).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"local-changes-chan","local-changes-chan",-1917015520).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"ratelimit-local-changes-chan","ratelimit-local-changes-chan",-1795542295).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"*txid","*txid",-1788150316).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"_remote-change-chan","_remote-change-chan",-326999079).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"_*ws","_*ws",-810867406).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"stopped","stopped",-1490414640).cljs$core$IFn$_invoke$arity$1(G__51708),new cljs.core.Keyword(null,"ops-chan","ops-chan",1871709587).cljs$core$IFn$_invoke$arity$1(G__51708),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

frontend.fs.sync.sync_manager = (function frontend$fs$sync$sync_manager(user_uuid,graph_uuid,base_path,repo,txid,_STAR_sync_state,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan){
var _STAR_txid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(txid);
var local__GT_remote_syncer = frontend.fs.sync.__GT_Local__GT_RemoteSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_sync_state,(20000),_STAR_txid,null,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),false);
var remote__GT_local_syncer = frontend.fs.sync.__GT_Remote__GT_LocalSyncer(user_uuid,graph_uuid,base_path,repo,_STAR_txid,_STAR_sync_state,null,cljs.core.volatile_BANG_(false));
local__GT_remote_syncer.set_remote__GT_local_syncer_BANG_(remote__GT_local_syncer);

remote__GT_local_syncer.set_local__GT_remote_syncer_BANG_(local__GT_remote_syncer);

return frontend.fs.sync.__GT_SyncManager(graph_uuid,base_path,_STAR_sync_state,local__GT_remote_syncer,remote__GT_local_syncer,full_sync_chan,stop_sync_chan,remote__GT_local_sync_chan,local__GT_remote_sync_chan,local_changes_chan,null,_STAR_txid,null,null,null,false,null);
});
frontend.fs.sync.full_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.stop_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.remote__GT_local_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
frontend.fs.sync.local__GT_remote_sync_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
frontend.fs.sync.sync_stop = (function frontend$fs$sync$sync_stop(){
var temp__5720__auto__ = frontend.state.get_file_sync_manager();
if(cljs.core.truth_(temp__5720__auto__)){
var sm = temp__5720__auto__;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stopping sync-manager"], 0));

return frontend.fs.sync._stop_BANG_(sm);
} else {
return null;
}
});
frontend.fs.sync.check_graph_belong_to_current_user = (function frontend$fs$sync$check_graph_belong_to_current_user(current_user_uuid,graph_user_uuid){
if((current_user_uuid == null)){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_uuid,graph_user_uuid)){
return true;
} else {
frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","other-user-graph","file-sync/other-user-graph",1618368742)], 0)),new cljs.core.Keyword(null,"warning","warning",-1685650671),false);

return false;

}
}
});
frontend.fs.sync.check_remote_graph_exists = (function frontend$fs$sync$check_remote_graph_exists(local_graph_uuid){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52639){
var state_val_52640 = (state_52639[(1)]);
if((state_val_52640 === (1))){
var inst_52624 = (function (){return (function (p1__52623_SHARP_){
return cljs.core.contains_QMARK_(p1__52623_SHARP_,local_graph_uuid);
});
})();
var inst_52625 = frontend.fs.sync.remoteapi.frontend$fs$sync$IRemoteAPI$list_remote_graphs$arity$1(null);
var state_52639__$1 = (function (){var statearr_52641 = state_52639;
(statearr_52641[(7)] = inst_52624);

return statearr_52641;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52639__$1,(2),inst_52625);
} else {
if((state_val_52640 === (2))){
var inst_52624 = (state_52639[(7)]);
var inst_52631 = (state_52639[(8)]);
var inst_52627 = (state_52639[(2)]);
var inst_52628 = new cljs.core.Keyword(null,"Graphs","Graphs",296240865).cljs$core$IFn$_invoke$arity$1(inst_52627);
var inst_52629 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GraphUUID","GraphUUID",-237263531),inst_52628);
var inst_52630 = cljs.core.set(inst_52629);
var inst_52631__$1 = (inst_52624.cljs$core$IFn$_invoke$arity$1 ? inst_52624.cljs$core$IFn$_invoke$arity$1(inst_52630) : inst_52624.call(null,inst_52630));
var state_52639__$1 = (function (){var statearr_52642 = state_52639;
(statearr_52642[(8)] = inst_52631__$1);

return statearr_52642;
})();
if(cljs.core.truth_(inst_52631__$1)){
var statearr_52643_53853 = state_52639__$1;
(statearr_52643_53853[(1)] = (3));

} else {
var statearr_52644_53854 = state_52639__$1;
(statearr_52644_53854[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (3))){
var state_52639__$1 = state_52639;
var statearr_52645_53855 = state_52639__$1;
(statearr_52645_53855[(2)] = null);

(statearr_52645_53855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (4))){
var inst_52634 = frontend.context.i18n.t.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("file-sync","graph-deleted","file-sync/graph-deleted",110500245)], 0));
var inst_52635 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$3(inst_52634,new cljs.core.Keyword(null,"warning","warning",-1685650671),false);
var state_52639__$1 = state_52639;
var statearr_52646_53857 = state_52639__$1;
(statearr_52646_53857[(2)] = inst_52635);

(statearr_52646_53857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52640 === (5))){
var inst_52631 = (state_52639[(8)]);
var inst_52637 = (state_52639[(2)]);
var state_52639__$1 = (function (){var statearr_52647 = state_52639;
(statearr_52647[(9)] = inst_52637);

return statearr_52647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52639__$1,inst_52631);
} else {
return null;
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0 = (function (){
var statearr_52648 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52648[(0)] = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__);

(statearr_52648[(1)] = (1));

return statearr_52648;
});
var frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1 = (function (state_52639){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52639);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52649){var ex__27576__auto__ = e52649;
var statearr_52650_53858 = state_52639;
(statearr_52650_53858[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52639[(4)]))){
var statearr_52651_53859 = state_52639;
(statearr_52651_53859[(1)] = cljs.core.first((state_52639[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53860 = state_52639;
state_52639 = G__53860;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__ = function(state_52639){
switch(arguments.length){
case 0:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1.call(this,state_52639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____0;
frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto____1;
return frontend$fs$sync$check_remote_graph_exists_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52652 = f__27596__auto__();
(statearr_52652[(6)] = c__27595__auto__);

return statearr_52652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.fs.sync.sync_start = (function frontend$fs$sync$sync_start(){
var vec__52653 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var user_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52653,(0),null);
var graph_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52653,(1),null);
var txid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52653,(2),null);
var _STAR_sync_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(frontend.fs.sync.sync_state());
var current_user_uuid = frontend.handler.user.user_uuid();
var repo = frontend.state.get_current_repo();
var sm = frontend.fs.sync.sync_manager(current_user_uuid,graph_uuid,frontend.config.get_repo_dir(repo),repo,txid,_STAR_sync_state,frontend.fs.sync.full_sync_chan,frontend.fs.sync.stop_sync_chan,frontend.fs.sync.remote__GT_local_sync_chan,frontend.fs.sync.local__GT_remote_sync_chan,frontend.fs.sync.local_changes_chan);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_52701){
var state_val_52702 = (state_52701[(1)]);
if((state_val_52702 === (7))){
var inst_52697 = (state_52701[(2)]);
var state_52701__$1 = state_52701;
var statearr_52703_53861 = state_52701__$1;
(statearr_52703_53861[(2)] = inst_52697);

(statearr_52703_53861[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (1))){
var inst_52656 = cljs.core.deref(frontend.fs.sync.graphs_txid);
var inst_52657 = cljs.core.count(inst_52656);
var inst_52658 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((3),inst_52657);
var state_52701__$1 = state_52701;
if(inst_52658){
var statearr_52704_53862 = state_52701__$1;
(statearr_52704_53862[(1)] = (2));

} else {
var statearr_52705_53863 = state_52701__$1;
(statearr_52705_53863[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (4))){
var inst_52699 = (state_52701[(2)]);
var state_52701__$1 = state_52701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52701__$1,inst_52699);
} else {
if((state_val_52702 === (6))){
var state_52701__$1 = state_52701;
var statearr_52706_53864 = state_52701__$1;
(statearr_52706_53864[(2)] = null);

(statearr_52706_53864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (3))){
var inst_52663 = frontend.fs.sync.check_graph_belong_to_current_user(current_user_uuid,user_uuid);
var state_52701__$1 = state_52701;
if(inst_52663){
var statearr_52707_53865 = state_52701__$1;
(statearr_52707_53865[(1)] = (5));

} else {
var statearr_52708_53866 = state_52701__$1;
(statearr_52708_53866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (12))){
var inst_52678 = (state_52701[(2)]);
var inst_52679 = frontend.fs.sync.drain_chan(frontend.fs.sync.local_changes_chan);
var inst_52680 = cljs.core.async.poll_BANG_(frontend.fs.sync.stop_sync_chan);
var inst_52681 = cljs.core.async.poll_BANG_(frontend.fs.sync.remote__GT_local_sync_chan);
var inst_52682 = (function (){return (function (_,___$1,___$2,n){
return frontend.state.set_file_sync_state(n);
});
})();
var inst_52683 = cljs.core.add_watch(_STAR_sync_state,new cljs.core.Keyword("frontend.fs.sync","update-global-state","frontend.fs.sync/update-global-state",-739606169),inst_52682);
var inst_52684 = sm.start();
var inst_52685 = cljs.core.async.offer_BANG_(frontend.fs.sync.remote__GT_local_sync_chan,true);
var inst_52686 = cljs.core.async.offer_BANG_(frontend.fs.sync.full_sync_chan,true);
var inst_52687 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("network","online?","network/online?",1306822774));
var inst_52688 = (function (){return (function (_k,_r,_o,n){
if(n === false){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_52689 = cljs.core.add_watch(inst_52687,"sync-manage",inst_52688);
var inst_52690 = rum.core.cursor(frontend.state.state,new cljs.core.Keyword("auth","id-token","auth/id-token",-332149946));
var inst_52691 = (function (){return (function (_k,_r,_o,n){
if((n == null)){
return frontend.fs.sync.sync_stop();
} else {
return null;
}
});
})();
var inst_52692 = cljs.core.add_watch(inst_52690,"sync-manage",inst_52691);
var state_52701__$1 = (function (){var statearr_52709 = state_52701;
(statearr_52709[(7)] = inst_52678);

(statearr_52709[(8)] = inst_52680);

(statearr_52709[(9)] = inst_52684);

(statearr_52709[(10)] = inst_52686);

(statearr_52709[(11)] = inst_52685);

(statearr_52709[(12)] = inst_52683);

(statearr_52709[(13)] = inst_52681);

(statearr_52709[(14)] = inst_52689);

(statearr_52709[(15)] = inst_52679);

return statearr_52709;
})();
var statearr_52710_53867 = state_52701__$1;
(statearr_52710_53867[(2)] = inst_52692);

(statearr_52710_53867[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (2))){
var inst_52660 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var inst_52661 = frontend.state.set_file_sync_state(null);
var state_52701__$1 = (function (){var statearr_52711 = state_52701;
(statearr_52711[(16)] = inst_52660);

return statearr_52711;
})();
var statearr_52712_53868 = state_52701__$1;
(statearr_52712_53868[(2)] = inst_52661);

(statearr_52712_53868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (11))){
var inst_52694 = (state_52701[(2)]);
var state_52701__$1 = state_52701;
var statearr_52713_53869 = state_52701__$1;
(statearr_52713_53869[(2)] = inst_52694);

(statearr_52713_53869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (9))){
var inst_52670 = frontend.fs.sync.clear_graphs_txid_BANG_(repo);
var state_52701__$1 = state_52701;
var statearr_52714_53870 = state_52701__$1;
(statearr_52714_53870[(2)] = inst_52670);

(statearr_52714_53870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52702 === (5))){
var inst_52665 = frontend.fs.sync.check_remote_graph_exists(graph_uuid);
var state_52701__$1 = state_52701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52701__$1,(8),inst_52665);
} else {
if((state_val_52702 === (10))){
var inst_52672 = frontend.fs.sync.set_env(frontend.fs.sync.rsapi,frontend.config.FILE_SYNC_PROD_QMARK_);
var inst_52673 = cljs.core.deref(_STAR_sync_state);
var inst_52674 = frontend.state.set_file_sync_state(inst_52673);
var inst_52675 = frontend.state.set_file_sync_manager(sm);
var inst_52676 = cljs.core.async.timeout((5000));
var state_52701__$1 = (function (){var statearr_52715 = state_52701;
(statearr_52715[(17)] = inst_52675);

(statearr_52715[(18)] = inst_52674);

(statearr_52715[(19)] = inst_52672);

return statearr_52715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52701__$1,(12),inst_52676);
} else {
if((state_val_52702 === (8))){
var inst_52667 = (state_52701[(2)]);
var inst_52668 = cljs.core.not(inst_52667);
var state_52701__$1 = state_52701;
if(inst_52668){
var statearr_52716_53871 = state_52701__$1;
(statearr_52716_53871[(1)] = (9));

} else {
var statearr_52717_53872 = state_52701__$1;
(statearr_52717_53872[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = null;
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____0 = (function (){
var statearr_52718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52718[(0)] = frontend$fs$sync$sync_start_$_state_machine__27573__auto__);

(statearr_52718[(1)] = (1));

return statearr_52718;
});
var frontend$fs$sync$sync_start_$_state_machine__27573__auto____1 = (function (state_52701){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_52701);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e52719){var ex__27576__auto__ = e52719;
var statearr_52720_53873 = state_52701;
(statearr_52720_53873[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_52701[(4)]))){
var statearr_52721_53874 = state_52701;
(statearr_52721_53874[(1)] = cljs.core.first((state_52701[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53875 = state_52701;
state_52701 = G__53875;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$fs$sync$sync_start_$_state_machine__27573__auto__ = function(state_52701){
switch(arguments.length){
case 0:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$fs$sync$sync_start_$_state_machine__27573__auto____1.call(this,state_52701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____0;
frontend$fs$sync$sync_start_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$fs$sync$sync_start_$_state_machine__27573__auto____1;
return frontend$fs$sync$sync_start_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_52722 = f__27596__auto__();
(statearr_52722[(6)] = c__27595__auto__);

return statearr_52722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.fs.sync.js.map
