let redcir=document.getElementById("redp");
let greencir=document.getElementById("grep");
let yellowcir=document.getElementById("yelp");
let car=document.getElementById("car");
// let carplacetop=car.offsetTop;
// let carplaceleft=car.offsetLeft;
// let carplace=car.offsetHeight;
// let carplacetop=car.offsetWidth;
//kooooijjbnk
const ti=500;
let rand=Math.floor((Math.random()*3)+1);
document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '38') {
        console.log("up arrow"+"   "+rand);
        car.style.top=(parseInt(car.style.top)-8)+'px';
        console.log(car.style.top+"  ");

        

    }
    else if (e.keyCode == '40') {
        console.log("down arrow"+"   "+rand);
        car.style.top=(parseInt(car.style.top)+8)+'px';
        console.log(car.style.top+"  ");

        // down arrow
    }
    else if (e.keyCode == '37') {
        console.log("left arrow"+"   "+rand);
        car.style.left=(parseInt(car.style.left)-8)+'px';

       // left arrow
    }
    else if (e.keyCode == '39') {
        console.log("right arrow"+"   "+rand);
        car.style.left-=(parseInt(car.style.left)+81)+'px';

       // right arrow
    }

}


 function changcolor(){
    random=Math.floor((Math.random()*3)+1);
    if(random===1)
    {
        
        redcir.style.backgroundColor="red";
        greencir.style.backgroundColor="darkgreen"
        yellowcir.style.backgroundColor="darkgoldenrod"        
    }
    else if(random===2)
    {
        
        redcir.style.backgroundColor="darkred";
        greencir.style.backgroundColor="darkgreen"
        yellowcir.style.backgroundColor="yellow"        
    }
    else if(random===3)
    {
        
        redcir.style.backgroundColor="darkred";
        greencir.style.backgroundColor="lightgreen"
        yellowcir.style.backgroundColor="darkgoldenrod"        
    }
     console.log(random);
     setTimeout(function(){changcolor()},ti);
     

 }
 changcolor();
