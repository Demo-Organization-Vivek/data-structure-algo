#include<iostream>
#include<vector>

using namespace std;

vector<int> pairSum(vector<int> nums,int target){
    int n=nums.size();
    vector<int> ans;
    int i=0,j=n-1;
    //O(n)
    while(i<j){
        int pS=nums[i]+nums[j]==target;
        if(pS > target){
            j--;
        }
        else if(pS< target){
         i++;
        }
        else{
            ans.push_back(i);
            ans.push_back(j);
            return ans;
        }
    }
    //o(n^2)
    for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if(nums[i]+nums[j]==target){
               ans.push_back(i);
               ans.push_back(j);
               return ans;
            }
        }
    }
    return ans;
}

int main(){
    vector<int> nums={2,7,9,15};//24
    int target=24;
    vector<int> ans=pairSum(nums,target);
    cout<<ans[0]<<" "<<ans[1]<<endl;
    return 0;
}