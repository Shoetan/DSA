/* 
    problem: Given an interger n find the factorial of that interger
    What is factorial in maths : Factorial of a non negative number is the product of all positive intergers less than or equal to "n"


    NB : Factorial of 0 is 1

    factorial(4) = 4*3*2*1 = 24
    factorial(5) = 5*4*3*2*1 = 120

*/


/* 
    Solution Step by step 
    
    1. create a fuction named factorial to receive a parameter n
    2. Create a loop and set a condition for the loop to break only when index is greater than n
    3. Call the factorial function
    4. Print the answer
    
    
*/

function factorial (n){
    let factorial = 0

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i
    }
    console.log(factorial)
}