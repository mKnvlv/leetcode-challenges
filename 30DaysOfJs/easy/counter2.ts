/**
 * https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
 */

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let num = init
    return {
        increment: () => ++num,
        decrement: () => --num,
        reset: () => num = init,
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */