/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    // validator
    const itemLength = mat[0].length * mat.length;
    
    if (itemLength !== (r * c)) {
        return mat;
    }
    
    let ret = [];
    const oneDimArray = mat.reduce((a,b) =>[...a, ...b], []);
    
    let i =0;
    for (let j = 0;j<r;j++) {
        let item = [];
        
        for (let k=0;k<c;k++) {
            item.push(oneDimArray[i]);
            i++;
        }
        ret.push(item);
    }
    
    return ret;
};