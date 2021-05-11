
class Node {
    constructor(isWord= false) {
        this.isWord = isWord;
        this.next = new Map();
    
    }
}
class Trie {
    constructor() {
        this.root = new Node();
        this.size = 0;
    }
    getSize() {
        return this.size;
    }

    add(word) {
        let cur = this.root
        word.split('').forEach(char => {
            if (!cur.next.has(char)) {
                const newNode = new Node();
                cur.next.set(char, newNode);
            }
            cur = cur.next.get(char);
            
        });
        if (!cur.isWord) {
            cur.isWord = true;
            this.size++;
        }
    }
         
    contains(word) {
        let cur = this.root;
        word.split('').forEach(char => {
            if (!cur.next.has(char)) {
               return false
            }
            cur = cur.next.get(char);       
        });
        return cur.isWord;
    }
}

