import{a as f,S as ve,i as x,b as z,N as Z,P as X,A as ge}from"./assets/vendor-Ct5KpLJE.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();const M=document.getElementById("navbar-menu"),fe=document.getElementById("open-menu"),pe=document.getElementById("close-menu"),he=M.querySelector(".nav-list"),ye=M.querySelector(".mobile-menu-btn"),J=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function O(){M.classList.add("is-hidden"),document.body.style.overflow=""}fe.addEventListener("click",function(){M.classList.remove("is-hidden"),document.body.style.overflow="hidden"});pe.addEventListener("click",O);he.addEventListener("click",O);ye.addEventListener("click",function(){O(),B&&B.scrollIntoView({behavior:"smooth"})});J&&J.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&O()});const Le="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};f.defaults.baseURL=Le;async function be(){return(await f.get(v.CATEGORIES)).data}async function D(e=1,t="",o=v.LIMIT){return t==="all"||!t?(await f.get(`${v.EVENTS}?page=${e}&limit=${o}`)).data:(await f.get(`${v.EVENTS}?page=${e}&limit=${o}&category=${t}`)).data}const r={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Se(e,t){const o=e%4,n=e-o;return o===0||t<n?"row-of-4":o===3?"row-last-3":o===2?"row-last-2":o===1?"row-last-1":""}function N(){r.loader.classList.remove("is-hidden")}function R(){r.loader.classList.add("is-hidden")}let Ee=!1;function we(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],o=t.map(({_id:n,name:s,tags:i},a)=>{const m=Se(t.length,a),u=i.map(E=>`#${E} `).join("");return`<li class="event-category-item ${m}" data-category="${n}">
          <p class="event-category-title">${s}</p>
          <p class="event-category-tags">${u}</p>
        </li>`}).join("");r.categoriesListEl.innerHTML=o,r.firstCategoryButton&&r.firstCategoryButton.classList.add("categories__btn--active")}r.caregoryListSelect.addEventListener("click",ke);function ke(e){r.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),r.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Ee&&!r.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!r.categoriesListEl.SimpleBar&&new ve(r.categoriesScroll,{autoHide:!1}).recalculate()}function j(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",o=e.map(({_id:n,name:s,price:i,category:a,image:m})=>`<li class="event-item">
        <img
          src="${m||t}"
          alt="${s}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${t}'"
        />
        <div class="event-info">
          <p class="event-title">${s}</p>
          <p class="event-text">${a.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${n}"
        >
          Детальніше
        </button>
      </li>`).join("");r.eventsList.insertAdjacentHTML("beforeend",o)}const k="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",Be="https://events-store.b.goit.study";async function _e(e){try{const{data:t}=await f.get(`${Be}/api/events/${e}`);return t}catch(t){throw t}}function $e(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:o,name:n,description:s,image:i,durationHours:a,rate:m,price:u,audience:E,category:re,program:ae,inclusions:ce}=e;let p="";const P=Math.floor(m),w=m-P,Q=w>=.25&&w<.75,le=P+(Q||w>=.75?1:0);for(let l=0;l<P;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `;w>=.75?p+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${k}#icon-full-star"></use>
      </svg>
    `:Q&&(p+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${k}#icon-half-star"></use>
      </svg>
    `);for(let l=le;l<5;l+=1)p+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${k}#icon-star"></use>
      </svg>
    `;const de=ae.map(l=>`<li>${l}</li>`).join(""),me=ce.map(l=>`<li>${l}</li>`).join(""),ue=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${re.name}</span>
          <div class="modal-event__stars">${p}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
        <p class="modal-event__desc">${s}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${de}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${me}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${a} години</p>
          <p><b>Кількість учасників:</b> від ${E.min} до ${E.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${u.prefix} ${u.value} ${u.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${o}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ue}const Ie="https://events-store.b.goit.study/api",h=document.querySelector(".booking-modal"),ee=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),L=c.querySelector('[name="name"]'),b=c.querySelector('[name="phone"]'),S=c.querySelector('[name="comment"]'),$=L.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=S.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Oe);let H=null;function qe(e){H=e,document.body.style.overflow="hidden",h.classList.add("is-open"),document.addEventListener("keydown",te),ee.addEventListener("click",oe),h.addEventListener("click",ne),Pe()}function T(){h.classList.remove("is-open"),c.reset(),W(),H=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",te),ee.removeEventListener("click",oe),h.removeEventListener("click",ne)}function te(e){e.code==="Escape"&&T()}function oe(){T()}function ne(e){e.target===h&&T()}function Ce(){const e={},t=L.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const o=b.value.trim().replace(/\D/g,"");o?o.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=S.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Me(e){W(),e.name&&(L.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(b.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(S.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function W(){L.classList.remove("is-error"),b.classList.remove("is-error"),S.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Oe(e){e.preventDefault();const t=Ce();if(t.name||t.phone||t.comment){Me(t);return}W();const o={name:L.value.trim(),phone:b.value.trim().replace(/\D/g,""),eventId:H,comment:S.value.trim()};try{Ae(),Re(),_.disabled=!0;const{data:n}=await f.post(`${Ie}/orders`,o),{eventName:s,orderNum:i}=n;x.success({message:`Дякуємо! Ви замовили івент до ${s}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),De()}catch(n){n.status===400&&(x.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),console.log(n)),n.status===404&&(x.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3}),console.log(n))}finally{Te(),je(),_.disabled=!1}}function Te(){_.classList.remove("is-hidden")}function Ae(){_.classList.add("is-hidden")}const V="dataBooking",d={name:"",phone:"",comment:""};function Pe(){xe(),c.addEventListener("input",Ne)}function xe(){const e=JSON.parse(localStorage.getItem(V));console.log(e),e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function De(){localStorage.removeItem(V),c.name="",c.phone="",c.comment=""}function Ne(e){console.log(e.target),e.target===c.elements.name&&(d.name=e.target.value,console.log(d.name)),e.target===c.elements.phone&&(d.phone=e.target.value,console.log(d.phone)),e.target===c.elements.comment&&(d.comment=e.target.value,console.log(d.comment)),localStorage.setItem(V,JSON.stringify(d))}const se=document.querySelector(".loader-booking");function Re(){se.classList.remove("is-hidden")}function je(){se.classList.add("is-hidden")}let g=1,C="all",y=0,A=0;function F(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function He(){try{N();const e=F(),[t,o]=await Promise.all([be(),D(g,C,e)]);we(t),r.eventsList.innerHTML="",j(o.events),y=o.events.length,A=o.totalItems,U()}catch(e){console.log("error events list",e)}finally{R()}}async function We(e){r.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{N(),C=t.dataset.category,g=1,y=0,r.eventsList.innerHTML="";const o=F(),n=await D(g,C,o);j(n.events),y=n.events.length,A=n.totalItems,U()}catch(o){console.log("error during getting events by category",o)}finally{R()}}async function Ve(){try{N(),r.showMoreBtn.disabled=!0,g+=1;const e=F();r.showMoreBtn.style.opacity="0";const t=await D(g,C,e);if(!t.events.length){r.showMoreBtn.disabled=!0;return}j(t.events),y+=t.events.length,A=t.totalItems,U()}catch(e){console.log("error during getting more events by category",e),g-=1}finally{R(),r.showMoreBtn.style.opacity="1"}}function U(){r.showMoreBtn.classList.remove("is-hidden-btn-more"),y>=A?r.showMoreBtn.disabled=!0:r.showMoreBtn.disabled=!1}async function Fe(e){const t=e.target.closest(".event-details-btn");if(!t)return;const o=t.dataset.eventId;if(o)try{const n=await _e(o);$e(n);const s=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");s&&i&&(s.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",G),window.addEventListener("keydown",K);const a=i.querySelector(".modal-event__order-btn");a&&a.addEventListener("click",Ue)}catch(n){console.log("error during opening event modal",n)}}function G(e){const t=document.querySelector(".event-modal-overlay"),o=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(o||n)&&ie()}function K(e){e.code==="Escape"&&ie()}function ie(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",G),window.removeEventListener("keydown",K);const o=t.querySelector(".modal-product");o&&(o.innerHTML="")}}function Ue(e){const t=e.currentTarget.dataset.eventId,o=document.querySelector(".section.event-details-modal"),n=document.querySelector(".event-modal-overlay");if(o&&n){o.classList.add("is-hidden"),n.classList.remove("is-open"),n.removeEventListener("click",G),window.removeEventListener("keydown",K);const i=n.querySelector(".modal-product");i&&(i.innerHTML="")}qe(t);const s=document.querySelector(".section.booking-modal");if(s){s.classList.remove("is-hidden"),s.classList.add("is-open"),document.body.classList.add("no-scroll");const i=s.querySelector(".booking-modal_form");if(i){let a=i.querySelector('input[name="eventId"]');a||(a=document.createElement("input"),a.type="hidden",a.name="eventId",i.appendChild(a)),a.value=t}}}document.addEventListener("DOMContentLoaded",He);r.categoriesListEl.addEventListener("click",We);r.showMoreBtn.addEventListener("click",Ve);r.eventsList.addEventListener("click",Fe);const Y=document.querySelector(".about-us-slider");Y&&new z(Y,{modules:[Z,X],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ge(".accordion-container",{showMultiple:!1});const Ge=document.querySelector(".feedback-swiper"),Ke={spaceBetween:32,pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[Z,X]};new z(Ge,Ke);
//# sourceMappingURL=index.js.map
