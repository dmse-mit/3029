"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[689],{9649:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(3117),o=n(102),a=n(7294),l=n(6010),c=n(5999),i=n(6545),s="anchorWithStickyNavbar_mojV",u="anchorWithHideOnScrollNavbar_R0VQ",p=["as","id"],d=["as"];function m(e){var t,n=e.as,d=e.id,m=(0,o.Z)(e,p),y=(0,i.LU)().navbar.hideOnScroll;return d?a.createElement(n,(0,r.Z)({},m,{className:(0,l.Z)("anchor",(t={},t[u]=y,t[s]=!y,t)),id:d}),m.children,a.createElement("a",{className:"hash-link",href:"#"+d,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(n,m)}function y(e){var t=e.as,n=(0,o.Z)(e,d);return"h1"===t?a.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children):a.createElement(m,(0,r.Z)({as:t},n))}},4689:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(3117),o=n(102),a=n(7294),l=n(5742),c=n(9960),i=n(6010),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(7410).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var m=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=d({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=d({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=d({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(a.style=l.plain),void 0!==o&&(a.style=void 0!==a.style?d({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[l].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,l=d({},f(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?d({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),l=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,l=0,c=[],i=[c];l>-1;){for(;(a=r[l]++)<o[l];){var s=void 0,u=t[l],p=n[l][a];if("string"==typeof p?(u=l>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var d=s.split(m),g=d.length;c.push({types:u,content:d[0]});for(var f=1;f<g;f++)y(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),r.push(0),o.push(s.length)}l--,t.pop(),n.pop(),r.pop(),o.pop()}return y(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),k=v;var b=n(5999),E=n(6545),Z="codeBlockContainer_I0IT",T="codeBlockContent_wNvx",N="codeBlockTitle_BvAR",C="codeBlock_jd64",x="codeBlockStandalone_csWH",O="copyButton_wuS7",B="codeBlockLines_mRuA";function L(e){var t,n=e.children,o=e.className,l=void 0===o?"":o,c=e.metastring,s=e.title,p=e.language,d=(0,E.LU)().prism,m=(0,a.useState)(!1),y=m[0],h=m[1],g=(0,a.useState)(!1),f=g[0],v=g[1];(0,a.useEffect)((function(){v(!0)}),[]);var L=(0,E.bc)(c)||s,S=(0,E.pJ)();if(a.Children.toArray(n).some((function(e){return(0,a.isValidElement)(e)})))return a.createElement(k,(0,r.Z)({},u,{key:String(f),theme:S,code:"",language:"text"}),(function(e){var t=e.className,r=e.style;return a.createElement("pre",{tabIndex:0,className:(0,i.Z)(t,x,"thin-scrollbar",Z,l,E.kM.common.codeBlock),style:r},a.createElement("code",{className:B},n))}));var j=Array.isArray(n)?n.join(""):n,A=null!=(t=null!=p?p:(0,E.Vo)(l))?t:d.defaultLanguage,P=(0,E.nZ)(j,c,A),_=P.highlightLines,w=P.code,D=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}o.remove(),c&&(l.removeAllRanges(),l.addRange(c)),a&&a.focus()}(w),h(!0),setTimeout((function(){return h(!1)}),2e3)};return a.createElement(k,(0,r.Z)({},u,{key:String(f),theme:S,code:w,language:null!=A?A:"text"}),(function(e){var t,n=e.className,o=e.style,c=e.tokens,s=e.getLineProps,u=e.getTokenProps;return a.createElement("div",{className:(0,i.Z)(Z,l,(t={},t["language-"+A]=A&&!l.includes("language-"+A),t),E.kM.common.codeBlock)},L&&a.createElement("div",{style:o,className:N},L),a.createElement("div",{className:(0,i.Z)(T,A)},a.createElement("pre",{tabIndex:0,className:(0,i.Z)(n,C,"thin-scrollbar"),style:o},a.createElement("code",{className:B},c.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=s({line:e,key:t});return _.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},u({token:e,key:t})))})),a.createElement("br",null))})))),a.createElement("button",{type:"button","aria-label":(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,i.Z)(O,"clean-btn"),onClick:D},y?a.createElement(b.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(b.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var S=n(9649),j="details_BAp3";function A(e){var t=Object.assign({},e);return a.createElement(E.PO,(0,r.Z)({},t,{className:(0,i.Z)("alert alert--info",j,t.className)}))}var P=["mdxType","originalType"];var _={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,o.Z)(r,P));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(l.Z,e,t)},code:function(e){return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))?a.createElement("code",e):a.createElement(L,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t;return a.createElement(L,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(A,(0,r.Z)({},e,{summary:n}),o)},h1:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(S.Z,(0,r.Z)({as:"h6"},e))}}}}]);