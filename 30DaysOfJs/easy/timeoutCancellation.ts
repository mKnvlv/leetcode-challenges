/**
 * 2715. Timeout Cancellation
 * @link https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @description Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
 *
 * @description After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void

// @ts-ignore
function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const id = setTimeout(() => {
        return fn(...args)
    }, t)
    return () => {
        clearTimeout(id)
    }
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */