var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
};

var isPalindrome = function (x) {
  isPalindrome = false;
  const arr = Array.from(String(x), Number); // [ 1, 2, 1]
  arr2 = [];
  //answer later, the logic is that x is a palindrome if it is still exactly the same as in reverse.
  for (let i = arr.length; i > 0; i++) {
    arr2.push(arr[i])
  }

  console.log(arr2)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      return isPalindrome;
    } else {
      return isPalindrome = true;
    }
  }
};

