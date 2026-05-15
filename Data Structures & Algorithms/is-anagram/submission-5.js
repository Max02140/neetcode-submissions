class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        // const sSet = new Set(s.split(''))
        // const tSet = new Set(t.split(''))

        //Je dois vérifier si le nombre de lettre est correct

        const countCharS = {};
        const countCharT = {};

        for (const letter of s) {
            if (!countCharS[letter]) {
                countCharS[letter] = 0;
            }
            countCharS[letter] += 1;
        }

        for (const letter of t) {
            if (!countCharT[letter]) {
                countCharT[letter] = 0;
            }
            countCharT[letter] += 1;
        }

        for (const key in countCharS) {
            if (countCharS[key] !== countCharT[key]) {
                return false;
            }
        }

        return true;
    }
}
