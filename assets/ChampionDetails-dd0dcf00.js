import{u as d,b as i,d as _,o as a,c as n,e,a as t,t as o,f as r,g as h}from"./index-3d40b7e9.js";const m={class:"min-h-screen bg-gray-500 py-8"},u={key:0,class:"container mx-auto max-w-3xl"},x={class:"flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg p-8 shadow-md"},p=["src","alt"],g={class:"text-center md:text-left"},f={class:"text-4xl font-bold"},b={class:"text-gray-600 text-lg"},w={class:"text-gray-600 text-lg"},y={class:"bg-white mt-8 p-6 rounded-lg shadow-md"},v={class:"mb-6"},C=t("h2",{class:"text-2xl font-bold mb-2"},"Stats",-1),D={class:"text-gray-700"},k=t("h2",{class:"text-2xl font-bold mb-2"},"Description",-1),B={class:"text-gray-700"},A={__name:"ChampionDetails",setup(I){const{fetchChampion:c,currentChampion:s}=h(),l=d();return i(async()=>{await c(l.params.id)}),_(()=>{s.value=null}),(N,S)=>(a(),n("main",m,[e(s)?(a(),n("div",u,[t("div",x,[t("img",{src:e(s).icon,alt:e(s).name,class:"h-40 w-40 rounded-full shadow-lg"},null,8,p),t("div",g,[t("h1",f,o(e(s).name),1),t("p",b,"ID: "+o(e(s).title),1),t("p",w,"Tag: "+o(e(s).tags),1)])]),t("div",y,[t("div",v,[C,t("p",D,o(e(s).stats),1)]),t("div",null,[k,t("p",B,o(e(s).description),1)])])])):r("",!0)]))}};export{A as default};
