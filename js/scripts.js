let burgerToggle=document.querySelector(".header__burger"),burgerMenu=document.querySelector(".menu__burger"),body=document.querySelector("body");const toggleClass=()=>{burgerMenu.classList.contains("disable")?(burgerMenu.classList.add("active"),burgerMenu.classList.remove("disable")):(burgerMenu.classList.add("disable"),burgerMenu.classList.remove("active"))};burgerToggle.addEventListener("click",e=>{e.stopPropagation(),toggleClass()}),burgerMenu.addEventListener("click",e=>{toggleClass()}),body.addEventListener("click",e=>{burgerMenu.classList.contains("active")&&(burgerMenu.classList.remove("active"),burgerMenu.classList.add("disable"))});