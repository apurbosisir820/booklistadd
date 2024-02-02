

let i=0
   
      //-------first book list start script-------
     let iactive = document.querySelector('.iactive')
   
     let active = document.querySelector('.active')
      let viewcart = document.querySelector('.viewcart')
      let Add1 = document.querySelector('.Add1 ')
      let Add2 = document.querySelector('.Add2 ')
      let Add3 = document.querySelector('.Add3 ')
      let Add4 = document.querySelector('.Add4 ')
      let pre = document.querySelector('.pre')
      let badge = document.querySelector('.badge')
      

    

      

      
  ///---Function Declear;    
      
     
function AddBook1() {
  
  let forms1 = document.querySelector('.books1')
  let formss1 = document.querySelector(' .bookss1')
  let Price1 = document.querySelector(' .Price1')
  let bookssss1 = document.querySelector(' .bookssss1')
  
  
if(badge.value=1){

  i++
  badge.innerHTML = i
  //  number1.innerHTML = i

 let aarr1 = [`<img style='width:120px' class="imgs  " src="./image/b1.jpg" alt=""><br> ${forms1.value}<br>${formss1.value} <br>${Price1.value}<br> `];
  aarr1.push(`${bookssss1.value}<br>`);
  
    //  alert('Added Successful, if you add more go to View Cart')
     

//----Localstorage------;
if(badge.innerHTML = i){
      let forms1 = document.querySelector('.books1').value
  let formss1 = document.querySelector(' .bookss1').value
  let Price1 = document.querySelector(' .Price1').value
  let bookssss1 = document.querySelector(' .bookssss1').value;
  // 
  
         let BookList1;
         if(localStorage.getItem('BookList1')==null){
          BookList1 = []
             console.log('succ');
            }
            else{
              BookList1 = JSON.parse(localStorage.getItem("BookList1"))
                console.log('error');
            }
            BookList1.push({
              forms1:forms1,
              formss1:formss1,
              Price1:Price1,
              bookssss1:bookssss1,
            })
           
    localStorage.setItem('BookList1', JSON.stringify(BookList1));
   
    
   
     }




  }


}
//---2nd Book Add---;
function AddBook2() {
   
  let forms2 = document.querySelector('.books2')
  let formss2 = document.querySelector(' .bookss2')
  let Price2 = document.querySelector(' .Price2')
  let bookssss2 = document.querySelector(' .bookssss2')
  

if(badge.value=1){
let b = 0;
b++
  i++
  badge.innerHTML = i
   

 let aarr2 = [`<img style='width:120px' class="imgs  " src="./image/b2.jpg" alt=""><br> ${forms2.value}<br>${formss2.value} <br>${Price2.value}<br> `];
  aarr2.push(`${bookssss2.value}<br>`);



  
    
     if(badge.innerHTML = i){
      let forms2 = document.querySelector('.books2').value
  let formss2 = document.querySelector(' .bookss2').value
  let Price2 = document.querySelector(' .Price2').value
  let bookssss2 = document.querySelector(' .bookssss2').value;
  // 
  //----Localstorage------;
         let BookList2;
         if(localStorage.getItem('BookList2')==null){
          BookList2 = []
             console.log('succ');
            }
            else{
              BookList2 = JSON.parse(localStorage.getItem("BookList2"))
                console.log('error');
            }
            BookList2.push({
              forms2:forms2,
              formss2:formss2,
              Price2:Price2,
              bookssss2:bookssss2,
            })
           
    localStorage.setItem('BookList2', JSON.stringify(BookList2));
   
    
   
     }
    
  }
}


 
//---3rd Book Add---;



function AddBook3() {
  
  let forms3 = document.querySelector('.books3')
  let formss3 = document.querySelector(' .bookss3')
  let Price3= document.querySelector(' .Price3')
  let bookssss3 = document.querySelector(' .bookssss3')
  
if(badge.value=1){

  i++
  badge.innerHTML = i
   

 let aarr3 = [`<img style='width:120px' class="imgs  " src="./image/b3.jpg" alt=""><br> ${forms3.value}<br>${formss3.value} <br>${Price3.value}<br> `];
  aarr3.push(`${bookssss3.value}<br>`);

  



    


//----Localstorage------;

if(badge.innerHTML = i){
      let forms3 = document.querySelector('.books3').value
  let formss3 = document.querySelector(' .bookss3').value
  let Price3 = document.querySelector(' .Price3').value
  
  let bookssss3 = document.querySelector(' .bookssss3').value;

         let BookList3;
         if(localStorage.getItem('BookList3')==null){
          BookList3 = []
             console.log('succ');
            }
            else{
              BookList3 = JSON.parse(localStorage.getItem("BookList3"))
                console.log('error');
            }
            BookList3.push({
              forms3:forms3,
              formss3:formss3,
                Price3:Price3,
                bookssss3:bookssss3,
            })
           
    localStorage.setItem('BookList3', JSON.stringify(BookList3));
    
    
  }
}


}
  
