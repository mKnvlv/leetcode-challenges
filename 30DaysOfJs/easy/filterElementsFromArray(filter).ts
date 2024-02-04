/** https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript */

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result = [...result, arr[i]]
        }
    }
    return result
};

/*
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
*/