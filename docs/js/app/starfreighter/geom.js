// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('starfreighter.geom');
goog.require('cljs.core');
starfreighter.geom.deg__GT_rad = (function starfreighter$geom$deg__GT_rad(deg){
return (deg * (Math.PI / (180)));
});
starfreighter.geom.rad__GT_deg = (function starfreighter$geom$rad__GT_deg(rad){
return (rad * ((180) / Math.PI));
});
starfreighter.geom.sin = (function starfreighter$geom$sin(deg){
var G__17507 = starfreighter.geom.deg__GT_rad(deg);
return Math.sin(G__17507);
});
starfreighter.geom.cos = (function starfreighter$geom$cos(deg){
var G__17509 = starfreighter.geom.deg__GT_rad(deg);
return Math.cos(G__17509);
});
starfreighter.geom.square = (function starfreighter$geom$square(n){
return (n * n);
});
starfreighter.geom.displace = (function starfreighter$geom$displace(point,angle,distance){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(point) + (distance * starfreighter.geom.sin(angle))),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(point) + (distance * starfreighter.geom.cos(angle)))], null);
});
starfreighter.geom.distance = (function starfreighter$geom$distance(p__17510,p__17511){
var map__17517 = p__17510;
var map__17517__$1 = ((((!((map__17517 == null)))?((((map__17517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17517):map__17517);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$x);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17517__$1,cljs.core.cst$kw$y);
var map__17518 = p__17511;
var map__17518__$1 = ((((!((map__17518 == null)))?((((map__17518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17518):map__17518);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17518__$1,cljs.core.cst$kw$x);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17518__$1,cljs.core.cst$kw$y);
var G__17521 = (starfreighter.geom.square((x2 - x1)) + starfreighter.geom.square((y2 - y1)));
return Math.sqrt(G__17521);
});
starfreighter.geom.interpolate = (function starfreighter$geom$interpolate(p__17522,p__17523,frac_dist){
var map__17528 = p__17522;
var map__17528__$1 = ((((!((map__17528 == null)))?((((map__17528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17528):map__17528);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17528__$1,cljs.core.cst$kw$x);
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17528__$1,cljs.core.cst$kw$y);
var map__17529 = p__17523;
var map__17529__$1 = ((((!((map__17529 == null)))?((((map__17529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17529):map__17529);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17529__$1,cljs.core.cst$kw$x);
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17529__$1,cljs.core.cst$kw$y);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,(((x2 - x1) * frac_dist) + x1),cljs.core.cst$kw$y,(((y2 - y1) * frac_dist) + y1)], null);
});
