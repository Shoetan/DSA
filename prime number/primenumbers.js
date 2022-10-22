/* 
    Problem : Given a natural number "n" determine if the number is a prime number or not
    Prime numbers are numbers that are only divisble without a remainder by it self and 1.
    Basically prime numbers have only two factors that is what makes it a prime number

*/


/* 
    Solution :

    Step 1: Create a function called checkPrime.
    Step 2: pass in n as the parameter of the function
    step 3: Check if the number is 1
    step 4: if number ins greater than 1
    Step 5: If the number is divisble by two without any remainder set the isPrime variable to false

*/

function checkPrime (n)


{

    
let isPrime = true

    if (n == 1)
    {
        console.log("1 is not a prime number")
    }

    else if ( n>1 ) {
        for (let index = 2; index < n; index++) {
            if (n%index == 0) {
                isPrime = false
                break
            }
            
        }

        if (isPrime) {
            console.log(`${n} Number is a prime number`)
        }
        else  {
            console.log(`${n} Number is not a prime number`)
    }

}
}

checkPrime(6)