"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[449],{5622:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return v}});var a=n(7462),r=n(3366),i=n(7294),o=n(3905),l=(n(2790),n(8306),n(2543));function c(e,t){const n=e.module();return n.variable(t()).define(["md"],(function(e){return e`# Color Legend

A simple legend for a [color scale](/@d3/color-schemes). Supports [continuous](/@d3/continuous-scales), [sequential](/@d3/sequential-scales), [diverging](/@d3/diverging-scales), [quantize, quantile, threshold](/@d3/quantile-quantize-and-threshold-scales) and [ordinal](/@d3/d3-scaleordinal) scales. To use:

~~~js
import {Legend, Swatches} from "@d3/color-legend"
~~~

Then call the legend function as shown below. (For ordinal scales, also consider the swatches function.)`})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleSequential([0,100],t.interpolateViridis),{title:"Temperature (\xb0F)"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleSequentialSqrt([0,1],t.interpolateTurbo),{title:"Speed (kts)"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleDiverging([-.1,0,.1],t.interpolatePiYG),{title:"Daily change",tickFormat:"+%"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleDivergingSqrt([-.1,0,.1],t.interpolateRdBu),{title:"Daily change",tickFormat:"+%"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleSequentialLog([1,100],t.interpolateBlues),{title:"Energy (joules)",ticks:10})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleSequentialQuantile(t.range(100).map((()=>Math.random()**2)),t.interpolateBlues),{title:"Quantile",tickFormat:".2f"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleSqrt([-100,0,100],["blue","white","red"]),{title:"Temperature (\xb0C)"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleQuantize([1,10],t.schemePurples[9]),{title:"Unemployment rate (%)"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleQuantile(t.range(1e3).map(t.randomNormal(100,20)),t.schemeSpectral[9]),{title:"Height (cm)",tickFormat:".0f"})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleThreshold([2.5,3.1,3.5,3.9,6,7,8,9.5],t.schemeRdBu[9]),{title:"Unemployment rate (%)",tickSize:0})})),n.variable(t()).define(["Legend","d3"],(function(e,t){return e(t.scaleOrdinal(["<10","10-19","20-29","30-39","40-49","50-59","60-69","70-79","\u226580"],t.schemeSpectral[10]),{title:"Age (years)",tickSize:0})})),n.variable(t()).define(["md"],(function(e){return e`But wait, there’s more!

