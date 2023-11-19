/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    let result = 0;
    
    for (let i = 1;i<prices.length;i++) {
        buy = Math.min(prices[i], buy);
        const prevProfit = profit;
        profit = Math.max(profit, prices[i] - buy);
        
        if (profit > 0 && prevProfit != profit) {
            result += profit;
            profit = 0;
            buy = prices[i];
        }
        
    }
    
    return result;
};