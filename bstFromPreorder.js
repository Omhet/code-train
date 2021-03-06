// Return the root node of a binary search tree that matches the given preorder traversal.
// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, and any descendant of node.right has a value > node.val.  Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// Example 1:
// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

// Note: 
// 1 <= preorder.length <= 100
// The values of preorder are distinct.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// Author: https://leetcode.com/ajalbani/
const bstFromPreorder = preorder => {
    let root = null;
    let traversePreorder = (node, val) => {
        if(node === null) return new TreeNode(val);
        if(val > node.val) node.right = traversePreorder(node.right, val);
        if(val < node.val) node.left = traversePreorder(node.left, val);
        return node;
    }
    preorder.forEach(n => root = traversePreorder(root, n))
    return root;
};