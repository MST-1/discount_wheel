
const wheels=document.querySelector('.wheel');
const spn_btn=document.querySelector('.spin_box');

let num=0;


const spin=()=>{

 num=num+1;

 if(num==1){
   
    wheels.style.transform = "rotate("+(360*4)+"deg)";
    
   
 }
 else{
    const value=Math.ceil(Math.random()*3600);
   
    console.log(value);
    wheels.style.transform = "rotate("+value+"deg)";
 }



}