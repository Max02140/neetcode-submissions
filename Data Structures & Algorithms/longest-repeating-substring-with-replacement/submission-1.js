class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFreq = 0;
        let result = 0;

        const count = {};

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            count[char] = (count[char] || 0) + 1;

            maxFreq = Math.max(maxFreq, count[char]);

            while (right - left + 1 - maxFreq > k) {
                count[s[left]]--;
                left++;
            }

            result = Math.max(result, right - left + 1);
        }

        return result;
    }
}
