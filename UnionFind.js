class UF {
    constructor(size) {
        this.parents = [];
        for (let i = 0; i < size; i++) {
            this.parents[i] = i;
        }

    }
    getSize() {
        return this.parents.length;
    }
    find(p) {
        while (this.parents[p] !== p) {
            p = this.parents[p];
        }
        return p
    }

    union(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);
        if (pRoot === qRoot) return;
        this.parents[pRoot] = qRoot;
    }
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
}