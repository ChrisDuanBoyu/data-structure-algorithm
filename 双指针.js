

/**
 * 变换数组 使得奇数在前 偶数在后
 */
var exchange = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while(left<right){
        while(isOdd(nums[left]) && left<right){
            left ++;
        }
        while(isEven(nums[right]) && left<right){
            right --;
        }
        if(left <right){
            [nums[left] , nums[right]] = [nums[right] , nums[left]]
        }
    }
    return nums

};

function isEven(num){
    return num % 2===0;
}
function isOdd(num){
    return num%2 ===1;
}


/**
 * 
    顺时针打印矩阵
 */
var spiralOrder = function(matrix) {
    if(matrix.length == 0) return [];
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1, x = 0;
    let res = [];
    while(true) {
        for(let i = left; i <= right; i++) res[x++] = matrix[top][i];
        if(++top > bottom) break;
        for(let i = top; i <= bottom; i++) res[x++] = matrix[i][right];
        if(left > --right) break;
        for(let i = right; i >= left; i--) res[x++] = matrix[bottom][i];
        if(top > --bottom) break;
        for(let i = bottom; i >= top; i--) res[x++] = matrix[i][left];
        if(++left > right) break;
    }
    return res;
};



// 判断一个字符串忽略大小写和非法字符之后是否是一个回文串
function isVaild(s) { 
    const isDigital = s > '0' && s < '9';
    const isVaild = s > 'a' && s < 'z';
    return isDigital || isVaild;
}

function isPalinrome(str) {
    let left = 0, right = str.length;
    while (left < right) {
        while (left < right && !isVaild(str.charAt(left))) {
            left++;
        }
        while (right > left && !isVaild(str.charAt(right))) {
            right--
        }
        if (left < right && str.charAt(left).toLowerCase() !== str.charAt(right).toLowerCase()) { 
                return false
        }
        left++;
        right--;
    }
    return true
}
 

// 判断是否可以去掉一个字符的情况下为回文字符串
const validPalindrome = function (s) {
    
    const [left,right] = findDifference(s,0,s.length-1);
    if(left>=right) return true;
    
    return isPalindrome(s,left+1,right)|| isPalindrome(s,left,right-1);
    
      
      }
  
  
  
  function isPalindrome(str,left,right){
     const [newLeft,newRight] =findDifference(str,left,right);
     return newLeft>=newRight;
     
  }
  
  function findDifference(str,left,right){
      while(left<right){
          if(str.charAt(left)!==str.charAt(right)){
              return [left,right]
          }
          left++;
          right--;
      }
      return [left,right]
      
  }
  


  const twoSum = function (numbers, target) {
    // write your code hereconst twoSum = function (numbers, target) {
    // write your code here
    
    const map= {}
    let index1,index2
      numbers.forEach((num, index) => {
    
        if(map[target-num]!==undefined){
            index1= map[target-num];
            index2= index;
            
        }
            map[num]=index;
        
        
    })
    
    return [index1,index2]

}


const twoSum2 = (numbers, target) => {
    const numbersSorted = numbers.sort((a,b)=>a-b);
    console.log(numbersSorted)
    let left = 0, right = numbersSorted.length - 1;
    while (left < right) { 
        const tempSum = numbersSorted[left] + numbersSorted[right];
        if (tempSum === target) { 
            return [left, right];
        }
        if (tempSum > target) { 
            right--;
        } else {
            left++;
        }

    }

 }


const twoSum5 = function (nums, target) {
    const numsSorted = nums.sort((a,b)=>a-b);
    console.log(numsSorted)
    let left = 0, right = numsSorted.length - 1;
    let count = 0;
    while (left < right) { 
        const tempSum = numsSorted[left] + numsSorted[right];
        if (tempSum <= target) {
            count =count+ right - left;
            left++;
        }
        else if (tempSum > target) { 
            right--
        }

    }
    return count;
    
}



const longestPalindrome = function (s) {
    const map={};
    for(let i=0;i<s.length;i++){
        map[s[i]]=map[s[i]]||0 + 1;
    }
    const countArr = Object.keys(map).map(key => map[key]);
    let result = countArr.filter(count => count % 2 === 0).reduce((a, b) => a + b);
    if(countArr.includes(1)) result++;
    return result
    
}
console.log(longestPalindrome("abccccdd"))