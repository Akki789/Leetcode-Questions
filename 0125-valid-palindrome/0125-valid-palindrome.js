/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
     s = s.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    let i = 0
    let j = s.length-1;
    while(i < j){
        if(s.charAt(i) != s.charAt(j)){
            return false;
            break;
        }
        i++
        j--
    }
    return true;
};