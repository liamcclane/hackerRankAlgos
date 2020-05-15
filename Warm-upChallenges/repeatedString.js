/**Repeated String
 * Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
 * 
 * Given an integer, n, find and print the number of letter a's in 
 * the first n letters of Lilah's infinite string.
 * 
 * For example, if the string s = 'abcac' and n = 10, 
 * the substring we consider is 'abcacabcac', the first 10 characters
 * of her infinite string. There are 4 occurrences of a in the substring.
 * 
 * @param {*} s 
 * @param {*} n
 * @returns {} 
 */
function repeatedString(s, n) {
    let count = 0;
    let copyS = s;
    for(let i = 0; i <= Math.floor(n/s.length); i++) {
        s += copyS;
    }
    for(let i = 0 ; i < n; i++) {
        if(s[i]==='a') count++
    }
    return count
}
console.log(repeatedString("aba",10));
console.log();
console.log(repeatedString("a",100000));