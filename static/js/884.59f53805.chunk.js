"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{884:function(e,t,i){i.r(t);var n=i(861),r=i(439),a=i(757),s=i.n(a),c=i(689),o=i(87),h=i(243),l=i(791),u=i(474),d=i(917),p=i(184);t.default=function(){var e,t,i=(0,l.useState)(null),a=(0,r.Z)(i,2),I=a[0],f=a[1],N=(0,l.useState)(null),m=(0,r.Z)(N,2),j=m[0],v=m[1],y=(0,c.TH)(),w=(0,l.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),Y=(0,c.UO)().movieId;function J(e){return{poster_path:e.poster_path,title:e.title,release_date:e.release_date,vote_average:e.vote_average,overview:e.overview,genres:e.genres,id:e.id}}(0,l.useEffect)((function(){if(!I&&!j){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Y5)(Y);case 3:t=e.sent,i=J(t),f(i),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}}));return j?(0,p.jsx)("div",{className:"alert-wrap",children:(0,p.jsx)("h2",{className:"alert-txt",children:"404 - Page not found!"})}):I&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"details-wrapper",children:[(0,p.jsx)("div",{className:"details-img-wrapper",children:I.poster_path?(0,p.jsx)("img",{className:"details-img",src:"https://image.tmdb.org/t/p/w300".concat(I.poster_path),alt:I.title,width:"300px",height:"450px"}):(0,p.jsx)("img",{className:"details-noimg details-img",src:d,alt:I.title,width:"300px",height:"450px"})}),(0,p.jsxs)("div",{className:"details-txt-wrap",children:[(0,p.jsxs)("h1",{className:"details-main-title",children:[I.title," ",I.release_date&&"(".concat(Number.parseInt(I.release_date),")")]}),(0,p.jsxs)("p",{className:"details-txt",children:["User score: ",Math.round(10*I.vote_average),"%"]}),(0,p.jsx)("h2",{className:"details-title",children:"Overview"}),(0,p.jsx)("p",{className:"details-txt",children:I.overview}),(0,p.jsx)("h2",{className:"details-title",children:"Genres"}),(0,p.jsx)("span",{className:"details-txt",children:I.genres&&I.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)("div",{className:"details-btn-wrap",children:[(0,p.jsx)(o.rU,{className:"details-btn",to:w.current,children:"\u2b05Go back"}),(0,p.jsx)(o.rU,{className:"details-btn",to:"cast",children:"Cast"}),(0,p.jsx)(o.rU,{className:"details-btn",to:"reviews",children:"Reviews"})]}),(0,p.jsx)(l.Suspense,{fallback:(0,p.jsx)(u.a,{}),children:(0,p.jsx)(c.j3,{})})]})}},243:function(e,t,i){i.d(t,{Bt:function(){return u},KJ:function(){return s},Ny:function(){return d},Y5:function(){return o},_h:function(){return c},y:function(){return l}});var n=i(861),r=i(757),a=i.n(r);function s(){return fetch("https://api.themoviedb.org/3/trending/movie/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function c(){return fetch("https://api.themoviedb.org/3/trending/tv/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function o(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(a().mark((function e(t){var i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}},e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t),i).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function u(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function d(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}},917:function(e,t,i){e.exports=i.p+"static/media/poster.03b65d72be266a75691e.jpg"},861:function(e,t,i){function n(e,t,i,n,r,a,s){try{var c=e[a](s),o=c.value}catch(h){return void i(h)}c.done?t(o):Promise.resolve(o).then(n,r)}function r(e){return function(){var t=this,i=arguments;return new Promise((function(r,a){var s=e.apply(t,i);function c(e){n(s,r,a,c,o,"next",e)}function o(e){n(s,r,a,c,o,"throw",e)}c(void 0)}))}}i.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=884.59f53805.chunk.js.map