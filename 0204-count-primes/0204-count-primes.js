/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 1) {
        return 0;
    }
    
    const isPrimeNum = Array(n).fill(true);
    
    for (let i = 2;i<= Math.sqrt(n);i++) {
        if (isPrimeNum[i]) {
            let j = i + i;
            while(j<isPrimeNum.length) {
                isPrimeNum[j] = false;
                j +=i;
            }
        }
    }
    
    return isPrimeNum.slice(2).filter(a => a).length;
    
    
};