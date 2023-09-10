const dialog = document.querySelector(".dialog");
const subBtn = document.querySelector(".subBtn");
const okBtn = document.querySelector(".okBtn");

subBtn.addEventListener("click",()=>{
    dialog.classList.add("show");
});
okBtn.addEventListener("click",()=>{
    dialog.classList.remove("show");
});