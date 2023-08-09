/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ret = [];
    for (let i = 1;i <=n;i++) {
        
        let item = '';
        
        if (i % 3 === 0) {
            item = `${item}Fizz`;
        }
        
        if(i % 5 === 0) {
            item = `${item}Buzz`;
        }
        
        if (item === '') {
            item = `${i}`
        }
        
        ret = [...ret, item];
    }
    return ret;
};