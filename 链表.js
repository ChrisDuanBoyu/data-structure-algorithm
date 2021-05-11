

class ListNode { 
    constructor(value) { 
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRU {
    constructor(capacity) { 
        this.hashMap = new Map();
        //dummy node
        this.head = new ListNode(null)
        this.tail = this.head;
        this.capacity = capacity
        this.size = 0;
        
    }
    get(key) {
        if (!this.hashMap.has(key)) return null;
        this.moveToTail(key);
        return this.hashMap.get(key).value;
        
    }
    moveToTail(key) {
        const target = this.hashMap.get(key);
        target.prev.next = target.next
        target.next.prev = target.prev;
        target.prev = this.tail
        this.tail.next = target
        target.next = null;
    }
    set(key, value) {
        if (!this.hashMap.has(key)) { 
            this.moveToTail(key);
            this.tail.value = value;
            this.hashMap[key] = value;
            return;
        }
        if (this.size >= this.capacity) deleteHead(key);
        this.insert(key, value);
      
        
    }

    insert(key, value) { 
        const newNode = ListNode(value);
        this.hashMap[key] = newNode;
        this.tail.next = newNode;
        newNode.prev = this.tail;
        newNode.next = null;
        this.size++;
    }
    deleteHead(key) {
        this.head.next = this.head.next.next;
        this.head.next.next.prev = this.head;
        this.hashMap.delete(key);
    }
 } 