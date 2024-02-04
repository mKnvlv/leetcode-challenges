/**
 *  @link https://leetcode.com/problems/to-be-or-not-to-be/description/
 * */
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    function be(v:any): boolean {
        if(v === val) return true
        else throw new Error("Not Equal")
    }
    function notBe(v:any): boolean {
        if(v !== val) return true
        else throw new Error("Equal")
    }

    return {
        toBe: (v) => be(v),
        notToBe: (v) => notBe(v)
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */