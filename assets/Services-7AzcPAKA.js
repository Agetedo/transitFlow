import{j as s,b as f}from"./index-CocXBAyv.js";import{H as p}from"./Header-BTedacgx.js";import{H as x}from"./Heading-D4XBYcOR.js";import{W as h}from"./WeDo-DlBIjaEe.js";import{e as u,a as j,b as S,O as y}from"./OurVision-CBmlEJVt.js";import{C as v}from"./ClientsGallery-Bt4gtw1f.js";import{g as w,S as T,a as b}from"./swiper-Cnow48ll.js";import{A as G}from"./autoplay-Cqkr8rVl.js";import{T as E}from"./TitleCenter-CXuePO26.js";import{T as A}from"./Testimonials-DfjzbBHS.js";import{W as N}from"./WhyUsIndicators-D7XlzxZJ.js";import"./TitleLeft-i9-_1WTM.js";import"./keyboard-CIYSSCju.js";function k(o){let{swiper:e,extendParams:c,on:g}=o;c({fadeEffect:{crossFade:!1}}),u({effect:"fade",swiper:e,on:g,setTranslate:()=>{const{slides:a}=e,i=e.params.fadeEffect;for(let t=0;t<a.length;t+=1){const r=e.slides[t];let n=-r.swiperSlideOffset;e.params.virtualTranslate||(n-=e.translate);let l=0;e.isHorizontal()||(l=n,n=0);const m=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(r.progress),0):1+Math.min(Math.max(r.progress,-1),0),d=j(i,r);d.style.opacity=m,d.style.transform=`translate3d(${n}px, ${l}px, 0px)`}},setTransition:a=>{const i=e.slides.map(t=>w(t));i.forEach(t=>{t.style.transitionDuration=`${a}ms`}),S({swiper:e,duration:a,transformElements:i,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}const W=[{id:"gdGlr01",imgSrc:"/goodness-image01.jpeg",imageAlt:"Man in uniform holding cardboard box"},{id:"gdGlr02",imgSrc:"/goodness-image02.jpg",imageAlt:"Woman in overalls in a warehouse"},{id:"gdGlr03",imgSrc:"/goodness-image03.jpg",imageAlt:"Truck and plane"}],L=[{id:"gdSh01",imgSrc:"/box-icon.png",imgAlt:"Box icon",caption:"Warehousing Services",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"},{id:"gdSh02",imgSrc:"/sheild-icon.png",imgAlt:"Sheild icon",caption:"Safety & Quality",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"},{id:"gdSh03",imgSrc:"/tree-icon.png",imgAlt:"Tree icon",caption:"Care for Environment",text:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"}];function O(){const o=W.map(e=>s.jsx(T,{className:"goodness-slide",children:s.jsx("img",{className:"goodness-image",src:e.imgSrc,alt:e.imageAlt})},e.id));return s.jsx(b,{modules:[k,G],id:"goodnessGallery",slidesPerView:1,spaceBetween:0,effect:"fade",loop:!0,speed:1e3,autoplay:{delay:1500,disableOnInteraction:!1},children:o})}const H=L.map(o=>s.jsxs("div",{className:"goodness-showing",children:[s.jsx("img",{src:o.imgSrc,alt:o.imgAlt}),s.jsxs("section",{className:"goodness-showing__text",children:[s.jsx("h3",{children:o.caption}),s.jsx("p",{children:o.text})]})]},o.id));function M(){return s.jsxs("div",{className:"goodness__items",children:[s.jsx(O,{}),s.jsx("div",{className:"goodness-list",children:H})]})}function P(){return s.jsxs(f,{className:"goodness",children:[s.jsx(E,{caption:"Our Goodness",title:"How We Works"}),s.jsx(M,{})]})}function Y(){return s.jsxs(s.Fragment,{children:[s.jsx(p,{}),s.jsx(x,{className:"heading",imageUrl:"/services-heading-bg.jpeg",caption:"Services",title:"Our Logistics Service"}),s.jsx(h,{className:"we-do"}),s.jsx(y,{}),s.jsx(v,{}),s.jsx(P,{}),s.jsx(A,{}),s.jsx(N,{})]})}export{Y as default};