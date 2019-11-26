Test = require('./utils/testSuite');

const findMin = (nums) => {
  for (n of nums) {
    if (n < nums[0]) return n;
  }

  return nums[0];
};

Test.assertEquals(findMin([1, 2]), 1);
Test.assertEquals(findMin([3, 4, 5, 1, 2]), 1);
Test.assertEquals(findMin([4, 5, 6, 7, 0, 1, 2]), 0);
