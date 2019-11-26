const BSTreeNode = (val, left = null, right = null) => ({
  val,
  left,
  right,
});

const arrayToBST = (arr, i = 0) => {
  if (i >= arr.length || arr[i] === null) return null;

  const node = BSTreeNode(arr[i]);
  node.left = arrayToBST(arr, 2 * i + 1);
  node.right = arrayToBST(arr, 2 * i + 2);

  return node;
};

module.exports = {
  LinkedListNode: (val, next = null, prev = null) => {
    val, next, prev;
  },
  TreeNode: (val, children = null) => {
    val, children;
  },
  BSTreeNode,
  arrayToBST,
};
