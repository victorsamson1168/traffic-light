let redcir=document.getElementById("redp");
let greencir=document.getElementById("grep");
let yellowcir=document.getElementById("yelp");
const ti=500;

 function changcolor(){
    let rand=Math.floor((Math.random()*3)+1);
    if(rand===1)
    {
        
        redcir.style.backgroundColor="red";
        greencir.style.backgroundColor="darkgreen"
        yellowcir.style.backgroundColor="darkgoldenrod"        
    }
    else if(rand===2)
    {
        
        redcir.style.backgroundColor="darkred";
        greencir.style.backgroundColor="darkgreen"
        yellowcir.style.backgroundColor="yellow"        
    }
    else if(rand===3)
    {
        
        redcir.style.backgroundColor="darkred";
        greencir.style.backgroundColor="lightgreen"
        yellowcir.style.backgroundColor="darkgoldenrod"        
    }
     console.log(rand);
     setTimeout(function(){changcolor()},ti);
     

 }
 changcolor();