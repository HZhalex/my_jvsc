/*
function hung(nums){
    let arrSums = [nums[0]];
    let intMax = nums[0];

    for (let i = 1 ; i < nums.length; i++){
        const intSuma = arrSums[i-1] + nums[i];

        if (intSuma > nums[i]){
            arrSums.push(intSuma)
            intMax = intMax > intSuma ? intMax : intSuma
        } else {
            arrSums.push(nums[i]);
            intMax = intMax > nums[i] ? intMax : nums[i];
        }
    

    }
    return intMax;
}

console.log(hung([-2,1,-3,4,-1,2,1,-5,4]))
*/
function maxSubArray(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
      if (maxCurrent > maxGlobal) {
        maxGlobal = maxCurrent;
      }
    }
    return maxGlobal
  }
console.log(maxSubArray([5,4,-1,7,8]))