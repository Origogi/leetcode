/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.memory = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    console.log(left, right);
    let sum = 0;
    for (let i = left; i<= right;i++) {
        sum += this.memory[i];
    }
    return sum;

};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */