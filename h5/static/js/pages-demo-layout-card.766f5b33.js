(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-layout-card"],{"0b92":function(t,e,n){"use strict";n.r(e);var i=n("e079"),r=n("a812");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},2858:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i=n("a956"),r={name:"cl-icon",props:{name:String,size:[String,Number],color:String},computed:{name2:function(){return this.name.replace("cl-icon-","")}},methods:{parseRpx:i.parseRpx,click:function(){this.$emit("click")}}};e.default=r},"31af":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clText:n("0b92").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-card"},[n("v-uni-view",{staticClass:"cl-card__header"},[n("cl-text",{attrs:{size:28,bold:!0,value:t.label},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLabel.apply(void 0,arguments)}}}),t.showMore?n("v-uni-view",{staticClass:"cl-card__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMore.apply(void 0,arguments)}}},[t._t("more",[n("cl-text",{attrs:{value:t.moreText,color:"#777"}}),n("v-uni-text",{staticClass:"cl-icon-arrow-right"})])],2):t._e()],1),n("v-uni-view",{staticClass:"cl-card__container"},[t._t("default")],2),t.$slots.footer?n("v-uni-view",{staticClass:"cl-card__footer"},[t._t("footer")],2):t._e()],1)},a=[]},"3d30":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{class:["cl-icon","cl-icon-"+t.name2],style:{fontSize:t.parseRpx(t.size),color:t.color},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})},r=[]},"41e1":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("3835"));n("a9e3"),n("acd8"),n("14d9");var a=n("a956"),c={name:"cl-text",props:{value:[String,Number],type:{type:String,default:"text"},encrypt:{type:Boolean,default:!0},bold:Boolean,block:Boolean,ellipsis:Number,color:{type:String,default:"#444"},size:{type:[String,Number],default:24},precision:{type:Boolean,default:!0},lineThrough:Boolean,underline:Boolean,letterSpacing:{type:[String,Number],default:0},margin:[String,Number,Array],prefixIcon:String,suffixIcon:String,copy:Boolean},computed:{d:function(){if("price"==this.type){var t=parseFloat(this.value||0).toFixed(2).split("."),e=(0,r.default)(t,2),n=e[0],i=e[1],a=void 0===i?"00":i;return this.precision?{value:n,precision:a}:{value:n}}if("phone"==this.type){var c=String(this.value);return{value:this.encrypt?c.substr(0,3)+"****"+c.substr(7):c}}return{value:this.value}},fontSize:function(){return(0,a.parseRpx)(this.size)},classList:function(){var t=[];return this.bold&&t.push("is-bold"),this.block&&t.push("is-block"),this.lineThrough&&t.push("is-line-through"),this.underline&&t.push("is-underline"),this.ellipsis>0&&t.push("is-ellipsis"),this.type&&t.push("is-".concat(this.type)),this.color&&t.push("is-color-".concat(this.color)),this.copy&&t.push("is-copy"),t.join(" ")}},methods:{parseRpx:a.parseRpx,onTap:function(t){this.$emit("click",t),this.$emit("tap",t)}}};e.default=c},6055:function(t,e,n){"use strict";n.r(e);var i=n("31af"),r=n("7d74");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},"76a1":function(t,e,n){"use strict";n.r(e);var i=n("c59d"),r=n("f988");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},"7d74":function(t,e,n){"use strict";n.r(e);var i=n("9605"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"92e4":function(t,e,n){"use strict";n.r(e);var i=n("3d30"),r=n("99f5");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},9605:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cl-card",props:{label:String,showMore:{type:Boolean,default:!0},moreText:{type:String,default:"查看更多"}},methods:{toMore:function(){this.$emit("more")},toLabel:function(){this.$emit("click")}}};e.default=i},"99f5":function(t,e,n){"use strict";n.r(e);var i=n("2858"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},a812:function(t,e,n){"use strict";n.r(e);var i=n("41e1"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},b54e:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={}},c59d:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clCard:n("6055").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"demo-swiper"},[e("cl-card",{attrs:{label:"默认"}},[this._v("这是内容")])],1)},a=[]},e079:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={clIcon:n("92e4").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-text",class:[t.classList],style:{margin:t.parseRpx(t.margin),color:t.color,"font-size":"26rpx","letter-spacing":t.parseRpx(t.letterSpacing),"-webkit-line-clamp":t.ellipsis},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},["price"==t.type?n("v-uni-text",{staticClass:"cl-text__symbol--price"},[t._v("￥")]):t._e(),t.prefixIcon?n("v-uni-text",{staticClass:"cl-text__prefix-icon"},[n("cl-icon",{attrs:{name:t.prefixIcon,size:t.fontSize}})],1):t._e(),n("v-uni-text",{staticClass:"cl-text__value",style:{fontSize:t.fontSize}},[t._v(t._s(t.d.value))]),"price"==t.type&&t.precision?n("v-uni-text",{staticClass:"cl-text__precision"},[t._v("."+t._s(t.d.precision))]):t._e(),t.suffixIcon?n("v-uni-text",{staticClass:"cl-text__suffix-icon"},[n("cl-icon",{attrs:{name:t.suffixIcon,size:t.fontSize}})],1):t._e()],1)},a=[]},f988:function(t,e,n){"use strict";n.r(e);var i=n("b54e"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a}}]);