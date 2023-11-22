/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const getRectArea = (rx, ry) => (rx[1] - rx[0]) * (ry[1] - ry[0]);
    const overlapRange = (ra, rb) => {
        const ranges = [ra, rb];
        ranges.sort((a,b) => {
            return a[0] - b[0];
        });
                
        if (ranges[0][0] <= ranges[1][0] && ranges[1][0] <= ranges[0][1]) {
            // Overlap
            return [Math.max(ranges[0][0], ranges[1][0]), Math.min(ranges[0][1], ranges[1][1])];
        } else {
            return [0,0];
        }
    }
    
    const arx = [ax1, ax2];
    const ary = [ay1, ay2];
    
    const brx = [bx1, bx2];
    const bry = [by1, by2];
    
    return getRectArea(arx, ary) 
        + getRectArea(brx, bry)
        - getRectArea(overlapRange(arx, brx), overlapRange(ary, bry));
    
};

