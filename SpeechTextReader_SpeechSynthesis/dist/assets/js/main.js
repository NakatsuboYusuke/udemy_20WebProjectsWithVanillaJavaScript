!function(){"use strict";var e=document.querySelector("main"),t=document.getElementById("voices"),n=document.getElementById("text"),s=document.getElementById("read"),a=document.getElementById("toggle"),i=document.getElementById("close");[{image:"/assets/img/drink.jpg",text:"I'm Thirsty"},{image:"/assets/img/food.jpg",text:"I'm Hungry"},{image:"/assets/img/tired.jpg",text:"I'm Tired"},{image:"/assets/img/hurt.jpg",text:"I'm Hurt"},{image:"/assets/img/happy.jpg",text:"I'm Happy"},{image:"/assets/img/angry.jpg",text:"I'm Angry"},{image:"/assets/img/sad.jpg",text:"I'm Sad"},{image:"/assets/img/scared.jpg",text:"I'm Scared"},{image:"/assets/img/outside.jpg",text:"I Want To Go Outside"},{image:"/assets/img/home.jpg",text:"I Want To Go Home"},{image:"/assets/img/school.jpg",text:"I Want To Go To School"},{image:"/assets/img/grandma.jpg",text:"I Want To Go To Grandmas"}].forEach((function(t){var n=document.createElement("div"),s=t.image,a=t.text;n.classList.add("box"),n.innerHTML='\n    <img src="'.concat(s,'" alt="').concat(a,'" />\n    <p class="info">').concat(a,"</p>\n  "),n.addEventListener("click",(function(){g(a),d(),n.classList.add("active"),setTimeout((function(){return n.classList.remove("active")}),800)})),e.appendChild(n)}));var c=new SpeechSynthesisUtterance,o=[];function m(){(o=speechSynthesis.getVoices()).forEach((function(e){var n=document.createElement("option");n.value=e.name,n.innerHTML="".concat(e.name," ").concat(e.lang),t.appendChild(n)}))}function g(e){c.text=e}function d(){speechSynthesis.speak(c)}speechSynthesis.addEventListener("voiceschanged",m),a.addEventListener("click",(function(){document.getElementById("text-box").classList.add("show")})),i.addEventListener("click",(function(){document.getElementById("text-box").classList.remove("show")})),t.addEventListener("change",(function(e){c.voice=o.find((function(t){return t.name===e.target.value}))})),s.addEventListener("click",(function(){g(n.value),d()})),m()}();
//# sourceMappingURL=main.js.map