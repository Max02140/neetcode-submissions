class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;

        let i = 0
        let j = heights.length - 1;


        while (i<j) {
            const area = Math.min(heights[j],heights[i]) * (j-i)
            res = Math.max(res, area)
            if(heights[i]<=heights[j]){
                i++
            }
            else{
                j--
            }
        }


        return res;
    }
}
