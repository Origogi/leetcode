/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    
    return costs.reduce((acc, cost) => 
         [cost[0] + Math.min(acc[1], acc[2]), 
            cost[1] + Math.min(acc[0], acc[2]), 
       cost[2] + Math.min(acc[0], acc[1])]
    ).reduce((a,b) => Math.min(a,b));
    
        
};