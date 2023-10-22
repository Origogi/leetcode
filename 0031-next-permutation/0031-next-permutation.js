/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    
    let i  = nums.length - 2;
    
    // find target a
    while (i >= 0 && (nums[i] >= nums[i + 1])) {
        i--;
    }
    
    
    if (i >=0) {
        let j = nums.length - 1;
        
        while (nums[i] >= nums[j]) {
            j--;
        }
        console.log(i,j)
        swap(i,j, nums);   
    }
    
    nums.push(...nums.splice(i+1).reverse());
        
    
};

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
