class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // je dois parcourir les jours i et repérer le prix leplus  faible pour l'instant.
        //  Pourchaque  jour suivant j,  jedois vérifier la différence de prix
        // je  dois  avoir une  variable  qui permet de  garder  la  différence  la plus élevée quand je parcours  les jours
        //

        let l = 0;
        let r = 1;

        let maxProfit = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                l = r;
            }
            r++;
        }

        return maxProfit;
    }
}
