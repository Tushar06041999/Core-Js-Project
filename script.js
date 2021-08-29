let id1=document.getElementById("btn1");
let id2=document.getElementById("btn2");
let id3=document.getElementById("btn3");
let id4=document.getElementById("btn4");
let id5=document.getElementById("btn5");
let id6=document.getElementById("btn6");
let id7=document.getElementById("btn7");
let firstContainer=document.getElementById("first-container");



function paraM(n){
    n.addEventListener("click",function(){
        if(n===id1){
            document.body.style.backgroundColor="black";
        }
        else if(n===id2){
            document.body.style.backgroundColor="tomato";

        }
        else if(n===id3){
            document.body.style.backgroundColor="gray";

        }
        else if(n===id4){
            document.body.style.backgroundColor="red";

        }
        else if(n===id5){
            document.body.style.backgroundColor="green";

        }
        else if(n===id6){
            document.body.style.backgroundColor="yellow";

        }
        else if(n===id7){
            document.body.style.backgroundColor="white";

        }
        else{
            document.body.style.backgroundColor="white";

        }
      })
}
paraM(id1);
paraM(id2);
paraM(id3);
paraM(id4);
paraM(id5);
paraM(id6);
paraM(id7);

// odd And Even NUmber section is start from here

let text1=document.getElementById("text1");
let text2=document.getElementById("text2");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");


btn8.addEventListener("click",function(){
    if(text1.value%2===0){
        text2.value=` ${text1.value}  is an Even Number `;
       
        
    }
    else{
        text2.value=`${text1.value} is an Odd Number `;
    }
})

btn9.addEventListener("click",function(){
    text1.value="";
    text2.value="";
})


// vowel detection start from here

let text3=document.getElementById("text3");
let text4=document.getElementById("text4");
let btn10=document.getElementById("btn10");
let btn11=document.getElementById("btn11");
btn10.addEventListener("click",function(){
    if(text3.value[0]=="a" || text3.value[0]=="A"){
        text4.value=` ${text3.value} is an Vowel`;
    }
    else if(text3.value[0]=="e" || text3.value[0]=="E" ){
        text4.value=` ${text3.value} is an Vowel`;
    }
    else if(text3.value[0]=="i" || text3.value[0]=="I"){
        text4.value=` ${text3.value} is an Vowel`;
    }
    else if(text3.value[0]=="o" || text3.value[0]=="O"){
        text4.value=` ${text3.value} is an Vowel`;
    }
    else if(text3.value[0]=="u" || text3.value[0]=="U"){
        text4.value=` ${text3.value} is an Vowel`;
    }
    else{
        text4.value=` ${text3.value} is not a Vowel`;
    }
})

btn11.addEventListener("click",function(){
    text3.value="";
    text4.value="";
})


















    
