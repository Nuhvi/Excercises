var canJump = function(nums) {
  let lastPos = nums.length - 1
  
  for(i = nums.length - 1; i >= 0; i-=1){
      if(i + nums[i] >= lastPos) lastPos = i
  }
  
  return lastPos === 0
};