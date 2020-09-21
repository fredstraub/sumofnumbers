const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let x = 0;
  let sum = 0;
  while (x < nums.length) {
    sum += nums[x];
    x++;
  }
  return sum;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  const sum = _.reduce(nums, (memo, num) => memo + num, 0);
  return sum;
}

console.log(sumTheSimpleWay(testNums));
