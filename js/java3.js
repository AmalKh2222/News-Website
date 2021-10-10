 
 var i3=0;

 var slideimage3 =["images/back17.PNG","images/back8.PNG","images/back7.PNG"];
 
 
 var slideshow3= function(){
 document.slideshow3.src= slideimage3[i3];
 if (i3<slideimage3.length-1)
 {
    i3++; 
 }
 else {i3=0;}
 setTimeout("slideshow3()", 2000);
 
 
 }
 
 
 
 
 
 
 
 
 slideshow3();
 