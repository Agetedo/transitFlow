import{r as d,u as Q,j as i,b as z,a as J,B as X}from"./index-CocXBAyv.js";import{B as ee,T as M}from"./TitleLeft-i9-_1WTM.js";import{m as te}from"./modal-close-icon-B_xkOvcC.js";function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?R(Object(t),!0).forEach(function(n){p(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function E(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function B(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e,r,t){return r&&B(e.prototype,r),t&&B(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(){return g=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},g.apply(this,arguments)}function q(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&_(e,r)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(e)}function _(e,r){return _=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},_(e,r)}function ne(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function re(e,r){if(e==null)return{};var t={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(r.indexOf(a)>=0)&&(t[a]=e[a]);return t}function w(e,r){if(e==null)return{};var t=re(e,r),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}function h(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ae(e,r){if(r&&(typeof r=="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function T(e){var r=ne();return function(){var n=y(e),a;if(r){var o=y(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return ae(this,a)}}function oe(e,r){return se(e)||de(e,r)||F(e,r)||pe()}function ie(e){return le(e)||ue(e)||F(e)||ce()}function le(e){if(Array.isArray(e))return C(e)}function se(e){if(Array.isArray(e))return e}function ue(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function de(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],a=!0,o=!1,s,u;try{for(t=t.call(e);!(a=(s=t.next()).done)&&(n.push(s.value),!(r&&n.length===r));a=!0);}catch(c){o=!0,u=c}finally{try{!a&&t.return!=null&&t.return()}finally{if(o)throw u}}return n}}function F(e,r){if(e){if(typeof e=="string")return C(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,r)}}function C(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fe=A(function e(r){var t=this,n=r.expanded,a=n===void 0?[]:n,o=r.allowMultipleExpanded,s=o===void 0?!1:o,u=r.allowZeroExpanded,c=u===void 0?!1:u;E(this,e),p(this,"expanded",void 0),p(this,"allowMultipleExpanded",void 0),p(this,"allowZeroExpanded",void 0),p(this,"toggleExpanded",function(l){if(t.isItemDisabled(l))return t;var f=t.isItemExpanded(l);return f?t.augment({expanded:t.expanded.filter(function(m){return m!==l})}):t.augment({expanded:t.allowMultipleExpanded?[].concat(ie(t.expanded),[l]):[l]})}),p(this,"isItemDisabled",function(l){var f=t.isItemExpanded(l),m=t.expanded.length===1;return!!(f&&!t.allowZeroExpanded&&m)}),p(this,"isItemExpanded",function(l){return t.expanded.indexOf(l)!==-1}),p(this,"getPanelAttributes",function(l,f){var m=f??t.isItemExpanded(l);return{role:t.allowMultipleExpanded?void 0:"region","aria-hidden":t.allowMultipleExpanded?!m:void 0,"aria-labelledby":t.getButtonId(l),id:t.getPanelId(l),hidden:m?void 0:!0}}),p(this,"getHeadingAttributes",function(){return{role:"heading"}}),p(this,"getButtonAttributes",function(l,f){var m=f??t.isItemExpanded(l),b=t.isItemDisabled(l);return{id:t.getButtonId(l),"aria-disabled":b,"aria-expanded":m,"aria-controls":t.getPanelId(l),role:"button",tabIndex:0}}),p(this,"getPanelId",function(l){return"accordion__panel-".concat(l)}),p(this,"getButtonId",function(l){return"accordion__heading-".concat(l)}),p(this,"augment",function(l){return new e(O({expanded:t.expanded,allowMultipleExpanded:t.allowMultipleExpanded,allowZeroExpanded:t.allowZeroExpanded},l))}),this.expanded=a,this.allowMultipleExpanded=s,this.allowZeroExpanded=c}),H=d.createContext(null),L=function(e){q(t,e);var r=T(t);function t(){var n;E(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r.call.apply(r,[this].concat(o)),p(h(n),"state",new fe({expanded:n.props.preExpanded,allowMultipleExpanded:n.props.allowMultipleExpanded,allowZeroExpanded:n.props.allowZeroExpanded})),p(h(n),"toggleExpanded",function(u){n.setState(function(c){return c.toggleExpanded(u)},function(){n.props.onChange&&n.props.onChange(n.state.expanded)})}),p(h(n),"isItemDisabled",function(u){return n.state.isItemDisabled(u)}),p(h(n),"isItemExpanded",function(u){return n.state.isItemExpanded(u)}),p(h(n),"getPanelAttributes",function(u,c){return n.state.getPanelAttributes(u,c)}),p(h(n),"getHeadingAttributes",function(){return n.state.getHeadingAttributes()}),p(h(n),"getButtonAttributes",function(u,c){return n.state.getButtonAttributes(u,c)}),n}return A(t,[{key:"render",value:function(){var a=this.state,o=a.allowZeroExpanded,s=a.allowMultipleExpanded;return d.createElement(H.Provider,{value:{allowMultipleExpanded:s,allowZeroExpanded:o,toggleExpanded:this.toggleExpanded,isItemDisabled:this.isItemDisabled,isItemExpanded:this.isItemExpanded,getPanelAttributes:this.getPanelAttributes,getHeadingAttributes:this.getHeadingAttributes,getButtonAttributes:this.getButtonAttributes}},this.props.children||null)}}]),t}(d.PureComponent);p(L,"defaultProps",{allowMultipleExpanded:!1,allowZeroExpanded:!1});var Z=function(e){q(t,e);var r=T(t);function t(){var n;E(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r.call.apply(r,[this].concat(o)),p(h(n),"renderChildren",function(u){return u?n.props.children(u):null}),n}return A(t,[{key:"render",value:function(){return d.createElement(H.Consumer,null,this.renderChildren)}}]),t}(d.PureComponent),me=["className","allowMultipleExpanded","allowZeroExpanded","onChange","preExpanded"],he=function(r){var t=r.className,n=t===void 0?"accordion":t,a=r.allowMultipleExpanded,o=r.allowZeroExpanded,s=r.onChange,u=r.preExpanded,c=w(r,me);return d.createElement(L,{preExpanded:u,allowMultipleExpanded:a,allowZeroExpanded:o,onChange:s},d.createElement("div",g({"data-accordion-component":"Accordion",className:n},c)))},S;(function(e){e.Accordion="Accordion",e.AccordionItem="AccordionItem",e.AccordionItemButton="AccordionItemButton",e.AccordionItemHeading="AccordionItemHeading",e.AccordionItemPanel="AccordionItemPanel"})(S||(S={}));var $=S,j=0;function ge(){var e=j;return j=j+1,"raa-".concat(e)}var ve=d.useId||ge,be=/[\u0009\u000a\u000c\u000d\u0020]/g;function x(e){return e===""||be.test(e)?(console.error('uuid must be a valid HTML5 id but was given "'.concat(e,'", ASCII whitespaces are forbidden')),!1):!0}var k=d.createContext(null),xe=function(r){var t=r.children,n=r.uuid,a=r.accordionContext,o=r.dangerouslySetExpanded,s=function(){a.toggleExpanded(n)},u=function(l){var f=o??l.isItemExpanded(n),m=l.isItemDisabled(n),b=l.getPanelAttributes(n,o),D=l.getHeadingAttributes(n),N=l.getButtonAttributes(n,o);return d.createElement(k.Provider,{value:{uuid:n,expanded:f,disabled:m,toggleExpanded:s,panelAttributes:b,headingAttributes:D,buttonAttributes:N}},t)};return d.createElement(Z,null,u)},ye=function(r){return d.createElement(Z,null,function(t){return d.createElement(xe,g({},r,{accordionContext:t}))})},I=function(r){var t=r.children,n=function(o){return o?t(o):null};return d.createElement(k.Consumer,null,n)},Ee=["uuid","dangerouslySetExpanded","className","activeClassName"],W=function(r){var t=r.uuid,n=r.dangerouslySetExpanded,a=r.className,o=a===void 0?"accordion__item":a,s=r.activeClassName,u=w(r,Ee),c=d.useState(ve()),l=oe(c,1),f=l[0],m=t??f,b=function(N){var K=N.expanded,G=K&&s?s:o;return d.createElement("div",g({"data-accordion-component":"AccordionItem",className:G},u))};return x(m.toString()),u.id&&x(u.id),d.createElement(ye,{uuid:m,dangerouslySetExpanded:n},d.createElement(I,null,b))};W.displayName=$.AccordionItem;function U(e){return e&&(e.matches('[data-accordion-component="Accordion"]')?e:U(e.parentElement))}function P(e){var r=U(e);return r&&Array.from(r.querySelectorAll('[data-accordion-component="AccordionItemButton"]'))}function Ae(e){var r=P(e)||[],t=r[0];t&&t.focus()}function we(e){var r=P(e)||[],t=r[r.length-1];t&&t.focus()}function Ie(e){var r=P(e)||[],t=r.indexOf(e);if(t!==-1){var n=r[t+1];n&&n.focus()}}function Pe(e){var r=P(e)||[],t=r.indexOf(e);if(t!==-1){var n=r[t-1];n&&n.focus()}}var v={END:"End",ENTER:"Enter",HOME:"Home",SPACE:" ",SPACE_DEPRECATED:"Spacebar",UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"},Ne=["toggleExpanded","className"],je=function(r){var t=r.toggleExpanded,n=r.className,a=n===void 0?"accordion__button":n,o=w(r,Ne),s=function(c){var l=c.key;if((l===v.ENTER||l===v.SPACE||l===v.SPACE_DEPRECATED)&&(c.preventDefault(),t()),c.target instanceof HTMLElement)switch(l){case v.HOME:{c.preventDefault(),Ae(c.target);break}case v.END:{c.preventDefault(),we(c.target);break}case v.LEFT:case v.UP:{c.preventDefault(),Pe(c.target);break}case v.RIGHT:case v.DOWN:{c.preventDefault(),Ie(c.target);break}}};return o.id&&x(o.id),d.createElement("div",g({className:a},o,{role:"button",tabIndex:0,onClick:t,onKeyDown:s,"data-accordion-component":"AccordionItemButton"}))},Oe=function(r){return d.createElement(I,null,function(t){var n=t.toggleExpanded,a=t.buttonAttributes;return d.createElement(je,g({toggleExpanded:n},r,a))})},_e={className:"accordion__heading","aria-level":3},Ce=`AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.

From the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):

“The button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.”

`,V=function(e){q(t,e);var r=T(t);function t(){var n;E(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r.call.apply(r,[this].concat(o)),p(h(n),"ref",void 0),p(h(n),"setRef",function(u){n.ref=u}),n}return A(t,[{key:"componentDidUpdate",value:function(){t.VALIDATE(this.ref)}},{key:"componentDidMount",value:function(){t.VALIDATE(this.ref)}},{key:"render",value:function(){return d.createElement("div",g({"data-accordion-component":"AccordionItemHeading"},this.props,{ref:this.setRef}))}}],[{key:"VALIDATE",value:function(a){if(a===void 0)throw new Error("ref is undefined");if(!(a.childElementCount===1&&a.firstElementChild&&a.firstElementChild.getAttribute("data-accordion-component")==="AccordionItemButton"))throw new Error(Ce)}}]),t}(d.PureComponent);p(V,"defaultProps",_e);var Y=function(r){return d.createElement(I,null,function(t){var n=t.headingAttributes;return r.id&&x(r.id),d.createElement(V,g({},r,n))})};Y.displayName=$.AccordionItemHeading;var Se=["className","region","id"],qe=function(r){var t=r.className,n=t===void 0?"accordion__panel":t,a=r.region,o=r.id,s=w(r,Se),u=function(l){var f=l.panelAttributes;o&&x(o);var m=O(O({},f),{},{"aria-labelledby":a?f["aria-labelledby"]:void 0});return d.createElement("div",g({"data-accordion-component":"AccordionItemPanel",className:n},s,m,{role:a?"region":void 0}))};return d.createElement(I,null,u)};const Te=[{id:"faqPanel01",question:"How can I pay for your logistics services?",answer:"Following the quality of our service thus having gained trust of our many clients. Following the quality of our service thus having gained trust of our many clients."},{id:"faqPanel02",question:"What payment methods are supported?",answer:"Following the quality of our service thus having gained trust of our many clients."},{id:"faqPanel03",question:"What options for logistics plans are available?",answer:"Following the quality of our service thus having gained trust of our many clients. Following the quality of our service thus having gained trust of our many clients. Following the quality of our service thus having gained trust of our many clients."},{id:"faqPanel04",question:"Can I specify a delivery date when ordering?",answer:"Following the quality of our service thus having gained trust of our many clients. Following the quality of our service thus having gained trust of our many clients. Following the quality of our service thus having gained trust of our many clients."}],De="/phone-icon.png",Re="/svg/line-md_phone-call-twotone-loop.svg";function Be({title:e}){return i.jsxs(i.Fragment,{children:[i.jsx("img",{src:Re,alt:"#",id:"requestFormIcon"}),i.jsx("h3",{className:"request-form__title",children:e})]})}function Me(){const e=i.jsx(i.Fragment,{children:"Leave Your phone number and TransitFlow will call You back!"}),{register:r,handleSubmit:t,formState:{errors:n}}=Q(),a=s=>{console.log(s)},o={name:"Your name*",phoneNumber:"Your phone number*"};return i.jsxs("form",{onSubmit:t(a),id:"form5",children:[i.jsx(Be,{title:e}),i.jsxs("div",{className:"request-form__items",children:[i.jsx("input",{defaultValue:o.name,placeholder:"Name",type:"text",autoComplete:"off","aria-invalid":n.name?"true":"false",...r("name",{required:!0,maxLength:{value:20,message:"The Name should have at most 20 characters"},pattern:{value:/^[A-Za-z ]+$/i,message:"The Name must contain only letters"}})}),i.jsx("input",{defaultValue:o.phoneNumber,placeholder:"+112365489",type:"tel",autoComplete:"off","aria-invalid":n.phoneNumber?"true":"false",...r("phoneNumber",{required:!0,pattern:{value:/^\+?\d+$/,message:"The Phone Number must be in the format +112365489"},minLength:{value:10,message:"The Phone Number should have on less 10 characters"},validate:{maxLength:s=>s.length<=12||"The Phone Number should have at most 12 characters"}})})]}),n.name&&n.name.type==="required"&&i.jsx("p",{role:"alert",className:"error-message",children:"Name is required"}),n.name&&n.name.type==="maxLength"&&i.jsx("p",{role:"alert",className:"error-message",children:n.name.message}),n.name&&n.name.type==="pattern"&&i.jsx("p",{role:"alert",className:"error-message",children:n.name.message}),n.phoneNumber&&n.phoneNumber.type==="required"&&i.jsx("p",{role:"alert",className:"error-message",children:"Phone Number is required"}),n.phoneNumber&&n.phoneNumber.type==="pattern"&&i.jsx("p",{role:"alert",className:"error-message",children:n.phoneNumber.message}),n.phoneNumber&&n.phoneNumber.type==="minLength"&&i.jsx("p",{role:"alert",className:"error-message",children:n.phoneNumber.message}),n.phoneNumber&&n.phoneNumber.type==="maxLength"&&i.jsx("p",{role:"alert",className:"error-message",children:n.phoneNumber.message}),i.jsx(ee,{type:"submit",buttonText:"Call Me Back!"})]})}function Fe({iconAlt:e,text:r}){return i.jsxs("div",{className:"phone__contact",children:[i.jsx("img",{src:De,alt:e}),i.jsx("p",{children:r})]})}const He=Te.map(e=>i.jsxs(W,{children:[i.jsx(Y,{children:i.jsx(Oe,{children:e.question})}),i.jsx(qe,{children:i.jsx("p",{className:"answer",children:e.answer})})]},e.id));function Le({onClick:e}){return i.jsxs("div",{className:"faq__items",children:[i.jsx(he,{allowMultipleExpanded:!0,allowZeroExpanded:!0,children:He}),i.jsxs("div",{className:"faq__contact",children:[i.jsx(M,{caption:"Let's Talk",title:"You need any help? get free consultation"}),i.jsx(Fe,{iconAlt:"Phone icon",text:"Have Any Questions (00) 112 365 489"}),i.jsx(X,{type:"button",onClick:e,buttonText:"Contact Us"})]})]})}function Ze({onClose:e}){return i.jsx("div",{className:"request-call",children:i.jsxs("div",{className:"modal-content",children:[i.jsxs("div",{className:"request-call__close",children:[i.jsx("span",{children:"close"}),i.jsx("img",{src:te,alt:"#",onClick:e})]}),i.jsx(Me,{})]})})}function Ue(){const[e,r]=d.useState(!1);return d.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflowY="scroll"},[e]),i.jsxs(z,{className:"faq",children:[i.jsx(M,{caption:"FAQ",title:"Frequently Asked Questions"}),i.jsx(Le,{onClick:()=>r(!0)}),e&&J.createPortal(i.jsx(Ze,{onClose:()=>r(!1)}),document.body)]})}export{Ue as F};