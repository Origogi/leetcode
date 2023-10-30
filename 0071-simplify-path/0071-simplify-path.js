/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const filterCondition = (s) => s.length > 0 && s !== '.';
    
    const tokens = path.split("/").filter(filterCondition);
    console.log(tokens);
    
    return '/' + tokens.reduce((acc, token) => {
         if (token === '..') {
            acc.pop();
             
        } else {
            acc.push(token);
        }
        return acc;
    }, [
       
    ]).join("/")
    
};