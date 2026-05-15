class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = [];
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);

            if (i == nums.length - 1 && count == 0) {
                i = -1;
                count = 1;
            }
        }

        return ans;
    }
}
