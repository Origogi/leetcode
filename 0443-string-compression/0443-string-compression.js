/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    let compress = ''
    
    let count = 0
    let c = chars[0]
    
    for (let i = 0;i< chars.length;i++) {
        if (c !== chars[i]) {
            compress = `${compress}${c}${count > 1 ? count : ''}`
            count = 0
        }
        c = chars[i]
        count++
    }
    
    compress = `${compress}${c}${count > 1 ? count : ''}`
    const compressTokens = compress.split('')
    
    
    for (let i = 0;i<compressTokens.length;i++) {
        chars[i] = compressTokens[i]
    }
    
   return compress.length
    
    
};