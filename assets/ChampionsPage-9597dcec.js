import{u as r,b as u,d as i,o as n,c as o,e as t,a,t as s,f as m,g as p}from"./index-3d40b7e9.js";const _={class:"min-h-screen bg-gradient-to-b from-amber-900 to-yellow-300 font-poppins"},d={key:0,class:"flex flex-col items-center justify-center gap-6"},h=["src","alt"],f={class:"text-white-800 text-6xl font-bold"},y={__name:"ChampionsPage",setup(g){const{fetchChampion:l,currentChampion:e}=p(),c=r();return u(async()=>{await l(c.params.id)}),i(()=>{e.value=null}),(v,x)=>(n(),o("main",_,[t(e)?(n(),o("div",d,[a("img",{class:"p-8 h-64 w-64",src:t(e).value.image,alt:t(e).value.name},null,8,h),a("h1",f,s(t(e).value.name),1),a("p",null,s(t(e).value.title),1),a("p",null,s(t(e).value.stats),1),a("p",null,s(t(e).value.description),1)])):m("",!0)]))}};export{y as default};