/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {

    const ret = [];
    
    const splitLength  = (str, length) => [str.substring(0, length), str.slice(length)];
    const isValidIp = (str) => {
        const seg = parseInt(str);
        return seg <= 255 && (seg !== 0 || (str === '0'));
    };
    
    function getIp(prefix, remain) {
        if (prefix.length === 4 && remain === '') {
            ret.push(prefix.join('.'));
            return;
        } else if (prefix.length > 4) {
            return;
        }
        
        if (remain.charAt(0) === '0') {
            const splited = splitLength(remain, 1);
            getIp([...prefix, splited[0]], splited[1]);
            return;
        }
        
        const end = Math.min(3, remain.length);
        
        for (let i = 1;i<=end;i++) {
            const splited = splitLength(remain, i);
            
            if (isValidIp(splited[0])) {
                getIp([...prefix, splited[0]], splited[1]);
            }
            
        }
    }
    
    getIp([],s);
    
    return ret;
};
