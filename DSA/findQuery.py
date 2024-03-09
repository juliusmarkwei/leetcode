from jovian.pythondsa import evaluate_test_cases

def locate_card(cards: list, target: int) -> int:
    if len(cards) < 1:
        return -1
    position = 0
    for card in cards:
        if card == target:
            return position
        position += 1
    return -1
    
def locate_cards2(cards, query):
    position = 0
    
    while True:
        if len(cards) < 1:
            return -1
        if cards[position] == query:
            return position
        position += 1
        
        if len(cards) == position:
            return -1
    
# cards may be empty
# cards may not contain target
# target may be the first item in cards
# target may be the last item in cards
# target may be in the middle of the cards
# target may appear more than one, return first occurrence
# cards may have repeating numbers

tests = [ {
            'input': [1, 2, 3, 4, 5],
            'target': 2,
            'output': 1
        },
        {
        'input': [4, 5, 5, 6, 7, 0],
        'target': 5,
        'output': 1
    },
        {
        'input': [],
        'target': 3,
        'output': -1
    },
]

for test in tests:
    print(locate_cards2(test['input'], test['target']) == test['output'])
    