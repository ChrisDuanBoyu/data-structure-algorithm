
// 二叉树是一个完全二叉树
class Heap {
    constructor() {
        this.heapArr = [];
    }

    getSize() {
    return this.heapArr.length
    }

    add(value) {
        this.heapArr.push(value)
        this.siftUp(this.heapArr.length - 1);
    
    }

    pop() {
        if (this.heapArr.length == 0) return 
        const head = this.heapArr[0];
        this.heapArr[0] = this.heapArr.pop()
        this.siftDown(0);
        return head;
    }

    siftUp(index) {
        if (index === 0){
            return;
        }
        const current = this.heapArr[index]
        const parent = this.heapArr[this.getParentIndex(index)];
        if (parent < current) {
            this.heapArr[this.getParentIndex(index)] = current;
            this.heapArr[index] = parent;
            this.siftUp(this.getParentIndex(index));
            
        }
    }


    siftDown(index) {
        const current = this.heapArr[index]
        const leftIndex = this.getLeftChildIndex(index);
        const rightIndex = this.getRightChildIndex(index);

        if (leftIndex < this.heapArr.length - 1) {
            const leftValue = this.heapArr[leftIndex];
            if (leftValue > current) {
                this.heapArr[leftIndex] = cur
             }
        }
      
        const rightValue = this.heapArr[rightIndex];

        
    }
    getLeftChildIndex(i) {
        return 2*i+1
    }
    getRightChildIndex(i) {
        return 2*i + 2
    }
    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }


}