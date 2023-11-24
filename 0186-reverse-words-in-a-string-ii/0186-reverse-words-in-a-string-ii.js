/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    s.reverse();
    
    const reverseWord = (strArry , start, end) => {
        const mid = Math.floor((end - start) / 2);
        for (let i = 0; i<= mid;i++) {
            const temp = strArry[start + i];
            strArry[start + i] = strArry[end - i];
            strArry[end - i] = temp;
        }
    }
    
    let start = 0;
    
    for (let i = 0;i<s.length;i++) {
        console.log(i, s.length);
        if (s[i] ===' ') {
            reverseWord(s, start, i -1);
            start = i +1;
        }
    }
    reverseWord(s, start, s.length -1);
    
};