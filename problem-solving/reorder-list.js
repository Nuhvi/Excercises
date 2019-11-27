Test = require('./utils/testSuite');
graphy = require('./utils/graphy');

const reorderList = (head) => {
  return head;
};

Test.assertEquals(reorderList(graphy.arrayToLinkedList([1, 2, 3, 4])), [1, 4, 2, 3]);
