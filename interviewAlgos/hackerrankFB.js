/**
 * 
 * @param {*} phrase 
 */
function stickers_for(phrase) {
    let iGDict = {};
    let phraseDict = {};
    let count = 1;
    for (let letter of "instagram") {
        if (letter in iGDict) {
            iGDict[letter]++;
        } else {
            iGDict[letter] = 1
        }
    }
    for (let letter of phrase) {
        if (letter != " ") {
            if (letter in phraseDict) {
                phraseDict[letter]++;
            } else {
                phraseDict[letter] = 1
            }
        }
    }
    // console.log(iGDict);
    // console.log(phraseDict);
    // console.log(Object.entries(phraseDict));
    for (let [key, val] of Object.entries(phraseDict)) {
        // this is how many of those letter you get with one sticker
        let numOfOneSticker = iGDict[key];
        let neededStickers = Math.ceil(val / numOfOneSticker);
        // console.log(key, val)
        // console.log(numOfOneSticker);
        // console.log(neededStickers);
        if (neededStickers > count) {
            count = neededStickers;
        }
        // console.log(`count ${count}`);
    }
    return count;
}

console.log(stickers_for("taming giant gnats"));
/**
 * 
 * @param {*} text 
 */
function funWithAnagrams2(text) {
    let ans = text;
    for(let i = 0; i < ans.length; i++) {
        for(let j = i+1; j < ans.length; j++) {
            if(ans[i].length != ans[j].length){
                continue;
            }
            let isAna = true;
            let baseWord = [...text[i]].sort();
            let compareWord = [...text[j]].sort();
            for(let k = 0; k < ans[j].length; k++) {
                if(baseWord[k] != compareWord[k]){
                    isAna = false;
                    break;
                }
            }
            // if it is an anagram
            if(isAna){
                // [ans[j],ans[ans.length-1]] = [ans[ans.length-1],ans[j]];
                // ans.pop();
                ans = ans.slice(0,j).concat(ans.slice(j+1,ans.length-1));
                j--;
            }
            console.log(ans);
            console.log();
        }
    }
    ans.sort();
    return ans;
}







function funWithAnagrams(text) {
    let ans = [text[0]];

    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            console.log(`i : ${i}\t j: ${j}`);
            ans.push(text[i]);
            ans.push(text[j]);
            if (text[i].length != text[j].length) {
                ans.pop();
                continue;
            }
            console.log(`\ttext[i] : ${text[i]}`);
            console.log(`\ttext[j] : ${text[j]}`);
            let baseWord = text[i];
            let compareWord = text[j];
            let isAna = true;
            for (let k = 0; k < compareWord.length; k++) {
                let letter  = compareWord[k];
                if(baseWord.includes(letter)){
                    baseWord = baseWord.slice(0,k).concat(baseWord.slice(k+1,baseWord.length));
                } else if (isAna && !(baseWord.includes(letter))) {
                    isAna = false;
                }
            }
            if(baseWord.length != 0){
                isAna = false;
            }
            if(isAna === false) {
                ans.pop();
            } else {
                ans.push(baseWord);
            }
            console.log(isAna)
        }
        console.log();
    }
    ans.sort();
    return ans;





    // Write your code here
    // let ans = [text[0]];
    // let len = text.length;
    // let j = 1, i = 0;
    // while (j < len) {
    //     if(text[i].length === text[j].length) {
    //         let baseWord = text[i];
    //         let compareWord = text[j];
    //         ans.push(compareWord);
    //         let deleteWord = false;
    //         for(let k = 0; k < baseWord.length; k++) {
    //             if(compareWord.includes(baseWord[k])) {

    //             } else {
    //                 continue;
    //             }
    //         }
    //         if(deleteWord) {
    //             ans.pop();
    //         } else {
    //             i++;
    //         }
    //         j++;
    //     } else {
    //         i++;
    //         j++;
    //     }
    // }
    // return ans;

}
console.log(funWithAnagrams2(['code', 'aaagmnrs', 'anagrams', 'ecod']));
// returns ['code','aaagmnrs'];