/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    
    return costs.reduce((acc, cost) => {
        const nextCost = [0, 0, 0];
        
        nextCost[0] = cost[0] + Math.min(acc[1], acc[2]);
        nextCost[1] = cost[1] + Math.min(acc[0], acc[2]);
        nextCost[2] = cost[2] + Math.min(acc[0], acc[1]);
                return nextCost;
    }).reduce((a,b) => Math.min(a,b));
    
        
};