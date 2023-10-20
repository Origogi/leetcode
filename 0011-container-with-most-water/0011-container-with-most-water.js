/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let start = 0;
    let end = height.length - 1;
    
    let ret = 0;
    
    
    while(start < end) {
        
        ret = Math.max(ret, getWater(height, start, end));
        
        if (height[start] > height[end]) {
            end--;
        } else {
            start++;
        }
        
    }
    
    return ret;
    
};

function getWater(height, start, end) {
    return Math.min(height[start], height[end]) * (end - start);
}