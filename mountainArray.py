def checkPeek(array: list) -> str:
    possiblePeek = 0
    foundPeek = False
    for i in range(1, len(array)):
        if array[i-1] < array[i]:
            possiblePeek = array[i]
            if foundPeek:
                return 'Array is not a mountain'
        if array[i-1] > array[i]:
            possiblePeek = array[i-1]
            foundPeek = True
    if foundPeek:
        return 'Array is a mountain'
    return 'Array is not a mountain'


sampleArray = [1, 2]
print(checkPeek(sampleArray))