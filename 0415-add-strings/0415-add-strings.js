/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const length = Math.max(num1.length, num2.length);

    let carry = 0;
    let result = "";

    for (let i = 0;i<length;i++) {
        let a = 0;
        let b = 0;

        if (i < num1.length) {
            a = parseInt(num1[num1.length - 1 - i]);
        }

        if (i < num2.length) {
            b = parseInt(num2[num2.length - 1 - i]);
        }

        let sum = a + b + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0;
        }
        result = sum + result;
    }

    if (carry === 1) {
        result = '1' + result;
    }

    return result;
};
