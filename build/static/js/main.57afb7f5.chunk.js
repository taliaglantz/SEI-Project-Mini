(this["webpackJsonpintro-to-react"]=this["webpackJsonpintro-to-react"]||[]).push([[0],{152:function(e,t,s){"use strict";s.r(t);var c,i,a=s(1),n=s(38),r=s.n(n),l=(s(49),s(50),s(25)),j=s(5),o=s(39),d=s(26),h=s.p+"static/media/white-no-logo.d9679102.PNG",b=s(0),m=function(){var e=d.a.div(c||(c=Object(l.a)(["animation 2s "," infinite"])),Object(d.b)(i||(i=Object(l.a)(["",""])),o.bounce));return Object(b.jsx)("section",{className:"hero is-fullheight-with-navbar is-danger",id:"curtains",children:Object(b.jsx)("div",{className:"hero-body",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h1",{className:"title is-1 has-text-centered",children:Object(b.jsx)(e,{children:Object(b.jsxs)(j.b,{className:"has-text-white",id:"enter",to:"/movies",children:["Enter",Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"filmojo-logo",children:"FILMOJO"}),Object(b.jsx)("br",{}),Object(b.jsx)("img",{src:h,width:"200",height:"200"})]})})})})})})},O=s.p+"static/media/white-with-logo.bc3e27e0.PNG",x=function(){return Object(b.jsx)("nav",{className:"navbar is-dark",id:"navbar",children:Object(b.jsxs)("div",{className:"container",id:"nav-content",children:[Object(b.jsx)("div",{className:"navbar-brand",children:Object(b.jsx)("span",{role:"img","aria-label":"logo",className:"title",id:"logo-img",children:Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)("figure",{children:Object(b.jsx)("img",{src:O,width:"60",height:"60"})})})})}),Object(b.jsxs)("div",{className:"navbar-start",children:[Object(b.jsx)("div",{className:"navbar-item",children:Object(b.jsx)(j.b,{className:"has-text-white",id:"navbar-link",to:"/movies",children:"top movies"})}),Object(b.jsx)("button",{className:"button is-danger is-small is-rounded is-outlined",id:"shuffle",children:Object(b.jsx)(j.b,{className:"has-text-white",to:"/shuffle",children:"Shuffle"})})]}),Object(b.jsx)("div",{className:"navbar-end",children:Object(b.jsx)("div",{className:"navbar-item",children:Object(b.jsx)(j.b,{className:"has-text-white",id:"navbar-link",to:"/favourites",children:"\ud83c\udf7f Favourites"})})})]})})},u=s(22),v=s(11),g=s.n(v),f=s(12),N=s(6),p=function(e){var t=e.id,s=e.rank,c=e.title,i=e.image;return Object(b.jsx)("div",{className:"column is-one-quarter-desktop is-one-third-tablet",children:Object(b.jsx)(j.b,{to:"/movies/".concat(t),children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("figure",{className:"image image-is-1by2",children:Object(b.jsx)("img",{src:i,alt:c})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsxs)("div",{className:"card-subtitle title is-1",id:"rank",children:[s,Object(b.jsx)("div",{className:"card-header-title title is-6",id:"title-card",children:c})]})})]})})},t)},w=s(13),k=s.n(w),S=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(!1),n=Object(N.a)(i,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6");case 3:t=e.sent,s=t.data,c(s.items),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("section",{className:"section",id:"index",children:Object(b.jsx)("div",{className:"container",children:s.length?Object(b.jsx)("div",{className:"columns is-multiline",children:s.map((function(e){return Object(b.jsx)(p,Object(u.a)({},e),e.id)}))}):Object(b.jsx)("h2",{className:"title has-text-centered",children:r?"Oops, something has gone wrong!":"Loading movies..."})})})},y=s(3),I=s(44),E=function(){var e=Object(a.useState)(),t=Object(N.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)([]),n=Object(N.a)(i,2),r=n[0],l=n[1],o=Object(a.useState)(!1),d=Object(N.a)(o,2),h=d[0],m=d[1],O=Object(y.f)().id;Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://imdb-api.com/en/API/Title/k_0vc4n4g6/".concat(O));case 3:t=e.sent,s=t.data,c(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),x()}),[O]);var x=function(){var e=window.localStorage.getItem("favourites");if(console.log("retrieved",e),e){var t=JSON.parse(e);console.log("faves",t),l(t)}};return console.log("movie ->",s),console.log("FAVOURITE",r),Object(b.jsx)("section",{className:"section",id:"show-content",children:Object(b.jsx)("div",{className:"container",children:s?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"title has-text-centered has-text-white",children:s.fullTitle}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"columns is-multiline",children:[Object(b.jsx)("div",{className:"column is-half",children:Object(b.jsx)("figure",{className:"image",children:Object(b.jsx)("img",{src:s.image,alt:s.image})})}),Object(b.jsxs)("div",{className:"column is-half",children:[Object(b.jsx)("h4",{className:"title is-4 has-text-white",children:"Plot"}),Object(b.jsx)("p",{children:s.plot}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{className:"title is-4 has-text-white",children:"Directors"}),Object(b.jsx)("p",{children:s.directors}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{className:"title is-4 has-text-white",children:"Starring"}),Object(b.jsx)("p",{children:s.stars}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{className:"title is-4 has-text-white",children:"Genres"}),Object(b.jsx)("p",{children:s.genres}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{className:"title is-4 has-text-white",children:"Run Time"}),Object(b.jsx)("p",{children:s.runtimeStr}),Object(b.jsx)("hr",{}),Object(b.jsx)("button",{ID:s.id,className:"button is-danger is-rounded is-outlined",onClick:function(e){console.log("event target id",e.target.id);var t=e.target.id,s=[].concat(Object(I.a)(r),[t]);console.log("new faves",s);var c=JSON.stringify(s);console.log("add fave",c),window.localStorage.setItem("favourites",c)},children:"FAVOURITE"}),Object(b.jsx)("hr",{})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{className:"title is-4 has-text-white has-text-centered",children:"More like this"}),Object(b.jsxs)("div",{className:"columns",children:[Object(b.jsx)("div",{className:"column is-one-quarter",children:Object(b.jsx)(j.b,{to:"/movies/".concat(s.similars[0].id),children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("figure",{className:"image image-is-1by2",children:Object(b.jsx)("img",{src:s.similars[0].image,alt:s.similars[0].title})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title title-is-7",children:s.similars[0].title})})]})})}),Object(b.jsx)("div",{className:"column is-one-quarter",children:Object(b.jsx)(j.b,{to:"/movies/".concat(s.similars[1].id),children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("figure",{className:"image image-is-1by2",children:Object(b.jsx)("img",{src:s.similars[1].image,alt:s.similars[1].title})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title title-is-7",children:s.similars[1].title})})]})})}),Object(b.jsx)("div",{className:"column is-one-quarter",children:Object(b.jsx)(j.b,{to:"/movies/".concat(s.similars[2].id),children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("figure",{className:"image image-is-1by2",children:Object(b.jsx)("img",{src:s.similars[2].image,alt:s.similars[2].title})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title title-is-7",children:s.similars[2].title})})]})})}),Object(b.jsx)("div",{className:"column is-one-quarter",children:Object(b.jsx)(j.b,{to:"/movies/".concat(s.similars[3].id),children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("figure",{className:"image image-is-1by2",children:Object(b.jsx)("img",{src:s.similars[3].image,alt:s.similars[3].title})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title title-is-7",children:s.similars[3].title})})]})})})]})]})]}):Object(b.jsx)("h2",{className:"title has-text-centered",children:h?"Oops, something went wrong...":"Loading your movie :film_projector:"})})})},M=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(null),n=Object(N.a)(i,2),r=n[0],l=n[1],j=Object(a.useState)([]),o=Object(N.a)(j,2),d=o[0],h=o[1],m=Object(a.useState)(!1),O=Object(N.a)(m,2),x=O[0],v=O[1];Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6/");case 3:t=e.sent,s=t.data,c(s.items),console.log(s.items),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v(!0);case 12:w();case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=function(){var e=window.localStorage.getItem("favourites"),t=JSON.parse(e);console.log("array data",t),h(t)};return Object(a.useEffect)((function(){console.log("newMovie",s);try{var e=s&&s.filter((function(e){return d.includes(e.id)}));console.log("Im the filtered movies!",e),l(e),console.log(r)}catch(t){v(!0)}}),[d]),console.log(d),console.log("newArray",r),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"section is-medium",id:"index",children:Object(b.jsx)("div",{className:"container",children:r?Object(b.jsx)("div",{className:"columns is-multiline",children:r.map((function(e){return Object(b.jsx)(p,Object(u.a)({},e),e.id)}))}):Object(b.jsx)("h2",{className:"title has-text-dark",children:x?"Oops, something has gone wrong!":"Loading movies..."})})})})},T=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)(!1),n=Object(N.a)(i,2),r=n[0],l=n[1];Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(g.a.mark((function e(){var t,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://imdb-api.com/en/API/Top250Movies/k_0vc4n4g6");case 3:t=e.sent,s=t.data,c(s.items),console.log("data items ->",s.items),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l(r);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var o=Math.floor(250*Math.random());return console.log("movies ->",s),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("section",{className:"hero is-fullheight-with-navbar is-dark",id:"curtains",children:Object(b.jsx)("div",{className:"columns is-centered",children:Object(b.jsx)("div",{className:"column is-one-quarter-desktop is-one-third-tablet",children:s.length?Object(b.jsx)(j.b,{to:"/movies/".concat(s[o].id),children:Object(b.jsxs)("div",{className:"card",id:"shufflecard",children:[Object(b.jsx)("figure",{className:"image image-is-1by1",children:Object(b.jsx)("img",{src:s[o].image,alt:s[o].title})}),Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("div",{className:"card-header-title title is-4 has-text-white",children:s[o].title})})]})}):Object(b.jsx)("h2",{className:"title has-text-centered",children:r?"Oops, something went wrong...":"Loading your movie :film_projector:"})})})})})},A=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(y.c,{children:[Object(b.jsx)(y.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(y.a,{exact:!0,path:"/movies",component:S}),Object(b.jsx)(y.a,{exact:!0,path:"/movies/:id",component:E}),Object(b.jsx)(y.a,{exact:!0,path:"/favourites",component:M}),Object(b.jsx)(y.a,{exact:!0,path:"/shuffle",component:T})]})]})};r.a.render(Object(b.jsx)(A,{}),document.getElementById("root"))},50:function(e,t,s){}},[[152,1,2]]]);
//# sourceMappingURL=main.57afb7f5.chunk.js.map