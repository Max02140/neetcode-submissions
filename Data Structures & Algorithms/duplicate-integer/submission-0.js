class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();

        for (const value of nums) {
            if (numsSet.has(value)) return true;
            else numsSet.add(value);
        }

        return false;
    }
}