function AddBook4() {
  
  let forms4 = document.querySelector('.books4')
  let formss4 = document.querySelector(' .bookss4')
  let Price4= document.querySelector(' .Price4')
  let bookssss4 = document.querySelector(' .bookssss4')
 
if(badge.value=1){

  i++
  badge.innerHTML = i
   

 let aarr = [`<img style='width:120px' class="imgs  " src="./image/b4.jpg" alt=""><br> ${forms4.value}<br>${formss4.value} <br>${Price4.value}<br> `];
  aarr.push(`${bookssss4.value}<br>`);






//----Localstorage------;

if(badge.innerHTML = i){
      let forms4 = document.querySelector('.books4').value
  let formss4 = document.querySelector(' .bookss4').value
  let Price4 = document.querySelector(' .Price4').value
  let bookssss4 = document.querySelector(' .bookssss4').value;
  // 
  
         let BookList4;
         if(localStorage.getItem('BookList4')==null){
          BookList4 = []
             
            }
            else{
              BookList4 = JSON.parse(localStorage.getItem("BookList4"))
                console.log('error');
            }
            BookList4.push({
              forms4:forms4,
              formss4:formss4,
              Price4:Price4,
              bookssss4:bookssss4,
            })
           
    localStorage.setItem('BookList4', JSON.stringify(BookList4));
    
    
  }
  
}


}
  
function showData1(){
  let forms1 = document.querySelector('.books1').value
  let formss1 = document.querySelector(' .bookss1').value
  let Price1 = document.querySelector(' .Price1').value
  let bookssss1 = document.querySelector(' .bookssss1').value;

    let BookList1;
    if(localStorage.getItem('BookList1')==null){
        BookList1 = []
    }
    else{
        BookList1 = JSON.parse(localStorage.getItem("BookList1"))
    }
    let aarr1 = '';
    BookList1.forEach(function(e, index){
      
  aarr1 = `<img style='width:120px' class="imgs" src="./image/b2.jpg" alt="">`
 aarr1+='<p>'+forms1+'</p>'
 aarr1+='<p>'+formss1+'</p>'
 aarr1+='<p>'+Price1+'</p>'
 aarr1+='<p>'+bookssss1+'</p>'
 aarr1 += ` <div class="col resutls1a1">
 <span class="btn btn-success minus1">-</span>
 <span class="btn btn-success number1">0</span>
 <span class="btn btn-success plus1">+</span>
 <button class='btn btn-outline-warning ms-4 remove1'>Remove</button>
</div>`
 
        // console.log(dom);
        
      });
      
    document.querySelector('.iactives1').innerHTML = aarr1 


  }
  document.onload = showData1()



function showData2(){
  let forms2 = document.querySelector('.books2').value
  let formss2 = document.querySelector(' .bookss4').value
  let Price2 = document.querySelector(' .Price2').value
  let bookssss2 = document.querySelector(' .bookssss2').value;

    let BookList2;
    if(localStorage.getItem('BookList2')==null){
        BookList2 = []
    }
    else{
        BookList2 = JSON.parse(localStorage.getItem("BookList2"))
    }
    let aarr2 = '';
    BookList2.forEach(function(e, index){
      
  aarr2 = `<img style='width:120px' class="imgs" src="./image/b1.jpg" alt="">`
 aarr2+='<p>'+forms2+'</p>'
 aarr2+='<p>'+formss2+'</p>'
 aarr2+='<p>'+Price2+'</p>'
 aarr2+='<p>'+bookssss2+'</p>'
 aarr2 += ` <div class="col resutls2a2">
 <span class="btn btn-success minus2">-</span>
 <span class="btn btn-success number2">0</span>
 <span class="btn btn-success plus2">+</span>
 <button class='btn btn-outline-danger ms-4 remove2'>Remove</button>
</div>`
 
})
document.querySelector('.iactives2').innerHTML = aarr2 
  }
  document.onload = showData2()



