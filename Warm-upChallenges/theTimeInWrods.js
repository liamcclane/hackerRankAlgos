/**The Time in Words
 * Given the time in numerals we may convert it into words,
 * 
 * @param h 
 * @param m 
 */
function timeInWords(h, m) {
    let numWords = {
        1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
        7: "seven", 8: "eight", 9: "nine", 10: "ten",
        11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
        15: "quarter", 16: "sixteen", 17: "seventeen", 18: "eighteen",
        19: "nineteen", 20: "tweeny", 30: "half", 45: "quarter",
        21: "twenty one", 22: "twenty two", 23: "twenty three", 24: "twenty four",
        25: "twenty five", 26: "twenty six", 27: "twenty seven", 28: "twenty eight",
        29: "twenty nine",
    }
    if (m === 15) {
        return numWords[m] + " past " + numWords[h];
    } else if (m === 30) {
        return numWords[m] + " past " + numWords[h];
    } else if (m == 45) {
        return numWords[m] + " to " + numWords[h + 1];
    } else if (m === 0) {
        return numWords[h] + " o' clock";
    } else if (m === 1) {
        return numWords[1] + " minute past " + numWords[h];
    }

    if (m > 30) {
        let tillMin = 60 - m;
        if (tillMin === 1) {
            return numWords[1] + " minute to " + numWords[h + 1];
        }
        return numWords[tillMin] + " minutes to " + numWords[h + 1];
    }
    return numWords[m] + " minutes past " + numWords[h];
}

console.log(timeInWords(5,0));
console.log(timeInWords(5,1));
console.log(timeInWords(5,2));
console.log(timeInWords(5,4));
console.log(timeInWords(5,15));
console.log(timeInWords(5,30));
console.log(timeInWords(5,44));
console.log(timeInWords(5,45));
console.log(timeInWords(5,55));