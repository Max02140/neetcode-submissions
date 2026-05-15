class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let count = 0;
        let l = 0;
        let r = 0;
        let set = new Set();
        let maxSub = 0;
        let currentCount = 0;

        while (r < s.length) {
            // console.log(set)
            if (set.has(s[r])) {
                l++;
                r=l
                currentCount = 0;
                set = new Set()
            }
            set.add(s[r])
            currentCount++;
            maxSub = Math.max(maxSub, currentCount);

            r++;
        }

        return maxSub;
    }
}
