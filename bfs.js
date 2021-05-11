/**
 * @param M: a matrix
 * @return: the total number of friend circles among all the students
 */
const findCircleNum = function (M) {
    // Write your code here\
    const N = M.length;
    const recordMap ={}
    let res = 0;
    for (let i = 0; i < N;i++){
        if(recordMap[i]) continue;
        res++;
        BFS(i,M,recordMap)
    }
    return res
}
Number.POSITIVE_INFINITY




function BFS(curNode,M,recordMap){
    const queue = [curNode]
    recordMap[curNode] = true
    while (queue.length){
        const node = queue.shift();
        const friends = getFriends(node,M[node]);
        friends.forEach(friend=>{
            if(recordMap[friend]) return;
            recordMap[friend] = true
            queue.push(friend)
        })
    }
}


function getFriends(cur,friendsArr){
    const res = [];
    for(let i = 0;i<friendsArr.length;i++){
        if(i === cur) continue
        if(friendsArr[i]===1){
            res.push(i)
        }
    }
    return res;
}



const shortestPath2 = function (grid) {
    // write your code here
    const N = grid.length;
    const M = grid[0].length;
    const res =[]
    for (let i = 0; i < N; i++) { 
        res[i] =[]
        for(let j = 0; j < M; j++) { 
            res[i][j] = 0;
        }
    }
  
    for(let j=0;j<M;j++){
        for (let i = 0; i < N; i++) {
            if (i === 0 && j === 0) continue;
            if (grid[i][j] === 1) {
                res[i][j] = Number.POSITIVE_INFINITY
                continue
            }  
                const firstChoice= i>=1&&j>=2?res[i-1][j-2]:Number.POSITIVE_INFINITY
                const secondChoice = i+1<N&&j>=2?res[i+1][j-2]:Number.POSITIVE_INFINITY 
                const thirdChoice = i>=2&&j>=1?res[i-2][j-1]:Number.POSITIVE_INFINITY
                const fourthChoice = i+2<N&&j>=1?res[i+2][j-1]:Number.POSITIVE_INFINITY
                res[i][j] = Math.min(firstChoice, secondChoice, thirdChoice, fourthChoice) + 1;
              
            
        }
    }

    return  Number.isFinite(res[N - 1][M - 1] )? res[N - 1][M - 1]:-1;
    
    
}

console.log(shortestPath2([[0,0,0,0],[0,0,0,0],[0,1,0,0]]));