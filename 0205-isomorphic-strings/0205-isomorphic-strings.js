/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  
    return convertCode(s) ===convertCode(t); 
};

function convertCode(str) {
    let map = new Map();    
    let value = 0;
    const pattern = [];
    
    for (let i = 0;i< str.length;i++) {

        if (map[str[i]] === undefined) {
            map[str[i]] = value;
            value++;

        }

        pattern.push(map[str[i]]);
    }
    return pattern.join(",");
        
}

