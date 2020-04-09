// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    const strip = str => {
        const stack = [];
        for (const char of str) {
            if (char === '#') {
                stack.length > 0 && stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
    }

    return strip(S) === strip(T);
};

console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.log(backspaceCompare('ab##', 'c#d#')); // true