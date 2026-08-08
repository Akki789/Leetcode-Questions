/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;

    for(let elem of nums){
        currentSum +=elem;
        maxSum = Math.max(currentSum, maxSum);

        if(currentSum<0){
            currentSum=0;
        }
    }
    return maxSum;
};