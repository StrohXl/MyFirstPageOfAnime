(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{481:function(t,e,o){"use strict";o.d(e,"a",(function(){return v}));var n=o(482),r=o(0),c=Object(r.i)("v-card__actions"),l=Object(r.i)("v-card__subtitle"),d=Object(r.i)("v-card__text"),v=Object(r.i)("v-card__title");n.a},515:function(t,e,o){var content=o(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("f06a58d0",content,!0,{sourceMap:!1})},527:function(t,e,o){"use strict";o(515)},528:function(t,e,o){var n=o(16)(!1);n.push([t.i,".tituloTop{text-align:center;background-color:#fff;color:var(--color-negro)}.contentTop,.tituloTop{border:4px solid var(--color-negro)}.contentTop{border-top:none}",""]),t.exports=n},549:function(t,e,o){"use strict";o.r(e);var n=o(483),r=o(481),c=o(495),l=o(494),d=o(34),v=(o(98),o(83)),_=o.n(v),f={name:"TopAnimes.vue",data:function(){return{topCompleto:[]}},mounted:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://api.jikan.moe/v4/top/anime");case 2:o=e.sent,t.topCompleto=o.data.data;case 4:case"end":return e.stop()}}),e)})))()}},m=(o(527),o(35)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"tituloTop"},t._l(t.topCompleto,(function(o,d){return e(l.a,{staticStyle:{"border-bottom":"4px solid var(--color-negro)"}},[e(c.a,{attrs:{cols:"3"}},[e("img",{staticClass:"mt-10",attrs:{width:"200px",src:o.images.webp.image_url}}),t._v(" "),e("div",{staticClass:"text-h4 blue--text"},[t._v("Top: "+t._s(d+1))])]),t._v(" "),e(c.a,{staticClass:"mb-16",attrs:{cols:"8"}},[e(r.a,{staticClass:"d-flex justify-center text-h4 text-center"},[t._v("\n            "+t._s(o.title)+"\n        ")]),t._v(" "),e("div",[e(r.a,{staticClass:"d-flex justify-center"},[t._v("\n           Sinopsis  \n         ")])],1),t._v(" "),e("div",{staticClass:"text-justify"},[t._v("\n            "+t._s(o.synopsis)+"\n        ")])],1),t._v(" "),e(n.a,{staticClass:"mt-16",attrs:{color:"blue",to:"/Anime/"+o.mal_id,route:"",exact:""}},[t._v("Ver")])],1)})),1)])}),[],!1,null,null,null);e.default=component.exports}}]);