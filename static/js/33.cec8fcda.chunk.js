"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[33],{8762:function(A,n,e){e.d(n,{Df:function(){return c},TP:function(){return o},V0:function(){return u},tx:function(){return l},zv:function(){return p}});var r=e(5861),t=e(4687),a=e.n(t),i=e(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="8c12f36de4e4777f33205f9eb618cf01",c=function(){var A=(0,r.Z)(a().mark((function A(){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.ZP.get("trending/movie/day",{params:{api_key:s}});case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),u=function(){var A=(0,r.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.ZP.get("search/movie",{params:{api_key:s,query:n}});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),o=function(){var A=(0,r.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.ZP.get("movie/".concat(n),{params:{api_key:s}});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.ZP.get("movie/".concat(n,"/credits"),{params:{api_key:s}});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),l=function(){var A=(0,r.Z)(a().mark((function A(n){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,i.ZP.get("movie/".concat(n,"/reviews"),{params:{api_key:s}});case 2:return e=A.sent,A.abrupt("return",e.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},5033:function(A,n,e){e.r(n),e.d(n,{default:function(){return q}});var r,t,a,i,s,c,u,o,p,l=e(5861),x=e(885),d=e(4687),f=e.n(d),P=e(2791),v=e(7689),m=e(8762),S=e(168),b=e(7691),y=e(6731),h=e(3472),L=(0,b.ZP)(y.OL)(r||(r=(0,S.Z)(["\n  color: black;\n  font-size: 20px;\n  text-decoration: none;\n\n  &.active {\n    color: tomato;\n  }\n"]))),j=(0,b.ZP)(y.rU)(t||(t=(0,S.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  padding: 5px 10px;\n  margin-bottom: 10px;\n  font-size: 16px;\n  border: 1px solid #767676;\n  border-radius: 4px;\n  cursor: pointer;\n"]))),U=b.ZP.main(a||(a=(0,S.Z)(["\n  padding: 10px;\n"]))),k=(0,b.ZP)(h.x)(i||(i=(0,S.Z)(["\n  width: 16px;\n  height: 16px;\n"]))),Z=b.ZP.div(s||(s=(0,S.Z)(["\n  display: flex;\n  flex-wrap: nowrap;\n  margin: 10px 0;\n  padding-bottom: 10px;\n  border-bottom: 1px solid grey;\n"]))),g=b.ZP.img(c||(c=(0,S.Z)(["\n  width: 300px;\n  margin-right: 20px;\n"]))),T=b.ZP.p(u||(u=(0,S.Z)(["\n  font-size: 16px;\n  margin: 15px 0;\n"]))),V=b.ZP.h1(o||(o=(0,S.Z)(["\n  font-size: 32 px;\n  margin-top: 15px;\n"]))),z=b.ZP.ul(p||(p=(0,S.Z)(["\n  list-style: square inside;\n  font-size: 16px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid gray;\n"]))),W=e(3521),Q=e(3922),E=e(184),q=function(){var A,n,e=(0,v.UO)().movieId,r=(0,P.useState)(null),t=(0,x.Z)(r,2),a=t[0],i=t[1],s=(0,P.useState)(!1),c=(0,x.Z)(s,2),u=c[0],o=c[1],p=(0,v.TH)();if((0,P.useEffect)((function(){var A=function(){var A=(0,l.Z)(f().mark((function A(){var n;return f().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,o(!0),A.next=4,(0,m.TP)(e);case 4:n=A.sent,i(n),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log("error",A.t0);case 11:return A.prev=11,o(!1),A.finish(11);case 14:case"end":return A.stop()}}),A,null,[[0,8,11,14]])})));return function(){return A.apply(this,arguments)}}();A()}),[e]),!a)return null;var d=a.poster_path,S=a.title,b=a.genres,y=a.vote_average,h=a.overview,q=a.release_date,K=new Date(q),X=null!==(A=null===(n=p.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/";return(0,E.jsxs)(U,{children:[u&&(0,E.jsx)(W.a,{}),(0,E.jsxs)(j,{to:X,children:[(0,E.jsx)(k,{})," Go back"]}),(0,E.jsxs)(Z,{children:[(0,E.jsx)(g,{src:d?"https://image.tmdb.org/t/p/w300".concat(d):Q,alt:S}),(0,E.jsxs)("div",{children:[(0,E.jsxs)(V,{children:[S," (",K.getFullYear(),")"]}),(0,E.jsxs)(T,{children:["User Score: ",(10*y).toFixed(),"%"]}),(0,E.jsx)("h2",{children:"Overview"}),(0,E.jsx)(T,{children:h}),(0,E.jsx)("h3",{children:"Genres"}),(0,E.jsx)(T,{children:b.map((function(A,n){var e=A.name;return(0,E.jsxs)("span",{children:[e," "]},n)}))})]})]}),(0,E.jsx)(T,{children:"Additional information"}),(0,E.jsxs)(z,{children:[(0,E.jsx)("li",{children:(0,E.jsx)(L,{to:"cast",state:{from:X},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(L,{to:"reviews",state:{from:X},children:"Reviews"})})]}),(0,E.jsx)(P.Suspense,{fallback:(0,E.jsx)(W.a,{}),children:(0,E.jsx)(v.j3,{})})]})}},3922:function(A){A.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=33.cec8fcda.chunk.js.map