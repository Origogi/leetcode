/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
    const tokens1 = version1.split('.').map(removeLeadingZero);
    const tokens2 = version2.split('.').map(removeLeadingZero);
    
    
    let i = 0;
    
    while (i<tokens1.length || i<tokens2.length) {
        const diff = (tokens1[i] ?? 0) - (tokens2[i] ?? 0);
        
        if (diff !==0) {
            return diff > 0 ? 1 : -1
        }
        i++;
    }
    return 0;
};

function removeLeadingZero(str) {
    return parseInt(str, 10);
}