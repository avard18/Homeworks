

function calc(a, b, c) {
         if (c === '+') {
             document.write(`${a} + ${b} = ${a + b}`)
         }
         else if (c === '-') {
             document.write(`${a} - ${b} = ${a - b}`)
         }
        else if (c === '*') {
            document.write(`${a} * ${b} = ${a * b}`)
         }
         else if (c === '/') {
             document.write(`${a} / ${b} = ${a / b}`)
         }
     }

     calc(4, 7, '+')