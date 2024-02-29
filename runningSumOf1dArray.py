class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        result = []
        temp = 0
        for num in range(len(nums)):
            temp += nums[num]
            result.append(temp)
        return result