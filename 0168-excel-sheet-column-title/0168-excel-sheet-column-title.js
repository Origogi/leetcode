/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";
    
    let value = columnNumber;
    
    while (value > 0) {
        const div = Math.floor(value / 26);
        const remain = value % 26;

        result = convertChar(remain) + result;
        value = div;
        if (remain === 0) {
            value--;
        }
        
    }

    return result;
    
};

function convertChar(num) {
    num = (num === 0 ? 26 : num) - 1
    const code = 'A'.charCodeAt(0);

    return String.fromCharCode(code + num);
}