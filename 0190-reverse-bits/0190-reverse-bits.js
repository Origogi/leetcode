/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    const binary = convertToFixedLengthBinary(n ,32);
    const array = binary.split("");
    const reverseBinary = array.reduce((a,b) => `${b}${a}`);
    console.log(reverseBinary);
    
    return parseInt(reverseBinary,2);
};

function convertToFixedLengthBinary(n, length) {
  const binaryString = (n >>> 0).toString(2);
  const padding = "0".repeat(Math.max(0, length - binaryString.length));
  return padding + binaryString;
}