How about swatches for ordinal color scales? Both variable-width swatches and [column layout](https://developer.mozilla.org/en-US/docs/Web/CSS/columns) are supported.`})),n.variable(t()).define(["Swatches","d3"],(function(e,t){return e(t.scaleOrdinal(["blueberries","oranges","apples"],t.schemeCategory10))})),n.variable(t()).define(["Swatches","d3"],(function(e,t){return e(t.scaleOrdinal(["Wholesale and Retail Trade","Manufacturing","Leisure and hospitality","Business services","Construction","Education and Health","Government","Finance","Self-employed","Other"],t.schemeTableau10),{columns:"180px"})})),n.variable(t()).define(["md"],(function(e){return e`---

## Implementation`})),n.variable(t("Legend")).define("Legend",["d3"],(function(e){return function(t,{title:n,tickSize:a=6,width:r=320,height:i=44+a,marginTop:o=18,marginRight:l=0,marginBottom:c=16+a,marginLeft:s=0,ticks:d=r/64,tickFormat:u,tickValues:m}={}){function f(e,t=256){const n=document.createElement("canvas");n.width=t,n.height=1;const a=n.getContext("2d");for(let r=0;r<t;++r)a.fillStyle=e(r/(t-1)),a.fillRect(r,0,1,1);return n}const p=e.create("svg").attr("width",r).attr("height",i).attr("viewBox",[0,0,r,i]).style("overflow","visible").style("display","block");let g,h=e=>e.selectAll(".tick line").attr("y1",o+c-i);if(t.interpolate){const n=Math.min(t.domain().length,t.range().length);g=t.copy().rangeRound(e.quantize(e.interpolate(s,r-l),n)),p.append("image").attr("x",s).attr("y",o).attr("width",r-s-l).attr("height",i-o-c).attr("preserveAspectRatio","none").attr("xlink:href",f(t.copy().domain(e.quantize(e.interpolate(0,1),n))).toDataURL())}else if(t.interpolator){if(g=Object.assign(t.copy().interpolator(e.interpolateRound(s,r-l)),{range:()=>[s,r-l]}),p.append("image").attr("x",s).attr("y",o).attr("width",r-s-l).attr("height",i-o-c).attr("preserveAspectRatio","none").attr("xlink:href",f(t.interpolator()).toDataURL()),!g.ticks){if(void 0===m){const n=Math.round(d+1);m=e.range(n).map((a=>e.quantile(t.domain(),a/(n-1))))}"function"!=typeof u&&(u=e.format(void 0===u?",f":u))}}else if(t.invertExtent){const n=t.thresholds?t.thresholds():t.quantiles?t.quantiles():t.domain(),a=void 0===u?e=>e:"string"==typeof u?e.format(u):u;g=e.scaleLinear().domain([-1,t.range().length-1]).rangeRound([s,r-l]),p.append("g").selectAll("rect").data(t.range()).join("rect").attr("x",((e,t)=>g(t-1))).attr("y",o).attr("width",((e,t)=>g(t)-g(t-1))).attr("height",i-o-c).attr("fill",(e=>e)),m=e.range(n.length),u=e=>a(n[e],e)}else g=e.scaleBand().domain(t.domain()).rangeRound([s,r-l]),p.append("g").selectAll("rect").data(t.domain()).join("rect").attr("x",g).attr("y",o).attr("width",Math.max(0,g.bandwidth()-1)).attr("height",i-o-c).attr("fill",t),h=()=>{};return p.append("g").attr("transform",`translate(0,${i-c})`).call(e.axisBottom(g).ticks(d,"string"==typeof u?u:void 0).tickFormat("function"==typeof u?u:void 0).tickSize(a).tickValues(m)).call(h).call((e=>e.select(".domain").remove())).call((e=>e.append("text").attr("x",s).attr("y",o+c-i-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").attr("class","title").text(n))),p.node()}})),n.variable(t("legend")).define("legend",["Legend"],(function(e){return function({color:t,...n}){return e(t,n)}})),n.variable(t("Swatches")).define("Swatches",["d3","htl"],(function(e,t){return function(n,{columns:a=null,format:r,unknown:i,swatchSize:o=15,swatchWidth:l=o,swatchHeight:c=o,marginLeft:s=0}={}){const d=`-swatches-${Math.random().toString(16).slice(2)}`,u=null==i?void 0:n.unknown(),m=null==u||u===e.scaleImplicit?[]:[u],f=n.domain().concat(m);return void 0===r&&(r=e=>e===u?i:e),null!==a?t.html`<div style="display: flex; align-items: center; margin-left: ${+s}px; min-height: 33px; font: 10px sans-serif;">
  <style>

.${d}-item {
  break-inside: avoid;
  display: flex;
  align-items: center;
  padding-bottom: 1px;
}

.${d}-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - ${+l}px - 0.5em);
}

.${d}-swatch {
  width: ${+l}px;
  height: ${+c}px;
  margin: 0 0.5em 0 0;
}

  </style>
  <div style=${{width:"100%",columns:a}}>${f.map((e=>{const a=`${r(e)}`;return t.html`<div class=${d}-item>
      <div class=${d}-swatch style=${{background:n(e)}}></div>
      <div class=${d}-label title=${a}>${a}</div>
    </div>`}))}
  </div>
</div>`:t.html`<div style="display: flex; align-items: center; min-height: 33px; margin-left: ${+s}px; font: 10px sans-serif;">
  <style>

.${d} {
  display: inline-flex;
  align-items: center;
  margin-right: 1em;
}

.${d}::before {
  content: "";
  width: ${+l}px;
  height: ${+c}px;
  margin-right: 0.5em;
  background: var(--color);
}

  </style>
  <div>${f.map((e=>t.html`<span class="${d}" style="--color: ${n(e)}">${r(e)}</span>`))}</div>`}})),n.variable(t("swatches")).define("swatches",["Swatches"],(function(e){return function({color:t,...n}){return e(t,n)}})),n}function s(e,t){const n=e.module();n.variable(t()).define(["md"],(function(e){return e`# Molecular Dynamics - 3.001 Demo
