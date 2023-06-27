    //script for change lang. and flags
let Ru1= document.querySelector('.Ru-1');
let Eng1= document.querySelector('.Eng-1');
    
    Ru1.onclick = function () {
        Ru1.classList.add('hide');
        Eng1.classList.add('active-language');
    }
    Eng1.onclick = function () {
        Ru1.classList.remove('hide');
        Eng1.classList.remove('active-language');
    }

let Ru2= document.querySelector('.Ru-2');
let Eng2= document.querySelector('.Eng-2');
    
    Ru2.onclick = function () {
        Ru2.classList.add('hide');
        Eng2.classList.add('active-language');
    }
    Eng2.onclick = function () {
        Ru2.classList.remove('hide');
        Eng2.classList.remove('active-language');
    }
   //script for modal-win and hide other section
let burger = document.querySelector('.burger');
let listShow =  document.querySelector('.modal-win');
let btnClose =  document.querySelector('.btn-X');
let hidden =  document.querySelector('.main-sec');

    burger.addEventListener('click', () =>  {
        listShow.classList.add('show');
        burger.classList.add('hide')
        btnClose.classList.add('show')
        hidden.classList.add('hide');
    })
    btnClose.addEventListener ('click', () =>  {
        listShow.classList.remove('show');
        btnClose.classList.remove('show');
        burger.classList.remove('hide');
        hidden.classList.remove('hide')
    })