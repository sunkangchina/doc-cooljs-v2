(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-view-swiper"],{"0b92":function(t,e,i){"use strict";i.r(e);var n=i("e079"),r=i("a812");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},2858:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("ac1f"),i("5319");var n=i("a956"),r={name:"cl-icon",props:{name:String,size:[String,Number],color:String},computed:{name2:function(){return this.name.replace("cl-icon-","")}},methods:{parseRpx:n.parseRpx,click:function(){this.$emit("click")}}};e.default=r},"31af":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={clText:i("0b92").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cl-card"},[i("v-uni-view",{staticClass:"cl-card__header"},[i("cl-text",{attrs:{size:28,bold:!0,value:t.label},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLabel.apply(void 0,arguments)}}}),t.showMore?i("v-uni-view",{staticClass:"cl-card__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMore.apply(void 0,arguments)}}},[t._t("more",[i("cl-text",{attrs:{value:t.moreText,color:"#777"}}),i("v-uni-text",{staticClass:"cl-icon-arrow-right"})])],2):t._e()],1),i("v-uni-view",{staticClass:"cl-card__container"},[t._t("default")],2),t.$slots.footer?i("v-uni-view",{staticClass:"cl-card__footer"},[t._t("footer")],2):t._e()],1)},a=[]},"3d30":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-text",{class:["cl-icon","cl-icon-"+t.name2],style:{fontSize:t.parseRpx(t.size),color:t.color},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})},r=[]},"41e1":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("3835"));i("a9e3"),i("acd8"),i("14d9");var a=i("a956"),c={name:"cl-text",props:{value:[String,Number],type:{type:String,default:"text"},encrypt:{type:Boolean,default:!0},bold:Boolean,block:Boolean,ellipsis:Number,color:{type:String,default:"#444"},size:{type:[String,Number],default:24},precision:{type:Boolean,default:!0},lineThrough:Boolean,underline:Boolean,letterSpacing:{type:[String,Number],default:0},margin:[String,Number,Array],prefixIcon:String,suffixIcon:String,copy:Boolean},computed:{d:function(){if("price"==this.type){var t=parseFloat(this.value||0).toFixed(2).split("."),e=(0,r.default)(t,2),i=e[0],n=e[1],a=void 0===n?"00":n;return this.precision?{value:i,precision:a}:{value:i}}if("phone"==this.type){var c=String(this.value);return{value:this.encrypt?c.substr(0,3)+"****"+c.substr(7):c}}return{value:this.value}},fontSize:function(){return(0,a.parseRpx)(this.size)},classList:function(){var t=[];return this.bold&&t.push("is-bold"),this.block&&t.push("is-block"),this.lineThrough&&t.push("is-line-through"),this.underline&&t.push("is-underline"),this.ellipsis>0&&t.push("is-ellipsis"),this.type&&t.push("is-".concat(this.type)),this.color&&t.push("is-color-".concat(this.color)),this.copy&&t.push("is-copy"),t.join(" ")}},methods:{parseRpx:a.parseRpx,onTap:function(t){this.$emit("click",t),this.$emit("tap",t)}}};e.default=c},"5a8b":function(t,e,i){"use strict";i.r(e);var n=i("c4a0"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},6055:function(t,e,i){"use strict";i.r(e);var n=i("31af"),r=i("7d74");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},"60f2":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("3835"));i("a9e3"),i("c975"),i("d81d");var a=i("a956"),c={name:"cl-swiper",props:{value:Number,type:String,arrow:Boolean,list:Array,imageMode:{type:String,default:"aspectFill"},height:{type:String,default:"300rpx"},radius:{type:String,default:"10rpx"},margin:{type:Array,default:function(){return[]}},indicatorDots:Boolean,indicatorColor:{type:String,default:"rgba(0, 0, 0, .3)"},indicatorActiveColor:{type:String,default:"#000000"},dotType:{type:String,default:"round",validator:function(t){return-1!==["round","circle","square"].indexOf(t)}},activeClass:String,changingClass:String,autoplay:Boolean,currentItemId:String,interval:{type:Number,default:5e3},duration:{type:Number,default:500},circular:Boolean,vertical:Boolean,acceleration:Boolean,disableProgrammaticAnimation:Boolean,displayMultipleItems:{type:Number,default:1},skipHiddenItemLayout:Boolean,disableTouch:Boolean,touchable:{type:Boolean,default:!0},easingFunction:{type:String,default:"default"}},data:function(){return{current:0}},watch:{value:{immediate:!0,handler:function(t){this.current=t||0}},current:function(t){this.$emit("input",t),this.$emit("change",t)}},computed:{previousMargin:function(){var t=(0,r.default)(this.margin,3),e=t[0],i=t[1],n=t[2];switch(this.type){case"chain":switch(this.current){case 0:return e||"0";case this.list.length-1:return n||"120rpx";default:return i||"70rpx"}case"card":return e||"80rpx";default:return e||"0"}},nextMargin:function(){var t=(0,r.default)(this.margin,3),e=t[0],i=t[1],n=t[2];switch(this.type){case"chain":switch(this.current){case 0:return n||"120rpx";case this.list.length-1:return e||"0";default:return i||"70rpx"}case"card":return i||"80rpx";default:return i||"0"}},circular2:function(){switch(this.type){case"card":return!0;default:return this.circular}},indicatorColor2:function(){return this.dotType?"":this.indicatorColor},indicatorActiveColor2:function(){return this.dotType?"":this.indicatorActiveColor},isPrev:function(){return this.current>0},isNext:function(){return this.current<this.list.length-1},flist:function(){return this.list.map((function(t){return(0,a.isString)(t)?{url:t}:t}))}},methods:{onChange:function(t){this.current=t.detail.current},onTransition:function(t){this.$emit("transition",t)},onAnimationfinish:function(t){this.$emit("animationfinish",t)},onPrev:function(){this.current-=this.isPrev?1:0},onNext:function(){this.current+=this.isNext?1:0},onTap:function(){this.$emit("click",this.current),this.$emit("tap",this.current)}}};e.default=c},"7d74":function(t,e,i){"use strict";i.r(e);var n=i("9605"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"92e4":function(t,e,i){"use strict";i.r(e);var n=i("3d30"),r=i("99f5");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},9605:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cl-card",props:{label:String,showMore:{type:Boolean,default:!0},moreText:{type:String,default:"查看更多"}},methods:{toMore:function(){this.$emit("more")},toLabel:function(){this.$emit("click")}}};e.default=n},"99f5":function(t,e,i){"use strict";i.r(e);var n=i("2858"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"9cbb":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={clCard:i("6055").default,clSwiper:i("ca02").default},r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"demo-swiper"},[e("cl-card",{attrs:{label:"默认"}},[e("cl-swiper",{attrs:{list:this.list}})],1),e("cl-card",{attrs:{label:"卡片式"}},[e("cl-swiper",{attrs:{type:"card",list:this.list}})],1),e("cl-card",{attrs:{label:"链式"}},[e("cl-swiper",{attrs:{type:"chain",list:this.list}})],1)],1)},a=[]},a5c1:function(t,e,i){"use strict";i.r(e);var n=i("9cbb"),r=i("5a8b");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},a812:function(t,e,i){"use strict";i.r(e);var n=i("41e1"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},c4a0:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{list:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908445940&di=3e1e85184727d15d6d8518b229f50de6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F28%2F20180428184808_bimcr.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908455986&di=b01bc4b5b1a37cef449a8b6ce2b12a0a&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fa3fa8ad4f17122d85b3605761924bd35.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604908445936&di=4bb7b9ecec875fb1413c7eaf4237c5a1&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Ff%2F57f8508cd49cc.jpg"]}}}},c50b:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cl-swiper",class:["cl-swiper--"+t.type,"cl-swiper--dot-"+t.dotType],style:{height:t.height},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[i("v-uni-swiper",{attrs:{"indicator-dots":t.indicatorDots,"indicator-color":t.indicatorColor2,"indicator-active-color":t.indicatorActiveColor2,"active-class":t.activeClass,"changing-class":t.changingClass,autoplay:t.autoplay,current:t.current,interval:t.interval,duration:t.duration,circular:t.circular2,vertical:t.vertical,"previous-margin":t.previousMargin,"next-margin":t.nextMargin,acceleration:t.acceleration,"disable-programmatic-animation":t.disableProgrammaticAnimation,"display-multiple-items":t.displayMultipleItems,"skip-hidden-item-layout":t.skipHiddenItemLayout,"disable-touch":t.disableTouch,"easing-function":t.easingFunction},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},transition:function(e){arguments[0]=e=t.$handleEvent(e),t.onTransition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.onAnimationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"cl-swiper-item",class:[{"is-active":t.current===n}]},[t._t("default",[e&&e.url?i("v-uni-image",{staticClass:"cl-swiper-item__image",style:{"border-radius":t.radius},attrs:{mode:t.imageMode,src:e.url}}):i("v-uni-image",{staticClass:"cl-swiper-item__image",style:{"border-radius":t.radius},attrs:{mode:t.imageMode,src:e}})],{item:e,index:n})],2)],1)})),1),t.arrow?i("v-uni-view",{staticClass:"cl-swiper__btn"},[t.isPrev?i("v-uni-button",{staticClass:"cl-swiper__btn-prev",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onPrev.apply(void 0,arguments)}}},[i("i",{staticClass:"cl-icon-arrow-left"})]):t._e(),t.isNext?i("v-uni-button",{staticClass:"cl-swiper__btn-next",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onNext.apply(void 0,arguments)}}},[i("i",{staticClass:"cl-icon-arrow-right"})]):t._e()],1):t._e()],1)},r=[]},ca02:function(t,e,i){"use strict";i.r(e);var n=i("c50b"),r=i("fb76");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var c=i("f0c5"),s=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},e079:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={clIcon:i("92e4").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cl-text",class:[t.classList],style:{margin:t.parseRpx(t.margin),color:t.color,"font-size":"26rpx","letter-spacing":t.parseRpx(t.letterSpacing),"-webkit-line-clamp":t.ellipsis},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},["price"==t.type?i("v-uni-text",{staticClass:"cl-text__symbol--price"},[t._v("￥")]):t._e(),t.prefixIcon?i("v-uni-text",{staticClass:"cl-text__prefix-icon"},[i("cl-icon",{attrs:{name:t.prefixIcon,size:t.fontSize}})],1):t._e(),i("v-uni-text",{staticClass:"cl-text__value",style:{fontSize:t.fontSize}},[t._v(t._s(t.d.value))]),"price"==t.type&&t.precision?i("v-uni-text",{staticClass:"cl-text__precision"},[t._v("."+t._s(t.d.precision))]):t._e(),t.suffixIcon?i("v-uni-text",{staticClass:"cl-text__suffix-icon"},[i("cl-icon",{attrs:{name:t.suffixIcon,size:t.fontSize}})],1):t._e()],1)},a=[]},fb76:function(t,e,i){"use strict";i.r(e);var n=i("60f2"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a}}]);