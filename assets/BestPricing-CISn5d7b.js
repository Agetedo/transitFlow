import{j as e,r as o,b as p,a as d,u as x}from"./index-CocXBAyv.js";import{T as j}from"./TitleCenter-CXuePO26.js";import{B as r}from"./TitleLeft-i9-_1WTM.js";import{m as b}from"./modal-close-icon-B_xkOvcC.js";const g=[{id:"bPri01",title:"Basic",pricing:"$39/ month",truck:"Single Truck",insurance:"Full Insurance",pathKm:"300 Km",realTime:"Real-time rate shopping",buttonText:"Choose Plan"},{id:"bPri02",title:"Standard",pricing:"$59/ month",truck:"Single Truck",insurance:"Full Insurance",pathKm:"500 Km",realTime:"Real-time rate shopping",buttonText:"Choose Plan"},{id:"bPri03",title:"Premium",pricing:"$89/ month",truck:"Double Truck",insurance:"Full Insurance",pathKm:"Unlimitted",realTime:"Real-time rate shopping",buttonText:"Choose Plan"}];function P(){const s=g.map(t=>e.jsxs("div",{className:"best-pricing__card",children:[e.jsx("h3",{className:"title",children:t.title}),e.jsx("p",{className:"pricing",children:t.pricing}),e.jsx("p",{className:"text",children:t.truck}),e.jsx("p",{className:"text",children:t.insurance}),e.jsx("p",{className:"text",children:t.pathKm}),e.jsx("p",{className:"text",children:t.realTime})]},t.id));return e.jsx("div",{className:"best-pricing__items",children:s})}const f="/bestprice-icon.png";function C({basic:s,standart:t,premium:c}){var n;const{register:i,handleSubmit:m,formState:{errors:l}}=x(),u=a=>{console.log(a)},h={email:"Email*"};return e.jsxs("form",{onSubmit:m(u),id:"form4",children:[e.jsxs("label",{className:"best-pricing__plan",children:[s,e.jsx("input",{type:"checkbox",value:"BASIC",placeholder:"Basic",...i("plan")})]}),e.jsxs("label",{className:"best-pricing__plan",children:[t,e.jsx("input",{type:"checkbox",value:"STANDART",placeholder:"Standart",...i("plan")})]}),e.jsxs("label",{className:"best-pricing__plan",children:[c,e.jsx("input",{type:"checkbox",value:"PREMIUM",placeholder:"Premium",...i("plan")})]}),e.jsxs("div",{className:"choose-plan__email",children:[e.jsx("input",{defaultValue:h.email,placeholder:"contact@logistics.com",type:"email",autoComplete:"off","aria-invalid":l.email?"true":"false",...i("email",{required:"Email is required",validate:{maxLength:a=>a.length<=30||"The Email should have at most 50 characters",matchPattern:a=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a)||"Email address must be a valid address"}})}),e.jsx(r,{type:"submit",buttonText:"Choose Plan"})]}),((n=l.email)==null?void 0:n.message)&&e.jsx("p",{role:"alert",className:"choose-plan__message",children:l.email.message})]})}function N({onClick:s}){return e.jsxs("div",{className:"choose-plan__close",children:[e.jsx("span",{children:"close"}),e.jsx("img",{src:b,alt:"#",onClick:s})]})}function T({title:s}){return e.jsxs(e.Fragment,{children:[e.jsx("img",{className:"choose-plan__icon",src:f,alt:"#"}),e.jsx("h2",{className:"choose-plan__title",children:s})]})}function _({onClose:s}){return e.jsx("div",{className:"choose-plan",children:e.jsxs("div",{className:"modal-content",children:[e.jsx(N,{onClick:s}),e.jsx(T,{title:"Choose Your Best Pricing!"}),e.jsx(C,{basic:"BASIC",standart:"STANDART",premium:"PREMIUM"})]})})}function B(){const[s,t]=o.useState(!1);return o.useEffect(()=>{s?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[s]),e.jsxs(p,{className:"best-pricing",children:[e.jsx(j,{caption:"Pricing",title:"Our Best Pricing"}),e.jsx(P,{}),e.jsx(r,{buttonText:"Choose Plan",type:"button",onClick:()=>t(!0)}),s&&d.createPortal(e.jsx(_,{onClose:()=>t(!1)}),document.body)]})}export{B};