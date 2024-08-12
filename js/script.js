window.addEventListener("load", function(){
    // 메뉴 기능
    const nav = this.document.querySelector(".nav")
    const btMenu = this.document.querySelector(".bt-menu")
    const navClose = this.document.querySelector(".nav-close")
   btMenu.addEventListener("click" , function(){
    nav.classList.add("nav-active")
   })
   navClose.addEventListener("click" , ()=>{
    nav.classList.remove("nav-active")
   })
//    nav 영역에 마우스가 벗어나면 nav-active 비활성화한다.

nav.addEventListener("mouseleave" , ()=>{
    nav.classList.remove("nav-active")
})
// 언어 펼침 기능
const languageLi = this.document.querySelector(".language li")
const language = this.document.querySelector(".language")
const langBox = this.document.querySelector(".language-box")
langBox.addEventListener("click" , function(){
    langBox.classList.toggle("language-box-active")
})
//langageLi에 transition 기능
setTimeout(function(){
    languageLi.computedStyleMap.transition = "all 0.2s"}, 500)
})