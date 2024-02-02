let badgecount = document.querySelector('.badgecount')
let btnCart1 = document.getElementById('btnCart1')
let btnCart2 = document.querySelector('#btnCart2')
let btnCart3 = document.querySelector('#btnCart3')
let btnCart4 = document.querySelector('#btnCart4')
let cart1 = document.querySelector('.cart1')


 let x =0;
function F1(){
        x++
   badgecount.innerHTML = x
  
}


btnCart1.addEventListener('click', ()=>{
   F1()
   
   console.log("cart1");
})
btnCart2.addEventListener('click', ()=>{
   F1()
})
btnCart3.addEventListener('click', ()=>{
   F1()
})
btnCart4.addEventListener('click', ()=>{
   F1()
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
