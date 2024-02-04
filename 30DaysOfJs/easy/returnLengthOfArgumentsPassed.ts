/**
 *  @link https://leetcode.com/problems/return-length-of-arguments-passed/description/?envType=study-plan-v2&envId=30-days-of-javascript
 *  2703. Return Length of Arguments Passed
 */

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
