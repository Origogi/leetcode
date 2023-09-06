/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    return words.filter((word) => isOneRow(word));
};

function isOneRow(pWord) {
    const keyboard = [
        [...'qwertyuiop'],
        [...'asdfghjkl'],
        [...'zxcvbnm']
    ];
    
    const word = pWord.toLowerCase();
    
    let targetIndex;
        
    for (let i=0;i<word.length;i++) {
        
        let rowIndex = 0;
        const c = word.charAt(i);
        for (;rowIndex<3;rowIndex++) {
            if (keyboard[rowIndex].includes(c)) {
                break;
            }
        }
        
        if (targetIndex === undefined) {
            targetIndex = rowIndex;
        } else if (targetIndex !== rowIndex) {
            return false;
        }
    }
    return true;

}