/** 
 * 240 二维数组查找 
 * 从左下角查找 比目标小则右边移动 比目标大则向上移动
 * 
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    const rows = matrix.length;
    if(rows === 0) return false
    const columns = matrix[0].length;
    if(columns ===0) return false
    let x = rows - 1,y =0;
    while(x < rows && x>=0 && y < columns && y>=0){
        if(matrix[x][y] === target) return true
        if(matrix[x][y] < target){
            y++;
        }else{
            x--
        }
    }
    return false
 };

 /**
  *  旋转数组最小数字 可能有重复数字 所有需要判断相等情况 必须和有边界判断 因为12345 这种未旋转的无法判断左边来得到结果 如果相等需要right-- 因为升序排列 
  *  答案肯定出现在right左边
  */
  var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1;
   
    while(left<right - 1){
        let mid = Math.ceil((left + right) / 2);
        if(numbers[mid]< numbers[mid-1]) return numbers[mid];
        if(numbers[mid] > numbers[right]){
            left = mid;
        }else if(numbers[mid] < numbers[right]){
            right = mid
        }else{
            right--
        }
    }
    if(numbers[left] < numbers[right]) return numbers[left];
    return numbers[right]

  };



/**
 *  把数组排成最小的数
 * 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
        [10,2]
    输出: "102"
    输入: [3,30,34,5,9]
    输出: "3033459"
 */

    var minNumber = function(nums) {
        nums.sort((a,b)=> {
            if(Number(a+''+b) <Number(b+''+a)){
                return -1;
            }
            return 1;
        })
        return nums.join('')
    
    };