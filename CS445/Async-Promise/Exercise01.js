/*Exercise 01
Change isPrime function below that takes in a single number parameter and returns a new promise.
Using setTimeout and after 500 milliseconds, the promise will either resolove or reject.
if the input is prime number, the promise resolves with {prime: true}.
if the input is not a prime number, it rejects with {prime: false}.
You may use the following function to determine if the number is prime or not

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
When you finish, test using the code below:

console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

// Output:
// start
// end
// { prime: true } */

const isPrimeHelper = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function isPrime(number) {
    console.log("Start");
    let prime = isPrimeHelper(number);

    return new Promise(function (resolve, reject) {
        if (prime) {
            setTimeout(() => { resolve(`{prime: true}`) }, 500)
        } else {
            setTimeout(() => { reject(`{prime: false}`) }, 500)
        }
    })
}

isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.log(err))
// .finally(e => console.log("It is solved"))
    console.log("End")


