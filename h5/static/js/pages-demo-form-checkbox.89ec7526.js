(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demo-form-checkbox"],{"0b92":function(e,t,n){"use strict";n.r(t);var i=n("e079"),a=n("a812");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},"0dc5":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("caad"),n("2532"),n("14d9"),n("cb29");var a=i(n("db95")),c=i(n("3c95")),r=i(n("4eb8")),o=(n("a956"),{name:"cl-checkbox",componentName:"ClCheckbox",props:{value:null,label:[String,Number],disabled:Boolean,border:Boolean,round:Boolean,fill:Boolean},mixins:[a.default,c.default,r.default],data:function(){return{checked:!1,Keys:["border","disabled","value"],ComponentName:"ClCheckboxGroup"}},watch:{value:{immediate:!0,handler:function(e){this.checked=Boolean(e)}},"parent.value":{immediate:!0,handler:function(e){this.hasParent&&(this.checked=e.includes(this.label))}}},computed:{isRound:function(){return this.hasParent&&this.parent.round||this.round},isBorder:function(){return this.hasParent&&this.parent.border||this.border},isDisabled:function(){var e=this.hasParent&&this.parent.disabled||this.disabled;return this.$form&&this.$form.disabled||e},classList:function(){var e=[];return this.isBorder&&e.push("cl-checkbox--border"),this.isRound&&e.push("cl-checkbox--round"),this.isDisabled&&e.push("is-disabled"),this.checked&&e.push("is-checked"),this.fill&&e.push("is-fill"),e.join(" ")}},methods:{change:function(){if(this.isDisabled)return!1;this.checked=!this.checked,this.hasParent?this.dispatch("ClCheckboxGroup","checkbox.change",this.label):(this.$emit("input",this.checked),this.$emit("change",this.checked))}}});t.default=o},"151b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"cl-checkbox",class:[e.classList],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cl-checkbox__input"},[e.checked?n("v-uni-text",{staticClass:"cl-icon-toast-success"}):e._e()],1),n("v-uni-view",{staticClass:"cl-checkbox__label"},[e._t("default")],2)],1)},a=[]},2858:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3"),n("ac1f"),n("5319");var i=n("a956"),a={name:"cl-icon",props:{name:String,size:[String,Number],color:String},computed:{name2:function(){return this.name.replace("cl-icon-","")}},methods:{parseRpx:i.parseRpx,click:function(){this.$emit("click")}}};t.default=a},"2ee3":function(e,t,n){"use strict";n.r(t);var i=n("4a31"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},"31af":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var i={clText:n("0b92").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"cl-card"},[n("v-uni-view",{staticClass:"cl-card__header"},[n("cl-text",{attrs:{size:28,bold:!0,value:e.label},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toLabel.apply(void 0,arguments)}}}),e.showMore?n("v-uni-view",{staticClass:"cl-card__more",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toMore.apply(void 0,arguments)}}},[e._t("more",[n("cl-text",{attrs:{value:e.moreText,color:"#777"}}),n("v-uni-text",{staticClass:"cl-icon-arrow-right"})])],2):e._e()],1),n("v-uni-view",{staticClass:"cl-card__container"},[e._t("default")],2),e.$slots.footer?n("v-uni-view",{staticClass:"cl-card__footer"},[e._t("footer")],2):e._e()],1)},c=[]},"3c95":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("a956"),a={computed:{$form:function(){return i.getParent.call(this,"ClForm",["labelWidth","labelPosition","showMessage","model","validateOnValueChange","disabled"])},isDisabled:function(){return this.$form&&this.$form.disabled||this.disabled}}};t.default=a},"3d30":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-text",{class:["cl-icon","cl-icon-"+e.name2],style:{fontSize:e.parseRpx(e.size),color:e.color},on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click.apply(void 0,arguments)}}})},a=[]},4168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"cl-checkbox-group"},[this._t("default")],2)},a=[]},"41e1":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("3835"));n("a9e3"),n("acd8"),n("14d9");var c=n("a956"),r={name:"cl-text",props:{value:[String,Number],type:{type:String,default:"text"},encrypt:{type:Boolean,default:!0},bold:Boolean,block:Boolean,ellipsis:Number,color:{type:String,default:"#444"},size:{type:[String,Number],default:24},precision:{type:Boolean,default:!0},lineThrough:Boolean,underline:Boolean,letterSpacing:{type:[String,Number],default:0},margin:[String,Number,Array],prefixIcon:String,suffixIcon:String,copy:Boolean},computed:{d:function(){if("price"==this.type){var e=parseFloat(this.value||0).toFixed(2).split("."),t=(0,a.default)(e,2),n=t[0],i=t[1],c=void 0===i?"00":i;return this.precision?{value:n,precision:c}:{value:n}}if("phone"==this.type){var r=String(this.value);return{value:this.encrypt?r.substr(0,3)+"****"+r.substr(7):r}}return{value:this.value}},fontSize:function(){return(0,c.parseRpx)(this.size)},classList:function(){var e=[];return this.bold&&e.push("is-bold"),this.block&&e.push("is-block"),this.lineThrough&&e.push("is-line-through"),this.underline&&e.push("is-underline"),this.ellipsis>0&&e.push("is-ellipsis"),this.type&&e.push("is-".concat(this.type)),this.color&&e.push("is-color-".concat(this.color)),this.copy&&e.push("is-copy"),e.join(" ")}},methods:{parseRpx:c.parseRpx,onTap:function(e){this.$emit("click",e),this.$emit("tap",e)}}};t.default=r},"4a31":function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("c740"),n("a434"),n("14d9");var a=i(n("db95")),c=n("a956"),r={name:"cl-checkbox-group",componentName:"ClCheckboxGroup",props:{value:{type:Array,default:function(){return[]}},border:Boolean,disabled:Boolean,round:Boolean},mixins:[a.default],created:function(){var e=this;this.$on("checkbox.change",(function(t){var n=e.value.findIndex((function(e){return e==t})),i=(0,c.cloneDeep)(e.value);n>=0?i.splice(n,1):i.push(t),e.$emit("input",i),e.$emit("change",i)}))}};t.default=r},"4eb8":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("a956"),a={data:function(){return{Parent:null}},computed:{parent:function(){return this.getParent()||this.Parent||{}},hasParent:function(){return!(0,i.isEmpty)(this.parent)}},mounted:function(){this.Parent=this.getParent()},methods:{getParent:function(){return this.ComponentName?i.getParent.call(this,this.ComponentName,this.Keys):null}}};t.default=a},"51d5":function(e,t,n){"use strict";n.r(t);var i=n("0dc5"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},6055:function(e,t,n){"use strict";n.r(t);var i=n("31af"),a=n("7d74");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},6696:function(e,t,n){"use strict";n.r(t);var i=n("aa38"),a=n("c2f7");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},"7d74":function(e,t,n){"use strict";n.r(t);var i=n("9605"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},"819b":function(e,t,n){"use strict";n.r(t);var i=n("4168"),a=n("2ee3");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},"92e4":function(e,t,n){"use strict";n.r(t);var i=n("3d30"),a=n("99f5");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},9605:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"cl-card",props:{label:String,showMore:{type:Boolean,default:!0},moreText:{type:String,default:"查看更多"}},methods:{toMore:function(){this.$emit("more")},toLabel:function(){this.$emit("click")}}};t.default=i},"99f5":function(e,t,n){"use strict";n.r(t);var i=n("2858"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},a42f:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={data:function(){return{form:{a:!1,b:!1,b1:!0,c:["1"],d:["1"]}}}}},a6e8:function(e,t,n){"use strict";n.r(t);var i=n("151b"),a=n("51d5");for(var c in a)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(c);var r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=o.exports},a812:function(e,t,n){"use strict";n.r(t);var i=n("41e1"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},aa38:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var i={clCard:n("6055").default,clCheckbox:n("a6e8").default,clCheckboxGroup:n("819b").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"demo-checkbox"},[n("cl-card",{attrs:{label:"基础用法"}},[n("cl-checkbox",{model:{value:e.form.a,callback:function(t){e.$set(e.form,"a",t)},expression:"form.a"}},[e._v("复选项")])],1),n("cl-card",{attrs:{label:"圆形"}},[n("cl-checkbox",{attrs:{label:"1",round:!0}},[e._v("复选项 A")])],1),n("cl-card",{attrs:{label:"禁用状态"}},[n("cl-checkbox",{attrs:{disabled:!0},model:{value:e.form.b,callback:function(t){e.$set(e.form,"b",t)},expression:"form.b"}},[e._v("复选项")]),n("cl-checkbox",{attrs:{disabled:!0},model:{value:e.form.b1,callback:function(t){e.$set(e.form,"b1",t)},expression:"form.b1"}},[e._v("复选项")])],1),n("cl-card",{attrs:{label:"多选框组"}},[n("cl-checkbox-group",{model:{value:e.form.c,callback:function(t){e.$set(e.form,"c",t)},expression:"form.c"}},[n("cl-checkbox",{attrs:{label:"1"}},[e._v("复选项 A")]),n("cl-checkbox",{attrs:{label:"2"}},[e._v("复选项 B")]),n("cl-checkbox",{attrs:{label:"3"}},[e._v("复选项 C")])],1)],1),n("cl-card",{attrs:{label:"带边框"}},[n("cl-checkbox-group",{attrs:{border:!0},model:{value:e.form.d,callback:function(t){e.$set(e.form,"d",t)},expression:"form.d"}},[n("cl-checkbox",{attrs:{label:"1"}},[e._v("复选项 A")]),n("cl-checkbox",{attrs:{label:"2",border:!0}},[e._v("复选项 B")])],1)],1)],1)},c=[]},c2f7:function(e,t,n){"use strict";n.r(t);var i=n("a42f"),a=n.n(i);for(var c in i)["default"].indexOf(c)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=a.a},cb29:function(e,t,n){var i=n("23e7"),a=n("81d5"),c=n("44d2");i({target:"Array",proto:!0},{fill:a}),c("fill")},e079:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var i={clIcon:n("92e4").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"cl-text",class:[e.classList],style:{margin:e.parseRpx(e.margin),color:e.color,"font-size":"26rpx","letter-spacing":e.parseRpx(e.letterSpacing),"-webkit-line-clamp":e.ellipsis},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onTap.apply(void 0,arguments)}}},["price"==e.type?n("v-uni-text",{staticClass:"cl-text__symbol--price"},[e._v("￥")]):e._e(),e.prefixIcon?n("v-uni-text",{staticClass:"cl-text__prefix-icon"},[n("cl-icon",{attrs:{name:e.prefixIcon,size:e.fontSize}})],1):e._e(),n("v-uni-text",{staticClass:"cl-text__value",style:{fontSize:e.fontSize}},[e._v(e._s(e.d.value))]),"price"==e.type&&e.precision?n("v-uni-text",{staticClass:"cl-text__precision"},[e._v("."+e._s(e.d.precision))]):e._e(),e.suffixIcon?n("v-uni-text",{staticClass:"cl-text__suffix-icon"},[n("cl-icon",{attrs:{name:e.suffixIcon,size:e.fontSize}})],1):e._e()],1)},c=[]}}]);