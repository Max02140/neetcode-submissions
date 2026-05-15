class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        let groupedAnagrams = [];
        const setAnagrams = new Set();
        // const mapAnagrams = new Map();
        let currentAnagrams = [];

        for (let i = 0; i < strs.length; i++) {
            currentAnagrams = [];

            for (let j = 0; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j]) && !setAnagrams.has(strs[j])) {
                    currentAnagrams.push(strs[j]);
                    setAnagrams.add(strs[j]);
                }
            }

            if(currentAnagrams.length) groupedAnagrams.push(currentAnagrams);
        }

        return groupedAnagrams;
    }

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

    
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const key = str.split('').sort().join('');

            if (!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}



