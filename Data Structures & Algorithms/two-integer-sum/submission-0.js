class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();

        let counter = 0;
        for (const [index, value] of nums.entries()) {
            const complement = target - value;

            if (numsMap.has(complement)) return [numsMap.get(complement), index];

            numsMap.set(value, index);
        }
    }
}
