
/* 

 Problem : Given a number "n" find the first "n" elements of the fibonnaci sequence 

 In maths the fibonnaci sequence is the a sequence in which each number is the sum of two preceeding ones.

 The sequence commonly starts at 0 and 1 

 For example, given n = 2, the sequence is [0, 1]
 given n = 3, the sequence is [ 0,1,1]
 given n = 4 , the sequence is [0,1,1,2]
 given n = 5 , the sequence is [0,1,1,2,3]
 given n = 6 , the sequence is [0,1,1,2,3,5,]
 given n = 7, the sequence is [0,1,1,2,3,5,8]


*/

/* 
  Solution step by step
  1. Create a function
  2. pass in the parameter n
  3. create and empty array and assign the first two elements which are 0 and 1
  4. use a for loop to interate from the index position of 2
  5. The sequence then becomes the index position minus 1 added to the index postion minus 2
*/

function fibonnaci(n){

    let fibonnaci = [0,1]
    for (let index = 2; index < n; index++) {
        fibonnaci[index] = fibonnaci[index-1] + fibonnaci[index -2]
    }
    console.log(fibonnaci) 
}

fibonnaci(7)
fibonnaci (3)
fibonnaci(5)

/* The time complexity for finding the fibonnaci series of a given number n is linear because as the input size increases the time required also increases along side */
