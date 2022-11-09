/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let next = n;
    
    const memory = {};
    
    while (!memory[next]) {
        memory[next] = true;

        let sum = 0;
        let remain = next;
        
        while (remain > 0) {
            const digit = remain % 10;
            sum += digit * digit;
            remain = Math.floor(remain / 10);
        }
        next = sum;
    }
    
    return next === 1;
};