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
            if (orderedNums[i] + 1 == orderedNums[i + 1]) {
                counter += 1;
            } else {
                counter = 1;
            }
            if (counter > res) {
                res = counter;
            }
        }

        return res;
    }

    // second solution

    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;

        for (let num of set) {
            // only start counting if it's the beginning of a sequence
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentLen = 1;

                while (set.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }

                maxLen = Math.max(maxLen, currentLen);
            }
        }

        return maxLen;
    }
}