#### Georgios Varnavides, Amina Matt, Craig Carter`})),n.variable(t()).define(["md"],(function(e){return e`## Compression Waves
We'll continue our exploration by looking at stable hexagonal close-packed lattices.
In particular, we'll focus on a rotating nanoparticle.

Let's start our nanoparticle spinning at a slow* rate.
Try running the animation below, and notice the compression waves which form as the particle spins.

*Under normal conditions, most particles would not spin this fast - but we're exploring the physics here, and it helps to exaggerate.`})),n.variable(t("viewof restart_button_hexagonal")).define("viewof restart_button_hexagonal",["Inputs"],(function(e){return e.button("(re)Start Simulation")})),n.variable(t("restart_button_hexagonal")).define("restart_button_hexagonal",["Generators","viewof restart_button_hexagonal"],((e,t)=>e.input(t))),n.variable(t("compression_waves_animation")).define("compression_waves_animation",["d3","DOM","chart_param","hexagonal_lattice","restart_button_hexagonal","draw_nodes","colorScale","drag","invalidation"],(function(e,t,n,a,r,i,o,l,c){const s=e.select(t.svg(n.width,n.height)),d=a.map((e=>Object.create(e))),u=r;s.attr("viewBox",[-12.5,-12.5,25,25]);const m=e.forceSimulation(d).force("lennard-jones-BH",e.forceLennardJonesPotential().theta(.125).distanceMax(1.75)).alphaDecay(0).velocityDecay(0).dt(.05);m.counter=0;const[f,p]=i(s,d,null,!1,!1,o);return f.call(l(m)),m.on("tick",(()=>{(m.counter++>250||0==u)&&m.stop(),f.attr("cx",(e=>e.x)).attr("cy",(e=>e.y)).attr("fill",(e=>o(e.energy)))})),c.then((()=>m.stop())),s.node()})),n.variable(t()).define(["legend","colorScale","chart_param"],(function(e,t,n){return e({color:t,title:"Lennard-Jones energy 2D",width:n.width/2})})),n.variable(t("viewof nanoparticle_initial_velocity_magnitude")).define("viewof nanoparticle_initial_velocity_magnitude",["Inputs"],(function(e){return e.range([.25,.325],{step:.0125,label:"Nanoparticle Initial Velocity",value:.25})})),n.variable(t("nanoparticle_initial_velocity_magnitude")).define("nanoparticle_initial_velocity_magnitude",["Generators","viewof nanoparticle_initial_velocity_magnitude"],((e,t)=>e.input(t))),n.variable(t()).define(["md"],(function(e){return e`Let's crank up the initial rotation speed to see how the forces 'rip' the particle apart.

You might notice the end result no-longer has six-fold symmetry.

__Note:__ The simulation above is interactive!  
Try running the simulation again and dragging one of the atoms (ever so slightly, closed-packed particles experience high forces!)`})),n.variable(t()).define(["md"],(function(e){return e`## Playground
Your turn!  

Use the canvas to below to draw a particle shape by clicking to add vertices.
Once you're satisfied with your shape, scroll down to play around with your particle by dragging some of the atoms.  

