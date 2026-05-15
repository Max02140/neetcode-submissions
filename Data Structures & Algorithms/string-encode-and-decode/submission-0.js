class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let s of strs) {
            res += s.length + "#" + s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let res = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            // trouver le '#'
            while (s[j] !== "#") {
                j++;
            }

            // récupérer la longueur
            let length = parseInt(s.slice(i, j));

            // extraire la string
            let start = j + 1;
            let end = start + length;

            let str = s.slice(start, end);
            res.push(str);

            // avancer le curseur
            i = end;
        }

        return res;
    }
}
