/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    for (let i = 0;i< board.length;i++) {
        for (let j = 0;j<board[i].length;j++) {
            if (traverse(0, word, {x : i, y : j}, board)) {
                return true;
            }
        }
    }
    
    return false;
    
};


function traverse(index, targetWord, curPosition, board) {

    const { x, y} = curPosition;
    
    const curChar = board[x][y];
    
    if (targetWord.charAt(index) !==curChar) {
        return false;
    }
    
    if (index === targetWord.length -1) {
        return true;
    }
    
    
    board[x][y] = undefined;
    
    const dirM =[0,0,1,-1];
    const dirN = [1, -1,0,0];
    
    for (let i = 0;i<4;i++) {
        const nextPosition = {
            x : x + dirM[i],
            y : y + dirN[i]
        }
        
        if (validate(nextPosition, board) 
            && traverse(index + 1, targetWord, nextPosition, board)) {
            return true
        }   
    }
    
    board[x][y] = curChar;
    
    return false;
}
    
function validate(position, board) {
    const {x, y} = position;
    const M = board.length;
    const N = board[0].length;
        
    return x >=0 && x < M && y >=0 && y < N;
}