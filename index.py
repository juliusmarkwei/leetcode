def reverseSentence(sentence: str):
    return sentence[::-1]

def concatenateArrays(a: list, b: list):
    return a + b

def containsDuplicate(a: list):
    return list(set(a)) != a


a = [1, 2, 3, 4, 5, 0]
# print(reverseSentence('watchman'))
# print(concatenateArrays([12, 3, 4, 5], [6, 7, 8, 9]))
print(containsDuplicate(a))