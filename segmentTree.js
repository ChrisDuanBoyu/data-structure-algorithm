class SegmentTree {
    constructor(data) {
        this.data = [...data];
        this.tree = new Array(data.length * 4);
        this.buildSegmentTree(0,0,this.data.length-1)
    }
    getLeftIndex(i) {
        return 2*i+1
    }
    getRightIndex(i) {
        return 2*i+2
    }


    query(queryL, queryR) {
        if (queryL < 0 || queryL > this.data.length || queryR < 0 || queryR > this.data.length || queryL < queryR) {
            return 
        }
    }
    
    queryHelper(index,l,r,queryL,queryR) {
        if (l === queryL && r == queryR) {
            return this.tree[index]
        }
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        const mid = Math.floor((l + r) / 2)
        if (queryL >= mid + 1) {
            return this.queryHelper(rightIndex, mid + 1, r, queryL, queryR);
        }
        if (queryR <= mid) {
            return this.queryHelper(leftIndex, l, mid, queryL, queryR);
        }
        else {
            return this.queryHelper(leftIndex, l,mid, queryL, mid) + this.queryHelper(rightIndex,mid + 1,r,mid+1,queryR);

        }
     }

    buildSegmentTree(index, l, r) {
        if (l === r) {
            this.tree[index] = this.data[l]
        }
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getLeftIndex(index)
        const mid = Math.floor((l+r)/2)
        this.buildSegmentTree(leftIndex, l, mid);
        this.buildSegmentTree(rightIndex, mid+1, r);
        //求和为例
        this.tree[index] = this.tree[leftIndex] + this.tree[rightIndex]
     }
}



