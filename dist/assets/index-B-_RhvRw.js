(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const n=[{category:"Success Stories",categoryColor:"#ef4444",title:"How I Lost 50 Pounds and Kept It Off for 3 Years",description:"A real journey of transformation through sustainable lifestyle changes. Learn the strategies that made lasting change possible.",image:"https://images.pexels.com/photos/4474035/pexels-photo-4474035.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Oct 2, 2025",readTime:"9 min read"},{category:"Weight Loss",categoryColor:"#ef4444",title:"10 Science-Backed Strategies for Sustainable Weight Loss",description:"Discover evidence-based methods that actually work for long-term weight management without crash dieting or extreme measures.",image:"https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Oct 1, 2025",readTime:"7 min read"},{category:"Healthy Recipes",categoryColor:"#ef4444",title:"15 Delicious Low-Carb Dinner Recipes",description:"Enjoy incredible flavors while staying on track with your health goals. These recipes prove low-carb eating doesn't mean sacrificing taste.",image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Sep 30, 2025",readTime:"8 min read"},{category:"Weight Loss",categoryColor:"#ef4444",title:"The Truth About Intermittent Fasting",description:"Separating fact from fiction about one of the most popular eating patterns. Is intermittent fasting right for you?",image:"https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Sep 29, 2025",readTime:"6 min read"},{category:"Nutrition",categoryColor:"#ef4444",title:"Mediterranean Diet: Your Complete Guide to Heart-Healthy Eating",description:"Learn why the Mediterranean diet is considered one of the healthiest eating patterns and how to incorporate it into your lifestyle.",image:"https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Sep 28, 2025",readTime:"6 min read"},{category:"Fitness Tips",categoryColor:"#ef4444",title:"HIIT Workouts: Maximum Results in Minimum Time",description:"Short on time? High-Intensity Interval Training can help you burn fat, build endurance, and improve cardiovascular health in just 20-30 minutes.",image:"https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800",date:"Sep 26, 2025",readTime:"5 min read"}];function l(e){return`
    <article class="article-card">
      <div class="article-image">
        <img src="${e.image}" alt="${e.title}" loading="lazy">
      </div>
      <div class="article-content">
        <span class="article-category" style="color: ${e.categoryColor}">${e.category}</span>
        <h2 class="article-title">${e.title}</h2>
        <p class="article-description">${e.description}</p>
        <div class="article-meta">
          <span class="article-date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            ${e.date}
          </span>
          <span class="article-read-time">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${e.readTime}
          </span>
        </div>
      </div>
    </article>
  `}function c(e="All Posts"){const r=document.getElementById("articlesGrid");let s=n;e!=="All Posts"&&(s=n.filter(o=>o.category===e)),r.innerHTML=s.map(o=>l(o)).join("")}document.addEventListener("DOMContentLoaded",()=>{c();const e=document.querySelectorAll(".nav-btn");e.forEach(r=>{r.addEventListener("click",function(){e.forEach(o=>o.classList.remove("active")),this.classList.add("active");const s=this.textContent.trim();c(s)})})});
