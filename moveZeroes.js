// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    let nonZeroes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, nonZeroes);
            nonZeroes++;
        }
    }
};

console.assert(moveZeroes([0, 1, 0, 3, 12]));
console.assert(moveZeroes([0, 0, 3, 12]));
console.assert(moveZeroes([3, 12, 0, 0]));
console.assert(moveZeroes([0, 0]));
console.assert(moveZeroes([0]));
console.assert(moveZeroes([1, 2]));
console.assert(moveZeroes([1, 2, 0, 3, 0, 4, 0, 3]));
