!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");t.addEventListener("click",(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled")}));var n=null}();
//# sourceMappingURL=01-color-switcher.3b06d0a5.js.map
