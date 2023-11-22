/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => a -b);
    
    let i= 0;
    let j = 0;
    
    let ret = [];
    
    while(i + j < nums1.length + nums2.length) {
        if (nums1[i] === nums2[j]) {
            ret.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            i++;
        }
        
        if (i === nums1.length || j === nums2.length) {
            break;
        }
    }
    
    return ret;
    
};