/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    
        
    const endX = grid[0].length;
    const endY = grid.length;
    
    let result = 0;
    
    for (let y =0 ;y<endY;y++) {
        for (let x = 0;x < endX;x++) {
            if (grid[y][x] === 1) {
                result += getCount(grid, x, y);
            }            
        }
    }
    
    return result;
    
};

function getCount(grid, x, y) {
    let result = 4;
    
    const endX = grid[0].length;
    const endY = grid.length;
    
    const moveX = [ 0, 0, 1 ,-1];
    const moveY = [ 1, -1, 0,0];
    
    for (let i = 0;i<4;i++) {
        const nextX = x + moveX[i];
        const nextY = y + moveY[i];
        
        if ((0 <= nextX && nextX < endX) &&
           (0 <= nextY && nextY <endY)) {
            if (grid[nextY][nextX] === 1) {
                result--;
            }     
        }
    }
    return result;
    
}