/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const filterCondition = (s) => s.length > 0 || s === '.';
    const tokens = path.split("/").filter(filterCondition);
    
    return '/' + tokens.reduce((acc, token) => {
         if (token === '..') {
             if (acc.length > 0) {
                             acc.pop();
             }
        } else if (token !== '.') {
            acc.push(token);
        }    
        return acc;
    }, [
       
    ]).join("/")
    
};