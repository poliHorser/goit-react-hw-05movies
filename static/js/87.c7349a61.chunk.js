"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{148:function(e,n,t){t.d(n,{Bt:function(){return v},DD:function(){return h},Tg:function(){return f},Wn:function(){return m},_n:function(){return l},on:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(294),i="c59d661c06ce192682a3f08ecc590a6a",s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54"}},o=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),l="https://image.tmdb.org/t/p/w300",f=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.get("trending/movie/week?api_key=".concat(i),s));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"),s));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return o.get("/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"),s)},m=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"),s));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"),s));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},138:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(689),a=t(87),c=t(184),u=function(e){var n=e.items,t=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{className:"movies-list",children:n.map((function(e){var n=e.id,r=e.title;return(0,c.jsx)("li",{className:"movie-li",children:(0,c.jsx)(a.rU,{className:"movie-link",to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})})}},697:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(433),a=t(861),c=t(439),u=t(757),i=t.n(u),s=t(791),o=t(87),l=t(942),f=t(413),p=t(184),h=function(e){var n=e.onSubmit,t=(0,s.useState)({search:""}),r=(0,c.Z)(t,2),a=r[0],u=r[1],i=(0,s.useRef)(null);(0,s.useEffect)((function(){i.current.focus()}),[]);var o=function(){u({search:""})},h=(0,s.useMemo)((function(){return function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n}()}),[]);return(0,p.jsx)("div",{className:"form-div",children:(0,p.jsx)("form",{onSubmit:function(e){e.preventDefault(),n((0,f.Z)({},a)),o()},className:"form",children:(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{className:"form-label",htmlFor:h,children:"Search movie"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("input",{className:"form-input",id:h,ref:i,value:a.search,onChange:function(e){var n=e.target,t=n.name,r=n.value;u((0,f.Z)((0,f.Z)({},a),{},(0,l.Z)({},t,r)))},required:!0,type:"text",name:"search",placeholder:"Enter movie name"}),(0,p.jsx)("button",{type:"submit",className:"form-btn",children:"Search"})]})]})})})},m=t(138),v=t(148),d=function(){var e=(0,s.useState)([]),n=(0,c.Z)(e,2),t=n[0],u=n[1],l=(0,s.useState)(!1),f=(0,c.Z)(l,2),d=f[0],g=f[1],j=(0,s.useState)(null),x=(0,c.Z)(j,2),Z=x[0],k=x[1],w=(0,o.lr)(),y=(0,c.Z)(w,2),N=y[0],b=y[1],S=N.get("search"),I=N.get("page");(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,v.on)(S,I);case 4:n=e.sent,t=n.data,u((function(e){var n;return null!==(n=t.results)&&void 0!==n&&n.length?[].concat((0,r.Z)(e),(0,r.Z)(t.results)):e})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();!S||"1"!==I&&I||e()}),[S,I]);var _=Boolean(t.length);return(0,p.jsxs)("div",{className:"search",children:[(0,p.jsx)(h,{onSubmit:function(e){var n=e.search;b({search:n,page:1}),u([])}}),Z&&(0,p.jsx)("p",{children:Z}),d&&(0,p.jsx)("p",{children:"...Loading page"}),_&&(0,p.jsx)(m.Z,{items:t})]})},g=function(){return(0,p.jsx)("div",{children:(0,p.jsx)(d,{})})}}}]);
//# sourceMappingURL=87.c7349a61.chunk.js.map