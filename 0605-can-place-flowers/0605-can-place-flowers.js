/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let flower = 0
    
    const isValid = (i, f) => i > 0 && f[i-1] === 0 
                                && i < f.length -1 && f[i +1] === 0
    
    
    for (let i =0;i<flowerbed.length;i++) {
        if (flowerbed[i]) {
            continue
        }
        
        if (i > 0 && flowerbed[i -1] === 1) {
            continue
        }
        
        if (i < flowerbed.length -1 && flowerbed[i +1] === 1) {
            continue
        }
        
        flower++
        flowerbed[i] = 1
    }
    
    return flower >= n
    
};