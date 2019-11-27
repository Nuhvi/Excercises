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

const LinkedListNode = (val, next = null, prev = null) => ({
  val,
  next,
  prev,
});

const arrayToLinkedList = (arr) => {
  const head = LinkedListNode(arr[0]);
  let node = head;
  arr.slice(1).forEach((element) => {
    node.next = LinkedListNode(element);
    node = node.next;
  });

  return head;
};

module.exports = {
  LinkedListNode,
  TreeNode: (val, children = null) => {
    val, children;
  },
  BSTreeNode,
  arrayToBST,
  arrayToLinkedList,
};
