/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (var i = 1;i<s.length;i++) {
        const splited = chunkString(s, i);
        
        var finded = true;
        for (var j = 1; j<splited.length;j++) {
            if (splited[0] !== splited[j]) {
                finded = false;
                break;
            }
        }
        
        if (finded) {
            return true;
        }
        
    }
    
    return false;
};

function chunkString (str, len) {
  const size = Math.ceil(str.length/len)
  const r = Array(size)
  let offset = 0
  
  for (let i = 0; i < size; i++) {
    r[i] = str.substr(offset, len)
    offset += len
  }
  
  return r
}