/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    
    let result = [area, 1];
    const sqrt = parseInt(Math.sqrt(area));
    
    for (let i = area;i >= sqrt;i--) {
        if (0 === area % i && i >= (area / i)) {
            result = [i ,area / i ];
        }
    }
    return result;
    
    
};