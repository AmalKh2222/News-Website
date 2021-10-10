var i4=0;

 var slideimage5 =["images/a1.jpg","images/a2.jpg","images/a3.jpg"];
 
 
 var slideshow5= function(){
 document.slideshow5.src= slideimage5[i4];
 if (i4<slideimage5.length-1)
 {
    i4++; 
 }
 else {i4=0;}
 setTimeout("slideshow5()", 2000);
 
 
 }
 
 
 
 
 
 
 
 
 slideshow5();
 