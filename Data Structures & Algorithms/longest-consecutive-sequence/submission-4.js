class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums.sort((a, b) => a - b));

        const orderedNums = [...numsSet];
        // for (let value of numsSet) {
        //     console.log(value);
        //     if()
        // }

        console.log(orderedNums);

        let res = 0;
        let counter = 1;
        for (let i = 0; i < orderedNums.length; i++) {
            if (orderedNums[i] + 1 == orderedNums[i+1]) {
                counter += 1;
            } else {
                counter = 1
            }
            if (counter > res) {
                res = counter;
            }
        }

        return res;
    }
}
