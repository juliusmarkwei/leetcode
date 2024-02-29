class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        wealth = []
        for account in range(len(accounts)):
            wealth.append(sum(accounts[account]))
        return max(wealth)
