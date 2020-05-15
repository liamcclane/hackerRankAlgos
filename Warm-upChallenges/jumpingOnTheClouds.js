/**Jumping On The Clouds
 * Emma is playing a new mobile game that starts with consecutively numbered clouds. 
 * Some of the clouds are thunderheads and others are cumulus. 
 * She can jump on any cumulus cloud having a number that is equal to
 * the number of the current cloud plus 1 or 2. She must avoid the thunderheads. 
 * Determine the minimum number of jumps it will take Emma to jump from her 
 * starting position to the last cloud. It is always possible to win the game.
 * 
 * For each game, Emma will get an array of clouds numbered 0 if they are safe 
 * or 1 if they must be avoided. 
 * 
 * For example, c = [0,1,0,0,0,1,0] indexed from 0....6. 
 * The number on each cloud is its index in the list so 
 * she must avoid the clouds at indexes 1 and 5. 
 * She could follow the following two paths: 0-2-4-6 or 0-2-3-4-6. 
 * The first path takes 4 jumps while the second takes 5.
 * 
 * Function Description
 * 
 * Complete the jumpingOnClouds function in the editor below. 
 * It should return the minimum number of jumps required, as an integer.
 * 
 * jumpingOnClouds has the following parameter(s):
 * 
 * c: an array of binary integers
 * Input Format
 * 
 * @param {number[]} c an array of binary integers
 * @returns {number} the minimum number of jumps
 */
function jumpingOnClouds(c) {
    // starting at -1 because we get an off by
    // one error at the end of the for loop
    let count = -1;

    for (let i = 0; i < c.length; i++) {
        // need this outside if for the i+2 incrementor
        // if we can double jump, then do it
        if (c[i + 2] === 0) {
            i++;
        }
        // always increase the count 
        // because we have either "double" jumped or will single jump from the for loop
        count++;
    }
    return count;
}
console.log(jumpingOnClouds([0, 1, 0, 0, 1, 0, 0]));
console.log();
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]));
console.log();
console.log(jumpingOnClouds([0,0,0,1,0,0]));

function messy(c) {
    let count = 0;

    for (let i = 0; i < c.length; i++) {
        // console.log(`before the loop i is \t${i}`);
        // if we can double jump, then do it
        if (i < c.length - 1) {
            // console.log(`and c[i+2] is \t${c[i+2]}`);
            if (c[i + 2] === 0) {
                i ++;
            }
            count++;
        } else {
            // console.log(i);
            if(i===c.length-1) return count;
        }
    }
} 