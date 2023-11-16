/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const getArrSafe = (i, arr) => arr[i] ?? Number.MAX_SAFE_INTEGER;
    const min = (a,b) => Math.min(a,b)
    const getMinLeftRight = (i, arr) => min(getArrSafe(i -1 , arr), getArrSafe(i, arr));
    
    return triangle.reduce((acc, row) => 
         Array
            .from({length : row.length}, () => Number.MAX_SAFE_INTEGER)
            .map((item, i) => row[i] + getMinLeftRight(i, acc))
        
    ).reduce(min);
    
};