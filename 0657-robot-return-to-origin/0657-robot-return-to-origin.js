/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let position = { 'x' : 0, 'y' : 0};
    
    for (const c of moves) {
        position = move(position, c);
    }
    
    return (position['x'] === 0 && position['y'] === 0);
};

function move(position, move) {
    var nextX = 0;
    var nextY = 0;
    
    const nextPosition = {...position};
    
    if ('U' === move) {
        nextY = -1;
    } else if ('D' === move) {
        nextY = 1;
    } else if ('L' === move) {
        nextX = -1;
    } else if ('R' === move) {
        nextX = 1;
    }
    
    
    nextPosition['x'] += nextX;
    nextPosition['y'] += nextY;

    return nextPosition;
    
}