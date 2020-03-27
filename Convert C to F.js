
function farenhait (){
   let a = +prompt("Ջերմաստիճանը ցելսիուսով");
   let b = +prompt("Ջերմաստիճանը ֆարենհայտով");
   if (a>=0){
       document.write(a+"℃=",(a*9/5)+32+"°F");
   }
    if (b>=0) {
   document.write("<br/>"+b+"°F=",(b-32)*5/9+"℃");}
}
farenhait();


