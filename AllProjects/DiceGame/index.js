document.querySelector("button").addEventListener("click",function(){
    // PLAYER ONE
    var onetosixnumber1 =Math.floor(Math.random()*6)+1;
    var Printimage = "../IMAGES/dice_"+onetosixnumber1+".png";
    var image1 = document.querySelector(".player_one img");
    image1.setAttribute("src",Printimage);
    // PLAYER TWO
    var onetosixnumber2 =Math.floor(Math.random()*6)+1;
    var Printimage = "../IMAGES/dice_"+onetosixnumber2+".png";
    var image2 = document.querySelector(".player_two img");
    image2.setAttribute("src", Printimage);
    // ACTION PERFORMED
    if(onetosixnumber1>onetosixnumber2)
        document.querySelector("h1").innerHTML="PLAYER ONE <span> WINs</span> 🦾";
    else if(onetosixnumber1===onetosixnumber2)
        document.querySelector("h1").innerHTML="DRAW 😑";
    else
        document.querySelector("h1").innerHTML="PLAYER TWO <span> WINs</span> 😎";
    });