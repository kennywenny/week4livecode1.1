function max(first, second) {
  return first > second ? first : second;
}

// Ternary:
// return condition ? value_if_condition_true : value_if_condition_false
// Means the same as:
/*
if (condition) {
  return value_if_condition_true
} else {
  return value_if_condition_false
}
*/

// First test
console.log('Expect: 2')
console.log(max(1, 2))

// Second test
console.log('Expect: 6')
console.log(max(6, -4))

// Third test
console.log('Expect: 3.4')
console.log(max(3.4, 2))
/*
  *
Input: 1, 2
Output: 2

Input: 6, -4
Output: 6

Input: 3.4, 2
Output: 3.4
*/