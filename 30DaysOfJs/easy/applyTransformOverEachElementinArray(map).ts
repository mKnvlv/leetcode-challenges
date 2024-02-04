/**
 * @link https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * */

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result: number[] = []

    for (let i = 0; i < arr.length; i++) {
        result = [...result, fn(arr[i], i)]
    }
    return result
};

/*
Example 1
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
    const newArray = map(arr, plusone); // [2,3,4]
    The function increases each value in the array by one.

Example 2
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
*/


