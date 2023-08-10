/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memory = {
        '0' : 0,
        '1' : 1,
        
    };
    
        
    function fibonacci(n) {
        if (memory[n] !== undefined) {
            return memory[n];
        }
        
        memory[n] = fibonacci(n -1) + fibonacci(n -2);
        return memory[n];
    }
    
    return fibonacci(n);
    
};