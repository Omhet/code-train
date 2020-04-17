// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
// Author: https://leetcode.com/acassara/
const numIslands = grid => {
    let count = 0;

    function depthSearch(x, y) {
        if (grid[x][y] === '1') {
            grid[x][y] = '0';
        } else {
            return;
        }

        if (x < grid.length - 1) {
            depthSearch(x + 1, y);
        }

        if (y < grid[x].length - 1) {
            depthSearch(x, y + 1);
        }

        if (x > 0 && x < grid.length) {
            depthSearch(x - 1, y);
        }

        if (y > 0 && y < grid[x].length) {
            depthSearch(x, y - 1);
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                depthSearch(i, j);
            }
        }
    }

    return count;
};

console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]])) // 1