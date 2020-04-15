// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:
// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Author: https://leetcode.com/0618/
const productExceptSelf = nums => {
    let res = [];

    nums.reduce((leftP, curr, i) => {
        res[i] = leftP;
        return leftP * curr;
    }, 1)
    nums.reduceRight((rightP, curr, i) => {
        res[i] *= rightP;
        return rightP * curr;
    }, 1)

    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));