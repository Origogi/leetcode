/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const isNotEmpty = (s) => s.length > 0;
    const tokens = path.split("/").filter(isNotEmpty);
    console.log(tokens);
    
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