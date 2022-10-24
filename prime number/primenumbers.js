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

    if (n < 2) 
    {
        return false
    }

    for(let I = 2; I < n; I++)
    {
        if (n % I == 0)
        {
            return false
        }
        return true
    }
}

console.log(checkPrime(6))
console.log(checkPrime(7))

//Big O of the function is  O(n). As the number of n increases the time it takes increases also