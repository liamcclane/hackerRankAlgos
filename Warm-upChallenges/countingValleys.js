/** Counting Valleys
 * 
 * Gary is an avid hiker. 
 * He tracks his hikes meticulously, paying close attention to small details like topography. 
 * During his last hike he took exactly n steps. For every step he took, he noted if it was 
 * an uphill, U, or a downhill, D step. 
 * Gary's hikes start and end at sea level and each step up or down represents 
 * a 1 unit change in altitude. We define the following terms:
 * 
 * A mountain is a sequence of consecutive steps above sea level, 
 * starting with a step up from sea level and ending with a step down to sea level.
 * 
 * A valley is a sequence of consecutive steps below sea level, 
 * starting with a step down from sea level and ending with a step up to sea level.
 * 
 * Given Gary's sequence of up and down steps during his last hike, 
 * find and print the number of valleys he walked through.
 * 
 * For example, if Gary's path is s = "DDUUUDD", he first enters a valley 2 units deep. 
 * Then he climbs out an up onto a mountain 2 units high. 
 * Finally, he returns to sea level and ends his hike.
 * 
 * Function Description
 * 
 * Complete the countingValleys function in the editor below. 
 * It must return an integer that denotes the number of valleys Gary traversed.
 * 
 * countingValleys has the following parameter(s):
 * 
 * n: the number of steps Gary takes
 * s: a string describing his path
 * Input Format
 * 
 * The first line contains an integer , the number of steps in Gary's hike.
 * The second line contains a single string , of  characters that describe his path.
 * 
 * @param {number} n :length of string OR number of steps Gary took
 * @param {string} s :string representing Gary's elevation tracking
 * @returns {number} the number of valley's Gary traveled though
 */
function countingValleys(n, s) {
    let elevation = 0;
    let count = 0;
    let inValley = false;

    for(let i = 0; i < n; i++) {
        if(s[i] === "D") {
            elevation --;
        } else {
            elevation ++;
        }

        // make sure we are always checking if we are in a valley
        if(elevation < 0) inValley = true;
        if(elevation > 0) inValley = false;

        // then check if we should increase the valley count
        if(elevation === 0 && inValley) {
            count ++;
        }

        // reset at end of loop if we are at sea level
        if(elevation === 0) inValley = null;
    }
    return count;
}
console.log(countingValleys(8,"DUDUDU"));