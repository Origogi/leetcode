/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let ret = [];
    
    candidates.sort((a,b) => a- b);

    
    function findSum(sums, start, target) {
        if (target === 0) {
            ret.push(sums);
        }
        
        for (let i =start;i< candidates.length;i++) {
            if (i > start && candidates[i] == candidates[i -1]) {
                continue;
            }
             
            if (candidates[i] > target) {
                break;
            }
            
            
            findSum([...sums, candidates[i]], i + 1, target - candidates[i]);   
            
        }
    }
        

    findSum([], 0, target);
    return ret;
};

function removeDuplicatesFrom2DArray(arr) {
  const uniqueItemsSet = new Set();
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    const currentItem = JSON.stringify(arr[i]);
    if (!uniqueItemsSet.has(currentItem)) {
      uniqueItemsSet.add(currentItem);
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}