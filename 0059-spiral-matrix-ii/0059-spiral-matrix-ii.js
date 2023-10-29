/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    
    const ret = Array.from(new Array(n), () => new Array(n));
    
    
    const dirX = [0,1,0,-1];
    const dirY = [1,0,-1,0];
    let dirIdx = 0;
    
    let position = { x: 0, y:0};
    
    for (let i = 1;i<= n *n;i++) {
        const {x, y} = position;
        
        ret[x][y] = i;
        
        let nextPosition = {
            x : x + dirX[dirIdx],
            y : y + dirY[dirIdx]
        }
        
        if(!validate(nextPosition, n, ret)) {
            dirIdx++;
            dirIdx %= 4;
            
            nextPosition = {
                x : x + dirX[dirIdx],
                y : y + dirY[dirIdx]
            }
        }
        position = nextPosition;
    }
    
    
    return ret;
    
};


function validate(position, n, map) {
    const {x, y} = position;
    return x >= 0 && x < n && y>=0 && y <n && map[x][y] === undefined;
}