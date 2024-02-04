/**
 * 2623. Memoize
 * @link https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript
 * @description - Given a function fn, return a memoized version of that function.
 */

type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    let cache: { [key: string]: number } = {}
    return function (...args) {
        const key = args.toString()
        if (cache[key] != null) {
            return cache[key]
        } else {
            const result = fn(...args)
            cache[key] = result
            return result
        }
    }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */