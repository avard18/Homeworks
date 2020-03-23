let a=+prompt("a")    ;
let b=+prompt("b")    ;
let c=+prompt("c")    ;
let max     ;
if (a>b && a>c && b>c) {
    console.log(a, b, c)    ;
}
else if (b>a && b>c && a>c){
    console.log(b, a, c)    ; 

}
else if  (b>a && b>c && a<c){
    console.log(b, c, a)    ; 
}
else if  (b>a && b>c && a<c){
    console.log(b, c, a)    ; 
}
else if  (c>a && c>b && b>a){
    console.log(c, b, a)    ; 
}
else console.log(c, a, b)*/