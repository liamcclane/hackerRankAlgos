/** Sock Merchant *
 * John works at a clothing store. 
 * He has a large pile of socks that he must pair by color for sale. 
 * Given an array of integers representing the color of each sock, 
 * determine how many pairs of socks with matching colors there are.
 * 
 * For example, there are n number of socks with ar = [1,2,2,1,3,2,1] colors.
 * There is one pair of color 1 and one of color 2. 
 * There are three odd socks left, one of each color. The number of pairs is 2.
 * 
 * Function Description
 * 
 * Complete the sockMerchant function in the editor below. 
 * It must return an integer representing the number of matching pairs of socks that are available.
 * 
 * sockMerchant has the following parameter(s):
 * 
 * n: the number of socks in the pile
 * ar: the colors of each sock
 * Input Format
 * 
 * The first line contains an integer , the number of socks represented in .
 * The second line contains  space-separated integers describing the colors  of the socks in the pile.
 * @param {number} n 
 * @param {number[]} ar 
 * @returns {number}
 */
function sockMerchant(n, ar) {
    let count = 0; // creating a count of the amount of pairs to return 
    let pairs = {}; // creating a dictionary of the amount of socks for each color

    // filling in the dictionary
    for(let i = 0; i < n; i++) {
        if(ar[i] in pairs) {
            pairs[ar[i]] ++;
        } else {
            pairs[ar[i]] = 1;
        }
    }

    // adding only matching sets from the dictionary
    for(let [key, val] of Object.entries(pairs)){
        count += Math.floor(val/2);
    }

    // returning the result
    return count;

}