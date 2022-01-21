/** Sum primes */


function sumPrimes (num){
    let prime = []; //result
        for(let i=2 ;i<=num;i++){ //
            if(prime.every((prime) => i % prime !== 0))
            prime.push(i);
    }
    return prime.reduce((sum, prime) => sum + prime,0);
}

console.log(sumPrimes(10))

