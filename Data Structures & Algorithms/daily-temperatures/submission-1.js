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

    //deuxième solution
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        const stack = []; // will store indices

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop();
                result[prevIndex] = i - prevIndex;
            }

            stack.push(i);
        }

        return result;
    }
}
