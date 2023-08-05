"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[470],{470:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(861),i=n(439),a=n(757),o=n.n(a),c=n(791),u=n(474),s=n(184),h=function(e){var t=(0,c.useState)(""),n=(0,i.Z)(t,2),r=n[0],a=n[1];return(0,s.jsx)("div",{className:"form-wrap",children:(0,s.jsx)("form",{className:"form",onSubmit:function(t){t.preventDefault(),""!==r&&(e.handleOnSubmit(r.trim()),a(""))},children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"Search movie",onChange:function(e){a(e.currentTarget.value)},value:r}),e.showLoader?(0,s.jsx)(u.a,{}):(0,s.jsx)("button",{className:"details-btn",type:"submit",children:"Search"})]})})})},l=n(243),d=n(87),p=n(689),f=function(e){var t=e.title,n=(e.poster,e.poster2),r=e.date,i=e.id,a=(0,p.TH)();return(0,s.jsx)("li",{className:"movie-item",children:(0,s.jsxs)(d.rU,{to:"".concat(i),state:{from:a},children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n),alt:t})}),(0,s.jsx)("div",{className:"movie-txt-wrap",children:(0,s.jsxs)("p",{children:[t," (",Number.parseInt(r),")"]})})]})})},I=function(){var e=(0,c.useState)(null),t=(0,i.Z)(e,2),n=t[0],a=t[1],u=(0,c.useState)(!1),p=(0,i.Z)(u,2),I=p[0],m=p[1],N=(0,d.lr)(),j=(0,i.Z)(N,2),y=j[0],v=j[1];(0,c.useEffect)((function(){var e=y.get("query");if(e){var t=function(){var t=(0,r.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,l.Ny)(e);case 4:n=t.sent,r=J(n),a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[y]);var J=function(e){return e.results.map((function(e){return{id:e.id,title:e.title,poster_path:e.poster_path,backdrop_path:e.backdrop_path,release_date:e.release_date}}))};return(0,s.jsxs)("div",{className:"movie-wrap",children:[(0,s.jsx)(h,{handleOnSubmit:function(e){v("query=".concat(e))},showLoader:I}),(0,s.jsx)("ul",{className:"movie-list",children:n&&n.map((function(e){var t=e.id,n=e.title,r=e.poster_path,i=e.backdrop_path,a=e.release_date;return(0,s.jsx)(f,{id:t,title:n,poster:r,poster2:i,date:a},t)}))})]})}},243:function(e,t,n){n.d(t,{Bt:function(){return h},KJ:function(){return o},Ny:function(){return l},Y5:function(){return c},y:function(){return s}});var r=n(861),i=n(757),a=n.n(i);function o(){return fetch("https://api.themoviedb.org/3/trending/all/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function c(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}},e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t),n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function h(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function l(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}},861:function(e,t,n){function r(e,t,n,r,i,a,o){try{var c=e[a](o),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var o=e.apply(t,n);function c(e){r(o,i,a,c,u,"next",e)}function u(e){r(o,i,a,c,u,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=470.4bebf19c.chunk.js.map