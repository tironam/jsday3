let 

for (i  = 0; i < 100; i++) {
        let num = i
        console.log( num % 3 === 0 ? 'Fizz' : num % 5 === 0? 'Buzz' : num % 3 && 5 === 0 ? 'FizzBuzz' )
}