// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    const map = {};

    for (const str of strs) {
        const key = str.split('').sort().join('');
        const arr = map[key] ? map[key] : [];
        map[key] = arr;
        arr.push(str);
    }

    return Object.values(map);
};
// Time Complexity: O(NKlogK)

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
