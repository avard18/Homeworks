let b=+prompt("b");
let first = 0;
let prev = 1;
let next = 0 ;
while(next<b) {
   next = first + prev;
   first=prev;
   prev=next;
   console.log(next);