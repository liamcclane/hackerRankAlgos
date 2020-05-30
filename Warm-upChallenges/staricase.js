/**Staircase
 * Consider a staircase of size 4:
 *    #
 *   ##
 *  ###
 * ####
 * Observe that its base and height are both equal to , 
 * and the image is drawn using # symbols and spaces. 
 * The last line is not preceded by any spaces.
 * 
 * Write a program that prints a staircase of size n.
 * @param {number} n 
 */
function staircase(n) {
    let starsStr = "", spaceStr = "";
    for(let i = 1; i <= n; i++) {
        spaceStr += " ";
    }
    for(let i = 1; i <= n; i++) {
        starsStr += "#";
        console.log(spaceStr.substr(i) + starsStr);
    }
}
staircase(6);
