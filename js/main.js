let flag=true;
let mobile=document.querySelector('.mobile');
let nav=document.querySelector('.nav');
mobile.addEventListener('click',function (){
    if (flag===true){
        nav.style.display='block';
        flag=false;
    }else {
        nav.style.display='none';
        flag=true;
    }
})