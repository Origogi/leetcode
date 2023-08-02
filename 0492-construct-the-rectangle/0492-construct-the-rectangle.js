/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
        const sqrt = parseInt(Math.sqrt(area));
    
    for (let i = sqrt;i > 0;i--) {
        if (0 === area % i) {
            return [area/i , i];
        }
    }
    return [area, 1];
    
    
};