Have fun!`})),n.variable(t("viewof restart")).define("viewof restart",["Inputs"],(function(e){return e.button("Clear Drawing")})),n.variable(t("restart")).define("restart",["Generators","viewof restart"],((e,t)=>e.input(t))),n.variable(t("playground_canvas")).define("playground_canvas",["restart","mutable polygon_mutable","d3","DOM","chart_param"],(function(e,t,n,a,r){let i=[];t.value=[];const o=n.select(a.svg(r.width/2,r.height/2)),l=r.height/r.width;o.attr("viewBox",[-10.5,-10.5,21,21]);o.append("rect").attr("x",-10.5/l).attr("y",-10.5).attr("width",21/l).attr("height",21).on("mousemove",(function(e){const t=o.selectAll(".tracker").data([n.pointer(e)]);if(t.enter().append("circle").attr("class","tracker").attr("r",.25).attr("stroke-width",.05).merge(t).attr("transform",(e=>`translate(${e})`)),i.length){const t=i.slice();t.push(n.pointer(e)),t.push(i[0]);const a=o.selectAll(".polyline").data([t]);a.enter().append("polygon").attr("class","polyline").attr("stroke-width",.1).merge(a).attr("points",(e=>e.join(" ")))}})).on("click",(function(e){i.push(n.pointer(e)),t.value=[...i,n.pointer(e)];const a=o.selectAll(".vertex").data(i);a.enter().append("circle").attr("class","vertex").attr("r",.25).attr("stroke-width",.05).merge(a).attr("transform",(e=>`translate(${e})`));const r=o.selectAll(".polygon").data([i]);r.enter().append("polygon").attr("class","polygon").merge(r).attr("stroke-width",.1).attr("points",(e=>e.join(" ")))}));return o.node()})),n.variable(t("viewof restart_button_polygon")).define("viewof restart_button_polygon",["Inputs"],(function(e){return e.button("(re)Start Simulation")})),n.variable(t("restart_button_polygon")).define("restart_button_polygon",["Generators","viewof restart_button_polygon"],((e,t)=>e.input(t))),n.variable(t("playground_animation")).define("playground_animation",["d3","DOM","chart_param","large_hexagonal_lattice","geometric","polygon_mutable","restart_button_polygon","draw_nodes","colorScale","drag","invalidation"],(function(e,t,n,a,r,i,o,l,c,s,d){const u=e.select(t.svg(n.width,n.height)),m=a.map((e=>Object.create(e))).filter((e=>r.pointInPolygon([e.x,e.y],i)));u.attr("viewBox",[-10.5,-10.5,21,21]);const f=e.forceSimulation(m).force("lennard-jones-BH",e.forceLennardJonesPotential().theta(.125).distanceMax(1.5)).alphaDecay(0).velocityDecay(0).dt(.05).tick();f.counter=0;const[p,g]=l(u,m,null,!1,!1,c);return p.call(s(f)),f.on("tick",(()=>{f.counter++>500&&f.stop(),p.attr("cx",(e=>e.x)).attr("cy",(e=>e.y)).attr("fill",(e=>c(e.energy)))})),d.then((()=>f.stop())),u.node()})),n.variable(t()).define(["md"],(function(e){return e`---

---

