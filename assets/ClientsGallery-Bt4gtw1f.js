import{j as c,L,b as V}from"./index-CocXBAyv.js";import{n as v,e as M,S as D,a as R}from"./swiper-Cnow48ll.js";import{K as N}from"./keyboard-CIYSSCju.js";import{A as _}from"./autoplay-Cqkr8rVl.js";function C(p){let{swiper:e,extendParams:S,emit:d,once:x}=p;S({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function k(){if(e.params.cssMode)return;const s=e.getTranslate();e.setTranslate(s),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function j(){if(e.params.cssMode)return;const{touchEventsData:s,touches:m}=e;s.velocities.length===0&&s.velocities.push({position:m[e.isHorizontal()?"startX":"startY"],time:s.touchStartTime}),s.velocities.push({position:m[e.isHorizontal()?"currentX":"currentY"],time:v()})}function b(s){let{currentPos:m}=s;if(e.params.cssMode)return;const{params:o,wrapperEl:f,rtlTranslate:T,snapGrid:l,touchEventsData:a}=e,P=v()-a.touchStartTime;if(m<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(m>-e.maxTranslate()){e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);return}if(o.freeMode.momentum){if(a.velocities.length>1){const i=a.velocities.pop(),n=a.velocities.pop(),B=i.position-n.position,y=i.time-n.time;e.velocity=B/y,e.velocity/=2,Math.abs(e.velocity)<o.freeMode.minimumVelocity&&(e.velocity=0),(y>150||v()-i.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=o.freeMode.momentumVelocityRatio,a.velocities.length=0;let r=1e3*o.freeMode.momentumRatio;const E=e.velocity*r;let t=e.translate+E;T&&(t=-t);let h=!1,u;const g=Math.abs(e.velocity)*20*o.freeMode.momentumBounceRatio;let w;if(t<e.maxTranslate())o.freeMode.momentumBounce?(t+e.maxTranslate()<-g&&(t=e.maxTranslate()-g),u=e.maxTranslate(),h=!0,a.allowMomentumBounce=!0):t=e.maxTranslate(),o.loop&&o.centeredSlides&&(w=!0);else if(t>e.minTranslate())o.freeMode.momentumBounce?(t-e.minTranslate()>g&&(t=e.minTranslate()+g),u=e.minTranslate(),h=!0,a.allowMomentumBounce=!0):t=e.minTranslate(),o.loop&&o.centeredSlides&&(w=!0);else if(o.freeMode.sticky){let i;for(let n=0;n<l.length;n+=1)if(l[n]>-t){i=n;break}Math.abs(l[i]-t)<Math.abs(l[i-1]-t)||e.swipeDirection==="next"?t=l[i]:t=l[i-1],t=-t}if(w&&x("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(T?r=Math.abs((-t-e.translate)/e.velocity):r=Math.abs((t-e.translate)/e.velocity),o.freeMode.sticky){const i=Math.abs((T?-t:t)-e.translate),n=e.slidesSizesGrid[e.activeIndex];i<n?r=o.speed:i<2*n?r=o.speed*1.5:r=o.speed*2.5}}else if(o.freeMode.sticky){e.slideToClosest();return}o.freeMode.momentumBounce&&h?(e.updateProgress(u),e.setTransition(r),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating=!0,M(f,()=>{!e||e.destroyed||!a.allowMomentumBounce||(d("momentumBounce"),e.setTransition(o.speed),setTimeout(()=>{e.setTranslate(u),M(f,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(d("_freeModeNoMomentumRelease"),e.updateProgress(t),e.setTransition(r),e.setTranslate(t),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,M(f,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(t),e.updateActiveIndex(),e.updateSlidesClasses()}else if(o.freeMode.sticky){e.slideToClosest();return}else o.freeMode&&d("_freeModeNoMomentumRelease");(!o.freeMode.momentum||P>=o.longSwipesMs)&&(d("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:k,onTouchMove:j,onTouchEnd:b}})}const A=[{id:"clienT01",imgSrc:"/client-image-logo01.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo01.png"},{id:"clienT02",imgSrc:"/client-image-logo02.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo02.png"},{id:"clienT03",imgSrc:"/client-image-logo03.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo03.png"},{id:"clienT04",imgSrc:"/client-image-logo04.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo04.png"},{id:"clienT05",imgSrc:"/client-image-logo01.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo01.png"},{id:"clienT06",imgSrc:"/client-image-logo02.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo02.png"},{id:"clienT07",imgSrc:"/client-image-logo03.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo03.png"},{id:"clienT08",imgSrc:"/client-image-logo04.jpeg",linkTo:"https://www.google.com/",hoverLogo:"/client-logo04.png"}];function K(){const p=A.map(e=>c.jsx(D,{className:"client-slide",children:c.jsxs(L,{to:e.linkTo,rel:"noopener",target:"_blank",className:"client-link",children:[c.jsx("img",{className:"client-image",src:e.imgSrc,alt:"#"}),c.jsx("div",{className:"client__logo",children:c.jsx("img",{src:e.hoverLogo,alt:"#"})})]})},e.id));return c.jsx(V,{className:"clients",children:c.jsx(R,{modules:[_,C,N],slidesPerView:4,spaceBetween:9,autoplay:{delay:1500,pauseOnMouseEnter:!0},freeMode:{sticky:!0},loop:!0,keyboard:{enabled:!0,onlyInViewport:!1},className:"clients__gallery",breakpoints:{1025:{slidesPerView:4},1024:{slidesPerView:3.2},708:{slidesPerView:3.2},707:{slidesPerView:2.2},448:{slidesPerView:2.2},447:{slidesPerView:1.4},319:{slidesPerView:1.4}},children:p})})}export{K as C};
