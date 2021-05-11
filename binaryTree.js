
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right) }
/**
 * 105 从前序与中序遍历序列构造二叉树
 * 思路：从 前序遍历里找出第一个节点是根节点 然后去inorder找到 index 然后 划分左右两边 rootIndex左边的节点数量是左子树 rootIndex - pStart 
 * 然后去inorder中截取出左子树的的数量即可 剩下就是又子树
 *  */
 var buildTree = function(preorder, inorder) {
    const indexMap = new Map();
    inorder.forEach((val,index)=>indexMap.set(val,index));
    return buildTreeHelper(0,preorder.length -1 ,0,inorder.length - 1 );

    function buildTreeHelper(pStart,pEnd,iStart,iEnd){
        if(pStart > pEnd) return null;
        const rootVal = preorder[pStart];
        const rootNode = new TreeNode(rootVal);
        const rootIndex = indexMap.get(rootVal);
        const leftNum = rootIndex - iStart;
        rootNode.left = buildTreeHelper(pStart + 1,pStart + leftNum,iStart,rootIndex - 1);
        rootNode.right = buildTreeHelper(pStart + leftNum + 1,pEnd,rootIndex + 1,iEnd);
        return rootNode;

    }

 };


/**
 * 968 监控二叉树 利用状态思想
 */

 var minCameraCover = function(root) {
    return dfs(root)[1]
   };
   
   
   function dfs(root){
       if(!root) return [Math.floor(Number.MAX_SAFE_INTEGER/2),0,0];
       const [la,lb,lc] = dfs(root.left);
       const [ra,rb,rc] = dfs(root.right);
       const a = lc + rc + 1;
       const b = Math.min(a,Math.min(la+rb,lb+ra));
       const c = Math.min(a,lb+rb);
       return [a,b,c]
   }


/**
 * 662 二叉树最大宽度 层析遍历的时候拿到左右节点的index关系
 * 
 */

 var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let queue = [[0n,root]];
    let max = 1n
    while(queue.length){
        const width = queue[queue.length -1][0]- queue[0][0] + 1n;
        if(width >max) max = width;
        const temp = [];
        queue.forEach(([index,node])=>{
          node.left&&temp.push([2n*index,node.left]);
           node.right&&temp.push([2n*index + 1n,node.right]);
        })
    queue = temp;
    }
    return Number(max)

};