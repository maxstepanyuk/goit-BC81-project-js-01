import{a as m,i as f,S as he,b as z,N as Z,P as ee,A as fe}from"./assets/vendor-_RRN-ioe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const O=document.getElementById("navbar-menu"),pe=document.getElementById("open-menu"),we=document.getElementById("close-menu"),ye=O.querySelector(".nav-list"),ke=O.querySelector(".mobile-menu-btn"),X=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function T(){O.classList.add("is-hidden"),document.body.style.overflow=""}pe.addEventListener("click",function(){O.classList.remove("is-hidden"),document.body.style.overflow="hidden"});we.addEventListener("click",T);ye.addEventListener("click",T);ke.addEventListener("click",function(){T(),B&&B.scrollIntoView({behavior:"smooth"})});X&&X.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});window.addEventListener("keydown",function(e){e.key==="Escape"&&T()});const Le="https://events-store.b.goit.study/api",v={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};m.defaults.baseURL=Le;async function be(){return(await m.get(v.CATEGORIES)).data}async function H(e=1,t="",s=v.LIMIT){return t==="all"||!t?(await m.get(`${v.EVENTS}?page=${e}&limit=${s}`)).data:(await m.get(`${v.EVENTS}?page=${e}&limit=${s}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Se(e,t){const s=e%4,n=e-s;return s===0||t<n?"row-of-4":s===3?"row-last-3":s===2?"row-last-2":s===1?"row-last-1":""}function R(){a.loader.classList.remove("is-hidden")}function j(){a.loader.classList.add("is-hidden")}function P(e="Щось пішло не так"){f.error({title:"Помилка",message:e,position:"topRight",timeout:5e3})}let Ee=!1;function xe(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],s=t.map(({_id:n,name:o,tags:i},r)=>{const d=Se(t.length,r),g=i.map(b=>`#${b} `).join("");return`<li class="event-category-item ${d}" data-category="${n}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${g}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=s,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Be);function Be(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Ee&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new he(a.categoriesScroll,{autoHide:!1}).recalculate()}function F(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",s=e.map(({_id:n,name:o,price:i,category:r,image:d})=>`<li class="event-item">
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
          data-event-id="${n}"
        >
          Детальніше
        </button>
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",s)}const E="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",_e="https://events-store.b.goit.study";async function $e(e){try{const{data:t}=await m.get(`${_e}/api/events/${e}`);return t}catch(t){throw t}}function Ie(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:s,name:n,description:o,image:i,durationHours:r,rate:d,price:g,audience:b,category:le,program:ce,inclusions:de}=e;let h="";const N=Math.floor(d),S=d-N,J=S>=.25&&S<.75,ue=N+(J||S>=.75?1:0);for(let c=0;c<N;c+=1)h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `;S>=.75?h+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${E}#icon-full-star"></use>
      </svg>
    `:J&&(h+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${E}#icon-half-star"></use>
      </svg>
    `);for(let c=ue;c<5;c+=1)h+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${E}#icon-star"></use>
      </svg>
    `;const me=ce.map(c=>`<li>${c}</li>`).join(""),ge=de.map(c=>`<li>${c}</li>`).join(""),ve=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${n}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${le.name}</span>
          <div class="modal-event__stars">${h}</div>
        </div>
        
        <h2 class="modal-event__title">${n}</h2>
        <p class="modal-event__desc">${o}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${me}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${ge}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${r} години</p>
          <p><b>Кількість учасників:</b> від ${b.min} до ${b.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${g.prefix} ${g.value} ${g.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${s}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ve}const qe="https://events-store.b.goit.study/api",p=document.querySelector(".booking-modal"),te=document.querySelector(".booking-modal-close-btn"),l=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),y=l.querySelector('[name="name"]'),k=l.querySelector('[name="phone"]'),L=l.querySelector('[name="comment"]'),$=y.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=L.closest(".booking-modal-field").querySelector(".booking-modal-error");l.addEventListener("submit",Te);let W=null;function Ce(e){W=e,document.body.style.overflow="hidden",p.classList.add("is-open"),document.addEventListener("keydown",se),te.addEventListener("click",ne),p.addEventListener("click",oe),Ae()}function D(){p.classList.remove("is-open"),l.reset(),V(),W=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",se),te.removeEventListener("click",ne),p.removeEventListener("click",oe)}function se(e){e.code==="Escape"&&D()}function ne(){D()}function oe(e){e.target===p&&D()}function Me(){const e={},t=y.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const s=k.value.trim().replace(/\D/g,"");s?s.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const n=L.value.trim();return n?n.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${n.length}`):e.comment="Введіть коментар",e}function Oe(e){V(),e.name&&(y.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(k.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(L.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function V(){y.classList.remove("is-error"),k.classList.remove("is-error"),L.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Te(e){e.preventDefault();const t=Me();if(t.name||t.phone||t.comment){Oe(t);return}V();const s={name:y.value.trim(),phone:k.value.trim().replace(/\D/g,""),eventId:W,comment:L.value.trim()};try{De(),je(),_.disabled=!0;const{data:n}=await m.post(`${qe}/orders`,s),{eventName:o,orderNum:i}=n;f.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),D(),He()}catch(n){n.status===400&&f.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),n.status===404&&f.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{Pe(),Fe(),_.disabled=!1}}function Pe(){_.classList.remove("is-hidden")}function De(){_.classList.add("is-hidden")}const K="dataBooking",x={name:"",phone:"",comment:""};function Ae(){Ne(),l.addEventListener("input",Re)}function Ne(){const e=JSON.parse(localStorage.getItem(K));e&&(l.elements.name.value=e.name,l.elements.phone.value=e.phone,l.elements.comment.value=e.comment)}function He(){localStorage.removeItem(K),l.name="",l.phone="",l.comment=""}function Re(e){e.target===l.elements.name&&(x.name=e.target.value),e.target===l.elements.phone&&(x.phone=e.target.value),e.target===l.elements.comment&&(x.comment=e.target.value),localStorage.setItem(K,JSON.stringify(x))}const ie=document.querySelector(".loader-booking");function je(){ie.classList.remove("is-hidden")}function Fe(){ie.classList.add("is-hidden")}let u=1,C="all",w=0,A=0;function U(){return window.innerWidth<768?v.LIMIT/2:v.LIMIT}async function We(){try{R();const e=U(),[t,s]=await Promise.all([be(),H(u,C,e)]);xe(t),a.eventsList.innerHTML="",F(s.events),w=s.events.length,A=s.totalItems,M()}catch(e){P("Не вдалося завантажити список подій"),console.log("error events list",e)}finally{j()}}async function Ve(e){a.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{R(),C=t.dataset.category,u=1,w=0,a.eventsList.innerHTML="";const s=U(),n=await H(u,C,s);F(n.events),w=n.events.length,A=n.totalItems,M()}catch(s){P("Не вдалося завантажити список категорій подій"),console.log("error during getting events by category",s)}finally{j()}}async function Ke(){try{R(),a.showMoreBtn.disabled=!0,a.showMoreBtn.style.opacity="0",u+=1;const e=U(),t=await H(u,C,e);if(!t.events.length){u-=1,M(),a.showMoreBtn.disabled=!0;return}F(t.events),w+=t.events.length,A=t.totalItems,M()}catch(e){P("Не вдалося завантажити список більше подій"),console.log("error during getting more events by category",e),u-=1}finally{j(),a.showMoreBtn.style.opacity="1"}}function M(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),w>=A?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function Ue(e){const t=e.target.closest(".event-details-btn");if(!t)return;const s=t.dataset.eventId;if(s)try{const n=await $e(s);Ie(n);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",G),window.addEventListener("keydown",Q);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ge)}catch(n){P("Не вдалося завантажити інформацію про дану подію"),console.log("error during opening event modal",n)}}function G(e){const t=document.querySelector(".event-modal-overlay"),s=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),n=e.target===t;(s||n)&&ae()}function Q(e){e.code==="Escape"&&ae()}function ae(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",G),window.removeEventListener("keydown",Q);const s=t.querySelector(".modal-product");s&&(s.innerHTML="")}}function Ge(e){const t=e.currentTarget.dataset.eventId,s=document.querySelector(".section.event-details-modal"),n=document.querySelector(".event-modal-overlay");if(s&&n){s.classList.add("is-hidden"),n.classList.remove("is-open"),n.removeEventListener("click",G),window.removeEventListener("keydown",Q);const i=n.querySelector(".modal-product");i&&(i.innerHTML="")}Ce(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",We);a.categoriesListEl.addEventListener("click",Ve);a.showMoreBtn.addEventListener("click",Ke);a.eventsList.addEventListener("click",Ue);const Y=document.querySelector(".about-us-slider");Y&&new z(Y,{modules:[Z,ee],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new fe(".accordion-container",{showMultiple:!1});const Qe=document.querySelector(".feedback-swiper"),Je=document.querySelector(".js-feedback-list"),re=document.querySelector(".feedback-loader"),Xe=375,Ye=768,ze=1440,Ze="/feedbacks",et={spaceBetween:32,breakpoints:{[Xe]:{slidesPerView:1},[Ye]:{slidesPerView:2},[ze]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[Z,ee]};new z(Qe,et);st();async function tt(e=10,t=1){const n={params:{limit:e,page:t}},{data:o}=await m.get(Ze,n);return o}async function st(){try{it();const{feedbacks:e}=await tt();nt(e)}catch(e){f.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}finally{at()}}function nt(e){const t=e.map(ot).join("");Je.innerHTML=t}function ot({author:e,date:t,description:s,rate:n}){const r=n%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
  <div class="feedback-content">
    <div class="feedback-raiting rating value-${Math.floor(n)} ${r} ">
      <ul class="star-container">
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
        <li class="star">
          <svg class="star-empty star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-star"
            ></use>
          </svg>
          <svg class="star-half star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-half-star"
            ></use>
          </svg>
          <svg class="star-filled star-icon" width="17" height="17">
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="/img/sprite.svg#icon-full-star"
            ></use>
          </svg>
        </li>
      </ul>
    </div>
    <p class="feedback-text">${s}</p>
  </div>
  <div class="feedback-avatar">
    <p class="feedback-author">${e}</p>
    <p class="feedback-date">${t}</p>
  </div>
</li>`}function it(){re.classList.remove("is-hidden")}function at(){re.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
