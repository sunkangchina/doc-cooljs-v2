(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-nav-tabbar"],{"0475":function(t,e,n){"use strict";var i=n("2154"),a=n.n(i);a.a},"0b92":function(t,e,n){"use strict";n.r(e);var i=n("e079"),a=n("a812");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},"1a3b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* COOL-UNI 颜色变量 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.footer[data-v-75136105]{position:fixed;bottom:0;width:100%;padding-bottom:env(safe-area-inset-bottom)}.footer .add[data-v-75136105]{display:inline-flex;justify-content:center;align-items:center;height:%?70?%;width:%?70?%}.footer .add uni-image[data-v-75136105]{height:%?60?%;width:%?60?%}',""]),t.exports=e},"207c":function(t,e,n){"use strict";n.r(e);var i=n("b2b0"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},2154:function(t,e,n){var i=n("1a3b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("14458482",i,!0,{sourceMap:!1,shadowMode:!1})},2858:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i=n("a956"),a={name:"cl-icon",props:{name:String,size:[String,Number],color:String},computed:{name2:function(){return this.name.replace("cl-icon-","")}},methods:{parseRpx:i.parseRpx,click:function(){this.$emit("click")}}};e.default=a},"3d30":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{class:["cl-icon","cl-icon-"+t.name2],style:{fontSize:t.parseRpx(t.size),color:t.color},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}})},a=[]},"41e1":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("3835"));n("a9e3"),n("acd8"),n("14d9");var r=n("a956"),c={name:"cl-text",props:{value:[String,Number],type:{type:String,default:"text"},encrypt:{type:Boolean,default:!0},bold:Boolean,block:Boolean,ellipsis:Number,color:{type:String,default:"#444"},size:{type:[String,Number],default:24},precision:{type:Boolean,default:!0},lineThrough:Boolean,underline:Boolean,letterSpacing:{type:[String,Number],default:0},margin:[String,Number,Array],prefixIcon:String,suffixIcon:String,copy:Boolean},computed:{d:function(){if("price"==this.type){var t=parseFloat(this.value||0).toFixed(2).split("."),e=(0,a.default)(t,2),n=e[0],i=e[1],r=void 0===i?"00":i;return this.precision?{value:n,precision:r}:{value:n}}if("phone"==this.type){var c=String(this.value);return{value:this.encrypt?c.substr(0,3)+"****"+c.substr(7):c}}return{value:this.value}},fontSize:function(){return(0,r.parseRpx)(this.size)},classList:function(){var t=[];return this.bold&&t.push("is-bold"),this.block&&t.push("is-block"),this.lineThrough&&t.push("is-line-through"),this.underline&&t.push("is-underline"),this.ellipsis>0&&t.push("is-ellipsis"),this.type&&t.push("is-".concat(this.type)),this.color&&t.push("is-color-".concat(this.color)),this.copy&&t.push("is-copy"),t.join(" ")}},methods:{parseRpx:r.parseRpx,onTap:function(t){this.$emit("click",t),this.$emit("tap",t)}}};e.default=c},"4af5":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={clBadge:n("ded1").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-tabbar-item",class:[t.classList],style:[{height:t.parent.height,width:t.width}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tapItem.apply(void 0,arguments)}}},[t.$slots.$default||t.$slots.default?t._t("default"):n("cl-badge",{attrs:{value:t.badge}},[n("v-uni-view",{staticClass:"cl-tabbar-item__block"},[n("v-uni-image",{staticClass:"cl-tabbar-item__image icon-path",style:{height:t.size,width:t.size},attrs:{src:t.iconPath}}),n("v-uni-image",{staticClass:"cl-tabbar-item__image selected-icon-path",style:{height:t.size,width:t.size},attrs:{src:t.selectedIconPath}}),t.text?n("v-uni-text",{staticClass:"cl-tabbar-item__label",style:{color:t.color}},[t._v(t._s(t.text))]):t._e()],1)],1)],2)},r=[]},"4eb8":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("a956"),a={data:function(){return{Parent:null}},computed:{parent:function(){return this.getParent()||this.Parent||{}},hasParent:function(){return!(0,i.isEmpty)(this.parent)}},mounted:function(){this.Parent=this.getParent()},methods:{getParent:function(){return this.ComponentName?i.getParent.call(this,this.ComponentName,this.Keys):null}}};e.default=a},"5e94":function(t,e,n){"use strict";n.r(e);var i=n("a981"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"62f5":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9");var a=i(n("db95")),r=i(n("4eb8")),c=n("a956"),o={name:"cl-tabbar-item",componentName:"ClTabbarItem",props:{text:String,name:{type:[String,Number],required:!0},iconPath:String,selectedIconPath:String,iconSize:{type:Number,default:50},badge:{type:[Number,String],default:0}},mixins:[a.default,r.default],data:function(){return{Keys:["name","color","selectedColor","height","width","number"],ComponentName:"ClTabbar"}},computed:{size:function(){return(0,c.parseRpx)(this.iconSize)},color:function(){return this.isActive?this.parent.selectedColor:this.parent.color},src:function(){return this.isActive?this.selectedIconPath:this.iconPath},width:function(){return"100%"},isActive:function(){return null!==this.name&&this.parent&&this.parent.name===this.name},classList:function(){var t=[];return this.isActive&&t.push("is-active"),t.join(" ")}},methods:{tapItem:function(){this.dispatch("ClTabbar","change",this.name)}}};e.default=o},"8f34":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={clText:n("0b92").default,clTabbar:n("a8ac").default,clTabbarItem:n("fbae").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"demo-tabbar"},[n("cl-text",{attrs:{size:50,value:t.active,margin:[20,0,0,20]}}),n("v-uni-view",{staticClass:"footer"},[n("cl-tabbar",{ref:"tabbar",attrs:{"border-style":"#eee"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("cl-tabbar-item",{attrs:{text:"首页",name:"home","icon-path":"/static/icon/tabbar/home.png","selected-icon-path":"/static/icon/tabbar/home-hl.png"}}),n("cl-tabbar-item",{attrs:{text:"活动",name:"activity","icon-path":"/static/icon/tabbar/activity.png","selected-icon-path":"/static/icon/tabbar/activity-hl.png"}}),n("cl-tabbar-item",{attrs:{name:"add"}},[n("v-uni-view",{staticClass:"add"},[n("v-uni-image",{attrs:{src:"/static/icon/tabbar/add.png"}})],1)],1),n("cl-tabbar-item",{attrs:{text:"购物车",name:"cart",badge:8,"icon-path":"/static/icon/tabbar/shopping-cart.png","selected-icon-path":"/static/icon/tabbar/shopping-cart-hl.png"}}),n("cl-tabbar-item",{attrs:{text:"我的",name:"my","icon-path":"/static/icon/tabbar/my.png","selected-icon-path":"/static/icon/tabbar/my-hl.png"}})],1)],1)],1)},r=[]},"92e4":function(t,e,n){"use strict";n.r(e);var i=n("3d30"),a=n("99f5");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},"99f5":function(t,e,n){"use strict";n.r(e);var i=n("2858"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a812:function(t,e,n){"use strict";n.r(e);var i=n("41e1"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},a8ac:function(t,e,n){"use strict";n.r(e);var i=n("ca85"),a=n("5e94");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},a981:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i=n("a956"),a={name:"cl-tabbar",componentName:"ClTabbar",props:{value:[String,Number],height:{type:String,default:"100rpx"},color:{type:String,default:"#7A7E83"},selectedColor:{type:String,default:"#2B2E3D"},borderStyle:{type:String,default:"white"},backgroundColor:{type:String,default:"#ffffff"},beforeSwitch:Function},data:function(){return{name:null,lock:!1,number:4}},watch:{value:{immediate:!0,handler:function(t){this.name=t}},name:function(t){this.$emit("input",t)}},created:function(){var t=this;this.$on("change",(function(e){if(!t.lock){var n=function(n){t.name=n||e,t.lock=!1};t.beforeSwitch?(t.lock=!0,t.beforeSwitch(e,n)):n(e)}}))},mounted:function(){this.doLayout()},methods:{doLayout:function(){var t=this,e=null;(function n(){(0,i.isEmpty)(t.$children)?e=setTimeout((function(){n()}),50):(clearTimeout(e),t.number=t.$children.length)})()}}};e.default=a},b2b0:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{active:"home"}}}},c263:function(t,e,n){"use strict";n.r(e);var i=n("62f5"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},c590:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("14d9");var i=n("a956"),a={name:"cl-badge",props:{value:[String,Number],max:Number,isDot:Boolean,hidden:Boolean,type:String},computed:{content:function(){if(this.isDot)return"";var t=this.value,e=this.max;return(0,i.isNumber)(t)&&(0,i.isNumber)(e)&&e>0&&e<t?"".concat(e,"+"):t},classList:function(){var t=["cl-badge__content"];return this.type&&t.push("cl-badge__content--".concat(this.type)),this.isDot&&t.push("is-dot"),t.join(" ")}}};e.default=a},ca85:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"cl-tabbar",style:{height:this.height,backgroundColor:this.backgroundColor,borderTopColor:this.borderStyle}},[this._t("default")],2)},a=[]},d014:function(t,e,n){"use strict";n.r(e);var i=n("8f34"),a=n("207c");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("0475");var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"75136105",null,!1,i["a"],void 0);e["default"]=o.exports},ded1:function(t,e,n){"use strict";n.r(e);var i=n("f634"),a=n("f939");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports},e079:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var i={clIcon:n("92e4").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cl-text",class:[t.classList],style:{margin:t.parseRpx(t.margin),color:t.color,"font-size":"26rpx","letter-spacing":t.parseRpx(t.letterSpacing),"-webkit-line-clamp":t.ellipsis},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},["price"==t.type?n("v-uni-text",{staticClass:"cl-text__symbol--price"},[t._v("￥")]):t._e(),t.prefixIcon?n("v-uni-text",{staticClass:"cl-text__prefix-icon"},[n("cl-icon",{attrs:{name:t.prefixIcon,size:t.fontSize}})],1):t._e(),n("v-uni-text",{staticClass:"cl-text__value",style:{fontSize:t.fontSize}},[t._v(t._s(t.d.value))]),"price"==t.type&&t.precision?n("v-uni-text",{staticClass:"cl-text__precision"},[t._v("."+t._s(t.d.precision))]):t._e(),t.suffixIcon?n("v-uni-text",{staticClass:"cl-text__suffix-icon"},[n("cl-icon",{attrs:{name:t.suffixIcon,size:t.fontSize}})],1):t._e()],1)},r=[]},f634:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.$slots.default||t.$slots.$default,expression:"$slots.default || $slots.$default"}],staticClass:"cl-badge"},[t._t("default"),t.hidden||0==t.content&&!t.isDot?t._e():n("v-uni-text",{class:[t.classList]},[t._v(t._s(t.content))])],2)},a=[]},f939:function(t,e,n){"use strict";n.r(e);var i=n("c590"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},fbae:function(t,e,n){"use strict";n.r(e);var i=n("4af5"),a=n("c263");for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var c=n("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=o.exports}}]);