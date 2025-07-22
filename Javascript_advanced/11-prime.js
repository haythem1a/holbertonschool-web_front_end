function countPrimeNumbers() {
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    };

    let primeCount = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    return primeCount;
}

const runCountingPrimesWithTimeout = () => {
    const start = performance.now();

    let count = 0;
    const runCalculation = () => {
        if (count < 100) {
            countPrimeNumbers();
            count++;
            setTimeout(runCalculation, 0);
        } else {
            const end = performance.now();
            const executionTime = end - start;
            console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
        }
    };

    runCalculation();
};

// Call the function to run the test
runCountingPrimesWithTimeout();
