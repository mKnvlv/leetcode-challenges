/**
 * 2621. Sleep
 * @link https://leetcode.com/problems/sleep/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @description Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 * */

// @ts-ignore
async function sleep(millis: number): Promise<void> {
    // @ts-ignore
     return new Promise((resolve, reject)=> {
         setTimeout(resolve,millis)
         setTimeout(reject,millis)
     })
}


/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */