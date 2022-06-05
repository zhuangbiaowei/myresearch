goog.provide('frontend.extensions.zotero.handler');
frontend.extensions.zotero.handler.add = (function frontend$extensions$zotero$handler$add(page_name,type,item){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55051){
var state_val_55052 = (state_55051[(1)]);
if((state_val_55052 === (7))){
var inst_54966 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"attachments-block-text","attachments-block-text",455049244));
var state_55051__$1 = state_55051;
var statearr_55053_55286 = state_55051__$1;
(statearr_55053_55286[(2)] = inst_54966);

(statearr_55053_55286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (20))){
var inst_55046 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55054_55287 = state_55051__$1;
(statearr_55054_55287[(2)] = inst_55046);

(statearr_55054_55287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (27))){
var inst_55016 = (state_55051[(7)]);
var inst_55000 = (state_55051[(8)]);
var inst_55016__$1 = cljs.core.seq(inst_55000);
var state_55051__$1 = (function (){var statearr_55055 = state_55051;
(statearr_55055[(7)] = inst_55016__$1);

return statearr_55055;
})();
if(inst_55016__$1){
var statearr_55056_55288 = state_55051__$1;
(statearr_55056_55288[(1)] = (29));

} else {
var statearr_55057_55289 = state_55051__$1;
(statearr_55057_55289[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (1))){
var inst_54957 = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item);
var inst_54958 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(item);
var inst_54959 = new cljs.core.Keyword(null,"num-children","num-children",-1656107233).cljs$core$IFn$_invoke$arity$1(inst_54958);
var state_55051__$1 = (function (){var statearr_55058 = state_55051;
(statearr_55058[(9)] = inst_54959);

(statearr_55058[(10)] = inst_54957);

return statearr_55058;
})();
var G__55059_55290 = type;
var G__55059_55291__$1 = (((G__55059_55290 instanceof cljs.core.Keyword))?G__55059_55290.fqn:null);
switch (G__55059_55291__$1) {
case "notes":
var statearr_55060_55293 = state_55051__$1;
(statearr_55060_55293[(1)] = (3));


break;
case "attachments":
var statearr_55061_55294 = state_55051__$1;
(statearr_55061_55294[(1)] = (4));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55059_55291__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (24))){
var inst_55002 = (state_55051[(11)]);
var inst_55003 = (state_55051[(12)]);
var inst_55005 = (inst_55003 < inst_55002);
var inst_55006 = inst_55005;
var state_55051__$1 = state_55051;
if(cljs.core.truth_(inst_55006)){
var statearr_55062_55295 = state_55051__$1;
(statearr_55062_55295[(1)] = (26));

} else {
var statearr_55063_55296 = state_55051__$1;
(statearr_55063_55296[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (4))){
var state_55051__$1 = state_55051;
var statearr_55064_55297 = state_55051__$1;
(statearr_55064_55297[(2)] = frontend.extensions.zotero.api.attachments);

(statearr_55064_55297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (15))){
var state_55051__$1 = state_55051;
var statearr_55065_55298 = state_55051__$1;
(statearr_55065_55298[(2)] = null);

(statearr_55065_55298[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (21))){
var inst_54986 = (state_55051[(13)]);
var inst_54999 = cljs.core.seq(inst_54986);
var inst_55000 = inst_54999;
var inst_55001 = null;
var inst_55002 = (0);
var inst_55003 = (0);
var state_55051__$1 = (function (){var statearr_55066 = state_55051;
(statearr_55066[(11)] = inst_55002);

(statearr_55066[(8)] = inst_55000);

(statearr_55066[(14)] = inst_55001);

(statearr_55066[(12)] = inst_55003);

return statearr_55066;
})();
var statearr_55067_55299 = state_55051__$1;
(statearr_55067_55299[(2)] = null);

(statearr_55067_55299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (31))){
var inst_55036 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55068_55300 = state_55051__$1;
(statearr_55068_55300[(2)] = inst_55036);

(statearr_55068_55300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (32))){
var inst_55016 = (state_55051[(7)]);
var inst_55020 = cljs.core.chunk_first(inst_55016);
var inst_55021 = cljs.core.chunk_rest(inst_55016);
var inst_55022 = cljs.core.count(inst_55020);
var inst_55000 = inst_55021;
var inst_55001 = inst_55020;
var inst_55002 = inst_55022;
var inst_55003 = (0);
var state_55051__$1 = (function (){var statearr_55069 = state_55051;
(statearr_55069[(11)] = inst_55002);

(statearr_55069[(8)] = inst_55000);

(statearr_55069[(14)] = inst_55001);

(statearr_55069[(12)] = inst_55003);

return statearr_55069;
})();
var statearr_55070_55301 = state_55051__$1;
(statearr_55070_55301[(2)] = null);

(statearr_55070_55301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (33))){
var inst_55016 = (state_55051[(7)]);
var inst_54993 = (state_55051[(15)]);
var inst_55025 = cljs.core.first(inst_55016);
var inst_55026 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_55027 = [inst_54993,false,false];
var inst_55028 = cljs.core.PersistentHashMap.fromArrays(inst_55026,inst_55027);
var inst_55029 = frontend.handler.editor.api_insert_new_block_BANG_(inst_55025,inst_55028);
var inst_55030 = cljs.core.next(inst_55016);
var inst_55000 = inst_55030;
var inst_55001 = null;
var inst_55002 = (0);
var inst_55003 = (0);
var state_55051__$1 = (function (){var statearr_55071 = state_55051;
(statearr_55071[(16)] = inst_55029);

(statearr_55071[(11)] = inst_55002);

(statearr_55071[(8)] = inst_55000);

(statearr_55071[(14)] = inst_55001);

(statearr_55071[(12)] = inst_55003);

return statearr_55071;
})();
var statearr_55072_55302 = state_55051__$1;
(statearr_55072_55302[(2)] = null);

(statearr_55072_55302[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (13))){
var inst_54980 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
if(cljs.core.truth_(inst_54980)){
var statearr_55073_55303 = state_55051__$1;
(statearr_55073_55303[(1)] = (14));

} else {
var statearr_55074_55304 = state_55051__$1;
(statearr_55074_55304[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (22))){
var state_55051__$1 = state_55051;
var statearr_55075_55305 = state_55051__$1;
(statearr_55075_55305[(2)] = null);

(statearr_55075_55305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (29))){
var inst_55016 = (state_55051[(7)]);
var inst_55018 = cljs.core.chunked_seq_QMARK_(inst_55016);
var state_55051__$1 = state_55051;
if(inst_55018){
var statearr_55076_55306 = state_55051__$1;
(statearr_55076_55306[(1)] = (32));

} else {
var statearr_55077_55307 = state_55051__$1;
(statearr_55077_55307[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (6))){
var inst_54964 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"notes-block-text","notes-block-text",1546725518));
var state_55051__$1 = state_55051;
var statearr_55078_55308 = state_55051__$1;
(statearr_55078_55308[(2)] = inst_54964);

(statearr_55078_55308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (28))){
var inst_55038 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55079_55309 = state_55051__$1;
(statearr_55079_55309[(2)] = inst_55038);

(statearr_55079_55309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (25))){
var inst_55040 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55080_55310 = state_55051__$1;
(statearr_55080_55310[(2)] = inst_55040);

(statearr_55080_55310[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (34))){
var inst_55033 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55081_55311 = state_55051__$1;
(statearr_55081_55311[(2)] = inst_55033);

(statearr_55081_55311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (17))){
var inst_54986 = (state_55051[(13)]);
var inst_54984 = (state_55051[(2)]);
var inst_54985 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(frontend.extensions.zotero.extractor.extract,inst_54984);
var inst_54986__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,inst_54985);
var inst_54987 = cljs.core.not_empty(inst_54986__$1);
var state_55051__$1 = (function (){var statearr_55082 = state_55051;
(statearr_55082[(13)] = inst_54986__$1);

return statearr_55082;
})();
if(cljs.core.truth_(inst_54987)){
var statearr_55083_55312 = state_55051__$1;
(statearr_55083_55312[(1)] = (18));

} else {
var statearr_55084_55313 = state_55051__$1;
(statearr_55084_55313[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (3))){
var state_55051__$1 = state_55051;
var statearr_55085_55314 = state_55051__$1;
(statearr_55085_55314[(2)] = frontend.extensions.zotero.api.notes);

(statearr_55085_55314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (12))){
var inst_54975 = (state_55051[(17)]);
var state_55051__$1 = state_55051;
var statearr_55086_55315 = state_55051__$1;
(statearr_55086_55315[(2)] = inst_54975);

(statearr_55086_55315[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (2))){
var inst_54963 = (state_55051[(2)]);
var state_55051__$1 = (function (){var statearr_55087 = state_55051;
(statearr_55087[(18)] = inst_54963);

return statearr_55087;
})();
var G__55088_55316 = type;
var G__55088_55317__$1 = (((G__55088_55316 instanceof cljs.core.Keyword))?G__55088_55316.fqn:null);
switch (G__55088_55317__$1) {
case "notes":
var statearr_55089_55319 = state_55051__$1;
(statearr_55089_55319[(1)] = (6));


break;
case "attachments":
var statearr_55090_55320 = state_55051__$1;
(statearr_55090_55320[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55088_55317__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (23))){
var inst_55043 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
var statearr_55091_55321 = state_55051__$1;
(statearr_55091_55321[(2)] = inst_55043);

(statearr_55091_55321[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (19))){
var state_55051__$1 = state_55051;
var statearr_55092_55322 = state_55051__$1;
(statearr_55092_55322[(2)] = null);

(statearr_55092_55322[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (11))){
var inst_54959 = (state_55051[(9)]);
var inst_54977 = (inst_54959 > (0));
var state_55051__$1 = state_55051;
var statearr_55093_55323 = state_55051__$1;
(statearr_55093_55323[(2)] = inst_54977);

(statearr_55093_55323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (9))){
var inst_54970 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-notes?","include-notes?",1426313915));
var state_55051__$1 = state_55051;
var statearr_55094_55324 = state_55051__$1;
(statearr_55094_55324[(2)] = inst_54970);

(statearr_55094_55324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (5))){
var inst_54969 = (state_55051[(2)]);
var state_55051__$1 = (function (){var statearr_55098 = state_55051;
(statearr_55098[(19)] = inst_54969);

return statearr_55098;
})();
var G__55099_55325 = type;
var G__55099_55326__$1 = (((G__55099_55325 instanceof cljs.core.Keyword))?G__55099_55325.fqn:null);
switch (G__55099_55326__$1) {
case "notes":
var statearr_55100_55328 = state_55051__$1;
(statearr_55100_55328[(1)] = (9));


break;
case "attachments":
var statearr_55101_55329 = state_55051__$1;
(statearr_55101_55329[(1)] = (10));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55099_55326__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (14))){
var inst_54963 = (state_55051[(18)]);
var inst_54957 = (state_55051[(10)]);
var inst_54982 = (inst_54963.cljs$core$IFn$_invoke$arity$1 ? inst_54963.cljs$core$IFn$_invoke$arity$1(inst_54957) : inst_54963.call(null,inst_54957));
var state_55051__$1 = state_55051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55051__$1,(17),inst_54982);
} else {
if((state_val_55052 === (26))){
var inst_55002 = (state_55051[(11)]);
var inst_55000 = (state_55051[(8)]);
var inst_54993 = (state_55051[(15)]);
var inst_55001 = (state_55051[(14)]);
var inst_55003 = (state_55051[(12)]);
var inst_55008 = cljs.core._nth(inst_55001,inst_55003);
var inst_55009 = [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),new cljs.core.Keyword(null,"before?","before?",765621039)];
var inst_55010 = [inst_54993,false,false];
var inst_55011 = cljs.core.PersistentHashMap.fromArrays(inst_55009,inst_55010);
var inst_55012 = frontend.handler.editor.api_insert_new_block_BANG_(inst_55008,inst_55011);
var inst_55013 = (inst_55003 + (1));
var tmp55095 = inst_55002;
var tmp55096 = inst_55000;
var tmp55097 = inst_55001;
var inst_55000__$1 = tmp55096;
var inst_55001__$1 = tmp55097;
var inst_55002__$1 = tmp55095;
var inst_55003__$1 = inst_55013;
var state_55051__$1 = (function (){var statearr_55102 = state_55051;
(statearr_55102[(11)] = inst_55002__$1);

(statearr_55102[(20)] = inst_55012);

(statearr_55102[(8)] = inst_55000__$1);

(statearr_55102[(14)] = inst_55001__$1);

(statearr_55102[(12)] = inst_55003__$1);

return statearr_55102;
})();
var statearr_55103_55330 = state_55051__$1;
(statearr_55103_55330[(2)] = null);

(statearr_55103_55330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (16))){
var inst_55049 = (state_55051[(2)]);
var state_55051__$1 = state_55051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55051__$1,inst_55049);
} else {
if((state_val_55052 === (30))){
var state_55051__$1 = state_55051;
var statearr_55104_55331 = state_55051__$1;
(statearr_55104_55331[(2)] = null);

(statearr_55104_55331[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (10))){
var inst_54972 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"include-attachments?","include-attachments?",1105323115));
var state_55051__$1 = state_55051;
var statearr_55105_55332 = state_55051__$1;
(statearr_55105_55332[(2)] = inst_54972);

(statearr_55105_55332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (18))){
var inst_54993 = (state_55051[(15)]);
var inst_54969 = (state_55051[(19)]);
var inst_54989 = [new cljs.core.Keyword(null,"page","page",849072397)];
var inst_54990 = [page_name];
var inst_54991 = cljs.core.PersistentHashMap.fromArrays(inst_54989,inst_54990);
var inst_54992 = frontend.handler.editor.api_insert_new_block_BANG_(inst_54969,inst_54991);
var inst_54993__$1 = new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(inst_54992);
var state_55051__$1 = (function (){var statearr_55106 = state_55051;
(statearr_55106[(15)] = inst_54993__$1);

return statearr_55106;
})();
if(cljs.core.truth_(inst_54993__$1)){
var statearr_55107_55333 = state_55051__$1;
(statearr_55107_55333[(1)] = (21));

} else {
var statearr_55108_55334 = state_55051__$1;
(statearr_55108_55334[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55052 === (8))){
var inst_54975 = (state_55051[(17)]);
var inst_54975__$1 = (state_55051[(2)]);
var state_55051__$1 = (function (){var statearr_55109 = state_55051;
(statearr_55109[(17)] = inst_54975__$1);

return statearr_55109;
})();
if(cljs.core.truth_(inst_54975__$1)){
var statearr_55110_55335 = state_55051__$1;
(statearr_55110_55335[(1)] = (11));

} else {
var statearr_55111_55336 = state_55051__$1;
(statearr_55111_55336[(1)] = (12));

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
}
}
}
}
});
return (function() {
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0 = (function (){
var statearr_55112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55112[(0)] = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__);

(statearr_55112[(1)] = (1));

return statearr_55112;
});
var frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1 = (function (state_55051){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55051);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55113){var ex__27576__auto__ = e55113;
var statearr_55114_55337 = state_55051;
(statearr_55114_55337[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55051[(4)]))){
var statearr_55115_55338 = state_55051;
(statearr_55115_55338[(1)] = cljs.core.first((state_55051[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55339 = state_55051;
state_55051 = G__55339;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__ = function(state_55051){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1.call(this,state_55051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55116 = f__27596__auto__();
(statearr_55116[(6)] = c__27595__auto__);

return statearr_55116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});
frontend.extensions.zotero.handler.handle_command_zotero = (function frontend$extensions$zotero$handler$handle_command_zotero(id,page_name){
frontend.state.set_editor_show_zotero_BANG_(false);

return frontend.handler.editor.insert_command_BANG_(id,["[[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_name),"]]"].join(''),null,cljs.core.PersistentArrayMap.EMPTY);
});
frontend.extensions.zotero.handler.create_abstract_note_BANG_ = (function frontend$extensions$zotero$handler$create_abstract_note_BANG_(page_name,abstract_note){
if(clojure.string.blank_QMARK_(abstract_note)){
return null;
} else {
var block = frontend.handler.editor.api_insert_new_block_BANG_("[[Abstract]]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page_name], null));
return frontend.handler.editor.api_insert_new_block_BANG_(abstract_note,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block-uuid","block-uuid",-1558039638),new cljs.core.Keyword("block","uuid","block/uuid",-1991494552).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.Keyword(null,"sibling?","sibling?",-1086129060),false], null));
}
});
frontend.extensions.zotero.handler.create_page = (function frontend$extensions$zotero$handler$create_page(page_name,properties){
return frontend.handler.page.create_BANG_.cljs$core$IFn$_invoke$arity$2(page_name,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redirect?","redirect?",-1229259098),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"create-first-block?","create-first-block?",397553841),false,new cljs.core.Keyword(null,"properties","properties",685819552),properties], null));
});
frontend.extensions.zotero.handler.create_zotero_page = (function frontend$extensions$zotero$handler$create_zotero_page(var_args){
var G__55118 = arguments.length;
switch (G__55118) {
case 1:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$1 = (function (item){
return frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(item,cljs.core.PersistentArrayMap.EMPTY);
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2 = (function (item,p__55119){
var map__55120 = p__55119;
var map__55120__$1 = cljs.core.__destructure_map(map__55120);
var block_dom_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55120__$1,new cljs.core.Keyword(null,"block-dom-id","block-dom-id",1375977027));
var insert_command_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55120__$1,new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),true);
var notification_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55120__$1,new cljs.core.Keyword(null,"notification?","notification?",1061685314),true);
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55166){
var state_val_55167 = (state_55166[(1)]);
if((state_val_55167 === (7))){
var inst_55140 = (state_55166[(2)]);
var state_55166__$1 = state_55166;
var statearr_55168_55341 = state_55166__$1;
(statearr_55168_55341[(2)] = inst_55140);

(statearr_55168_55341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (1))){
var inst_55124 = (state_55166[(7)]);
var inst_55123 = (state_55166[(8)]);
var inst_55122 = frontend.extensions.zotero.extractor.extract.cljs$core$IFn$_invoke$arity$1(item);
var inst_55123__$1 = cljs.core.__destructure_map(inst_55122);
var inst_55124__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55123__$1,new cljs.core.Keyword(null,"page-name","page-name",974981762));
var inst_55125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55123__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var inst_55126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55123__$1,new cljs.core.Keyword(null,"abstract-note","abstract-note",338534968));
var inst_55127 = clojure.string.lower_case(inst_55124__$1);
var inst_55128 = (frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? frontend.db.page_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(inst_55127) : frontend.db.page_exists_QMARK_.call(null,inst_55127));
var state_55166__$1 = (function (){var statearr_55169 = state_55166;
(statearr_55169[(9)] = inst_55125);

(statearr_55169[(7)] = inst_55124__$1);

(statearr_55169[(8)] = inst_55123__$1);

(statearr_55169[(10)] = inst_55126);

return statearr_55169;
})();
if(cljs.core.truth_(inst_55128)){
var statearr_55170_55342 = state_55166__$1;
(statearr_55170_55342[(1)] = (2));

} else {
var statearr_55171_55343 = state_55166__$1;
(statearr_55171_55343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (4))){
var inst_55124 = (state_55166[(7)]);
var inst_55126 = (state_55166[(10)]);
var inst_55144 = (state_55166[(2)]);
var inst_55145 = frontend.extensions.zotero.handler.create_abstract_note_BANG_(inst_55124,inst_55126);
var inst_55146 = frontend.extensions.zotero.handler.add(inst_55124,new cljs.core.Keyword(null,"attachments","attachments",-1535547830),item);
var state_55166__$1 = (function (){var statearr_55174 = state_55166;
(statearr_55174[(11)] = inst_55145);

(statearr_55174[(12)] = inst_55144);

return statearr_55174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55166__$1,(8),inst_55146);
} else {
if((state_val_55167 === (15))){
var inst_55163 = (state_55166[(2)]);
var state_55166__$1 = state_55166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55166__$1,inst_55163);
} else {
if((state_val_55167 === (13))){
var inst_55124 = (state_55166[(7)]);
var inst_55159 = ["Successfully added zotero item to page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55124)].join('');
var inst_55160 = frontend.handler.notification.show_BANG_.cljs$core$IFn$_invoke$arity$2(inst_55159,new cljs.core.Keyword(null,"success","success",1890645906));
var state_55166__$1 = state_55166;
var statearr_55175_55344 = state_55166__$1;
(statearr_55175_55344[(2)] = inst_55160);

(statearr_55175_55344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (6))){
var inst_55125 = (state_55166[(9)]);
var inst_55124 = (state_55166[(7)]);
var inst_55135 = [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"properties","properties",685819552)];
var inst_55136 = [inst_55124,inst_55125];
var inst_55137 = cljs.core.PersistentHashMap.fromArrays(inst_55135,inst_55136);
var inst_55138 = frontend.handler.editor.api_insert_new_block_BANG_("",inst_55137);
var state_55166__$1 = state_55166;
var statearr_55176_55345 = state_55166__$1;
(statearr_55176_55345[(2)] = inst_55138);

(statearr_55176_55345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (3))){
var inst_55125 = (state_55166[(9)]);
var inst_55124 = (state_55166[(7)]);
var inst_55142 = frontend.extensions.zotero.handler.create_page(inst_55124,inst_55125);
var state_55166__$1 = state_55166;
var statearr_55177_55346 = state_55166__$1;
(statearr_55177_55346[(2)] = inst_55142);

(statearr_55177_55346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (12))){
var inst_55157 = (state_55166[(2)]);
var state_55166__$1 = (function (){var statearr_55178 = state_55166;
(statearr_55178[(13)] = inst_55157);

return statearr_55178;
})();
if(cljs.core.truth_(notification_QMARK_)){
var statearr_55179_55347 = state_55166__$1;
(statearr_55179_55347[(1)] = (13));

} else {
var statearr_55180_55348 = state_55166__$1;
(statearr_55180_55348[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (2))){
var inst_55130 = frontend.extensions.zotero.setting.setting(new cljs.core.Keyword(null,"overwrite-mode?","overwrite-mode?",-1715124409));
var state_55166__$1 = state_55166;
if(cljs.core.truth_(inst_55130)){
var statearr_55184_55349 = state_55166__$1;
(statearr_55184_55349[(1)] = (5));

} else {
var statearr_55185_55350 = state_55166__$1;
(statearr_55185_55350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (11))){
var state_55166__$1 = state_55166;
var statearr_55186_55351 = state_55166__$1;
(statearr_55186_55351[(2)] = null);

(statearr_55186_55351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (9))){
var inst_55151 = (state_55166[(2)]);
var state_55166__$1 = (function (){var statearr_55187 = state_55166;
(statearr_55187[(14)] = inst_55151);

return statearr_55187;
})();
if(cljs.core.truth_(insert_command_QMARK_)){
var statearr_55188_55352 = state_55166__$1;
(statearr_55188_55352[(1)] = (10));

} else {
var statearr_55189_55353 = state_55166__$1;
(statearr_55189_55353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (5))){
var inst_55125 = (state_55166[(9)]);
var inst_55124 = (state_55166[(7)]);
var inst_55123 = (state_55166[(8)]);
var inst_55126 = (state_55166[(10)]);
var inst_55132 = (function (){var map__55121 = inst_55123;
var page_name = inst_55124;
var properties = inst_55125;
var abstract_note = inst_55126;
return (function (){
return frontend.extensions.zotero.handler.create_page(page_name,properties);
});
})();
var inst_55133 = frontend.handler.page.delete_BANG_(inst_55124,inst_55132);
var state_55166__$1 = state_55166;
var statearr_55190_55354 = state_55166__$1;
(statearr_55190_55354[(2)] = inst_55133);

(statearr_55190_55354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (14))){
var state_55166__$1 = state_55166;
var statearr_55191_55355 = state_55166__$1;
(statearr_55191_55355[(2)] = null);

(statearr_55191_55355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (10))){
var inst_55124 = (state_55166[(7)]);
var inst_55153 = frontend.extensions.zotero.handler.handle_command_zotero(block_dom_id,inst_55124);
var inst_55154 = frontend.handler.editor.save_current_block_BANG_.cljs$core$IFn$_invoke$arity$0();
var state_55166__$1 = (function (){var statearr_55192 = state_55166;
(statearr_55192[(15)] = inst_55153);

return statearr_55192;
})();
var statearr_55193_55356 = state_55166__$1;
(statearr_55193_55356[(2)] = inst_55154);

(statearr_55193_55356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55167 === (8))){
var inst_55124 = (state_55166[(7)]);
var inst_55148 = (state_55166[(2)]);
var inst_55149 = frontend.extensions.zotero.handler.add(inst_55124,new cljs.core.Keyword(null,"notes","notes",-1039600523),item);
var state_55166__$1 = (function (){var statearr_55194 = state_55166;
(statearr_55194[(16)] = inst_55148);

return statearr_55194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55166__$1,(9),inst_55149);
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
});
return (function() {
var frontend$extensions$zotero$handler$state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$state_machine__27573__auto____0 = (function (){
var statearr_55195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55195[(0)] = frontend$extensions$zotero$handler$state_machine__27573__auto__);

(statearr_55195[(1)] = (1));

return statearr_55195;
});
var frontend$extensions$zotero$handler$state_machine__27573__auto____1 = (function (state_55166){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55166);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55196){var ex__27576__auto__ = e55196;
var statearr_55197_55357 = state_55166;
(statearr_55197_55357[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55166[(4)]))){
var statearr_55198_55358 = state_55166;
(statearr_55198_55358[(1)] = cljs.core.first((state_55166[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55359 = state_55166;
state_55166 = G__55359;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$state_machine__27573__auto__ = function(state_55166){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$state_machine__27573__auto____1.call(this,state_55166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$state_machine__27573__auto____0;
frontend$extensions$zotero$handler$state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55199 = f__27596__auto__();
(statearr_55199[(6)] = c__27595__auto__);

return statearr_55199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
}));

(frontend.extensions.zotero.handler.create_zotero_page.cljs$lang$maxFixedArity = 2);

frontend.extensions.zotero.handler.add_all = (function frontend$extensions$zotero$handler$add_all(progress){
var c__27595__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27596__auto__ = (function (){var switch__27572__auto__ = (function (state_55257){
var state_val_55258 = (state_55257[(1)]);
if((state_val_55258 === (7))){
var inst_55253 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55259_55360 = state_55257__$1;
(statearr_55259_55360[(2)] = inst_55253);

(statearr_55259_55360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (1))){
var inst_55200 = frontend.extensions.zotero.api.all_top_items();
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55257__$1,(2),inst_55200);
} else {
if((state_val_55258 === (4))){
var inst_55255 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55257__$1,inst_55255);
} else {
if((state_val_55258 === (15))){
var inst_55228 = (state_55257[(7)]);
var inst_55243 = (state_55257[(2)]);
var inst_55244 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_55245 = cljs.core.next(inst_55228);
var inst_55209 = inst_55245;
var inst_55210 = null;
var inst_55211 = (0);
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55260 = state_55257;
(statearr_55260[(8)] = inst_55209);

(statearr_55260[(9)] = inst_55212);

(statearr_55260[(10)] = inst_55211);

(statearr_55260[(11)] = inst_55243);

(statearr_55260[(12)] = inst_55244);

(statearr_55260[(13)] = inst_55210);

return statearr_55260;
})();
var statearr_55261_55361 = state_55257__$1;
(statearr_55261_55361[(2)] = null);

(statearr_55261_55361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (13))){
var inst_55228 = (state_55257[(7)]);
var inst_55237 = cljs.core.first(inst_55228);
var inst_55238 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_55239 = [false,false];
var inst_55240 = cljs.core.PersistentHashMap.fromArrays(inst_55238,inst_55239);
var inst_55241 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_55237,inst_55240);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55257__$1,(15),inst_55241);
} else {
if((state_val_55258 === (6))){
var inst_55209 = (state_55257[(8)]);
var inst_55228 = (state_55257[(7)]);
var inst_55228__$1 = cljs.core.seq(inst_55209);
var state_55257__$1 = (function (){var statearr_55262 = state_55257;
(statearr_55262[(7)] = inst_55228__$1);

return statearr_55262;
})();
if(inst_55228__$1){
var statearr_55263_55362 = state_55257__$1;
(statearr_55263_55362[(1)] = (9));

} else {
var statearr_55264_55363 = state_55257__$1;
(statearr_55264_55363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (3))){
var inst_55212 = (state_55257[(9)]);
var inst_55211 = (state_55257[(10)]);
var inst_55214 = (inst_55212 < inst_55211);
var inst_55215 = inst_55214;
var state_55257__$1 = state_55257;
if(cljs.core.truth_(inst_55215)){
var statearr_55265_55364 = state_55257__$1;
(statearr_55265_55364[(1)] = (5));

} else {
var statearr_55266_55365 = state_55257__$1;
(statearr_55266_55365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (12))){
var inst_55228 = (state_55257[(7)]);
var inst_55232 = cljs.core.chunk_first(inst_55228);
var inst_55233 = cljs.core.chunk_rest(inst_55228);
var inst_55234 = cljs.core.count(inst_55232);
var inst_55209 = inst_55233;
var inst_55210 = inst_55232;
var inst_55211 = inst_55234;
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55267 = state_55257;
(statearr_55267[(8)] = inst_55209);

(statearr_55267[(9)] = inst_55212);

(statearr_55267[(10)] = inst_55211);

(statearr_55267[(13)] = inst_55210);

return statearr_55267;
})();
var statearr_55268_55366 = state_55257__$1;
(statearr_55268_55366[(2)] = null);

(statearr_55268_55366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (2))){
var inst_55202 = (state_55257[(2)]);
var inst_55203 = cljs.core.reset_BANG_(progress,(30));
var inst_55208 = cljs.core.seq(inst_55202);
var inst_55209 = inst_55208;
var inst_55210 = null;
var inst_55211 = (0);
var inst_55212 = (0);
var state_55257__$1 = (function (){var statearr_55269 = state_55257;
(statearr_55269[(14)] = inst_55203);

(statearr_55269[(8)] = inst_55209);

(statearr_55269[(9)] = inst_55212);

(statearr_55269[(10)] = inst_55211);

(statearr_55269[(13)] = inst_55210);

return statearr_55269;
})();
var statearr_55270_55367 = state_55257__$1;
(statearr_55270_55367[(2)] = null);

(statearr_55270_55367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (11))){
var inst_55251 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55271_55368 = state_55257__$1;
(statearr_55271_55368[(2)] = inst_55251);

(statearr_55271_55368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (9))){
var inst_55228 = (state_55257[(7)]);
var inst_55230 = cljs.core.chunked_seq_QMARK_(inst_55228);
var state_55257__$1 = state_55257;
if(inst_55230){
var statearr_55272_55369 = state_55257__$1;
(statearr_55272_55369[(1)] = (12));

} else {
var statearr_55273_55370 = state_55257__$1;
(statearr_55273_55370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (5))){
var inst_55212 = (state_55257[(9)]);
var inst_55210 = (state_55257[(13)]);
var inst_55217 = cljs.core._nth(inst_55210,inst_55212);
var inst_55218 = [new cljs.core.Keyword(null,"insert-command?","insert-command?",551536680),new cljs.core.Keyword(null,"notification?","notification?",1061685314)];
var inst_55219 = [false,false];
var inst_55220 = cljs.core.PersistentHashMap.fromArrays(inst_55218,inst_55219);
var inst_55221 = frontend.extensions.zotero.handler.create_zotero_page.cljs$core$IFn$_invoke$arity$2(inst_55217,inst_55220);
var state_55257__$1 = state_55257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55257__$1,(8),inst_55221);
} else {
if((state_val_55258 === (14))){
var inst_55248 = (state_55257[(2)]);
var state_55257__$1 = state_55257;
var statearr_55277_55371 = state_55257__$1;
(statearr_55277_55371[(2)] = inst_55248);

(statearr_55277_55371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (10))){
var state_55257__$1 = state_55257;
var statearr_55278_55372 = state_55257__$1;
(statearr_55278_55372[(2)] = null);

(statearr_55278_55372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55258 === (8))){
var inst_55209 = (state_55257[(8)]);
var inst_55212 = (state_55257[(9)]);
var inst_55211 = (state_55257[(10)]);
var inst_55210 = (state_55257[(13)]);
var inst_55223 = (state_55257[(2)]);
var inst_55224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.inc);
var inst_55225 = (inst_55212 + (1));
var tmp55274 = inst_55209;
var tmp55275 = inst_55211;
var tmp55276 = inst_55210;
var inst_55209__$1 = tmp55274;
var inst_55210__$1 = tmp55276;
var inst_55211__$1 = tmp55275;
var inst_55212__$1 = inst_55225;
var state_55257__$1 = (function (){var statearr_55279 = state_55257;
(statearr_55279[(15)] = inst_55224);

(statearr_55279[(8)] = inst_55209__$1);

(statearr_55279[(9)] = inst_55212__$1);

(statearr_55279[(10)] = inst_55211__$1);

(statearr_55279[(16)] = inst_55223);

(statearr_55279[(13)] = inst_55210__$1);

return statearr_55279;
})();
var statearr_55280_55373 = state_55257__$1;
(statearr_55280_55373[(2)] = null);

(statearr_55280_55373[(1)] = (3));


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
});
return (function() {
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = null;
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0 = (function (){
var statearr_55281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55281[(0)] = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__);

(statearr_55281[(1)] = (1));

return statearr_55281;
});
var frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1 = (function (state_55257){
while(true){
var ret_value__27574__auto__ = (function (){try{while(true){
var result__27575__auto__ = switch__27572__auto__(state_55257);
if(cljs.core.keyword_identical_QMARK_(result__27575__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27575__auto__;
}
break;
}
}catch (e55282){var ex__27576__auto__ = e55282;
var statearr_55283_55374 = state_55257;
(statearr_55283_55374[(2)] = ex__27576__auto__);


if(cljs.core.seq((state_55257[(4)]))){
var statearr_55284_55375 = state_55257;
(statearr_55284_55375[(1)] = cljs.core.first((state_55257[(4)])));

} else {
throw ex__27576__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27574__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55376 = state_55257;
state_55257 = G__55376;
continue;
} else {
return ret_value__27574__auto__;
}
break;
}
});
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__ = function(state_55257){
switch(arguments.length){
case 0:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0.call(this);
case 1:
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1.call(this,state_55257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$0 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____0;
frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__.cljs$core$IFn$_invoke$arity$1 = frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto____1;
return frontend$extensions$zotero$handler$add_all_$_state_machine__27573__auto__;
})()
})();
var state__27597__auto__ = (function (){var statearr_55285 = f__27596__auto__();
(statearr_55285[(6)] = c__27595__auto__);

return statearr_55285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27597__auto__);
}));

return c__27595__auto__;
});

//# sourceMappingURL=frontend.extensions.zotero.handler.js.map
