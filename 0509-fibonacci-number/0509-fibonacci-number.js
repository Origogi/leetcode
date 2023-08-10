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
        console.log(n.toString());
        if (memory[n.toString()] !== undefined) {
            return memory[n.toString()];
        }
        
        memory[n.toString()] = fibonacci(n -1) + fibonacci(n -2);
        return memory[n.toString()];
        
    }
    
    return fibonacci(n);
    
};