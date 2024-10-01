//Maximum Subarray Sum 
//Kadane's Algorithm

//Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.

//Examples:
//Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
//Output: 11
//Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.

// JavaScript Program to find the maximum subarray sum using nested loops 

// Function to find the sum of subarray with maximum sum
#include <bits/stdc++.h>
using namespace std;

// Function to find the sum of subarray with maximum sum
int maxSubarraySum(vector<int> &arr) {
    int res = arr[0];
  
    // Outer loop for starting point of subarray
      for(int i = 0; i < arr.size(); i++) {
        int currSum = 0;
      
        // Inner loop for ending point of subarray
        for(int j = i; j < arr.size(); j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = max(res, currSum);
        }
    }
    return res;
}

int main() {
    vector<int> arr = {2, 3, -8, 7, -1, 2, 3};
    cout << maxSubarraySum(arr);
    return 0;
}