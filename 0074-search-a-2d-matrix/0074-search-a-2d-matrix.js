/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    const m = matrix.length;
    const n = matrix[0].length;

    
    function search(start, end) {
        if (start > end) {
            return false;
        }
        
        const mid = Math.floor((start + end)/2);
        
        const midValue = getValue(mid);
        
        if (midValue === target) {
            return true;
        }
                
        if (midValue > target) {
            return search(start, mid -1);
        } else {
            return search(mid + 1, end);
        }
    }
    
    function getValue(index) {
        const {x, y} = indexToPosition(index);
        return matrix[x][y];
    }
    
    function indexToPosition(index) {
        const x = Math.floor(index / n);
        const y = index % n;
        return {
            x,y
        }
    }
    
  
    
    return search(0, (m*n) -1);
};

