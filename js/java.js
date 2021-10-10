 
 var i=0;

var slideimage =["images/ph.PNG","images/ph3.PNG","images/ph1.PNG"];


var slideshow= function(){
document.slideshow.src= slideimage[i];
if (i<slideimage.length-1)
{
   i++; 
}
else {i=0;}
setTimeout("slideshow()", 2000);


}








slideshow();
