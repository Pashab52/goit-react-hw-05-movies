"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,t,n){n.r(t);var r=n(861),i=n(439),a=n(757),c=n.n(a),o=n(791),h=n(689),u=n(243),s=n(474),I=n(184);t.default=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],l=(0,o.useState)(!1),f=(0,i.Z)(l,2),d=f[0],p=f[1],N=(0,h.UO)().movieId;(0,o.useEffect)((function(){p(!0);var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Bt)(N);case 3:if(!(t=e.sent).total_results){e.next=9;break}n=y(t.results),a(n),e.next=10;break;case 9:return e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:return e.prev=15,p(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]);var y=function(e){return e.map((function(e){return{author:e.author,content:e.content,id:e.id,created_at:e.created_at}}))};return d?(0,I.jsx)(s.a,{}):(0,I.jsx)("ul",{className:"rev-wrapper",children:n.length?n.map((function(e){var t=e.author,n=e.content,r=e.id,i=e.created_at;return(0,I.jsxs)("li",{className:"rev-item-wrap",children:[(0,I.jsxs)("h3",{className:"cast-name",children:["Author: ",t]}),(0,I.jsx)("p",{className:"cast-char",children:i}),(0,I.jsx)("p",{className:"rev-txt",children:n})]},r)})):(0,I.jsx)("li",{className:"rev-item-wrap",children:(0,I.jsx)("p",{className:"cast-char",children:"We don't have any reviews for this movie"})})})}},243:function(e,t,n){n.d(t,{Bt:function(){return I},KJ:function(){return c},Ny:function(){return l},Y5:function(){return h},_h:function(){return o},y:function(){return s}});var r=n(861),i=n(757),a=n.n(i);function c(){return fetch("https://api.themoviedb.org/3/trending/movie/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function o(){return fetch("https://api.themoviedb.org/3/trending/tv/day",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function h(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}},e.abrupt("return",fetch("https://api.themoviedb.org/3/movie/".concat(t),n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function I(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}function l(e){return fetch("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5NjI1ZWMwNTYzMDZhMTI5NDBmNzQyZDk4OTVlYiIsInN1YiI6IjY0YzQyMjQ3NDFhYWM0MDEwMTQzMTQ4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_HEh-sV3F_dyKiODY0wef4bWi3WrlK7FGhBkulFBZ0"}}).then((function(e){return e.json()}))}},861:function(e,t,n){function r(e,t,n,r,i,a,c){try{var o=e[a](c),h=o.value}catch(u){return void n(u)}o.done?t(h):Promise.resolve(h).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,a){var c=e.apply(t,n);function o(e){r(c,i,a,o,h,"next",e)}function h(e){r(c,i,a,o,h,"throw",e)}o(void 0)}))}}n.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=186.14234a63.chunk.js.map