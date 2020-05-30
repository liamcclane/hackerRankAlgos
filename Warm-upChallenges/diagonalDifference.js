/**Diagonal Difference
 * Given a square matrix, calculate the absolute difference between 
 * the sums of its diagonals.
 * 
 * For example, the square matrix  is shown below:
 * 
 * [[1, 2, 3],
 *  [4, 5, 6],
 *  [9, 8, 9]]  
 * The left-to-right diagonal 1+5+9 = 15. The right to left diagonal 3+5+9 = 17. 
 * Their absolute difference is |15 - 17| = 2.
 * 
 * Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
 * 
 * Sample Input
 * 
 * [[11, 2, 4],
 *  [4, 5, 6],
 *  [10, 8, -12]]
 * return 15 => |4 - 19| => | (11 + 5 - 12) - (4 + 5 + 10) |
 * The primary diagonal is:
 * 
 * 11
 *    5
 *      -12
 * The secondary diagonal is:
 * 
 *      4
 *    5
 * 10
 */
const diagonalDifference = (arr) => {
    let primarySum = 0, secondarySum = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        primarySum += arr[i][i];
        secondarySum += arr[i][j];
    }
    return Math.abs(primarySum - secondarySum);
}
// console.log(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]]));
