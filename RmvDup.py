# ##https://leetcode.com/problems/contains-duplicate/

# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

# Example 1:

# Input: nums = [1,2,3,1]
# Output: true
# Explanation:
# The element 1 occurs at the indices 0 and 3.


array = [1,2,46,32,98,61,34,46]

#BRUTE-FORCE APPROACH
def brute_force_duplicate_search(array):
    for i in range(len(array)-1):
        for j in range(i+1,len(array)):
            if array[i] == array[j]:
                return True
    return False

print(brute_force_duplicate_search(array))
#Time Complexcity:- O(NlogN)+O(N)

#OPTIMAL APPROACH
def smart_duplicate_search(array):
    dictionary = dict()
    if len(array)<2:
        return False
    else:
        for i in range(len(array)):
            if array[i] in dictionary:
                return True
            else:
                dictionary[array[i]] = True
    return False

print(smart_duplicate_search(array))