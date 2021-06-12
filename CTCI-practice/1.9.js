/*
Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, wrote code to check if s2 is a rotation of s1 using only one call to isSubstring

test:
s1= "waterbottle"
s2= "erbottlewat"

OICE

Output: a boolean representing if one str is a rotation of another
Input: two strings
Constraints: One call to isSubstring
Edge Cases: n/a

we have a function is substring which checks if one word is a substring of another
  - can only call this once

PSEUDO

declare an object that will hold all the values and the count of those values in str1

loop through string 1 and store the number of letter occurences

loop through string 2 and subtract those occurences
  if we hava value that equals 0 then delete it

we check the length of the object keys


*/
