(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{335:function(e,t,o){var content=o(875);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(44).default)("0d115440",content,!1,{sourceMap:!1})},874:function(e,t,o){"use strict";var r=o(335);o.n(r).a},875:function(e,t,o){(t=o(43)(!1)).push([e.i,"ul[data-v-07f4b17a]{flex-direction:column}ul[data-v-07f4b17a],ul li[data-v-07f4b17a]{display:flex}ul li[data-v-07f4b17a]{padding-left:16px;border-left:1px solid var(--brd-color)}",""]),e.exports=t},922:function(e,t,o){"use strict";o.r(t);o(242);var r={props:{request:Object,collectionIndex:Number,folderIndex:Number,requestIndex:Number},methods:{selectRequest:function(){this.$store.commit("postwoman/selectRequest",{request:this.request})},removeRequest:function(){confirm("Are you sure you want to remove this request?")&&this.$store.commit("postwoman/removeRequest",{collectionIndex:this.collectionIndex,folderIndex:this.folderIndex,requestIndex:this.requestIndex})}}},n=(o(874),o(37)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"flex-wrap"},[o("div",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("use_request"),expression:"$t('use_request')"}],staticClass:"icon",on:{click:function(t){return e.selectRequest()}}},[o("i",{staticClass:"material-icons"},[e._v("insert_drive_file")]),e._v(" "),o("span",[e._v(e._s(e.request.name))])])]),e._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.$t("more"),expression:"$t('more')"}],staticClass:"tooltip-target icon"},[o("i",{staticClass:"material-icons"},[e._v("more_vert")])]),e._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(t){return e.$emit("edit-request")}}},[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" "),o("span",[e._v(e._s(e.$t("edit")))])])]),e._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:e.removeRequest}},[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" "),o("span",[e._v(e._s(e.$t("delete")))])])])])],2)],1)}),[],!1,null,"07f4b17a",null);t.default=component.exports}}]);