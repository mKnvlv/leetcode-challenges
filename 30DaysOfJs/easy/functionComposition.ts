/**
 * @link https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
 * */

type F = (x: number) => number;

function compose(functions: F[]): F {
    let result = 0
    return function(x) {
        result = x
        for (let i = functions.length-1; i >= 0; i-- ) {
            result = functions[i](result)
        }
        return result
    }
};

//The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */