import{_ as v,r as b,N as L,cm as h,o as n,c as l,a as e,b as t,w as u,G as M,j as f,F as g,z as y,t as m,e as x,cf as A,V as I,d as C}from"./entry.rlzPHxfP.js";import{_ as T}from"./nuxt-link.5Ou4o68Q.js";import{_ as S}from"./mid-screen-layout.BI0NOIAW.js";import{V as H,a as $,b as N,c as z,_ as w}from"./VExpansionPanel.R79pr7to.js";import{c as i}from"./createLucideIcon.BHezzBGY.js";import{V as P,a as j}from"./VRow.3onj4gtF.js";import{V as F}from"./VContainer.sFuYJeVI.js";import{M as B}from"./map-pin.cGS7zuFg.js";import"./index.hVmeIHWx.js";import"./lazy.ABZGGqmG.js";/* empty css              */const D={class:"hero-section"},G={__name:"hero",setup(_){const r=b(null);return L(async()=>{const o=(await h(()=>import("./leaflet-src.bV-jPPMa.js").then(c=>c.l),__vite__mapDeps([0,1,2]),import.meta.url)).default;await h(()=>Promise.resolve({}),__vite__mapDeps([3]),import.meta.url),await h(()=>import("./leaflet.markercluster-src._Mxuwm1G.js").then(c=>c.l),__vite__mapDeps([4,1,2]),import.meta.url),await h(()=>Promise.resolve({}),__vite__mapDeps([5]),import.meta.url),await h(()=>Promise.resolve({}),__vite__mapDeps([6]),import.meta.url);const s=[{name:"Adams Market",coords:[-1.30263,36.7798]},{name:"Gikomba Market",coords:[-1.2863,36.8415]},{name:"Toi Market",coords:[-1.299,36.79]},{name:"City Market",coords:[-1.2833,36.817]},{name:"Kariokor Market",coords:[-1.28123,36.83797]},{name:"Maasai Market",coords:[-1.282,36.814]},{name:"Village Market",coords:[-1.204,36.869]},{name:"Nairobi Farmers Market",coords:[-1.2082228,36.8326568]}];r.value._leaflet_id&&(r.value._leaflet_id=null);const d=o.divIcon({className:"custom-marker",html:`
      <div class="pulse-wrapper">
        <span class="pulse"></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <path fill="#d60000" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5"/>
        </svg>
      </div>
    `,iconSize:[40,40],iconAnchor:[20,40],popupAnchor:[0,-35]}),a=o.map(r.value).setView([-1.286389,36.817223],13);o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(a);const p=o.markerClusterGroup({maxClusterRadius:50,showCoverageOnHover:!1,spiderfyOnEveryZoom:!0,animate:!1});s.forEach(c=>{const k=o.marker(c.coords,{icon:d});k.bindPopup(`<strong>${c.name}</strong>`),p.addLayer(k)}),a.addLayer(p),window.addEventListener("resize",()=>a.invalidateSize())}),(o,s)=>(n(),l("section",D,[e("div",{ref_key:"mapContainer",ref:r,class:"map-container"},null,512)]))}},K=v(G,[["__scopeId","data-v-3e87a40c"]]),V=""+new URL("white.t4d_yH_Z.png",import.meta.url).href,O={class:"px-4 px-md-0"},R={class:"market-grid"},Z={class:"content"},q={class:"text-subtitle-2"},U={class:"text-caption text-grey-lighten-1"},W={__name:"MarketCard",setup(_){const r=[{name:"Adams Market",description:"Fresh produce",link:"#"},{name:"Gikomba Market",description:"Second-hand goods",link:"#"},{name:"Toi Market",description:"Local crafts",link:"#"},{name:"City Market",description:"Tourist crafts",link:"#"},{name:"Kariokor Market",description:"Traditional items",link:"#"},{name:"Maasai Market",description:"Art & jewelry",link:"#"},{name:"Village Market",description:"Modern shopping",link:"#"},{name:"Nairobi Farmers Market",description:"Organic produce",link:"#"}];return(o,s)=>{const d=T,a=S;return n(),l("div",O,[t(a,null,{default:u(()=>[e("section",{class:"market-grid-section py-10",style:M({backgroundImage:`url(${f(V)})`,backgroundSize:"cover",backgroundPosition:"center"})},[e("div",R,[(n(),l(g,null,y(r,(p,c)=>t(d,{key:c,to:{name:"shop"},class:"market-card group",style:{backgroundImage:"url('/Smartsell Logo.jpeg')"}},{default:u(()=>[s[0]||(s[0]=e("div",{class:"overlay"},null,-1)),e("div",Z,[e("div",q,[e("span",null,m(p.name),1)]),e("div",U,[e("span",null,m(p.description),1)])])]),_:2},1024)),64))])],4)]),_:1})])}}},J=v(W,[["__scopeId","data-v-dc0e5e13"]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=i("camera",[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=i("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=i("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=i("dollar-sign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=i("footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=i("gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=i("info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=i("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=i("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=i("shopping-bag",[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=i("trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=i("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]);/**
 * @license lucide-vue-next v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=i("utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]),le={class:"font-medium text-body-2 ml-3"},de={__name:"TipsGuide",setup(_){const r=b([{title:"How to bargain at Nairobi markets?",content:"Start lower than the asking price, keep a smile, and stay polite. Bargaining is part of the culture.",icon:E},{title:"What’s the best time to shop?",content:"Morning hours are best ,vendors are fresh, and prices are often lower at the start of the day.",icon:X},{title:"How do I stay safe?",content:"Keep valuables secure, avoid carrying large amounts of cash, and always stay aware of your surroundings.",icon:ne},{title:"Which market is best for souvenirs?",content:"The Maasai Market is famous for beadwork, jewelry, and authentic African crafts perfect for gifts.",icon:ae},{title:"How do I get around the markets?",content:"Walking is easiest inside markets. For larger areas, consider boda bodas (motorbikes) or matatus (minibuses).",icon:se},{title:"How much should I budget?",content:"It depends on what you’re buying. Small souvenirs start at Kes200–Kes500, while fabrics and art may cost more.",icon:ee},{title:"Are markets crowded?",content:"Yes, especially weekends. Visit weekdays if you prefer fewer crowds and a calmer shopping experience.",icon:re},{title:"Do vendors speak English?",content:"Most vendors speak English and Swahili. A few words of Swahili will make your shopping experience warmer.",icon:oe}]);return(o,s)=>{const d=w;return n(),l("section",{class:"w-full py-12",style:M({backgroundImage:`url(${f(V)})`,backgroundSize:"cover",backgroundPosition:"center"})},[t(d,{title:"Tips & Visitor Guide"}),t(F,{class:"mx-auto",style:{"max-width":"1300px"}},{default:u(()=>[t(P,{justify:"center"},{default:u(()=>[t(j,{cols:"12",sm:"10",md:"8"},{default:u(()=>[t(H,{multiple:"","bg-color":"transparent",flat:"",class:"rounded-lg"},{default:u(()=>[(n(!0),l(g,null,y(r.value,(a,p)=>(n(),x($,{key:p,class:"rounded-lg",elevation:0},{default:u(()=>[t(N,{class:""},{default:u(()=>[(n(),x(A(a.icon),{class:"text-secondary",style:{opacity:"0.7"},size:"15"})),e("b",le,m(a.title),1)]),_:2},1024),t(z,{class:"text-caption"},{default:u(()=>[e("span",null,m(a.content),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})],4)}}},pe=de,ue={class:"bg-gray-50 py-16 px-6 text-center rounded-2xl shadow-md text-body-1"},me={class:"mt-8 flex justify-center"},_e={__name:"vendor-signup",setup(_){return(r,o)=>{const s=w,d=T;return n(),l("section",{style:M({backgroundImage:`url(${f(V)})`,backgroundSize:"cover",backgroundPosition:"center"})},[e("div",ue,[t(s,{title:"Join Nairobi Markets"}),o[1]||(o[1]=e("p",{class:"mt-4 mx-auto"}," Create your business account and start showcasing your products today. ",-1)),e("div",me,[t(d,{to:"/create-business-account"},{default:u(()=>[t(I,{color:"primary",size:"large",flat:"",class:"rounded-xl px-10 text-lg font-semibold text-capitalize text-subtitle-1"},{default:u(()=>[...o[0]||(o[0]=[C(" Become a vendor ",-1)])]),_:1})]),_:1})])])],4)}}},he=v(_e,[["__scopeId","data-v-4a813077"]]),ke={class:"py-12 position-relative",style:{isolation:"isolate"}},ge={class:"w-full bg-transparent"},ye={class:"max-w-6xl mx-auto px-6 text-center"},ve={class:"trails-grid mt-8"},fe={class:"trail-title"},xe={class:"trail-description"},be={class:"trail-meta"},Me={class:"duration"},we={class:"highlights"},Ve={__name:"Trails",setup(_){const r=b([{title:"Cultural Shopping Trail",icon:E,description:"Explore Nairobi's famous local markets including Gikomba, Maasai Market, and Toi Market.",duration:"Half-day",highlights:["Handicrafts","Textiles","Local souvenirs"]},{title:"Historical & City Landmarks",icon:Y,description:"A walking trail covering City Market, Kenyatta Avenue, and key Nairobi landmarks.",duration:"2-3 hours",highlights:["Architecture","Street food","Photo spots"]},{title:"Food & Flavors Experience",icon:ce,description:"Discover Nairobi Farmers Market and try out authentic Kenyan cuisine.",duration:"Half-day",highlights:["Local delicacies","Fresh produce","Street vendors"]},{title:"Hidden Gems Trail",icon:te,description:"Visit lesser-known local spots around Kariokor and Adams Market for unique finds.",duration:"Half-day",highlights:["Community vibe","Handmade goods","Affordable shopping"]},{title:"Green Escape Trail",icon:ie,description:"Balance your market visits with a relaxing walk in Nairobi’s green spaces like Uhuru Park and Karura Forest.",duration:"3-4 hours",highlights:["Nature walks","Picnic spots","Bird watching"]},{title:"Night Market Adventure",icon:B,description:"Experience the vibrant Nairobi nightlife at bustling evening markets and street food stalls.",duration:"Evening",highlights:["Street food","Night shopping","Music & vibe"]}]);return(o,s)=>{const d=w;return n(),l("div",ke,[s[1]||(s[1]=e("div",{class:"position-absolute w-100 h-100",style:{backgroundImage:"url(/images/cover-image.svg)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:-1,opacity:.2}},null,-1)),e("div",ge,[e("div",ye,[t(d,{title:"Suggested Trails & Visits"}),s[0]||(s[0]=e("p",{class:"text-body-1"}," Discover curated trails and visit recommendations to explore Nairobi’s vibrant markets and culture. ",-1)),e("div",ve,[(n(!0),l(g,null,y(r.value,(a,p)=>(n(),l("div",{key:p,class:"trail-card"},[(n(),x(A(a.icon),{class:"trail-icon"})),e("h2",fe,m(a.title),1),e("p",xe,m(a.description),1),e("div",be,[e("span",Me,"⏱ "+m(a.duration),1),e("ul",we,[(n(!0),l(g,null,y(a.highlights,(c,k)=>(n(),l("li",{key:k,class:"highlight-item"},[t(f(Q),{size:"18",color:"#032F46"}),C(" "+m(c),1)]))),128))])])]))),128))])])])])}}},Ae=v(Ve,[["__scopeId","data-v-24294866"]]),je={__name:"index",setup(_){return(r,o)=>{const s=K,d=J,a=pe,p=he,c=Ae;return n(),l("div",null,[t(s),t(d),t(a),t(p),t(c)])}}};export{je as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./leaflet-src.bV-jPPMa.js","./entry.rlzPHxfP.js","./entry.bW3t2lMJ.css","./leaflet.IchXY3R4.css","./leaflet.markercluster-src._Mxuwm1G.js","./MarkerCluster.3yZOWVXt.css","./MarkerCluster.aIFd_bAH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
