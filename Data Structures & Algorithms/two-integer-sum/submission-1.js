class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();

        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            const value = nums[i]
            const complement = target - value;

            if (numsMap.has(complement)) return [numsMap.get(complement), i];

            numsMap.set(value, i);
        }
    }
}
