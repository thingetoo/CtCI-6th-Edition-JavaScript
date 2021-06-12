// Check permutations

// OICE
// Output: A boolean representing if one string is equal to another
// Input: two strings
// Constraints: < O(n^2)
// Edge Cases: if either string has no length => return false

// Pseudo:
// if the strings have different lengths
//   return false

// sort both of the strings => alphabetical order

// return str1 === str2

const checkPermutations = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  str1 = str1.split('').sort();
  str2 = str2.split('').sort();

  str1 = str1.join('');
  str2 = str2.join('');

  return str1 === str2;
};

console.log(checkPermutations('abc', 'cbs'));
