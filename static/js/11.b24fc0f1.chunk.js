(window.webpackJsonpmovies=window.webpackJsonpmovies||[]).push([[11],{76:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});var n=a(8),r=a(13),i=a(0),o=a.n(i),c=a(14),l=(a(76),a(60)),s=a.n(l);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach(function(t){Object(n.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function u(e){var t=Object(c.c)().firebase,a=Object(i.useState)(),n=Object(r.a)(a,2),l=n[0],m=n[1],u=!0;return Object(i.useEffect)(function(){}),o.a.createElement("div",{className:"zmovo-inner-page"},o.a.createElement("div",{className:"zmovo-login-page"},o.a.createElement("div",{className:"zmovo-login-page-wrap"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"zmovo-page-login"},o.a.createElement("form",{id:"frmRegister",onSubmit:function(e){var a;e.preventDefault(),a=function(){if(u){s()(".ico-loading").show(),s()("#btnSubmit").attr("disabled",!0);var e=new Date;t.setDocument("account",e.getTime().toString(),l,function(e){s()(".ico-loading").hide(),e?alert("SUCCESSFULL"):(alert("FELL"),s()("#btnSubmit").attr("disabled",!1))})}},s()("#frmRegister .form-group").each(function(){if(s()(this).find("input").data("required")&&""===s()(this).find("input").val())return s()(this).find(".tip").text("This field is required").show(),u=!1,s()(this).find("input").focus(),!1}),a&&a()}},o.a.createElement("div",{className:"zmovo-login-input-top"},o.a.createElement("div",{className:"form-group"},o.a.createElement("p",{className:"tip",style:{display:"none"},id:"tip-username"}),o.a.createElement("input",{"data-required":"true",className:"form-control",onChange:function(e){var t=e.target.value;t.length<6?(s()("#tip-username").text("T\u1eeb 6 k\xed t\u1ef1 tr\u1edf l\xean").show(),u=!1):s()("#tip-username").text("").hide(),m(p({},l,{username:t}))},type:"text",placeholder:"Nh\u1eadp h\u1ecd t\xean"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("p",{className:"tip",style:{display:"none"},id:"tip-email"}),o.a.createElement("input",{"data-required":"true",className:"form-control",onChange:function(e){var t=e.target.value;console.log(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)),t.length<1?(s()("#tip-email").text("Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\xea tr\u1ed1ng email").show(),u=!1):/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(t)?s()("#tip-email").text("").hide():(s()("#tip-email").text("Email kh\xf4ng h\u1ee3p l\u1ec7").show(),u=!1),m(p({},l,{email:t}))},type:"text",placeholder:"\u0110\u1ecba ch\u1ec9 email"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("p",{className:"tip",style:{display:"none"},id:"tip-password"}),o.a.createElement("input",{"data-required":"true",className:"form-control",type:"password",placeholder:"M\u1eadt kh\u1ea9u"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("p",{className:"tip",style:{display:"none"},id:"tip-repassword"}),o.a.createElement("input",{"data-required":"true",className:"form-control",type:"password",placeholder:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u"}))),o.a.createElement("div",{className:"zmovo-login-btns"},o.a.createElement("button",{id:"btnSubmit",className:"zmovo-login-btn"},"\u0110\u0102NG NH\u1eacP ",o.a.createElement("i",{style:{display:"none"},className:"ico-loading fa fa-circle-o-notch fa-spin"})))))))))}}}]);
//# sourceMappingURL=11.b24fc0f1.chunk.js.map