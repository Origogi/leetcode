/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    
    const memory = new Array(cost.length);
    
    memory[0] = cost[0];
    memory[1] = cost[1];
    
    for (let i = 2;i<cost.length;i++) {
        memory[i] = Math.min(memory[i-2], memory[i-1]) + cost[i];
    }
    console.log(memory);
    
    return Math.min(memory[memory.length-1], memory[memory.length -2]);
};