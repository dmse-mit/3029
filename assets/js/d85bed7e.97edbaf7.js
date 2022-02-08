"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[362],{1152:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(5861),o=n(7757),r=n.n(o),a=n(7294),c=n(9483),d=n(9669),s=n.n(d),u=n(1721),m=n(2118),l=n(6214),b=n(4639),p=function(){var e=(0,i.Z)(r().mark((function e(t){var n,i,o,a,c,d,u,m,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new RegExp(/https:\/\/github.com\/(.+?)\/(.+?)\/blob\/(.+?)\/(.+\.ipynb)/),i=t.match(n),o=i[1],a=i[2],c=i[3],d=i[4],u="https://api.github.com/repos/"+o+"/"+a+"/contents/"+d+"?ref="+c,e.next=6,s().get(u);case 6:return e.next=8,e.sent.data;case 8:return m=e.sent,r=JSON.parse((y=m.content,decodeURIComponent(atob(y).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")))),b=void 0,p=void 0,b=r.metadata,p="Wolfram Language"==b.kernelspec.language?"mathematica":b.kernelspec.language,b.kernelspec.language=p,l={cells:r.cells.map((function(e){if("markdown"==e.cell_type){var t=e.source.join("").trim().replace(/(\${1,2})((?:\\.|[\s\S])*?)\1/g,(function(e,t,n){return t+n.replace(/\r?\n/g,"")+t}));return{cell_type:e.cell_type,id:e.id,metadata:e.metadata,source:t.split(/(\r\n|\n|\r)/)}}return e})),metadata:b,nbformat:r.nbformat,nbformat_minor:r.nbformat_minor},console.log(l),e.abrupt("return",l);case 12:case"end":return e.stop()}var r,b,p,y}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){return a.createElement(u.D,{remarkPlugins:[m.Z],rehypePlugins:[l.Z],children:e.source})};function g(e){var t=e.notebookURL,n=a.useState(null),i=n[0],o=n[1];return a.useEffect((function(){p(t).then(o)}),[t]),a.createElement("div",{className:"NotebookViewer"},null===i?"Loading notebook...":a.createElement(c.Z,{source:i,code:b.Z,markdown:y}))}},2790:function(e,t,n){var i=n(5068),o=n(7294),r=n(1146),a=function(e){function t(){return e.apply(this,arguments)||this}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.embedding=(0,r.embed)(this.props.url,this.el,{allowInteract:!0,showRenderProgress:!0})},n.componentWillUnmount=function(){this.embedding.then((function(e){return e.detach()}))},n.render=function(){var e=this;return o.createElement("div",{className:"NotebookEmbed",ref:function(t){return e.el=t}})},t}(o.Component);t.Z=a},9116:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return b},metadata:function(){return p},toc:function(){return y},default:function(){return f}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=n(2790),c=n(1152),d=n(9877),s=n(8215),u=n(9960),m=["components"],l={id:"rigid-body-dymanics",sidebar_position:3,title:"(R) Rigid Body Dynamics",hide_title:!0},b=void 0,p={unversionedId:"week-01/rigid-body-dymanics",id:"week-01/rigid-body-dymanics",title:"(R) Rigid Body Dynamics",description:"<Link",source:"@site/docs/week-01/reading-rigid-body-dynamics.mdx",sourceDirName:"week-01",slug:"/week-01/rigid-body-dymanics",permalink:"/3029/docs/week-01/rigid-body-dymanics",editUrl:"https://github.com/dmse-mit/3029/edit/main/website/docs/week-01/reading-rigid-body-dynamics.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"rigid-body-dymanics",sidebar_position:3,title:"(R) Rigid Body Dynamics",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Hamiltonian Mechanics",permalink:"/3029/docs/week-01/hamiltonian-mechanics"},next:{title:"1D Lattice Dynamics",permalink:"/3029/docs/week-02/1d-lattice-dynamics"}},y=[],g={toc:y};function f(e){var t=e.components,n=(0,o.Z)(e,m);return(0,r.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(d.Z,{lazy:!0,mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"wl-ipynb",label:"Wolfram Language - Jupyter",mdxType:"TabItem"},(0,r.kt)(c.Z,{notebookURL:"https://github.com/dmse-mit/3029/blob/main/reading-notebooks/R01__rigid-body-dynamics__02-05-22.ipynb",mdxType:"NotebookViewer"})),(0,r.kt)(s.Z,{value:"wl-nb",label:"Wolfram Language",default:!0,mdxType:"TabItem"},(0,r.kt)(u.Z,{className:"button button--secondary",to:"https://raw.githubusercontent.com/dmse-mit/3029/main/reading-notebooks/R01__rigid-body-dynamics__02-05-22.nb",mdxType:"Link"},"Download Notebook!"),(0,r.kt)(a.Z,{url:"https://www.wolframcloud.com/obj/gvarnavi/Published/3029-SP22__R01__rigid-body-dynamics__02-05-22.nb",mdxType:"NotebookEmbed"}))))}f.isMDXComponent=!0}}]);