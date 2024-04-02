/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    const getArea = (hs, l, r) => Math.min(hs[l], hs[r]) * (r - l)
     
    let left = 0
    let right = height.length -1;
    let max = 0
    
    while (left < right) {
        max = Math.max(max, getArea(height, left, right))
        
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    
    
    
    return max
};