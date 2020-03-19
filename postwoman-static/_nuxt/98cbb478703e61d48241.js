(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{241:function(t,e,o){"use strict";o.d(e,"a",(function(){return w}));o(18);var n=o(3),r=o(251),c=o.n(r);o(303),o(304);c.a.initializeApp({apiKey:"AIzaSyCMsFreESs58-hRxTtiqQrIcimh4i1wbsM",authDomain:"postwoman-api.firebaseapp.com",databaseURL:"https://postwoman-api.firebaseio.com",projectId:"postwoman-api",storageBucket:"postwoman-api.appspot.com",messagingSenderId:"421993993223",appId:"1:421993993223:web:ec0baa8ee8c02ffa1fc6a2",measurementId:"G-ERJ6025CEB"});var l,d,v,m,h,f=c.a.firestore().collection("users"),w={currentUser:{},currentFeeds:[],currentSettings:[],currentHistory:[],currentCollections:[],currentEnvironments:[],writeFeeds:(h=Object(n.a)(regeneratorRuntime.mark((function t(e,label){var dt;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:dt={createdOn:new Date,author:w.currentUser.uid,author_name:w.currentUser.displayName,author_image:w.currentUser.photoURL,message:e,label:label},f.doc(w.currentUser.uid).collection("feeds").add(dt).catch((function(t){return console.error("error inserting",dt,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t,e){return h.apply(this,arguments)}),deleteFeed:function(t){f.doc(w.currentUser.uid).collection("feeds").doc(t).delete().catch((function(e){return console.error("error deleting",t,e)}))},writeSettings:(m=Object(n.a)(regeneratorRuntime.mark((function t(e,o){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={updatedOn:new Date,author:w.currentUser.uid,author_name:w.currentUser.displayName,author_image:w.currentUser.photoURL,name:e,value:o},f.doc(w.currentUser.uid).collection("settings").doc(e).set(n).catch((function(t){return console.error("error updating",n,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t,e){return m.apply(this,arguments)}),writeHistory:(v=Object(n.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=e,f.doc(w.currentUser.uid).collection("history").add(o).catch((function(t){return console.error("error inserting",o,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)}),deleteHistory:function(t){f.doc(w.currentUser.uid).collection("history").doc(t.id).delete().catch((function(e){return console.error("error deleting",t,e)}))},clearHistory:function(){f.doc(w.currentUser.uid).collection("history").get().then((function(t){t.docs.forEach((function(t){return w.deleteHistory(t)}))}))},toggleStar:function(t,e){f.doc(w.currentUser.uid).collection("history").doc(t.id).update({star:e}).catch((function(e){return console.error("error deleting",t,e)}))},writeCollections:(d=Object(n.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o={updatedOn:new Date,author:w.currentUser.uid,author_name:w.currentUser.displayName,author_image:w.currentUser.photoURL,collection:e},f.doc(w.currentUser.uid).collection("collections").doc("sync").set(o).catch((function(t){return console.error("error updating",o,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)}),writeEnvironments:(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o={updatedOn:new Date,author:w.currentUser.uid,author_name:w.currentUser.displayName,author_image:w.currentUser.photoURL,environment:e},f.doc(w.currentUser.uid).collection("environments").doc("sync").set(o).catch((function(t){return console.error("error updating",o,t)}));case 2:case"end":return t.stop()}}),t)}))),function(t){return l.apply(this,arguments)})};c.a.auth().onAuthStateChanged((function(t){t?(w.currentUser=t,w.currentUser.providerData.forEach((function(t){var e={updatedOn:new Date,provider:t.providerId,name:t.displayName,email:t.email,photoUrl:t.photoURL,uid:t.uid};f.doc(w.currentUser.uid).set(e).catch((function(t){return console.error("error updating",e,t)}))})),f.doc(w.currentUser.uid).collection("feeds").orderBy("createdOn","desc").onSnapshot((function(t){var e=[];t.forEach((function(t){var o=t.data();o.id=t.id,e.push(o)})),w.currentFeeds=e})),f.doc(w.currentUser.uid).collection("settings").onSnapshot((function(t){var e=[];t.forEach((function(t){var o=t.data();o.id=t.id,e.push(o)})),w.currentSettings=e})),f.doc(w.currentUser.uid).collection("history").onSnapshot((function(t){var e=[];t.forEach((function(t){var o=t.data();o.id=t.id,e.push(o)})),w.currentHistory=e})),f.doc(w.currentUser.uid).collection("collections").onSnapshot((function(t){var e=[];t.forEach((function(t){var o=t.data();o.id=t.id,e.push(o)})),w.currentCollections=e[0].collection})),f.doc(w.currentUser.uid).collection("environments").onSnapshot((function(t){var e=[];t.forEach((function(t){var o=t.data();o.id=t.id,e.push(o)})),w.currentEnvironments=e[0].environment}))):w.currentUser=null}))},267:function(t,e,o){"use strict";o.d(e,"b",(function(){return r}));o(18);var n=o(3),r=function(){return void 0!==window.__POSTWOMAN_EXTENSION_HOOK__},c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,o){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o.state,t.next=3,window.__POSTWOMAN_EXTENSION_HOOK__.sendRequest({method:"post",url:n.postwoman.settings.PROXY_URL||"https://postwoman.apollosoftware.xyz/",data:e});case 3:return r=t.sent,data=r.data,t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}(),l=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,o){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.__POSTWOMAN_EXTENSION_HOOK__.sendRequest(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e,o){return t.apply(this,arguments)}}();e.a=function(t,e){return e.state.postwoman.settings.PROXY_ENABLED?c(t,e):l(t,e)}},268:function(t,e,o){"use strict";o.d(e,"b",(function(){return n}));o(6);var n=function(){return null!==document.getElementById("chromePWExtensionDetect")};e.a=function(t,e){return e.state.postwoman.settings.PROXY_ENABLED?function(t,e){var o=e.state;return new Promise((function(e,n){chrome.runtime.sendMessage("amknoiejhlmhancpahfcfcfhllgkpbld",{messageType:"send-req",data:{config:{method:"post",url:o.postwoman.settings.PROXY_URL||"https://postwoman.apollosoftware.xyz/",data:t}}},(function(t){var data=t.data;data.error?n(error):e(data.response.data)}))}))}(t,e):function(t,e){return new Promise((function(e,o){chrome.runtime.sendMessage("amknoiejhlmhancpahfcfcfhllgkpbld",{messageType:"send-req",data:{config:t}},(function(t){var data=t.data;data.error?o(data.error):e(data.response)}))}))}(t)}},299:function(t,e,o){"use strict";function n(){return/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"⌘":"Ctrl"}o.d(e,"a",(function(){return n}))},887:function(t,e,o){"use strict";o.r(e);o(18);var n=o(3),r=function(){var t="yes"===localStorage.getItem("pwaInstalled");!t&&window.matchMedia("(display-mode: standalone)").matches&&(localStorage.setItem("pwaInstalled","yes"),t=!0),t||!0!==window.navigator.standalone||(localStorage.setItem("pwaInstalled","yes"),t=!0);var e=null;return window.addEventListener("beforeinstallprompt",(function(o){e=o,t||(document.querySelector("#installPWA").style.display="inline-flex")})),window.addEventListener("appinstalled",(function(e){localStorage.setItem("pwaInstalled","yes"),t=!0,document.getElementById("installPWA").style.display="none"})),Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=7;break}return e.prompt(),t.next=4,e.userChoice;case 4:"accepted"===t.sent?console.log("Postwoman was installed successfully."):console.log("Postwoman could not be installed. (Installation rejected by user.)"),e=null;case 7:case"end":return t.stop()}}),t)})))},c=o(267),l=o(268),d=o(299),v=(o(251),o(241)),m={components:{modal:function(){return o.e(0).then(o.bind(null,924))},login:function(){return o.e(7).then(o.bind(null,904))},logout:function(){return o.e(24).then(o.bind(null,905))},contributors:function(){return o.e(47).then(o.bind(null,911))}},data:function(){return{showInstallPrompt:null,showExtensions:!1,showShortcuts:!1,showSupport:!1,fb:v.a,navigatorShare:navigator.share}},mounted:function(){var t=this;Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(t.showInstallPrompt=e.sent,"yes"===localStorage.getItem("cookiesAllowed")||t.$toast.show(t.$t("we_use_cookies"),{icon:"info",duration:5e3,theme:"toasted-primary",action:[{text:t.$t("dismiss"),onClick:function(t,e){localStorage.setItem("cookiesAllowed","yes"),e.goAway(0)}}]}),"yes"===localStorage.getItem("showExtensionsToast")){e.next=8;break}return e.abrupt("return");case 8:setTimeout((function(){Object(c.b)()||Object(l.b)()||t.$toast.show(t.$t("extensions_info2"),{icon:"extension",duration:5e3,theme:"toasted-primary",action:[{text:t.$t("yes"),onClick:function(e,o){t.showExtensions=!0,localStorage.setItem("showExtensionsToast","yes"),o.goAway(0)}},{text:t.$t("no"),onClick:function(e,o){t.$store.commit("setMiscState",{value:!1,attribute:"showExtensionsToast"}),localStorage.setItem("showExtensionsToast","no"),o.goAway(0)}}]})}),15e3),t._keyListener=function(t){"Escape"===t.key&&(t.preventDefault(),this.showExtensions=this.showShortcuts=this.showSupport=!1)},document.addEventListener("keydown",t._keyListener.bind(t));case 11:case"end":return e.stop()}}),e)})))()},methods:{getSpecialKey:d.a,nativeShare:function(){navigator.share&&navigator.share({title:"Postwoman",text:"Postwoman • A free, fast and beautiful API request builder - Web alternative to Postman - Helps you create requests faster, saving precious time on development.",url:"https://postwoman.io/"}).then((function(){})).catch(console.error)}},computed:{availableLocales:function(){var t=this;return this.$i18n.locales.filter((function(i){return i.code!==t.$i18n.locale}))}}},h=o(37),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("div",{staticClass:"flex-wrap"},[o("span",{staticClass:"slide-in"},[o("nuxt-link",{attrs:{to:t.localePath("index")}},[o("h1",{staticClass:"logo"},[t._v("Postwoman")])])],1),t._v(" "),o("span",[o("a",{attrs:{href:"https://github.com/liyasthomas/postwoman",target:"_blank","aria-label":"GitHub",rel:"noopener"}},[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"GitHub",expression:"'GitHub'"}],staticClass:"icon",attrs:{"aria-label":"GitHub"}},[o("svg",{staticClass:"material-icons",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}})])])]),t._v(" "),o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("install_pwa"),expression:"$t('install_pwa')"}],staticClass:"icon",attrs:{id:"installPWA"},on:{click:function(e){return e.preventDefault(),t.showInstallPrompt()}}},[o("i",{staticClass:"material-icons"},[t._v("offline_bolt")])]),t._v(" "),null===t.fb.currentUser?o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("login_with"),expression:"$t('login_with')"}],staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("vpn_key")])]),t._v(" "),o("template",{slot:"popover"},[o("login")],1)],2):o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:(t.fb.currentUser.displayName||"<label><i>Name not found</i></label>")+"<br>"+(t.fb.currentUser.email||"<label><i>Email not found</i></label>"),expression:"\n            (fb.currentUser.displayName || '<label><i>Name not found</i></label>') +\n              '<br>' +\n              (fb.currentUser.email || '<label><i>Email not found</i></label>')\n          "}],staticClass:"icon",attrs:{"aria-label":"Account"}},[t.fb.currentUser.photoURL?o("img",{staticClass:"material-icons",attrs:{src:t.fb.currentUser.photoURL,alt:"Profile image"}}):o("i",{staticClass:"material-icons"},[t._v("account_circle")])]),t._v(" "),o("template",{slot:"popover"},[o("div",[o("nuxt-link",{directives:[{name:"close-popover",rawName:"v-close-popover"}],attrs:{to:t.localePath("settings")}},[o("button",{staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("settings")]),t._v(" "),o("span",[t._v("\n                  "+t._s(t.$t("settings"))+"\n                ")])])])],1),t._v(" "),o("div",[o("logout")],1)])],2),t._v(" "),o("v-popover",[o("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("more"),expression:"$t('more')"}],staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("more_vert")])]),t._v(" "),o("template",{slot:"popover"},[o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.showExtensions=!0}}},[o("i",{staticClass:"material-icons"},[t._v("extension")]),t._v(" "),o("span",[t._v(t._s(t.$t("extensions")))])])]),t._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.showShortcuts=!0}}},[o("i",{staticClass:"material-icons"},[t._v("keyboard")]),t._v(" "),o("span",[t._v(t._s(t.$t("shortcuts")))])])]),t._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",on:{click:function(e){t.showSupport=!0}}},[o("i",{staticClass:"material-icons"},[t._v("favorite")]),t._v(" "),o("span",[t._v(t._s(t.$t("support_us")))])])]),t._v(" "),o("div",[o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],staticClass:"icon",attrs:{onClick:"window.open('https://twitter.com/share?text=👽 Postwoman • A free, fast and beautiful API request builder - Web alternative to Postman - Helps you create requests faster, saving precious time on development.&url=https://postwoman.io&hashtags=postwoman&via=liyasthomas');"}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"}})]),t._v(" "),o("span",[t._v(t._s(t.$t("tweet")))])]),t._v(" "),t.navigatorShare?o("button",{directives:[{name:"close-popover",rawName:"v-close-popover"},{name:"tooltip",rawName:"v-tooltip",value:t.$t("more"),expression:"$t('more')"}],staticClass:"icon",on:{click:t.nativeShare}},[o("i",{staticClass:"material-icons"},[t._v("share")])]):t._e()])])],2)],1)]),t._v(" "),t.showExtensions?o("modal",{on:{close:function(e){t.showExtensions=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"flex-wrap"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("extensions")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:function(e){t.showExtensions=!1}}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("p",{staticClass:"info"},[t._v("\n        "+t._s(t.$t("extensions_info1"))+"\n      ")]),t._v(" "),o("div",[o("a",{attrs:{href:"https://addons.mozilla.org/en-US/firefox/addon/postwoman",target:"_blank",rel:"noopener"}},[o("button",{staticClass:"icon"},[o("svg",{staticClass:"material-icons",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8.003 8.657c-1.276-3.321-4.46-4.605-5.534-4.537 3.529 1.376 4.373 6.059 4.06 7.441-.307-1.621-1.286-3.017-1.872-3.385 3.417 8.005-4.835 10.465-7.353 7.687.649.168 1.931.085 2.891-.557.898-.602.983-.638 1.56-.683.686-.053-.041-1.406-1.539-1.177-.616.094-1.632.819-2.88.341-1.508-.576-1.46-2.634.096-2.015.337-.437.088-1.263.088-1.263.452-.414 1.022-.706 1.37-.911.228-.135.829-.507.795-1.23-.123-.096-.32-.219-.766-.193-1.736.11-1.852-.518-1.967-.808.078-.668.524-1.534 1.361-1.931-1.257-.193-2.28.397-2.789 1.154-.809-.174-1.305-.183-2.118-.031-.316-.24-.666-.67-.878-1.181 1.832-2.066 4.499-3.378 7.472-3.378 5.912 0 8.263 4.283 8.003 6.657z"}})]),t._v(" "),o("span",[t._v("Firefox")]),t._v(" "),t.firefoxExtInstalled?o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("installed"),expression:"$t('installed')"}],staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("done")])]):t._e()])])]),t._v(" "),o("div",[o("a",{attrs:{href:"https://chrome.google.com/webstore/detail/postwoman-extension-for-c/amknoiejhlmhancpahfcfcfhllgkpbld",target:"_blank",rel:"noopener"}},[o("button",{staticClass:"icon"},[o("svg",{staticClass:"material-icons",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M2.897 4.181c2.43-2.828 5.763-4.181 9.072-4.181 4.288 0 8.535 2.273 10.717 6.554-2.722.001-6.984 0-9.293 0-1.674.001-2.755-.037-3.926.579-1.376.724-2.415 2.067-2.777 3.644l-3.793-6.596zm5.11 7.819c0 2.2 1.789 3.99 3.988 3.99s3.988-1.79 3.988-3.99-1.789-3.991-3.988-3.991-3.988 1.791-3.988 3.991zm5.536 5.223c-2.238.666-4.858-.073-6.293-2.549-1.095-1.891-3.989-6.933-5.305-9.225-1.33 2.04-1.945 4.294-1.945 6.507 0 5.448 3.726 10.65 9.673 11.818l3.87-6.551zm2.158-9.214c1.864 1.734 2.271 4.542 1.007 6.719-.951 1.641-3.988 6.766-5.46 9.248 7.189.443 12.752-5.36 12.752-11.972 0-1.313-.22-2.66-.69-3.995h-7.609z"}})]),t._v(" "),o("span",[t._v("Chrome")]),t._v(" "),t.chromeExtInstalled?o("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("installed"),expression:"$t('installed')"}],staticClass:"icon"},[o("i",{staticClass:"material-icons"},[t._v("done")])]):t._e()])])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})]):t._e(),t._v(" "),t.showShortcuts?o("modal",{on:{close:function(e){t.showShortcuts=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"flex-wrap"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("shortcuts")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:function(e){t.showShortcuts=!1}}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("div",[o("label",[t._v(t._s(t.$t("send_request")))]),t._v(" "),o("kbd",[t._v(t._s(t.getSpecialKey())+" G")])]),t._v(" "),o("div",[o("label",[t._v(t._s(t.$t("save_to_collections")))]),t._v(" "),o("kbd",[t._v(t._s(t.getSpecialKey())+" S")])]),t._v(" "),o("div",[o("label",[t._v(t._s(t.$t("copy_request_link")))]),t._v(" "),o("kbd",[t._v(t._s(t.getSpecialKey())+" K")])]),t._v(" "),o("div",[o("label",[t._v(t._s(t.$t("reset_request")))]),t._v(" "),o("kbd",[t._v(t._s(t.getSpecialKey())+" L")])])]),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})]):t._e(),t._v(" "),t.showSupport?o("modal",{on:{close:function(e){t.showSupport=!1}}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("ul",[o("li",[o("div",{staticClass:"flex-wrap"},[o("h3",{staticClass:"title"},[t._v(t._s(t.$t("support_us")))]),t._v(" "),o("div",[o("button",{staticClass:"icon",on:{click:function(e){t.showSupport=!1}}},[o("i",{staticClass:"material-icons"},[t._v("close")])])])])])])]),t._v(" "),o("div",{attrs:{slot:"body"},slot:"body"},[o("contributors")],1),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);