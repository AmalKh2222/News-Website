var i=0;

 var slideimage6 =["images//l2.jpg","images/l1.jpg","images//l3.jpg"];
 
 
 var slideshow6= function(){
 document.slideshow6.src= slideimage6[i];
 if (i<slideimage6.length-1)
 {
    i++; 
 }
 else {i=0;}
 setTimeout("slideshow6()", 2000);
 
 
 }
 
 
 
 
 
 
 
 
 slideshow6();
 