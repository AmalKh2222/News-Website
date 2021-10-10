 
 var i2=0;

 var slideimage1 =["images/t1.jpg","images/t2.jpg","images/t3.jpg","images/t4.jpg"];
 
 
 var slideshow1= function(){
 document.slideshow1.src= slideimage1[i2];
 if (i2<slideimage1.length-1)
 {
    i2++; 
 }
 else {i2=0;}
 setTimeout("slideshow1()", 2000);
 
 
 }
 
 
 
 
 
 
 
 
 slideshow1();
 