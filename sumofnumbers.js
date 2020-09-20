function sumFor(list) {
  let sum = 0;
  for (let x = 0; x < list.length; x++) {
    sum += list[x];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let x = 0;
  while (x < list.length) {
    sum += list[x];
    x++;
  }
  return sum;
}
function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list.pop() + sumRecursion(list);
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}
const list = [1, 2, 3, 4];

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
