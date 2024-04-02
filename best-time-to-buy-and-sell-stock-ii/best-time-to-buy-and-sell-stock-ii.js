/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let result = 0
    let profit = 0
    
    for (let i = 1;i <prices.length;i++) {
        const sell = prices[i]
        const newProfit = sell - buy
        
        if (newProfit < profit) {
            result += profit
            profit = 0
            buy = prices[i]
        } else {
            profit = Math.max(profit, newProfit)
        }
    }
    result += profit
    return result
};