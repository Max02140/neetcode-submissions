class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length || t.length == "") {
            return "";
        }

        let l = 0;

        let window = {};
        const map = {};
        let res = [];
        let resLength = s.length;

        for (const char of t) {
            map[char] = (map[char] || 0) + 1;
            window[char] = 0;
        }

        let count = 0;
        let target = Object.keys(map).length;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            window[c] = (window[c] || 0) + 1;

            if (map[c] && window[c] === map[c]) {
                count++;
            }

            while (count == target) {
                if (r - l + 1 <= resLength) {
                    resLength = r - l + 1;
                    res = [l, r];
                }
                window[s[l]]--;
                if (map[s[l]] && window[s[l]] < map[s[l]]) {
                    count--;
                }
                l++;
            }
        }

return s.slice(res[0],res[1]+1)
    }
}
