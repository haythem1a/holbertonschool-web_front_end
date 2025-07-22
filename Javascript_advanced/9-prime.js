function countPrimeNumbers() {
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };

    const start = performance.now();

    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    const end = performance.now();
    const executionTime = end - start;

    console.log(`Execution time of counting prime numbers was ${executionTime} milliseconds.`);
    return primeCount;
}

// Call the function
const primeCount = countPrimeNumbers();
console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
