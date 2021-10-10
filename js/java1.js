var i1=0;

var slideimage2 =["images/W2.PNG","images/W3.PNG","images/W4.PNG","images/w2.jpg","images/w1.jpg"];


var slideshow2= function(){
document.slideshow2.src= slideimage2[i1];
if (i1<slideimage2.length-1)
{
   i1++; 
}
else {i1=0;}
setTimeout("slideshow2()", 2000);


}

slideshow2();