/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    let result = [];
    for (let i =0;i< nums1.length;i++) {
        
        
        let find = false;
        let j = 0;
        for (;j < nums2.length;j++) {
            
            if (nums1[i] === nums2[j]) {
                find = true;
            }
            else if (find && nums1[i] < nums2[j]) {
                result.push(nums2[j]);
                break;
            }    
        }
                    
        if (j === nums2.length) {
            result.push(-1);
        }
        
    }
    return result;
    
};