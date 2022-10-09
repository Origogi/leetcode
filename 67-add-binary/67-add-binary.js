/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(A, B) {
    
    var i = 0;
    var carry = 0;
    var result = '';
    while (i < A.length || i < B.length ) {
        const a =( i < A.length ? A[A.length -1 - i] : 0) - '0';
        const b =( i < B.length ? B[B.length - 1 - i] : 0) - '0';
        
        let sum = a + b + carry;
        
        if (sum >= 2) {
            sum = sum - 2;
            carry = 1;
        } else {
            carry = 0;
        }
        
        result = (sum === 0 ? '0' : '1') + result;
                
        i++;
    }
    
    if (carry === 1) {
        result = '1' + result;
    }
    
    return result;
    
};