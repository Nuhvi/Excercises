const maxSlidingWindow = (nums, k) => {
  let dequeue = [],
    maxArr = [];

  if (nums.length == 0) return [];

  nums.forEach((el, i) => {
    while (nums[dequeue.slice(-1)[0]] < nums[i]) dequeue.pop();

    let windowStart = i + 1 - k;
    if (dequeue[0] < windowStart) dequeue.shift();

    dequeue.push(i);

    if (windowStart >= 0) {
      maxArr.push(nums[dequeue[0]]);
    }
  });

  return maxArr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [ 3, 3, 5, 5, 6, 7 ]);

console.log(maxSlidingWindow([1, 3, -1, -3, 1, 3, 6, 7], 3), [ 3, 3, 1, 3, 6, 7 ]);
