parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NUhz":[function(require,module,exports) {

},{"./../images/bg-desktop.jpg":[["bg-desktop.9c6aec5c.jpg","s6e3"],"s6e3"],"./../images/bg-tablet.jpg":[["bg-tablet.54e0a8b3.jpg","UqM5"],"UqM5"],"./../images/bg-mobile.jpg":[["bg-mobile.19f95803.jpg","a04V"],"a04V"]}],"p3SI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ZOOM_METHOD=exports.ZOOM_STEP=exports.START_EXPLORING_TARGET_CENTER=exports.START_EXPLORING_TARGET_ZOOM=exports.START_EXPLORING_FLY_TIME=exports.circlesLayout=exports.circleRadius=exports.circleOpacity=exports.heatmapOpacity=exports.heatmapRadius=exports.heatmapIntensity=exports.h=exports.HEATMAP_SHADES=exports.HEATMAP_ZERO=exports.getHeatColors=exports.pointSqrtCount=exports.PALETTES=exports.STYLES=exports.Tokens=exports.isDevelopment=void 0;var e=require("./utils");function t(e){return a(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function a(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}var p=!1;exports.isDevelopment=p;var s={development:"pk.eyJ1IjoiZHF1bmJwIiwiYSI6ImNqd3VuaGZyeTAwYTEzeW1oeHo3NHh1cnMifQ.AzNgwn8crwuAXGPmasjlzA",production:"pk.eyJ1IjoiZHF1bmJwIiwiYSI6ImNrM3l6dnNlNjBkZXAzbXAzMjh0d2g1NDcifQ.ShlseQwBKgaBIjKKhfkg3g"};exports.Tokens=s;var i="mapbox://styles/mapbox",n={dark:"".concat(i,"/dark-v10"),satellite:"".concat(i,"/satellite-v9")};exports.STYLES=n;var c={red:["#FAE26B","#DC4942","#EA5C33","#A82D4A","#4E136C"]};exports.PALETTES=c;var l=["case",["has","sqrt_point_count"],["get","sqrt_point_count"],1];exports.pointSqrtCount=l;var T=function(r){return["interpolate",["linear"],["heatmap-density"]].concat(t((0,e.buildHeatmapDencity)(r,!0)))};exports.getHeatColors=T;var x=[0,"rgba(33,102,172,0)"];exports.HEATMAP_ZERO=x;var E=[.2,.4,.6,.8,1];exports.HEATMAP_SHADES=E;var A=9;exports.h=A;var _=["interpolate",["linear"],["zoom"],0,2,A,4];exports.heatmapIntensity=_;var u=["interpolate",["linear"],["zoom"],0,2,A,20];exports.heatmapRadius=u;var v=["interpolate",["linear"],["zoom"],7,1,A,0];exports.heatmapOpacity=v;var O=["interpolate",["linear"],["zoom"],6,.5,15,1];exports.circleOpacity=O;var m=["interpolate",["linear"],["zoom"],10,2,22,4];exports.circleRadius=m;var S={"circle-sort-key":["get","sqrt_point_count"]};exports.circlesLayout=S;var R=8500;exports.START_EXPLORING_FLY_TIME=R;var y=15.65;exports.START_EXPLORING_TARGET_ZOOM=y;var I=[37.162168,55.698564];exports.START_EXPLORING_TARGET_CENTER=I;var d=2;exports.ZOOM_STEP=d;var M="easeTo";exports.ZOOM_METHOD=M;
},{"./utils":"K0yk"}],"PDSk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadHeatLayer=r,exports.loadCircleLayer=a,exports.removeDelay=void 0;var e=require("./constants"),t=150;function r(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gt-heat",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"gt-points",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.PALETTES.red;return t.addLayer({id:a,type:"heatmap",source:o,"source-layer":"points",maxzoom:e.h,paint:{"heatmap-weight":["interpolate",["linear"],e.pointSqrtCount,0,0,500,1],"heatmap-intensity":e.heatmapIntensity,"heatmap-color":(0,e.getHeatColors)(i),"heatmap-radius":e.heatmapRadius,"heatmap-opacity":0}},r),t.setPaintProperty(a,"heatmap-opacity",e.heatmapOpacity),a}function a(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"gt-points",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"gt-points",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.PALETTES.red;return t.addLayer({id:a,type:"circle",source:o,"source-layer":"points",minzoom:8,layout:e.circlesLayout,paint:{"circle-radius":e.circleRadius,"circle-color":"yellow","circle-stroke-width":1,"circle-stroke-color":i[0],"circle-opacity":0,"circle-stroke-opacity":0}},r),t.setPaintProperty(a,"circle-stroke-opacity",e.circleOpacity),t.setPaintProperty(a,"circle-opacity",e.circleOpacity),a}exports.removeDelay=t;
},{"./constants":"p3SI"}],"K0yk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setBodyHeight=l,exports.removeLabels=s,exports.buildHeatmapDencity=y,exports.getLabelsLayer=p,exports.createInteractionsSwitcher=d,exports.bindZoomEvents=g,exports.switchDataLayers=exports.createLayersKeeper=exports.getCircleColor=exports.zip=void 0;var e=require("./constants"),t=require("./layers");function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return u(e)||c(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function l(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}function s(e){return e.getStyle().layers.reduce(function(t,r){return"symbol"===r.type&&e.removeLayer(r.id),[].concat(a(t),[r.id])},[])}var f=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=Math.max.apply(Math,a(t.map(function(e){return e.length})));return Array.from({length:n}).map(function(e,r){return Array.from({length:t.length},function(e,n){return t[n][r]})})};function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.PALETTES.red,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.HEATMAP_ZERO.concat(f(e.HEATMAP_SHADES,r?t.slice().reverse():t)).flat()}function p(e){for(var t=e.layers,r=null,n=0;n<t.length;n++)if("symbol"===t[n].type){r=t[n].id;break}return r}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",r="all"===t?["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate"]:t;return function(t){var n=t?"enable":"disable";r.forEach(function(t){return e[t][n]()})}}exports.zip=f;var v=function(t){return["interpolate",["linear"],e.pointSqrtCount].concat(a(t))};exports.getCircleColor=v;var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],a=[],i={},c=!0,u=!1,l=void 0;try{for(var s,f=t[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var y=s.value;r.push(y.id),a.push(y.source||y.id),y.before&&(i[y.id]=y.before)}}catch(v){u=!0,l=v}finally{try{c||null==f.return||f.return()}finally{if(u)throw l}}var p=function(e){var t=e.id;return r.some(function(e){return t.startsWith(e)})},d=function(e){return a.some(function(t){return e.startsWith(t)})};return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},a=e.getStyle(),c=a.layers.filter(p),u=Object.keys(a.sources).filter(d).reduce(function(e,t){return n({},e,o({},t,a.sources[t]))},{});e.setStyle(t),e.once("styledata",function(){var t=e.getStyle();r(t);var n=t.layers,o=n.map(function(e){return e.id});Object.keys(u).forEach(function(t){return e.addSource(t,u[t])}),c.forEach(function(t){var r=o.indexOf(i[t.id]);e.addLayer(t,-1!==r?i[t.id]:void 0),n.splice(r,0)})})}};exports.createLayersKeeper=b;var h=function(e,r,n,o){var a=!0,i=!1,c=void 0;try{for(var u,l=o[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var s=u.value;r.removeLayer(s)}}catch(f){i=!0,c=f}finally{try{a||null==l.return||l.return()}finally{if(i)throw c}}return[(0,t.loadHeatLayer)(r,n,"heat-".concat(e),"points-".concat(e)),(0,t.loadCircleLayer)(r,"heat-".concat(e),"points-".concat(e),"points-".concat(e))]};exports.switchDataLayers=h;var m=function(t){return function(r){t[e.ZOOM_METHOD]({zoom:t.getZoom()+r})}};function g(t){var r=m(t);document.getElementById("zoom-in").addEventListener("click",function(){r(e.ZOOM_STEP)}),document.getElementById("zoom-out").addEventListener("click",function(){r(-e.ZOOM_STEP)})}
},{"./constants":"p3SI","./layers":"PDSk"}],"MoTS":[function(require,module,exports) {
"use strict";function e(e){e.addSource("points-gt",{type:"vector",url:"https://demo.geoalert.io/data/GT_cluster_densest_as_needed_max25K_features_max100Kbytes.json"})}function t(e){e.addSource("points-osm",{type:"vector",url:"https://demo.geoalert.io/data/OSM_cluster_densest_as_needed_max25K_features_max100Kbytes.json"})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadGTPointsSource=e,exports.loadOSMPointsSource=t;
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles/styles");var e=require("./utils"),t=require("./layers"),o=require("./sources"),n=require("./constants"),r=document.getElementById("map"),a=document.getElementById("footer-info"),i=document.getElementById("header"),s=document.getElementById("navbar"),l=document.getElementById("footer-controls"),u=document.getElementById("zoom-controls"),c=function(){return s.style.animationName="appearsFromTop"},m=function(){return i.style.animationName="appearsFromTop"},d=function(){return i.style.animationName="vanishToTop"},y=function(){return a.style.animationName="appearsFromBottom"},f=function(){return a.style.animationName="vanishToBottom"},v=function(){return l.style.animationName="appearsFromBottom"},g=function(){return u.style.animationName="appearsFromLeft"};(0,e.setBodyHeight)(),window.addEventListener("resize",e.setBodyHeight),y(),m(),c();var p=document.getElementById("explore");p.addEventListener("click",I);var T,E,h,L,b=[],B=n.isDevelopment?n.Tokens.development:n.Tokens.production;function I(){d(),f(),v(),g(),_({passedId:"satellite"}),T.flyTo({duration:n.START_EXPLORING_FLY_TIME,zoom:n.START_EXPLORING_TARGET_ZOOM,center:n.START_EXPLORING_TARGET_CENTER}),setTimeout(function(){h(!0),T.getCanvas().style.cursor=""},1500)}setTimeout(function(){T=new mapboxgl.Map({accessToken:B,container:r,style:"mapbox://styles/mapbox/dark-v10",zoom:2.71,center:[83.66,58.56],minZoom:2.71,attributionControl:!1}),(0,e.bindZoomEvents)(T),h=(0,e.createInteractionsSwitcher)(T),T.once("styledata",function(){(0,e.removeLabels)(T),L=(0,e.getLabelsLayer)(T.getStyle()),(0,o.loadGTPointsSource)(T),(0,o.loadOSMPointsSource)(T);var n=(0,t.loadHeatLayer)(T,L,"heat-gt","points-gt"),r=(0,t.loadCircleLayer)(T,"heat-gt","points-gt","points-gt");b=b.concat([n,r]),h(!1),T.getCanvas().style.cursor="default"})},100);var S=[{id:"points-gt",before:L},{id:"points-osm",before:L},{id:"heat-gt",before:L},{id:"heat-osm",before:L}];function N(t){L=(0,e.getLabelsLayer)(t)}setTimeout(function(){E=(0,e.createLayersKeeper)(T,S)},101);var w=document.getElementsByClassName("basemap-toggle"),R="dark";function _(e){var t=e.passedId||this.id;if(t!==R){R=t;var o=!0,r=!1,a=void 0;try{for(var i,s=w[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){i.value.classList.toggle("is-focused")}}catch(l){r=!0,a=l}finally{try{o||null==s.return||s.return()}finally{if(r)throw a}}E(n.STYLES[t],N)}}var k=!0,x=!1,C=void 0;try{for(var F,G=w[Symbol.iterator]();!(k=(F=G.next()).done);k=!0){var O=F.value;O.addEventListener("click",_)}}catch(Y){x=!0,C=Y}finally{try{k||null==G.return||G.return()}finally{if(x)throw C}}var q=document.getElementsByClassName("datalayer-toggle"),A="gt";function P(){var t=this.id;if(t!==A){A=t;var o=!0,n=!1,r=void 0;try{for(var a,i=q[Symbol.iterator]();!(o=(a=i.next()).done);o=!0){a.value.classList.toggle("is-focused")}}catch(Y){n=!0,r=Y}finally{try{o||null==i.return||i.return()}finally{if(n)throw r}}b=(0,e.switchDataLayers)(t,T,L,b)}}var z=!0,M=!1,H=void 0;try{for(var X,Z=q[Symbol.iterator]();!(z=(X=Z.next()).done);z=!0){var D=X.value;D.addEventListener("click",P)}}catch(Y){M=!0,H=Y}finally{try{z||null==Z.return||Z.return()}finally{if(M)throw H}}
},{"./styles/styles":"NUhz","./utils":"K0yk","./layers":"PDSk","./sources":"MoTS","./constants":"p3SI"}]},{},["H99C"], null)