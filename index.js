import{a as g,i as p,S as he,b as z,N as Z,P as ee,A as fe}from"./assets/vendor-_RRN-ioe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const O=document.getElementById("navbar-menu"),pe=document.getElementById("open-menu"),we=document.getElementById("close-menu"),ye=O.querySelector(".nav-list"),ke=O.querySelector(".mobile-menu-btn"),X=document.querySelector(".header .consultation-btn"),B=document.getElementById("event-list");function N(){O.classList.add("is-hidden"),document.body.style.overflow=""}pe.addEventListener("click",function(){O.classList.remove("is-hidden"),document.body.style.overflow="hidden"});we.addEventListener("click",N);ye.addEventListener("click",N);ke.addEventListener("click",function(){N(),B&&B.scrollIntoView({behavior:"smooth"})});X&&X.addEventListener("click",function(){B&&B.scrollIntoView({behavior:"smooth"})});const Le="https://events-store.b.goit.study/api",h={CATEGORIES:"/categories",EVENTS:"/events",LIMIT:8};g.defaults.baseURL=Le;async function be(){return(await g.get(h.CATEGORIES)).data}async function H(e=1,t="",n=h.LIMIT){return t==="all"||!t?(await g.get(`${h.EVENTS}?page=${e}&limit=${n}`)).data:(await g.get(`${h.EVENTS}?page=${e}&limit=${n}&category=${t}`)).data}const a={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),caregoryListSelect:document.querySelector(".event-category-select"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn"),showMoreBtn:document.querySelector(".show-more-btn"),loader:document.querySelector(".loader"),eventDetailsBtn:document.querySelector(".event-details-btn"),categoriesScroll:document.querySelector(".categories-scroll")};function Se(e,t){const n=e%4,s=e-n;return n===0||t<s?"row-of-4":n===3?"row-last-3":n===2?"row-last-2":n===1?"row-last-1":""}function R(){a.loader.classList.remove("is-hidden")}function j(){a.loader.classList.add("is-hidden")}function T(e="Щось пішло не так"){p.error({title:"Помилка",message:e,position:"topRight",timeout:5e3})}let Ee=!1;function xe(e){const t=[{_id:"all",name:"Всі події",tags:[]},...e],n=t.map(({_id:s,name:o,tags:i},r)=>{const u=Se(t.length,r),v=i.map(S=>`#${S} `).join("");return`<li class="event-category-item ${u}" data-category="${s}">
          <p class="event-category-title">${o}</p>
          <p class="event-category-tags">${v}</p>
        </li>`}).join("");a.categoriesListEl.innerHTML=n,a.firstCategoryButton&&a.firstCategoryButton.classList.add("categories__btn--active")}a.caregoryListSelect.addEventListener("click",Be);function Be(e){a.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),a.categoriesListOpen.classList.toggle("is-hidden"),window.innerWidth<768&&!Ee&&!a.categoriesListOpen.classList.contains("is-hidden")&&window.innerWidth<768&&!a.categoriesListEl.SimpleBar&&new he(a.categoriesScroll,{autoHide:!1}).recalculate()}function F(e){const t="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWTCjrYnFjj8EYfWdauJQ3dcybEFwaAIuRbQd8SQxu09hdbyzPESKpqs&s=10",n=e.map(({_id:s,name:o,price:i,category:r,image:u})=>`<li class="event-item">
        <img
          src="${u||t}"
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
      </li>`).join("");a.eventsList.insertAdjacentHTML("beforeend",n)}const l="/goit-BC81-project-js-01/assets/sprite-kFDfZW0W.svg",_e="https://events-store.b.goit.study";async function $e(e){try{const{data:t}=await g.get(`${_e}/api/events/${e}`);return t}catch(t){throw t}}function Ie(e){const t=document.querySelector(".modal-product");if(!t)return;const{_id:n,name:s,description:o,image:i,durationHours:r,rate:u,price:v,audience:S,category:le,program:ce,inclusions:de}=e;let f="";const A=Math.floor(u),E=u-A,J=E>=.25&&E<.75,ue=A+(J||E>=.75?1:0);for(let d=0;d<A;d+=1)f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `;E>=.75?f+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${l}#icon-full-star"></use>
      </svg>
    `:J&&(f+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${l}#icon-half-star"></use>
      </svg>
    `);for(let d=ue;d<5;d+=1)f+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${l}#icon-star"></use>
      </svg>
    `;const me=ce.map(d=>`<li>${d}</li>`).join(""),ge=de.map(d=>`<li>${d}</li>`).join(""),ve=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${i}" alt="${s}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${le.name}</span>
          <div class="modal-event__stars">${f}</div>
        </div>
        
        <h2 class="modal-event__title">${s}</h2>
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
          <p><b>Кількість учасників:</b> від ${S.min} до ${S.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${v.prefix} ${v.value} ${v.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;t.innerHTML=ve}const qe="https://events-store.b.goit.study/api",w=document.querySelector(".booking-modal"),te=document.querySelector(".booking-modal-close-btn"),c=document.querySelector(".booking-modal-form"),_=document.querySelector(".booking-modal-submit-btn"),k=c.querySelector('[name="name"]'),L=c.querySelector('[name="phone"]'),b=c.querySelector('[name="comment"]'),$=k.closest(".booking-modal-field").querySelector(".booking-modal-error"),I=L.closest(".booking-modal-field").querySelector(".booking-modal-error"),q=b.closest(".booking-modal-field").querySelector(".booking-modal-error");c.addEventListener("submit",Te);let W=null;function Ce(e){W=e,document.body.style.overflow="hidden",w.classList.add("is-open"),document.addEventListener("keydown",ne),te.addEventListener("click",se),w.addEventListener("click",oe),Ae()}function P(){w.classList.remove("is-open"),c.reset(),V(),W=null,document.body.style.overflow="",document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",ne),te.removeEventListener("click",se),w.removeEventListener("click",oe)}function ne(e){e.code==="Escape"&&P()}function se(){P()}function oe(e){e.target===w&&P()}function Me(){const e={},t=k.value.trim();t?(t.length<2||t.length>48)&&(e.name="Ім'я має бути від 2 до 48 символів"):e.name="Введіть ваше ім'я";const n=L.value.trim().replace(/\D/g,"");n?n.length!==12&&(e.phone="Телефон має містити рівно 12 цифр, напр. 380961234568"):e.phone="Введіть номер телефону";const s=b.value.trim();return s?s.length>256&&(e.comment=`Коментар занадто довгий (максимум 256 символів), а у вас ${s.length}`):e.comment="Введіть коментар",e}function Oe(e){V(),e.name&&(k.classList.add("is-error"),$.textContent=e.name,$.classList.add("is-visible")),e.phone&&(L.classList.add("is-error"),I.textContent=e.phone,I.classList.add("is-visible")),e.comment&&(b.classList.add("is-error"),q.textContent=e.comment,q.classList.add("is-visible"))}function V(){k.classList.remove("is-error"),L.classList.remove("is-error"),b.classList.remove("is-error"),$.textContent="",I.textContent="",q.textContent="",$.classList.remove("is-visible"),I.classList.remove("is-visible"),q.classList.remove("is-visible")}async function Te(e){e.preventDefault();const t=Me();if(t.name||t.phone||t.comment){Oe(t);return}V();const n={name:k.value.trim(),phone:L.value.trim().replace(/\D/g,""),eventId:W,comment:b.value.trim()};try{De(),je(),_.disabled=!0;const{data:s}=await g.post(`${qe}/orders`,n),{eventName:o,orderNum:i}=s;p.success({message:`Дякуємо! Ви замовили івент до ${o}, ваше замовлення №${i}. Очікуйте на зворотній зв'язок.`,position:"topRight",timeout:6e3}),P(),He()}catch(s){s.status===400&&p.error({message:"Помилка запиту",position:"topRight",timeout:6e3}),s.status===404&&p.error({message:"Немає такого івенту =(",position:"topRight",timeout:6e3})}finally{Pe(),Fe(),_.disabled=!1}}function Pe(){_.classList.remove("is-hidden")}function De(){_.classList.add("is-hidden")}const K="dataBooking",x={name:"",phone:"",comment:""};function Ae(){Ne(),c.addEventListener("input",Re)}function Ne(){const e=JSON.parse(localStorage.getItem(K));e&&(c.elements.name.value=e.name,c.elements.phone.value=e.phone,c.elements.comment.value=e.comment)}function He(){localStorage.removeItem(K),c.name="",c.phone="",c.comment=""}function Re(e){e.target===c.elements.name&&(x.name=e.target.value),e.target===c.elements.phone&&(x.phone=e.target.value),e.target===c.elements.comment&&(x.comment=e.target.value),localStorage.setItem(K,JSON.stringify(x))}const ie=document.querySelector(".loader-booking");function je(){ie.classList.remove("is-hidden")}function Fe(){ie.classList.add("is-hidden")}let m=1,C="all",y=0,D=0;function U(){return window.innerWidth<768?h.LIMIT/2:h.LIMIT}async function We(){try{R();const e=U(),[t,n]=await Promise.all([be(),H(m,C,e)]);xe(t),a.eventsList.innerHTML="",F(n.events),y=n.events.length,D=n.totalItems,M()}catch(e){T("Не вдалося завантажити список подій"),console.log("error events list",e)}finally{j()}}async function Ve(e){a.showMoreBtn.classList.add("is-hidden-btn-more");const t=e.target.closest(".event-category-item");if(t)try{R(),C=t.dataset.category,m=1,y=0,a.eventsList.innerHTML="";const n=U(),s=await H(m,C,n);F(s.events),y=s.events.length,D=s.totalItems,M()}catch(n){T("Не вдалося завантажити список категорій подій"),console.log("error during getting events by category",n)}finally{j()}}async function Ke(){try{R(),a.showMoreBtn.disabled=!0,a.showMoreBtn.style.opacity="0",m+=1;const e=U(),t=await H(m,C,e);if(!t.events.length){m-=1,M(),a.showMoreBtn.disabled=!0;return}F(t.events),y+=t.events.length,D=t.totalItems,M()}catch(e){T("Не вдалося завантажити список більше подій"),console.log("error during getting more events by category",e),m-=1}finally{j(),a.showMoreBtn.style.opacity="1"}}function M(){a.showMoreBtn.classList.remove("is-hidden-btn-more"),y>=D?a.showMoreBtn.disabled=!0:a.showMoreBtn.disabled=!1}async function Ue(e){const t=e.target.closest(".event-details-btn");if(!t)return;const n=t.dataset.eventId;if(n)try{const s=await $e(n);Ie(s);const o=document.querySelector(".section.event-details-modal"),i=document.querySelector(".event-modal-overlay");o&&i&&(o.classList.remove("is-hidden"),i.classList.add("is-open"),document.body.classList.add("no-scroll")),i.addEventListener("click",G),window.addEventListener("keydown",Q);const r=i.querySelector(".modal-event__order-btn");r&&r.addEventListener("click",Ge)}catch(s){T("Не вдалося завантажити інформацію про дану подію"),console.log("error during opening event modal",s)}}function G(e){const t=document.querySelector(".event-modal-overlay"),n=e.target.hasAttribute("data-modal-close")||e.target.classList.contains("modal-close-btn"),s=e.target===t;(n||s)&&ae()}function Q(e){e.code==="Escape"&&ae()}function ae(){const e=document.querySelector(".section.event-details-modal"),t=document.querySelector(".event-modal-overlay");if(e&&t){e.classList.add("is-hidden"),t.classList.remove("is-open"),document.body.classList.remove("no-scroll"),t.removeEventListener("click",G),window.removeEventListener("keydown",Q);const n=t.querySelector(".modal-product");n&&(n.innerHTML="")}}function Ge(e){const t=e.currentTarget.dataset.eventId,n=document.querySelector(".section.event-details-modal"),s=document.querySelector(".event-modal-overlay");if(n&&s){n.classList.add("is-hidden"),s.classList.remove("is-open"),s.removeEventListener("click",G),window.removeEventListener("keydown",Q);const i=s.querySelector(".modal-product");i&&(i.innerHTML="")}Ce(t);const o=document.querySelector(".section.booking-modal");if(o){o.classList.remove("is-hidden"),o.classList.add("is-open"),document.body.classList.add("no-scroll");const i=o.querySelector(".booking-modal_form");if(i){let r=i.querySelector('input[name="eventId"]');r||(r=document.createElement("input"),r.type="hidden",r.name="eventId",i.appendChild(r)),r.value=t}}}document.addEventListener("DOMContentLoaded",We);a.categoriesListEl.addEventListener("click",Ve);a.showMoreBtn.addEventListener("click",Ke);a.eventsList.addEventListener("click",Ue);const Y=document.querySelector(".about-us-slider");Y&&new z(Y,{modules:[Z,ee],slidesPerView:1,spaceBetween:0,loop:!1,speed:500,navigation:{nextEl:".about-us-button-next",prevEl:".about-us-button-prev"},pagination:{el:".about-us-pagination",clickable:!0}});new fe(".accordion-container",{showMultiple:!1});const Qe=document.querySelector(".feedback-swiper"),Je=document.querySelector(".js-feedback-list"),re=document.querySelector(".feedback-loader"),Xe=375,Ye=768,ze=1440,Ze="/feedbacks",et={spaceBetween:32,breakpoints:{[Xe]:{slidesPerView:1},[Ye]:{slidesPerView:2},[ze]:{slidesPerView:3}},pagination:{el:".feedback-pagination",dynamicBullets:!0},navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},modules:[Z,ee]};new z(Qe,et);nt();async function tt(e=10,t=1){const s={params:{limit:e,page:t}},{data:o}=await g.get(Ze,s);return o}async function nt(){try{it();const{feedbacks:e}=await tt();st(e)}catch(e){p.error({message:"Помилка отримання відгуків",position:"topRight"}),console.log(e)}finally{at()}}function st(e){const t=e.map(ot).join("");Je.innerHTML=t}function ot({author:e,date:t,description:n,rate:s}){const r=s%1>=.5?"half":"";return`<li class="feedback-item swiper-slide">
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
</li>`}function it(){re.classList.remove("is-hidden")}function at(){re.classList.add("is-hidden")}
//# sourceMappingURL=index.js.map
