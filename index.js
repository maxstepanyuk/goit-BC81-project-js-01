import{a as m,i as p,S as be,b as H,N as R,P as N,A as ke}from"./assets/vendor-D3JqmkBw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const P=document.getElementById("navbar-menu"),Le=document.getElementById("open-menu"),Se=document.getElementById("close-menu"),Ee=P.querySelector(".nav-list"),xe=P.querySelector(".mobile-menu-btn"),Z=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function j(){P.classList.add("is-hidden"),document.body.style.overflow=""}Le.addEventListener("click",function(){P.classList.remove("is-hidden"),document.body.style.overflow="hidden"});Se.addEventListener("click",j);Ee.addEventListener("click",j);xe.addEventListener("click",function(){j(),B&&B.scrollIntoView({behavior:"smooth"})});Z&&Z.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});const ne="https://events-store.b.goit.study/api",h={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};m.defaults.baseURL=ne;async function Be(){return(await m.get(h.CATEGORIES)).data}async function V(e=1,t="",n=h.LIMIT){return t==="all"||!t?(await m.get(`${h.EVENTS}?page=${e}&limit=${n}`)).data:(await m.get(`${h.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function $e(e,t){const n=e%4,s=e-n;return n===0||t<s?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function F(){a.loader.classList.remove("is-hidden")}function W(){a.loader.classList.add("is-hidden")}function O(e="Щось пішло не так"){p.error({title:"Помилка",message:e,position:"topRight",timeout:5e3})}const se="/goit-BC81-project-js-01/assets/template_event_image_opt-BhRTXQIs.avif";function _e(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:s,name:o,tags:i},r)=>{const d=$e(t.length,r),g=i.map(S=>`#${S} `).join("");return`<li class="event-category-item ${r===0?"is-active":""} ${d}" data-category="${s}">
    <button type="button" class="event-category-btn">
      <span class="event-category-title">${o}</span>
      <span class="event-category-tags">${g}</span>
    </button>
  </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Ie);function Ie(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!a.categoriesListOpen.classList.contains("is-hidden")&&setTimeout(()=>{if(!a.categoriesScroll.hasAttribute("data-simplebar")&&!a.categoriesScroll.SimpleBar){const t=new be(a.categoriesScroll,{autoHide:!1});a.categoriesScroll.SimpleBar=t}else a.categoriesScroll.SimpleBar&&a.categoriesScroll.SimpleBar.recalculate()},50)}function U(e){const t=se,n=e.map(({_id:s,name:o,price:i,category:r,image:d})=>`<li class="event-item">
        <img
          src="${d||t}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${t}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button
          type="button"
          class="event-details-btn"
          data-event-id="${s}"
        >
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const l="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",qe="https://events-store.b.goit.study";async function Ce(e){try{const{data:t}=await m.get(`${qe}/api/events/${e}`);return t}catch(t){throw t}}function Me(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:s,description:o,image:i,durationHours:r,rate:d,price:g,audience:S,category:me,program:ge,inclusions:ve}=e;let f="";const D=Math.floor(d),E=d-D,z=E>=.25&&E<.75,he=D+(z||E>=.75?1:0);for(let u=0;u<D;u+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `;E>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `:z&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${l}#icon-half-star"></use>
      </svg>
    `);for(let u=he;u<5;u+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${l}#icon-star"></use>
      </svg>
    `;const fe=i||se,pe=ge.map(u=>`<li>${u}</li>`).join(""),ye=ve.map(u=>`<li>${u}</li>`).join(""),we=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${fe}" alt="${s}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${me.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${s}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${pe}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ye}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${S.min} до ${S.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=we}const Pe="https://events-store.b.goit.study/api",y=document.querySelector(".booking-modal"),oe=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),$=document.querySelector(".booking-modal-submit-btn"),b=c.querySelector('[name="name"]'),k=c.querySelector('[name="phone"]'),L=c.querySelector('[name="comment"]'),_=b.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=L.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",De);let G=null;function Oe(e){G=e,document.body.style.overflow="hidden",y.classList.add("is-open"),document.addEventListener("keydown",ie),oe.addEventListener("click",ae),y.addEventListener("click",re),Ne()}function T(){y.classList.remove("is-open"),c.reset(),K(),G=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",ie),oe.removeEventListener("click",ae),y.removeEventListener("click",re)}function ie(e){e.code==="Escape"&&T()}function ae(){T()}function re(e){e.target===y&&T()}function Te(){const e={},t=b.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=k.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const s=L.value.trim();return s?s.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${s.length}`):e.comment="Введіть коментар",e}function Ae(e){K(),e.name&&(b.classList.add("is-error"),_.textContent=e.name,_.classList.add("is-visible")),e.phone&&(k.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(L.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function K(){b.classList.remove("is-error"),k.classList.remove("is-error"),L.classList.remove("is-error"),_.textContent="",I.textContent="",q.textContent="",_.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function De(e){e.preventDefault();const t=Te();if(t.name||t.phone||t.comment){Ae(t);return}K();const n={name:b.value.trim(),phone:k.value.trim().replace(/\D/g,""),eventId:G,comment:L.value.trim()};try{Re(),We(),$.disabled=!0;const{data:s}=await m.post(`${Pe}/orders`,n),{eventName:o,orderNum:i}=s;p.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),T(),Ve()}catch(s){s.status===400&&p.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),s.status===404&&p.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{He(),Ue(),$.disabled=!1}}function He(){$.classList.remove("is-hidden")}function Re(){$.classList.add("is-hidden")}const Q="dataBooking",x={name:"",phone:"",comment:""};function Ne(){je(),c.addEventListener("input",Fe)}function je(){const e=JSON.parse(localStorage.getItem(Q));e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function Ve(){localStorage.removeItem(Q),c.name="",c.phone="",c.comment=""}function Fe(e){e.target===c.elements.name&&(x.name=e.target.value),e.target===c.elements.phone&&(x.phone=e.target.value),e.target===c.elements.comment&&(x.comment=e.target.value),localStorage.setItem(Q,JSON.stringify(x))}const le=document.querySelector(".loader-booking");function We(){le.classList.remove("is-hidden")}function Ue(){le.classList.add("is-hidden")}let v=1,C="all",w=0,A=0;function X(){return window.innerWidth<768?h.LIMIT/2:h.LIMIT}async function Ge(){try{F();const e=X(),[t,n]=await Promise.all([Be(),V(v,C,e)]);_e(t),a.eventsList.innerHTML="",U(n.events),w=n.events.length,A=n.totalItems,M()}catch(e){O("Не вдалося завантажити список подій"),console.log("error events list",e)}finally{W()}}async function Ke(e){const t=document.querySelector(".event-category-item.is-active");t&&t.classList.remove("is-active"),a.showMoreBtn.classList.add("is-hidden-btn-more");const n=e.target.closest(".event-category-item");if(!n)return;n.classList.add("is-active");const s=n.querySelector(".event-category-title").textContent;document.querySelector(".current-category").textContent=s;try{F(),C=n.dataset.category,v=1,w=0,a.eventsList.innerHTML="";const o=X(),i=await V(v,C,o);U(i.events),w=i.events.length,A=i.totalItems,M()}catch(o){O("Не вдалося завантажити список категорій подій"),console.log("error during getting events by category",o)}finally{W()}}async function Qe(){try{F(),a.showMoreBtn.disabled=!0,a.showMoreBtn.style.opacity="0",v+=1;const e=X(),t=await V(v,C,e);if(!t.events.length){v-=1,M(),a.showMoreBtn.disabled=!0;return}U(t.events),w+=t.events.length,A=t.totalItems,M()}catch(e){O("Не вдалося завантажити список більше подій"),console.log("error during getting more events by category",e),v-=1}finally{W(),a.showMoreBtn.style.opacity="1"}}function M(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=A?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function ce(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const s=await Ce(n);Me(s);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",J),window.addEventListener("keydown",Y);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Xe)}catch(s){O("Не вдалося завантажити інформацію про дану подію"),console.log("error during opening event modal",s)}}function J(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),s=e.target===t;(n||s)&&de()}function Y(e){e.code==="Escape"&&de()}function de(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",J),window.removeEventListener("keydown",Y);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function Xe(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),s=document.querySelector(".event-modal-overlay");if(n&&s){n.classList.add("is-hidden"),s.classList.remove("is-open"),s.removeEventListener("click",J),window.removeEventListener("keydown",Y);const i=s.querySelector(".modal-product");i&&(i.innerHTML="")}Oe(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}m.defaults.baseURL=ne;const ee="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10";async function Je(){return(await m.get(`${h.EVENTS}?type=popular`)).data}function Ye(e){const t=document.querySelector(".popular-list"),n=e.map(({_id:s,name:o,price:i,category:r,image:d})=>`<li class="swiper-slide event-item">
        <img
          src="${d||ee}"
          alt="${o}"
          width="335"
          height="251"
          onerror="this.onerror=null;this.src='${ee}'"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${r.name}</p>
          <p class="event-price">від ${i.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${s}">
          Детальніше
        </button>
      </li>`).join("");t.insertAdjacentHTML("beforeend",n)}async function ze(){try{const t=(await Je()).events;Ye(t),document.querySelector(".popular-list").addEventListener("click",ce),new H(".popular-swiper",{modules:[R,N],slidesPerView:1,slidesPerGroup:1,spaceBetween:24,watchOverflow:!0,navigation:{prevEl:".popular-button-prev",nextEl:".popular-button-next"},pagination:{el:".popular-pagination",dynamicBullets:!0,clickable:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4,spaceBetween:32}}})}catch(e){console.log("error popular events",e)}}ze();document.addEventListener("DOMContentLoaded",Ge);a.categoriesListEl.addEventListener("click",Ke);a.showMoreBtn.addEventListener("click",Qe);a.eventsList.addEventListener("click",ce);const te=document.querySelector(".about-us-slider");te&&new H(te,{modules:[R,N],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new ke(".accordion-container",{showMultiple:!1});const Ze=document.querySelector(".feedback-swiper"),et=document.querySelector(".js-feedback-list"),ue=document.querySelector(".feedback-loader"),tt=375,nt=768,st=1440,ot="/feedbacks",it={spaceBetween:32,breakpoints:{[tt]:{slidesPerView:1},[nt]:{slidesPerView:2},[st]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[R,N]};new H(Ze,it);rt();async function at(e=10,t=1){const s={params:{limit:e,page:t}},{data:o}=await m.get(ot,s);return o}async function rt(){try{dt();const{feedbacks:e}=await at();lt(e)}catch(e){p.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}finally{ut()}}function lt(e){const t=e.map(ct).join("");et.innerHTML=t}function ct({author:e,date:t,description:n,rate:s}){const r=s%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(s)} ${r} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="${l}#icon-full-star"
            ></use>
          </svg>
        </li>
      </ul>
    </div>
    <p class="feedback-text">${n}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}function dt(){ue.classList.remove("is-hidden")}function ut(){ue.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
