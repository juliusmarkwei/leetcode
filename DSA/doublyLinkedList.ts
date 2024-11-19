class ListNode {
    val: string;
    next: ListNode | null;
    prev: ListNode | null;
    constructor(val: string, next = null, prev = null) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    head: ListNode | null;
    size: number;
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index: number): string | null {
        if (!this.head) return null;

        let tracker = 0;
        let current = this.head;
        while (index < this.size) {
            if (tracker == index) {
                return current.val;
            }
            tracker++;
            current = current?.next as ListNode;
        }

        return null;
    }

    addAtHead(val: string): void {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        newNode.prev = null;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val: string): void {
        const newNode = new ListNode(val);
        let current = this.head;
        while (current?.next) {
            current = current.next;
        }
        if (current) {
            current.next = newNode;
            newNode.prev = current;
        } else {
            this.head = newNode;
            newNode.prev = null;
        }
        this.size++;
    }

    addAtIndex(index: number, val: string): void {
        if (index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let tracker = 0;
        let current = this.head;
        while (index < this.size) {
            if (tracker == index - 1) {
                const newNode = new ListNode(val);
                newNode.next = current!.next;
                newNode.prev = current;
                current!.next = newNode as ListNode;
                this.size++;
                return;
            }
            tracker++;
            current = current?.next as ListNode;
        }
    }

    deleteAtIndex(index: number): void {
        if (index >= this.size || index < 0) return;
        if (index === 0) {
            // Deleting the head
            this.head = this.head?.next || null;
            if (this.head) {
                this.head.prev = null;
            }
            this.size--;
            return;
        }

        let tracker = 0;
        let current = this.head;

        while (tracker < index && current) {
            // Traverse to the desired index
            tracker++;
            current = current.next as ListNode;
        }

        if (current && current.prev) {
            current.prev.next = current.next; // Update previous node's next pointer
        }
        if (current && current.next) {
            current.next.prev = current.prev; // Update next node's prev pointer
        }

        this.size--; // Decrease the size of the list
    }

    deleteFromIndexToEnd(index: number): void {
        if (index >= this.size || index < 0) return;
        if (index === 0) {
            this.head = null;
            this.size = 0;
            return;
        }

        let tracker = 0;
        let current = this.head;
        while (tracker < index && current) {
            tracker++;
            current = current.next as ListNode;
        }

        if (current && current.prev) {
            current.prev.next = null;
        }

        this.size = tracker;
    }
}

// test cases
const myLinkedList = new DoublyLinkedList();
myLinkedList.addAtHead("a");
myLinkedList.addAtTail("b");
myLinkedList.addAtTail("c");
myLinkedList.addAtTail("c");
// myLinkedList.deleteAtIndex(0);
// myLinkedList.addAtIndex(1, "d");

myLinkedList.deleteFromIndexToEnd(5);
console.log(myLinkedList);
