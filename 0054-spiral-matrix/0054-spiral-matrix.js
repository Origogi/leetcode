/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    const M = matrix.length;
    const N = matrix[0].length;
    
    const nextPositionManager = new NextPositionManager(M,N);
    
    let currPosition = {
        x :0,
        y :0,
    }
    
    let ret = [];
    

    while(true) {
        nextPositionManager.visit(currPosition);
        ret.push(matrix[currPosition.x][currPosition.y]);
        
        const nextPosition = nextPositionManager.next(currPosition);
        
        if (nextPosition) {
            currPosition = nextPosition;
        } else {
            break;
        }
    }
    
    return ret;
    
};
    
class NextPositionManager {

    constructor(m,n) {
      this.dirX  = [0,1, 0, -1];
        this.dirY = [1,0,-1, 0];
      this.dirIndex = 0;
        
      const array = new Array(m);
      for (let i = 0; i < m; i++) {
        array[i] = new Array(n).fill(false);
      }
        
      this.visited = array;
        
    }
    
    visit(position) {
        this.visited[position.x][position.y] = true;
    }
    
    next(position) {
        let nextPosition = {
            x : position.x + this.dirX[this.dirIndex],
            y : position.y + this.dirY[this.dirIndex]
        }
        
        if (this.validate(nextPosition)) {
            return nextPosition;
        }
        
        this.dirIndex++;
        this.dirIndex = this.dirIndex % 4;
        
        nextPosition = {
            x : position.x + this.dirX[this.dirIndex],
            y : position.y + this.dirY[this.dirIndex]
        }
        
        if (this.validate(nextPosition)) {
            return nextPosition;
        }
        return undefined;
        
    }

    validate(position) {
        const {x, y} = position;
        const M = this.visited.length;
        const N = this.visited[0].length;
        
        return (x >=0 && x < M) 
            && (y >=0 && y < N)
            && !this.visited[x][y];
    }
    
}
