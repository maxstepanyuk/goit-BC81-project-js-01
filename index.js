import{a as g,S as ce,i as R,b as le,N as de,P as me,A as ue}from"./assets/vendor-CmT9KRLf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const C=document.getElementById("navbar-menu"),ve=document.getElementById("open-menu"),ge=document.getElementById("close-menu"),fe=C.querySelector(".nav-list"),pe=C.querySelector(".mobile-menu-btn"),z=document.querySelector(".header .consultation-btn"),_=document.getElementById("event-list");function M(){C.classList.add("is-hidden"),document.body.style.overflow=""}ve.addEventListener("click",function(){C.classList.remove("is-hidden"),document.body.style.overflow="hidden"});ge.addEventListener("click",M);fe.addEventListener("click",M);pe.addEventListener("click",function(){M(),_&&_.scrollIntoView({behavior:"smooth"})});z&&z.addEventListener("click",function(){_&&_.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&M()});const ye="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};g.defaults.baseURL=ye;async function he(){return(await g.get(v.CATEGORIES)).data}async function Le(e=1,t="",n=v.LIMIT){return t==="all"||!t?(await g.get(`${v.EVENTS}?page=${e}&limit=${n}`)).data:(await g.get(`${v.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function be(e,t){const n=e%4,o=e-n;return n===0||t<o?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function O(){a.loader.classList.remove("is-hidden")}function T(){a.loader.classList.add("is-hidden")}let Se=!1;function Ee(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:o,name:s,tags:i},r)=>{const u=be(t.length,r),p=i.map(E=>`#${E} `).join("");return`<li class="event-category-item ${u}" data-category="${o}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${p}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",ke);function ke(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Se&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new ce(a.categoriesScroll,{autoHide:!1}).recalculate()}function A(e){const n=e.filter(({image:o})=>o).map(({_id:o,name:s,price:i,category:r,image:u})=>`<li class="event-item">
        <img
          src="${u}"
          alt="${s}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${o}">
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const w="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",we="https://events-store.b.goit.study";async function _e(e){try{const{data:t}=await g.get(`${we}/api/events/${e}`);return t}catch(t){throw t}}function Be(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:o,description:s,image:i,durationHours:r,rate:u,price:p,audience:E,category:te,program:oe,inclusions:ne}=e;let y="";const P=Math.floor(u),k=u-P,G=k>=.25&&k<.75,se=P+(G||k>=.75?1:0);for(let l=0;l<P;l+=1)y+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${w}#icon-full-star"></use>
      </svg>
    `;k>=.75?y+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${w}#icon-full-star"></use>
      </svg>
    `:G&&(y+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${w}#icon-half-star"></use>
      </svg>
    `);for(let l=se;l<5;l+=1)y+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${w}#icon-star"></use>
      </svg>
    `;const ie=oe.map(l=>`<li>${l}</li>`).join(""),re=ne.map(l=>`<li>${l}</li>`).join(""),ae=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${o}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${te.name}</span>
          <div class="modal-event__stars">${y}</div>
        </div>
        
        <h2 class="modal-event__title">${o}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${ie}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${re}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${E.min} до ${E.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${p.prefix} ${p.value} ${p.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ae}const $e="https://events-store.b.goit.study/api",h=document.querySelector(".booking-modal"),J=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),B=document.querySelector(".booking-modal-submit-btn"),L=c.querySelector('[name="name"]'),b=c.querySelector('[name="phone"]'),S=c.querySelector('[name="comment"]'),$=L.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=S.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Me);let N=null;function Ie(e){N=e,document.body.style.overflow="hidden",h.classList.add("is-open"),document.addEventListener("keydown",Y),J.addEventListener("click",Z),h.addEventListener("click",Q),De()}function D(){h.classList.remove("is-open"),c.reset(),x(),N=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",Y),J.removeEventListener("click",Z),h.removeEventListener("click",Q)}function Y(e){e.code==="Escape"&&D()}function Z(){D()}function Q(e){e.target===h&&D()}function qe(){const e={},t=L.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=b.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const o=S.value.trim();return o?o.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${o.length}`):e.comment="Введіть коментар",e}function Ce(e){x(),e.name&&(L.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(b.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(S.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function x(){L.classList.remove("is-error"),b.classList.remove("is-error"),S.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Me(e){e.preventDefault();const t=qe();if(t.name||t.phone||t.comment){Ce(t);return}x();const n={name:L.value.trim(),phone:b.value.trim().replace(/\D/g,""),eventId:N,comment:S.value.trim()};try{Te(),O(),B.disabled=!0;const{data:o}=await g.post(`${$e}/orders`,n),{eventName:s,orderNum:i}=o;R.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),D(),Re()}catch(o){o.status===400&&(R.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(o)),o.status===404&&(R.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(o))}finally{Oe(),T(),B.disabled=!1}}function Oe(){B.classList.remove("is-hidden")}function Te(){B.classList.add("is-hidden")}const H="dataBooking",d={name:"",phone:"",comment:""};function De(){Pe(),c.addEventListener("input",Ae)}function Pe(){const e=JSON.parse(localStorage.getItem(H));console.log(e),e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function Re(){localStorage.removeItem(H),c.name="",c.phone="",c.comment=""}function Ae(e){console.log(e.target),e.target===c.elements.name&&(d.name=e.target.value,console.log(d.name)),e.target===c.elements.phone&&(d.phone=e.target.value,console.log(d.phone)),e.target===c.elements.comment&&(d.comment=e.target.value,console.log(d.comment)),localStorage.setItem(H,JSON.stringify(d))}let m=1,j="all",f=0,X=0;function Ne(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}function xe(e){return e.filter(({image:t})=>t)}async function V(){const e=Ne();let t=[];for(;t.length<e;){const{events:n,totalItems:o}=await Le(m,j,e);if(X=o,t.push(...xe(n)),m*e>=o)break;t.length<e&&(m+=1)}return t.slice(0,e)}async function He(){try{O();const e=await he();Ee(e),m=1,j="all",f=0,a.eventsList.innerHTML="";const t=await V();A(t),f=t.length,U()}catch(e){console.log("error events list",e)}finally{T()}}async function je(e){const t=e.target.closest(".event-category-item");if(t)try{O(),j=t.dataset.category,m=1,f=0,a.eventsList.innerHTML="";const n=await V();A(n),f=n.length,U()}catch(n){console.log("error during getting events by category",n)}finally{T()}}async function Ve(){try{O(),m+=1;const e=await V();A(e),f+=e.length,U()}catch(e){console.log("error during getting more events by category",e),m-=1}finally{T()}}function U(){a.showMoreBtn.disabled=f>=X}async function Ue(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const o=await _e(n);Be(o);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",W),window.addEventListener("keydown",F);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",We)}catch(o){typeof iziToast<"u"&&iziToast.error({title:"Error",message:"Не вдалося завантажити деталі події.",position:"topRight"}),console.log("error during opening event modal",o)}}function W(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),o=e.target===t;(n||o)&&ee()}function F(e){e.code==="Escape"&&ee()}function ee(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",W),window.removeEventListener("keydown",F);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function We(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),o=document.querySelector(".event-modal-overlay");if(n&&o){n.classList.add("is-hidden"),o.classList.remove("is-open"),o.removeEventListener("click",W),window.removeEventListener("keydown",F);const i=o.querySelector(".modal-product");i&&(i.innerHTML="")}Ie(t);const s=document.querySelector(".section.booking-modal");if(s){s.classList.remove("is-hidden"),s.classList.add("is-open"),document.body.classList.add("no-scroll");const i=s.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",He);a.categoriesListEl.addEventListener("click",je);a.showMoreBtn.addEventListener("click",Ve);a.eventsList.addEventListener("click",Ue);const K=document.querySelector(".about-us-slider");K&&new le(K,{modules:[de,me],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ue(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
