/**Mini-Max Sum
 * Given five positive integers, 
 * find the minimum and maximum values that can be calculated 
 * by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a 
 * single line of two space-separated long integers.
 * 
 * For example, [1,3,5,7,9]. 
 * Our minimum sum is 1+3+5+7 = 16 and our maximum sum is 3+5+7+9 = 24 . We would print "16 24"
 * @param {number[]} arr
 */
function miniMaxSum(arr) {
    let sorted = arr.sort();
    let maxSum = sorted[sorted.length - 1], minSum = sorted[0];
    for (let i = 1, j = sorted.length - 2; i <= 3; i++, j--) {
        maxSum += sorted[j];
        minSum += sorted[i];
    }
    console.log(minSum + " " + maxSum);
}
/**
 * without sort assuming there is only 4 or 5 numbers passed into the arr
 * @param {number[4 or 5]} arr 
 */
const miniMaxS = (arr) =>{
    let minEle = Math.min(...arr), maxEle = Math.max(...arr);
    let sum = 0, maxSum = 0, minSum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    maxSum = sum - minEle;
    minSum = sum - maxEle;
    console.log(minSum + " " + maxSum);
}

/**
 * without sort below
 * // test cases failed...
 * @param {number[]} arr
 */
function miniMaxSumNoSort(arr) {
    let maxNums = {
        arr: [],
        smallestNum: null
    },
        minNums = {
            arr: [],
            largestNum: null,
            smallestNum: null
        };
    let minSum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        // fill the arrays
        // make sure only to add the element 
        // to the maxNums arr iff the element we are currently 
        // looking at is bigger than the smallest number in the arr

        // to the minNums arr iff the element we are currently
        // looking at is smaller than the largest number in the arr
        let ele = arr[i];
        if (maxNums.arr.length < 4) {
            maxNums.arr.push(ele);
            maxNums.smallestNum = Math.min(...maxNums.arr);
        } else if (ele <= maxNums.smallestNum) {
            let arrCopy = maxNums.arr;
            arrCopy.unshift(ele);
            let j = arrCopy.indexOf(maxNums.smallestNum);
            console.log(arrCopy)
            let temp = arrCopy[j];
            arrCopy[j] = arrCopy[arrCopy.length - 1];
            arrCopy[arrCopy.length - 1] = temp;
            console.log(arrCopy)
            // [arrCopy[j], arrCopy[arrCopy.length - 1]] = [arrCopy[arrCopy.length - 1], arrCopy[j]];
            arrCopy.pop();
            maxNums.arr = arrCopy;
            maxNums.smallestNum = ele;
        }
        if (minNums.arr.length < 4) {
            minNums.arr.push(ele);
            minNums.largestNum = Math.max(...minNums.arr);
            minNums.smallestNum = Math.min(...minNums.arr);
        } else if (ele >= minNums.largestNum) {
            let arrCopy = minNums.arr;
            arrCopy.unshift(ele);
            let j = arrCopy.indexOf(minNums.smallestNum);
            arrCopy = arrCopy.slice(0,j).concat(arrCopy.slice(j+1, arrCopy.length));
            // console.log(arrCopy);
            // let temp = arrCopy[j];
            // arrCopy[j] = arrCopy[arrCopy.length - 1];
            // arrCopy[arrCopy.length - 1] = temp;
            // console.log(arrCopy)
            // [arrCopy[j], arrCopy[arrCopy.length - 1]] = [arrCopy[arrCopy.length - 1], arrCopy[j]];
            // arrCopy.pop();
            minNums.arr = arrCopy;
            minNums.largestNum = ele;
            minNums.smallestNum = Math.min(...minNums.arr);
        }
        // console.log(i)
        // console.log(maxNums);
        // console.log(minNums);
    }
    // console.log("**********")
    // console.log(maxNums);
    // console.log(minNums);
    for(let i = 0; i < minNums.arr.length; i++) {
        minSum += minNums.arr[i];
        maxSum += maxNums.arr[i];
    }
    console.log(maxSum + " " + minSum);
}
miniMaxSumNoSort([1, 3, 5, 7, 9]);
