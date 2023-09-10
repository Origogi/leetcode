/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    const row = obstacleGrid.length;
    const col = obstacleGrid[0].length;
    
    const moveX = [0, 1];
    const moveY = [ 1, 0];
    
    const map = Array.from(Array(row), () => new Array(col).fill(0));
    
    map[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
    
    const queue = [{ x : 0, y : 0}];
    
    while (queue.length > 0) {
        const current = queue.shift();
        for (let i =0;i<2;i++) {
            const next = {
                x : current.x + moveX[i],
                y : current.y + moveY[i]
            }
            
            if (next.x < row && next.y < col && !obstacleGrid[next.x][next.y]) {
                if (!map[next.x][next.y]) {
                    queue.push(next);
                }
                
                map[next.x][next.y] += map[current.x][current.y];
            }
        }
        
    }
    
    
    return map[row -1][col-1];
};