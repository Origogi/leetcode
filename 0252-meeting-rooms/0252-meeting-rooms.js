/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort(([a, _], [b, __]) => a -b);
    
    for (let i =1;i<intervals.length;i++) {
        const prevEnd = intervals[i -1][1];
        const curStart = intervals[i][0];
        
        if (prevEnd > curStart) {
            return false;
        }
    }
    return true;
    
};