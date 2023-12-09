
////navbar
const menu= document.querySelector(".menu")
const closeNav= document.querySelector(".close")
const nav= document.querySelector("nav")
const navLi= document.querySelectorAll("nav li")

menu.addEventListener('click', ()=>{
	nav.classList.add('active')
})
closeNav.addEventListener('click', ()=>{
	nav.classList.remove('active')
})
navLi.forEach((navli)=>{
	navli.addEventListener("click", ()=>{
		nav.classList.remove('active')
	})
})



// //email - links 
const emailBtn = document.querySelectorAll(".emailBtn")
const email = document.querySelector(".email")
const formClose = document.querySelector(".form-close")
emailBtn.forEach((a) =>{
	a.addEventListener('click',() =>{
		email.classList.add('active')
	})
})
formClose.addEventListener('click',() =>{
	email.classList.remove('active')
})


