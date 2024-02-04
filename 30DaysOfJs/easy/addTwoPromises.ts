/**
 * 2723. Add Two Promises
 * @link https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @description Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 */

type P = Promise<number>

// Variant 1
// @ts-ignore
async function addTwoPromises(promise1: P, promise2: P): P {
    // @ts-ignore
    return Promise.all([promise1, promise2]).then((result) => {
        const sum = result.reduce((previousValue, currentValue, currentIndex) => previousValue + currentValue)
        // @ts-ignore
        return new Promise((resolve, reject) => {
            resolve(sum)
        })
    })
};

// Variant 2

// @ts-ignore
async function addTwoPromises2(promise1: P, promise2: P): P {
    // @ts-ignore
    return await promise1 + await promise2
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */