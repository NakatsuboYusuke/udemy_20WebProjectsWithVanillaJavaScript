!function(){"use strict";var e=document.getElementById("form"),t=document.getElementById("username"),n=document.getElementById("email"),r=document.getElementById("password"),o=document.getElementById("password2");e.addEventListener("submit",(function(e){e.preventDefault(),[t,n,r,o].forEach((function(e){console.log(e.id),""===e.value.trim()?function(e,t){var n=e.parentElement;n.className="form-control error",n.querySelector("small").innerText=t}(e,"".concat(function(e){return e.id.charAt(0).toUpperCase()+e.id.slice(1)}(e)," is required")):function(e){e.parentElement.className="form-control success"}(e)}))}))}();
//# sourceMappingURL=main.js.map