/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    
    const ret = Array.from(Array(rowsCount), () => Array(colsCount).fill(null));    
    let i = 0;
    let j = 0;
    let k = 0;
    let direction = 1;
        
    
    while (k < this.length) {
        console.log(i, j);
        ret[i][j] = this[k];
        
        i += direction;
        
        if (i === rowsCount) {
            direction = -1;
            i--;
            j++;
        } else if (i === -1) {
            direction = 1;
            i++;
            j++;
        }
        k++;
    }
    
    return ret;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */