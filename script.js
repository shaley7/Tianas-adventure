/* Declare variables below to save the different sections (divs) of your story*/
let townButton=document.querySelector(".option-one");
let mamaButton=document.querySelector(".option-two");
let odiePicture=document.querySelector(".odie");
let townPicture=document.querySelector(".town");
let frogtiedPicture=document.querySelector(".frogtied");

let townDiv=document.querySelector(".option-one-screen");
let mamaDiv=document.querySelector(".option-two-screen");

let humanDiv=document.querySelector(".option-one-end");
let frogDiv=document.querySelector(".option-two-end");


let body=document.querySelector("body");
let title=document.querySelector(".title");

townButton.onclick=function(){
    townDiv.style.display="block";
    body.style="background-color: #90EE90";
    title.innerHTML="To the town!!";
};


mamaButton.onclick=function(){
    mamaDiv.style.display="block";
    body.style="background-color: #C4A484";
     title.innerHTML="To Ms.Odie!!";
};
let paragraph=document.querySelector("p");
paragraph.onmouseover=function(){
   paragraph.innerHTML="Welcome!";
};


    












/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


