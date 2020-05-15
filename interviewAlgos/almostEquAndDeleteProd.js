/**Hacker Rack Interview Quesions*/
/**Almost Equivalent
 * 
 * consider to words to be almost equivalent if
 * the amount of the same letters that each word has are no more than 3 apart
 * 
 * for Example:
 * s = ["aaaaba"], t = ["aabbbb"]
 *          s[0] has 4 'a' and t[0] has 2 'a' with there difference only being 2 => good, so far
 *          s[0] has 1 'b' and t[0] has 4 'b' with there difference only being 3 => good, so far
 *          => append "YES" to the answer arr
 * returns ["YES"]
 * 
 * for Example 2:
 * s = ["aaaaba","aaaababbbbabcc"], t = ["aabbbb","aabbbb"]
 *          s[0] has 4 'a' and t[0] has 2 'a' with there difference only being 2 => good, so far
 *          s[0] has 1 'b' and t[0] has 4 'b' with there difference only being 3 => good, so far
 *          => append "YES" to the answer arr
 * 
 *          s[1] has 6 'a' and t[1] has 2 'a' with there difference only being 4 (which is greater than 3)=> append "NO" to the answer array
 *         (s[1] has 6 'b' and t[1] has 4 'b' with there difference only being 2 => good, so far)
 *         (s[1] has 2 'c' and t[1] has 0 'c' with the difference being 2 => good, so far)
 *          => append "NO"
 * returns ["YES", "NO"]
 * 
 * @param {string[]} s 
 * @param {string[]} t
 * @returns {string[]} ["YES","NO","YES"] 
 */
function areAlmostEquivalent(s, t) {
    let ans = [];
    for(let i = 0; i < s.length; i++) {
        let wordS = s[i], wordT = t[i];
        let dictS = {}, dictT = {}
        let isNo = false;

        // filling in the two dicts
        for(let letter of wordS) {
            if(letter in dictS) {
                dictS[letter]++
            } else {
                dictS[letter] = 1;
            }
        }

        for(let letter of wordT) {
            if(letter in dictT) {
                dictT[letter]++
            } else {
                dictT[letter] = 1
            }
        }
        // comparing 
        for(let [key,val] of Object.entries(dictS)) {
            if(key in dictT) {
                let difference = Math.abs(dictT[key] - val);
                if(difference>3) {
                    isNo = true;
                }
            } else {
                if(val>3) {
                    isNo = true;
                    // ans.push("NO");
                    // continue;
                }
            }
        }
        // comparing the left overs from dictT
        for(let [key,val] of Object.entries(dictT)){
            if(!(key in dictS) && val > 3){
                // ans.push("NO");
                isNo = true;
            }
        }

        // checking if we should push no or yes into the ans array
        if(isNo) ans.push("NO");
        else ans.push("YES");
    }
    return ans;
}
/**Deleted Products
 * you are carrying a bag of items with unique ids represented in the array ids.
 * ids is an array, m is the amount of objects you can remove form your knapsack.
 * after you have removed m number of items from your bag, 
 * 
 * What is the min number of unique ids you contain in your bag?
 * 
 * Given:
 * ids = [1,2,3,2,2,3,1] , m = 2
 * return 2
 *      because you can remove both of the '1's leaving you with [2,3,2,2,3] in your bag 
 *      and only have 2 unique ids ([2,3])
 * 
 * Given:
 * ids = [1,2,3,2,3,1] , m = 2
 * return 2
 *      because you can remove both of the '1's leaving you with [2,3,2,3] in your bag 
 *      and only have 2 unique ids ([2,3])
 *      OR 
 *      because you can remove both of the '2's leaving you with [1,3,3,1] in your bag 
 *      and only have 2 unique ids ([1,3])
 * 
 * Given:
 * ids = [1,2,3,4] , m = 2
 * return 2
 * @param {number[]} ids 
 * @param {number} m 
 */
function deleteProducts(ids, m) {
    // console.log(ids);
    // console.log(m)

    let dict = {}, ans = 0;

    for(let val of ids) {
        if(val in dict){
            dict[val].count++
        } else {
            dict[val] = {
                count: 1,
                canBeRemoved: false
            };
        }
    }
    console.log(Object.entries(dict).sort((a,b)=>a[1].count-b[1].count));
    for(let [key,val] of Object.entries(dict).sort((a,b)=>a[1].count-b[1].count)) {
        if(val.count <= m ){
            val.canBeRemoved = true;
            // delete dict.key;
            m = m - val.count;
        }
    }
    for(let [key,val] of Object.entries(dict)) {
        if(!(val.canBeRemoved)){
            ans++;
        }
    }

    return ans;
}