---
`})),n.variable(t()).define(["md"],(function(e){return e`## Utility Functions`})),n.variable(t("d3")).define("d3",["require"],(function(e){return e("d3@6","d3-force-md@2.2.2")})),n.variable(t("geometric")).define("geometric",["require"],(function(e){return e("geometric@2")}));const a=e.module(c);return n.import("legend",a),n.variable(t("calc_squared_distance")).define("calc_squared_distance",(function(){return(e,t)=>e.reduce(((e,n,a)=>e+Math.pow(n-t[a],2)),0)})),n.variable(t("hexagonal_lattice_vectors")).define("hexagonal_lattice_vectors",(function(){return[[1,0],[.5,Math.sqrt(3)/2]]})),n.variable(t("hexagonal_lattice")).define("hexagonal_lattice",["hexagonal_lattice_vectors","calc_squared_distance","nanoparticle_initial_velocity_magnitude"],(function(e,t,n){return[...Array(625)].map(((e,t)=>({x:t%25-12,y:Math.floor(t/25)-12}))).map((t=>({x:t.x*e[0][0]+t.y*e[1][0],y:t.x*e[0][1]+t.y*e[1][1]}))).filter((e=>t([e.x,e.y],[0,0])<100)).map((e=>({...e,vx:n*Math.sqrt(t([e.x,e.y],[0,0]))*Math.cos(Math.atan2(e.y,e.x)+Math.PI/2),vy:n*Math.sqrt(t([e.x,e.y],[0,0]))*Math.sin(Math.atan2(e.y,e.x)+Math.PI/2)})))})),n.variable(t("inside_range")).define("inside_range",(function(){return(e,t=.0175)=>Math.abs(e)<t?e:Math.sign(e)*t})),n.variable(t("drag")).define("drag",["inside_range","d3"],(function(e,t){return(n,a=.0175)=>t.drag().on("start",(function(e){e.active||(n.restart(),n.counter=100),e.subject.fx=e.subject.x,e.subject.fy=e.subject.y})).on("drag",(function(t){t.subject.fx+=e(t.x-t.subject.fx,a),t.subject.fy+=e(t.y-t.subject.fy,a)})).on("end",(function(e){e.subject.fx=null,e.subject.fy=null}))})),n.variable(t("chart_param")).define("chart_param",(function(){return{width:900,height:500,margin:{top:10,right:10,bottom:10,left:10,center:150}}})),n.variable(t("draw_nodes")).define("draw_nodes",(function(){return(e,t,n,a,r,i)=>{null==i&&(i=e=>null);let o=null;n&&(o=e.selectAll(".edge").data(n).enter().append("line").classed("edge",!0).attr("x1",(e=>t[e.source].x)).attr("y1",(e=>t[e.source].y)).attr("x2",(e=>t[e.target].x)).attr("y2",(e=>t[e.target].y)).style("stroke",r?"#bbb":"none"));return[e.selectAll(".node").data(t).enter().append("circle").classed("node",!0).attr("cx",(e=>e.x)).attr("cy",(e=>e.y)).attr("fill",(e=>i(e.energy))).attr("r",(e=>a?e.r:.5)),o]}})),n.variable(t("colorScale")).define("colorScale",["d3"],(function(e){return e.scaleSequential(e.interpolateTurbo).domain([-7,-2])})),n.define("initial polygon_mutable",(function(){return[]})),n.variable(t("mutable polygon_mutable")).define("mutable polygon_mutable",["Mutable","initial polygon_mutable"],((e,t)=>new e(t))),n.variable(t("polygon_mutable")).define("polygon_mutable",["mutable polygon_mutable"],(e=>e.generator)),n.variable(t()).define(["html"],(function(e){return e`<style>
rect {
  fill: #f5f5f5;
}
.polyline {
  fill: none;
  pointer-events: none;
  stroke: #000;
  stroke-dasharray: 2.5, 2.5;
}
.polygon {
  fill: none;
  pointer-events: none;
  stroke: #000;
}
.tracker {
  fill: none;
  stroke: #000;
}
</style>
`})),n.variable(t("large_hexagonal_lattice")).define("large_hexagonal_lattice",["hexagonal_lattice_vectors"],(function(e){return[...Array(1681)].map(((e,t)=>({x:t%41-20,y:Math.floor(t/41)-20}))).map((t=>({x:t.x*e[0][0]+t.y*e[1][0],y:t.x*e[0][1]+t.y*e[1][1]}))).filter((e=>e.x>-10&&e.x<10&&e.y>-10&&e.y<10))})),n}var d=function(){var e=(0,i.useRef)();return(0,i.useEffect)((function(){var t=new l.r_;return t.module(s,l.lj.into(e.current)),function(){return t.dispose()}}),[]),i.createElement(i.Fragment,null,i.createElement("div",{ref:e}),i.createElement("p",null,"Credit: ",i.createElement("a",{href:"https://observablehq.com/@gvarnavi/molecular-dynamics-lj"},"Molecular Dynamics - 3.001 Demo by Georgios Varnavides")))},u=n(9877),m=n(8215),f=["components"],p={id:"molecular-dynamics-lj",sidebar_position:4,title:"Molecular Dynamics",hide_title:!0},g=void 0,h={unversionedId:"demo/molecular-dynamics-lj",id:"demo/molecular-dynamics-lj",title:"Molecular Dynamics",description:"",source:"@site/docs/3001-demo/molecular-dynamics.mdx",sourceDirName:"3001-demo",slug:"/demo/molecular-dynamics-lj",permalink:"/3029/docs/demo/molecular-dynamics-lj",editUrl:"https://github.com/dmse-mit/3029/edit/main/website/docs/3001-demo/molecular-dynamics.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"molecular-dynamics-lj",sidebar_position:4,title:"Molecular Dynamics",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Surface Energy",permalink:"/3029/docs/demo/surface-energy-lj"}},v=[],y={toc:v};function b(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{lazy:!0,mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"observable",label:"JS - Observable",default:!0,mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"MolecularDynamicsLj"}))))}b.isMDXComponent=!0}}]);