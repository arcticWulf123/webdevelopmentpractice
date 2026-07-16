var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
};

function square(n) {
  return n * n;
}

let answer = twoSum([1, 2, 3], square);
// 1 1 2 1 1
console.log(answer);

var isPalindrome = function (x) {
  const arr = Array.from(String(x), Number);
  //answer later, the logic is that x is a palindrome if it is still exactly the same as in reverse.
  for (let i = 0; i < arr.length; i++) {

  }
};
