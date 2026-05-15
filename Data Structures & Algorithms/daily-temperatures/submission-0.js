class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];

        for (let i = 0; i < temperatures.length; i++) {
            let jour = 0;
            let found = false;

            for (let j = i + 1; j < temperatures.length; j++) {
                jour++;
                if (temperatures[j] > temperatures[i]) {
                    found = true;
                    break;
                }
            }

            result.push(found ? jour : 0);
        }

        return result;
    }
}
