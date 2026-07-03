import{a as d,A as y}from"./assets/vendor-BIW9uWCR.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const v="https://events-store.b.goit.study/api",g={CATEGORIES:"/categories",EVENTS:"/events"};d.defaults.baseURL=v;async function f(){return(await d.get(g.CATEGORIES)).data}async function l(){return(await d.get(g.EVENTS)).data}function m(t,s){console.log(t,s);const r=t%4,o=t-r;return r===0||s<o?"row-of-4":r===3?"row-last-3":r===2?"row-last-2":r===1?"row-last-1":""}const i={categoriesListEl:document.querySelector(".js-event-category-list"),categoriesListOpenSvgBtn:document.querySelector(".icon-rotate"),categoriesListOpen:document.querySelector(".event-category-list"),eventsList:document.querySelector(".events-list"),firstCategoryButton:document.querySelector(".categories__btn")};function L(t){const s=[{_id:"all",name:"Всі події",tags:[]},...t],r=s.map(({_id:o,name:e,tags:n},a)=>`<li class="event-category-item ${m(s.length,a)}" data-category="${o}">
          <p class="event-category-title">${e}</p>
          <p class="event-category-tags">${n.map(p=>`#${p}, `).join(" ")}</p>
        </li>`).join("");i.categoriesListEl.innerHTML=r,i.firstCategoryButton&&i.firstCategoryButton.classList.add("categories__btn--active")}i.categoriesListOpenSvgBtn.addEventListener("click",E);function E(t){i.categoriesListOpenSvgBtn.classList.toggle("icon-rotate-rotated"),i.categoriesListOpen.classList.toggle("is-hidden")}function u(t){const s=t.map(({_id:r,name:o,price:e,category:n,image:a})=>`<li class="event-item">
        <img
          src="${a}"
          alt="${o}"
          width="335"
          height="251"
        />
        <div class="event-info">
          <p class="event-title">${o}</p>
          <p class="event-text">${n.name}</p>
          <p class="event-price">від ${e.value} грн</p>
        </div>
        <button type="button" class="event-details-btn" data-event-id="${r}">Детальніше</button>
      </li>`).join("");i.eventsList.insertAdjacentHTML("beforeend",s)}async function w(){try{const t=await f();L(t);const{events:s}=await l();u(s)}catch(t){console.log("error events list",t)}}async function h(t){const s=t.target.closest(".event-category-item");if(!s)return;const r=s.dataset.category;if(r==="all"){const{events:o}=await l();i.eventsList.innerHTML="",u(o)}else{const e=(await f()).filter(c=>c._id===r),{events:n}=await l(),a=n.filter(c=>c.category.name===e[0].name);i.eventsList.innerHTML="",u(a)}}document.addEventListener("DOMContentLoaded",w);i.categoriesListEl.addEventListener("click",h);new y(".accordion-container",{showMultiple:!1});
//# sourceMappingURL=index.js.map