function showData4(){
  
  let forms4 = document.querySelector('.books4').value
  let formss4 = document.querySelector(' .bookss4').value
  let Price4 = document.querySelector(' .Price4').value
  let bookssss4 = document.querySelector(' .bookssss4').value;

    let BookList4;
    if(localStorage.getItem('BookList4')==null){
      BookList4 = []
    }
    else{
      BookList4 = JSON.parse(localStorage.getItem("BookList4"))
    }
    let aarr4 = '';
    BookList4.forEach(function(e, index){
      
  aarr4 = `<img style='width:120px' class="imgs" src="./image/b4.jpg" alt="">`
 aarr4+='<p>'+forms4+'</p>'
 aarr4+='<p>'+formss4+'</p>'
 aarr4+='<p>'+Price4+'</p>'
 aarr4+='<p>'+bookssss4+'</p>'
 aarr4 += ` <div class="col resutls4a4">
 <span class="btn btn-success minus4">-</span>
 <span class="btn btn-success number4">0</span>
 <span class="btn btn-success plus4">+</span>
 <button onclick="deleteData('+ index +')" class='btn btn-outline-danger ms-4 remove4'>Remove</button>
</div>`
 

})
document.querySelector('.iactives4').innerHTML = aarr4 
  }
  document.onload = showData4()

  // document.addEventListener('DOMContentLoaded',showData());







  
function showData3(){
  let forms3 = document.querySelector('.books3').value
  let formss3 = document.querySelector(' .bookss3').value
  let Price3 = document.querySelector(' .Price3').value
  let bookssss3 = document.querySelector(' .bookssss3').value;

    let BookList3;
    if(localStorage.getItem('BookList3')==null){
      BookList3 = []
    }
    else{
      BookList3 = JSON.parse(localStorage.getItem("BookList3"))
    }
 
    let aarr3 = '';

    BookList3.forEach(function(e,index){
     
  aarr3 = `<img style='width:120px' class="imgs" src="./image/b3.jpg" alt="">`
 aarr3+='<p>'+forms3+'</p>'
 aarr3+='<p>'+formss3+'</p>'
 aarr3+='<p>'+Price3+'</p>'
 aarr3+='<p>'+bookssss3+'</p>'
 aarr3 += ` <div class="col resutls3a3">
 <span class="btn btn-success minus3">-</span>
 <span class="btn btn-success number3">0</span>
 <span class="btn btn-success plus3">+</span>
 <button  class='btn btn-outline-danger ms-4 remove3' >Remove</button>
</div>`

  




})
document.querySelector('.iactives3').innerHTML = aarr3 
}

  
  document.onload = showData3()

  
  // document.addEventListener('DOMContentLoaded',showData());



////---Cart  Declear--;
 viewcart.addEventListener('click',()=>{
    if  (badge.value =i){
   +iactive.classList.add('inactive')
   +active.classList.add('abc')

   }else{
   alert('Pleas Add A new Book')
  
  }
})
pre.addEventListener('click', ()=>{
        iactive.classList.remove('inactive')
        active.classList.remove('abc')
        resutls4.innerHTML = aarr
      })    







      let a=0
      let b = 0
      let c = 0
      let d = 0
      
 Add1.addEventListener('click', ()=>{
  let cartIcon = document.querySelector('.fa-cart-shopping')
cartIcon.classList.add('fa-cart-shoppings')
  AddBook1()
  
  showData1()
  let number1 = document.querySelector('.number1');
  a++
  number1.innerHTML = a

  let plus1 = document.querySelector('.plus1')
  plus1.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number1= document.querySelector('.number1');
    a++
    number1.innerHTML = a;
    badge.innerHTML = a;  
  })

  let minus1 = document.querySelector('.minus1')
  minus1.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number1 = document.querySelector('.number1');
    
    if(number1.innerHTML <1){
      alert('Please Add One Book')
    }else{
      a--             ; //Add1 ---> a ;
 number1.innerHTML = a
    badge.innerHTML = a
    }    
 })
let remove1 = document.querySelector('.remove1')

