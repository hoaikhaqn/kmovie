(window.webpackJsonpmovies=window.webpackJsonpmovies||[]).push([[14],{101:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(19),s=t(13),m=t(14),o=t(60),r=t.n(o);function i(e){var a=Object(m.c)(),t=a.state,o=a.getCollection,i=Object(l.useState)(),d=Object(s.a)(i,2),u=d[0],E=d[1],p=Object(l.useState)(),g=Object(s.a)(p,2),v=g[0],N=g[1],b=Object(l.useState)(),h=Object(s.a)(b,2),f=h[0],w=h[1];return(!t.data||t.data&&!t.data.genre)&&o("genre"),(!t.data||t.data&&!t.data.type)&&o("type"),(!t.data||t.data&&!t.data.nation)&&o("nation"),v&&u&&f&&(r()("html").scrollTop(0),r()(".main-menu").addClass("fadeIn")),Object(l.useEffect)(function(){v||N(t.data&&t.data.genre),u||E(t.data&&t.data.type),f||w(t.data&&t.data.nation)},[t.data,v,u,f]),n.a.createElement("div",{className:"main-menu fadeOut show"},n.a.createElement("div",{className:"navigation"},n.a.createElement("div",{className:"menu-container"},n.a.createElement("ul",{id:"navigation",className:"menu-collpase"},n.a.createElement("div",{id:"menu-button","data-toggle":"collapse","data-target":"#menuCollapse"}),n.a.createElement("ul",{id:"menuCollapse",className:"collapse"},n.a.createElement("li",null,n.a.createElement(c.b,{className:"menu-title",to:"/"},"Trang ch\u1ee7")),n.a.createElement("li",{className:"has-sub"},n.a.createElement("span",{"data-toggle":"collapse","data-target":"#genreCollapse",className:"submenu-button"}),n.a.createElement("span",{className:"menu-title"},"Th\u1ec3 lo\u1ea1i"),n.a.createElement("ul",{id:"genreCollapse",className:"collapse"},v&&v.map(function(e,a){return n.a.createElement("li",{key:a},n.a.createElement(c.b,{to:"/the-loai/".concat(e.id)},e.name))}))),u&&u.map(function(e,a){return n.a.createElement("li",{key:a},n.a.createElement(c.b,{className:"menu-title",to:"/loai/".concat(e.id)},e.name))}),n.a.createElement("li",{className:"has-sub"},n.a.createElement("span",{"data-toggle":"collapse","data-target":"#nationCollapse",className:"submenu-button"}),n.a.createElement("span",{className:"menu-title"},"Qu\u1ed1c gia"),n.a.createElement("ul",{id:"nationCollapse",className:"collapse"},f&&f.map(function(e,a){return n.a.createElement("li",{key:a},n.a.createElement(c.b,{to:"/quoc-gia/".concat(e.id)},e.name))}))),n.a.createElement("li",null,n.a.createElement(c.b,{className:"menu-title",to:"/trailer"},"Trailer")))))))}function d(e){return Object(l.useEffect)(function(){}),n.a.createElement("header",{className:"zmovo-header"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-2 zmovo-logos"},n.a.createElement("div",{className:"zmovo-logo"},n.a.createElement(c.b,{to:"/"},n.a.createElement("img",{src:"./assets/images/logo.png",alt:""})))),n.a.createElement("div",{className:"col-lg-8 zmovo-menus"},n.a.createElement(i,null),n.a.createElement("div",{className:"zmovo-hidden-search",id:"opensearch"},n.a.createElement("input",{type:"search",onKeyDown:e.handelKeyword,placeholder:"Enter the movie Name"}))),n.a.createElement("div",{className:"col-lg-2 zmovo-t-right"},n.a.createElement("div",{className:"zmovo-header-right"},n.a.createElement("div",{className:"zmovo-top-search"},n.a.createElement("div",{className:"zmovo-ser-icon",id:"clicksearch"},n.a.createElement("span",{className:"fa fa-search"}))),n.a.createElement("div",{className:"zmovo-login"},n.a.createElement(c.b,{to:"/login",className:"btn login-btn"},n.a.createElement("span",{className:"fa fa-user"})," Login")))))))}t.d(a,"default",function(){return d})}}]);
//# sourceMappingURL=14.7efaafb9.chunk.js.map