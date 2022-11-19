/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
    var start = 0;
    var end = s.length - 1;
    let result = [...s];
    
    while (start <end) {
        
        while (!isVowels(result[start])&& start <= end) {
            start++;
        }
        
        while(!isVowels(result[end]) && end >= start) {
            end--;
        }
                
        
        if (start < end) {
            var temp = result[start];
            result[start] =  result[end];
            result[end] = temp;
        }
        start++;
        end--;
    }
    return result.join('');
    
};
    
    
function isVowels(c) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    return vowels.includes(c);
}