/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    
    let peak = arr[0];
    let peakIndex = 0;
    
    for (let i =1;i<arr.length;i++) {
        if (peak < arr[i]) {
            peak = arr[i];
            peakIndex = i;
        }
    }
    
    if (peakIndex === 0 || peakIndex === arr.length -1) {
        return false;
    }
    
    for (let i = 0;i<peakIndex;i++) {
        if (arr[i] >= arr[i +1]) {
            return false;
        }
    } 
    
    for (let i = peakIndex;i <arr.length -1;i++) {
            if (arr[i] <= arr[i +1]) {
            return false;
        }
    }
    return true;
};