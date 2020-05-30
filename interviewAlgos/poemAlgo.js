/**Justify Poem Lines
 * 
 * let ex1 = [
 * "Saying goodbye is death by a thousand cuts",
 * "Flashbacks waking me up",
 * "I get drunk, but it's not enough",
 * "'Cause the morning comes and you're not my baby",
 * "I look through the windows of this love",
 * "Even though we boarded them up",
 * "Chandelier still flickering here",
 * "'Cause I can't pretend it's okay when it's not",
 * "It's death by a thousand cuts"];
 * 
 * console.log(reflowLines(13,ex1));
 * 
 * 
 * this was an algo given to me by an internship
 * @param {number} lineLength 
 * @param {string[]} lines 
 * @returns {string[]} the pome justified to the line length
 */
function reflowLines(lineLength, lines) {
    let bigStr = "";
    let arr = [];
    for(let i = 0; i < lines.length; i++) {
        bigStr += lines[i] + " ";
    }
    console.log(bigStr.slice(0,25));
    let contWord = "";
    let justLine = "";
    for(let i = 0; i < bigStr.length; i++) {
        if(bigStr[i] === " "){
            if(justLine.length < lineLength) {
                justLine += contWord + " ";
            } else {
                arr.push(justLine);
                justLine = "";
            }
            contWord = "";
        } else {
            contWord += bigStr[i];
        }
    }
    console.log(arr);
    // Your code here. Output to console.
}

let ex1 = [
    "Saying goodbye is death by a thousand cuts",
    "Flashbacks waking me up",
    "I get drunk, but it's not enough",
    "'Cause the morning comes and you're not my baby",
    "I look through the windows of this love",
    "Even though we boarded them up",
    "Chandelier still flickering here",
    "'Cause I can't pretend it's okay when it's not",
    "It's death by a thousand cuts"
];

console.log(reflowLines(25, ex1));