remove1.addEventListener('click', (index)=>{
  document.querySelector('.iactives1').remove()
  
  let BookList1;
  if(localStorage.getItem('BookList1')==null){
    BookList1 = []
  }
  else{
    BookList1 = JSON.parse(localStorage.getItem("BookList1"))
  } 
  BookList1.splice(index,1);
  localStorage.setItem("BookList1", JSON.stringify(BookList1))
  showData1()
  
 }
 )
 
})

 Add2.addEventListener('click', ()=>{
  let cartIcon = document.querySelector('.fa-cart-shopping')
cartIcon.classList.add('fa-cart-shoppings')
  AddBook2()
  
  showData2()
  let number2 = document.querySelector('.number2');
  b++
  number2.innerHTML = b

  let plus2 = document.querySelector('.plus2')
  plus2.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number2= document.querySelector('.number2');
    b++
    number2.innerHTML = b;
    badge.innerHTML = b;  
  })

  let minus2 = document.querySelector('.minus2')
  minus2.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number2 = document.querySelector('.number2');
    
    if(number2.innerHTML <1){
      alert('Please Add One Book')
    }else{
      b--
 number2.innerHTML = b
    badge.innerHTML = b
    }    
 })
let remove2 = document.querySelector('.remove2')

remove2.addEventListener('click', (index)=>{
  document.querySelector('.iactives2').remove()
  
  let BookList2;
  if(localStorage.getItem('BookList2')==null){
    BookList2 = []
  }
  else{
    BookList2 = JSON.parse(localStorage.getItem("BookList2"))
  } 
  BookList2.splice(index,1);
  localStorage.setItem("BookList2", JSON.stringify(BookList2))
  showData2()
  
 }
 )
 
})



 Add3.addEventListener('click', ()=>{
  let cartIcon = document.querySelector('.fa-cart-shopping')
cartIcon.classList.add('fa-cart-shoppings')
  AddBook3()
  
  showData3()
  let number3 = document.querySelector('.number3');
  c++
  number3.innerHTML = c

  let plus3 = document.querySelector('.plus3')
  plus3.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number3= document.querySelector('.number3');
    c++
    number3.innerHTML = c;
    badge.innerHTML = c;  
  })

  let minus3 = document.querySelector('.minus3')
  minus3.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number3 = document.querySelector('.number3');
    
    if(number3.innerHTML <1){
      alert('Please Add One Book')
    }else{
      c--
 number3.innerHTML = c;
    badge.innerHTML = c;
    }    
 })
let remove3 = document.querySelector('.remove3')

remove3.addEventListener('click', (index)=>{
  document.querySelector('.iactives3').remove()
  
  let BookList3;
  if(localStorage.getItem('BookList3')==null){
      BookList3 = []
  }
  else{
      BookList3 = JSON.parse(localStorage.getItem("BookList3"))
  } 
  BookList3.splice(index,1);
  localStorage.setItem("BookList3", JSON.stringify(BookList3))
  showData3()
  
 }
 )
 
})



Add4.addEventListener('click', ()=>{
  let cartIcon = document.querySelector('.fa-cart-shopping')
cartIcon.classList.add('fa-cart-shoppings')
  AddBook4()
  
  showData4()
  let number4 = document.querySelector('.number4');
  d++
  number4.innerHTML = d

  let plus4 = document.querySelector('.plus4')
  plus4.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number4 = document.querySelector('.number4');
    d++
    number4.innerHTML = d;
    badge.innerHTML = d;  
  })

  let minus4 = document.querySelector('.minus4')
  minus4.addEventListener('click', ()=>{
    let badge = document.querySelector('.badge')
    let number4 = document.querySelector('.number4');
    
    if(number4.innerHTML <1){
      alert('Please Add One Book')
    }else{
      d--
 number4.innerHTML = d
    badge.innerHTML = d
    }    
 })
let remove4 = document.querySelector('.remove4')

remove4.addEventListener('click', (index)=>{
  document.querySelector('.iactives4').remove()
  
  let BookList4;
  if(localStorage.getItem('BookList4')==null){
      BookList4 = []
  }
  else{
      BookList4 = JSON.parse(localStorage.getItem("BookList4"))
  } 
  BookList4.splice(index,1);
  localStorage.setItem("BookList4", JSON.stringify(BookList4))
  showData4()
  
 }
 )
 
})
