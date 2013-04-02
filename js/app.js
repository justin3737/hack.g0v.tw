(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","ngCookies","ngResource","app.controllers","ui.state"]).config(["$stateProvider","$urlRouterProvider"].concat(function(e,t){return e.state("about",{url:"/about",templateUrl:"/partials/app/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/app/hack.html",controller:"HackFolderCtrl"}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath2n")})).run(["$rootScope","$state","$stateParams"].concat(function(e,t,n){return e.$state=t,e.$stateParam=n}))}.call(this),function(){function n(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function r(e,t){var n=-1,r=t.length>>>0;while(++n<r)if(e===t[n]&&n in t)return!0;return!1}var e=[].slice,t="".replace;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$location","$resource","$rootScope"].concat(function(e,t,n,r){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(e,t,r){var i;return n(e,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return typeof console!="undefined"&&console!==null?console.log("notyetupdated"):void 8}},iframes:r.iframes,docs:r.docs,tree:r.tree,activate:r.activate,HackFolder:r,onIframeLoad:function(e){return function(){var t;return t=this.contentWindow.location,typeof console!="undefined"&&console!==null?console.log("location",t,e.id):void 8}},debug:function(e){return typeof console!="undefined"&&console!==null?console.log(e,this):void 8},reload:function(e){return r.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(n){return r.getIndex(n,!1,function(){var n,i;e.$watch("docId",function(e){if(e)return r.activate(e)});if(!e.docId)if(n=(i=r.docs[0])!=null?i.id:void 8)return t.transitionTo("hack.doc",{docId:n,hackId:e.hackId})})}),e.hackId=(i=t.params.hackId)?i:"s8r4l008sk",e.$watch("$state.params.docId",function(t){if(t)return e.docId=encodeURIComponent(encodeURIComponent(t))})})}).directive("resize",["$window"].concat(function(e){return function(t){return t.width=e.innerWidth,t.height=e.innerHeight,angular.element(e).bind("resize",function(){return t.$apply(function(){return t.width=e.innerWidth,t.height=e.innerHeight})})}})).directive("ngxNoclick",function(){return function(e,t,n){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxFinal",function(){return function(e,t,n){return $(t).click(function(e){return e.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(i){var s,o,u,a,f;return s={},o=[],u=[],f={iframes:s,docs:o,tree:u,activate:function(e,t){function g(e){return e.id}var n,i,a,f,l,c,h,p,d,v,m;t==null&&(t=!1),i=function(){var t,r,i,s=[];for(t=0,i=(r=o).length;t<i;++t)n=r[t],n.id===e&&s.push(n);return s}()[0],a=i.type;for(f=0,c=(l=u).length;f<c;++f)h=l[f],(p=h!=null?(d=h.children)!=null?d.map(g):void 8:void 8)&&r(e,p)&&(h.expand=!0);return v=t?"edit":"view",m=function(){var t;switch(t=[a],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+v;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+v;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),(p=s[e])?(p.src=m,p.mode=v,p):s[e]={src:m,doc:i,mode:v}},getIndex:function(r,s,l){return a===r&&!s?l(o):i.get("https://www.ethercalc.org/_/"+r+"/csv").success(function(i){function P(){try{return JSON.parse(w!=null?w:"{}")}catch(e){}}function H(){var e;switch(e=[y],!1){case void 8!==e[0]:return s||b&&(s=b,b=null),{title:b,type:"dummy",id:"dummy"};case!(C=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:C[1]};case!(C=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:C[1]};case!(C=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:C[1]};case!(C=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:C[1]};case!(C=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:C[1]};case!(C=/https?:\/\/hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",id:C[1]};case!(C=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(y)),icon:"http://g.etfv.co/"+C[1]};default:return typeof console!="undefined"&&console!==null?console.log("unrecognized",y):void 8}}function B(e){return e.length}function j(t){var n,r,i,s,o;return n=t.match(/^(.*?)(?::(.*))?$/),r=n[0],i=n[1],s=n[2],o=e.call(n,3),{content:i,"class":s!=null?s:"warning"}}var s,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;a=r,o.length=0,h=[];for(p=0,v=(d=i.split(/\n/)).length;p<v;++p)m=d[p],m&&(g=m.split(/,/),y=g[0],b=g[1],w=g[2],E=g[3],S=e.call(g,4),b=t.call(b,/^"|"$/g,""),w&&(w=t.call(w,/^"|"$/g,"")),w&&(w=w.replace(/""/g,'"')),E&&(E=t.call(E,/^"|"$/g,"")),g=y.match(/^"?(\s*)(\S+)?"?$/),x=g[0],T=g[1],y=g[2],N=n({url:y,title:b,indent:T.length,opts:P()},H()),N.type!=="dummy"||(g=N.title)!=null&&!!g.length?(N.tags=((g=(k=N.opts)!=null?k.tags:void 8)!=null?g:[]).concat(E!=null?E.split(",").filter(B):void 8),N.tags=N.tags.map(j),h.push(n({icon:"img/"+N.type+".png"},N))):h.push(null));c=h,o.splice.apply(o,[0,o.length].concat(e.call(c.filter(function(e){return e!=null})))),L=0,h=[];for(p=0,v=(d=o).length;p<v;++p)O=p,N=d[p],O>0&&N.indent?(M=o[L],_=(g=M.children)!=null?g:M.children=[],_.push(N),h.push(null)):(L&&(D=o[L],D.children&&(D.expand=(g=(k=D.opts)!=null?k.expand:void 8)!=null?g:D.children.length<5)),L=O,h.push(N));return A=h,u.splice.apply(u,[0,u.length].concat(e.call(A.filter(function(e){return e!=null})))),f.folderTitle=s,l(o)})}}})})}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this)