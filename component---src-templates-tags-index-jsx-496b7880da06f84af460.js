(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/xht":function(e,t,a){"use strict";a("Jmwx");var n=a("BMrR"),r=(a("EpIQ"),a("bx4M")),o=(a("rO+z"),a("kPKH")),l=(a("L/Qf"),a("2/Rp")),c=a("q1tI"),s=a.n(c),i=a("wd/R"),u=a.n(i),m=(a("Wbzz"),a("YwZP")),d=a("8aPU"),p=a.n(d),f=a("y6Qd"),g=a("Rt21"),v=a.n(g);t.a=function(e){var t=e.data.node,a=e.tagsMap;v.a.generateOmittedPostInfo(t);var c=t.frontmatter,i=t.fields.parsed;console.log(i);var d=v.a.resolvePageUrl(c.path);return s.a.createElement(r.a,{className:p.a.researchCard,bodyStyle:{padding:"0.8rem"},hoverable:!0,onClick:function(e){var t=e.target.tagName.toLowerCase();"a"!==t&&"span"!==t&&d&&Object(m.navigate)(d)}},s.a.createElement(r.a.Meta,{title:c?c.title:"",style:{marginBottom:"1rem"},description:c&&c.venue?c.venue:""}),s.a.createElement(n.a,{align:"middle",gutter:[0,8]},c?s.a.createElement(o.a,{xs:!0},s.a.createElement("span",{style:{marginRight:"0.8rem",color:"rgba(0, 0, 0, 0.45)"}},u()(c.date).format("MMM Do YYYY"))):null,c.tags.map((function(e){return a[e]?s.a.createElement(f.a,{tag:a[e]}):null}))),s.a.createElement("p",{style:{marginTop:"1rem"}},c?c.excerpt:""),s.a.createElement(n.a,{gutter:[8,8]},i&&i.links?i.links.map((function(e){return s.a.createElement(o.a,{xs:!0},s.a.createElement(l.a,{href:e.url,target:"_blank",size:"small"},e.name))})):null))}},"0lcf":function(e,t,a){"use strict";a("SchZ"),a("u3En")},"4QF9":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return k}));a("M7k7");var n=a("Ol7k"),r=(a("Jmwx"),a("BMrR")),o=(a("rO+z"),a("kPKH")),l=a("QVEU"),c=a.n(l),s=a("noZS"),i=a.n(s),u=a("k4Da"),m=a.n(u),d=a("q1tI"),p=a.n(d),f=a("JkAW"),g=a("U4IR"),v=a("EosS"),E=a("kuUC"),b=a("Rt21"),h=a.n(b),y=a("OBNy"),C=a.n(y),x=a("/xht"),k="1077615184";t.default=function(e){var t=e.data,a=e.pageContext.tag,l=t.allMarkdownRemark.edges,s=m()(l,(function(e){return"posts"===e.node.fields.parsed.type})),u=m()(l,(function(e){return"research"===e.node.fields.parsed.type})),d=t.allTag?t.allTag.edges:[],b=i()(c()(d,(function(e){return e.node.name})),"node"),y=b[a],k=y?y.path:"#",O=y?y.description:"";return p.a.createElement(n.a,{className:"outerPadding"},p.a.createElement(n.a,{className:"container"},p.a.createElement(g.a,null),p.a.createElement(f.a,{title:a,description:"All post about "+a+". "+O+" ",path:h.a.resolvePageUrl(k,y),keywords:[a]}),p.a.createElement(E.b,null,p.a.createElement("div",{className:"marginTopTitle "+C.a.tagsList},p.a.createElement("h1",{className:"titleSeparate"},"#",a),p.a.createElement("h4",{className:"textCenter"},O)),u.length>0?[p.a.createElement("h2",null,"Research"),p.a.createElement(r.a,{gutter:[20,20]},u.map((function(e,t){return p.a.createElement(o.a,{key:t,xs:24,sm:24,md:24,lg:24},p.a.createElement(x.a,{data:e,tagsMap:b}))})))]:null,s.length>0?[p.a.createElement("h2",null,"Posts"),p.a.createElement(r.a,{gutter:[20,20]},s.map((function(e,t){return p.a.createElement(o.a,{key:t,xs:24,sm:24,md:12,lg:8},p.a.createElement(v.a,{data:e,tagsMap:b}))})))]:null)))}},"8aPU":function(e,t,a){e.exports={researchCard:"researchCard-module--researchCard--3Km_A",postCardImg:"researchCard-module--postCardImg--1uwtT",mrTp20:"researchCard-module--mrTp20--19vl_",dateHolder:"researchCard-module--dateHolder--EUdSA"}},EosS:function(e,t,a){"use strict";a("Jmwx");var n=a("BMrR"),r=(a("EpIQ"),a("bx4M")),o=a("q1tI"),l=a.n(o),c=a("wd/R"),s=a.n(c),i=(a("Wbzz"),a("YwZP")),u=a("aFl2"),m=a.n(u),d=a("y6Qd"),p=a("Rt21"),f=a.n(p);t.a=function(e){var t=e.data.node,a=e.tagsMap;f.a.generateOmittedPostInfo(t);var o=t.frontmatter,c=f.a.resolvePageUrl(o.path);return l.a.createElement(r.a,{className:m.a.postCard,bodyStyle:{padding:"0.8rem"},hoverable:!0,cover:l.a.createElement("div",null,l.a.createElement("span",{className:m.a.dateHolder},o?s()(o.date).format("MMM Do YYYY"):""),l.a.createElement("div",{className:m.a.postCardImg,style:{backgroundImage:"url("+(o&&o.cover?o.cover.childImageSharp.fluid.src:"")+")"}})),onClick:function(e){"a"!==e.target.tagName.toLowerCase()&&c&&Object(i.navigate)(c)}},l.a.createElement(r.a.Meta,{title:o?o.title:"",style:{marginBottom:"1rem"}}),l.a.createElement(n.a,{align:"middle",gutter:[0,8]},o.tags.map((function(e){return a[e]?l.a.createElement(d.a,{tag:a[e]}):null}))),l.a.createElement("p",{style:{marginTop:"1rem"}},o?o.excerpt:""))}},JD84:function(e,t,a){var n=a("SKAX");e.exports=function(e,t,a,r){return n(e,(function(e,n,o){t(r,e,a(e),o)})),r}},O0oS:function(e,t,a){var n=a("Cwc5"),r=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=r},OBNy:function(e,t,a){e.exports={tagsList:"tags-module--tagsList--39vLn",bannerImgContainer:"tags-module--bannerImgContainer--24LjU",bannerImg:"tags-module--bannerImg--xzH6c"}},QVEU:function(e,t,a){var n=a("hypo"),r=a("UMY1")((function(e,t,a){n(e,a,t)}));e.exports=r},UMY1:function(e,t,a){var n=a("oMRN"),r=a("JD84"),o=a("ut/Y"),l=a("Z0cm");e.exports=function(e,t){return function(a,c){var s=l(a)?n:r,i=t?t():{};return s(a,e,o(c,2),i)}}},aFl2:function(e,t,a){e.exports={postCard:"postCard-module--postCard--3vov_",postCardImg:"postCard-module--postCardImg--yRYws",dateHolder:"postCard-module--dateHolder--k3h7B"}},hypo:function(e,t,a){var n=a("O0oS");e.exports=function(e,t,a){"__proto__"==t&&n?n(e,t,{configurable:!0,enumerable:!0,value:a,writable:!0}):e[t]=a}},k4Da:function(e,t,a){var n=a("LXxW"),r=a("n3Sm"),o=a("ut/Y"),l=a("Z0cm");e.exports=function(e,t){return(l(e)?n:r)(e,o(t,3))}},mr32:function(e,t,a){"use strict";var n=a("lSNA"),r=a.n(n),o=a("pVnL"),l=a.n(o),c=a("J4zp"),s=a.n(c),i=a("q1tI"),u=a("TSYQ"),m=a.n(u),d=a("BGR+"),p=a("V/uB"),f=a.n(p),g=a("H84U"),v=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},E=function(e){var t,a=i.useContext(g.b).getPrefixCls,n=e.prefixCls,o=e.className,c=e.checked,s=v(e,["prefixCls","className","checked"]),u=a("tag",n),d=m()(u,(t={},r()(t,"".concat(u,"-checkable"),!0),r()(t,"".concat(u,"-checkable-checked"),c),t),o);return delete s.onChange,i.createElement("span",l()({},s,{className:d,onClick:function(t){var a=e.checked,n=e.onChange,r=e.onClick;n&&n(!a),r&&r(t)}}))},b=a("09Wf"),h=a("g0mS"),y=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=new RegExp("^(".concat(b.a.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(b.b.join("|"),")$")),k=function(e,t){var a,n=e.prefixCls,o=e.className,c=e.style,u=e.children,p=e.icon,v=e.color,E=e.onClose,b=e.closeIcon,k=e.closable,O=void 0!==k&&k,w=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),I=i.useContext(g.b),N=I.getPrefixCls,P=I.direction,S=i.useState(!0),M=s()(S,2),R=M[0],Y=M[1];i.useEffect((function(){"visible"in w&&Y(w.visible)}),[w.visible]);var j=function(){return!!v&&(C.test(v)||x.test(v))},U=l()({backgroundColor:v&&!j()?v:void 0},c),T=j(),Q=N("tag",n),z=m()(Q,(a={},r()(a,"".concat(Q,"-").concat(v),T),r()(a,"".concat(Q,"-has-color"),v&&!T),r()(a,"".concat(Q,"-hidden"),!R),r()(a,"".concat(Q,"-rtl"),"rtl"===P),a),o),B=function(e){e.stopPropagation(),E&&E(e),e.defaultPrevented||"visible"in w||Y(!1)},H="onClick"in w||u&&"a"===u.type,J=Object(d.a)(w,["visible"]),L=p||null,_=L?i.createElement(i.Fragment,null,L,i.createElement("span",null,u)):u,A=i.createElement("span",l()({},J,{ref:t,className:z,style:U}),_,O?b?i.createElement("div",{className:"".concat(Q,"-close-icon"),onClick:B},b):i.createElement(f.a,{className:"".concat(Q,"-close-icon"),onClick:B}):null);return H?i.createElement(h.a,null,A):A},O=i.forwardRef(k);O.displayName="Tag",O.CheckableTag=E;t.a=O},n3Sm:function(e,t,a){var n=a("SKAX");e.exports=function(e,t){var a=[];return n(e,(function(e,n,r){t(e,n,r)&&a.push(e)})),a}},noZS:function(e,t,a){var n=a("hypo"),r=a("JC6p"),o=a("ut/Y");e.exports=function(e,t){var a={};return t=o(t,3),r(e,(function(e,r,o){n(a,r,t(e,r,o))})),a}},oMRN:function(e,t){e.exports=function(e,t,a,n){for(var r=-1,o=null==e?0:e.length;++r<o;){var l=e[r];t(n,l,a(l),e)}return n}},u3En:function(e,t,a){},y6Qd:function(e,t,a){"use strict";a("rO+z");var n=a("kPKH"),r=(a("0lcf"),a("mr32")),o=a("q1tI"),l=a.n(o);t.a=function(e){var t=e.tag,a=t.color||"",o=t.name||"";return l.a.createElement(n.a,{xs:!0},l.a.createElement(r.a,{color:a},l.a.createElement("a",{href:"/tags/"+o},"#"+o)))}}}]);
//# sourceMappingURL=component---src-templates-tags-index-jsx-496b7880da06f84af460.js.map