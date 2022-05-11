const isPrimeHelper = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function isPrime(number) {
    let prime = isPrimeHelper(number)
    return new Promise(function (resolve, reject) {
        if (prime) {
            setTimeout(() => { resolve(`{prime: true}`) }, 500)
        } else {
            setTimeout(() => { reject(`{prime: false}`) }, 500)
        }
    })

}

async function isPrimeAsync() {
    try {
        const output = await isPrime(7);
        console.log(output)
    } catch (err) {
        console.log(err)
    }
}
console.log("Start");
isPrimeAsync();
console.log("End");
