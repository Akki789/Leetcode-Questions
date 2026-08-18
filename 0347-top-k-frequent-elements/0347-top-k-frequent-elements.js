/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for (let elem of nums) {
       map.set(elem, (map.get(elem) || 0) +1);
    }

    let output = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([key]) => key);
    return output.slice(0, k)
};
