{/*https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.
*/}

//BRUTE-FORCE APPROACH
function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
      arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
}
//Time Complexcity:- O(NlogN)+O(N)


//OPTIMAL APPROACH
function removeDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }

//Time Complexcity:- O(N)