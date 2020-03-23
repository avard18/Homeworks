let produnct =prompt("For shoose press 0, for dress press 1")   ;
let paymentMethod=prompt("For cash press 0 for card press 1")   ;
let value   ;
if (paymentMethod=0){
      value=prompt("Please pay") ;
}
 else if (paymentMethod=1)      {
     prompt("Insert Card Number")   ;
      value= prompt("Please pay") ;
 }

 if (value>100000) {
     alert ("Your sale is 30%, You must pay"+value*0.7) ;

 }
 if (paymentMethod=1){
    alert ("Your sale is 5%, You must pay"+value*0.95) ;
 }
 
 if (produnct=0 ){
    alert ("Your sale is 10%, You must pay"+value*0.9) ;
 }
 else {
     alert ("You must pay "+value ) ;
 }