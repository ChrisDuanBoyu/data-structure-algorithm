// const longestPalindrome = function (s) {
//     const map = {};
//     let result = 0;
//     for (let i = 0; i < s.length; i++){
//         if (map[s.charAt(i)]) {
//             result = result + 2;
//            delete map[s.charAt(i)] 
//         } else { 
//             map[s.charAt(i)] = 1;
//         }
        
//     }
//     result = result + (Object.keys(map).length && 1);
//     return result
    
// }


const isPalindrome = function (s) {
    if(s.length===0) return true;
    let left =0, right =s.length-1;
    while(left<=right){
       while(!isVaild(s[left])){
           left++;
       }
       while(!isVaild(s[right])){
           right--;
       }
       if(s[left].toLowerCase() !==s[right].toLowerCase()){
          return false 
       }
        left++;
        right--;
    }
    return true
    
}


function isVaild(c) {
    if(c<='9'&& c>='0') return true;
    if (c <= 'z' && c >= 'a') return true;
    if (c <= 'Z' && c >= 'A') return true;
    return false;
}


const longestPalindrome = function (s) {
    // write your code here
    if(s.length <2) return s
    let maxLen = 1;
    let maxLeft = 0, maxright = 0;
    for (let i = 1; i <s.length; i++){
        centerSpread(i - 1, i);
        centerSpread(i - 1, i + 1);
        
        
    }
    function centerSpread(left, right) { 
        let curLength;
        if (right - left === 1) {
            curLength = 0
        } else { 
            curLength=1;
        }
       

        while (s[left] === s[right] && left >= 0&& right<s.length) {
            curLength = curLength + 2;
            if (curLength > maxLen) { 
                maxLeft = left;
                maxright = right;
                maxLen=curLength
            }
            left--;
            right++;
        }
    }
    return s.substring(maxLeft, maxright + 1);
}

function findTarget(target, nums) {
    let left = 0, right = nums.length - 1;
    while (left < right - 1) { 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > nums[left]) {
            if (nums[mid] > target&& target>=nums[left]) {
                right = mid;
            } else {
                left = mid;
            }
        } else { 
            if (nums[mid] < target&&target<=nums[right]) {
                left = mid;
            } else { 
                right = mid;
            }
            
        }
    }
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    return -1;

 }


 

 // 排序数组里找最接近target的K个数字

function findClosetK(nums, target, k) {
    // 找出边界
    // 双指针左右移动
    //直到结果数组满足长度要求（k）
    let right = findClosetUpper(nums, target)
    let left = right - 1;
    const res = [];
    while (res.length < k) { 
        if (isLeftCloser(left, right, nums, target)) {
            res.push(nums[left]);
            left--;
        } else { 
            res.push(nums[right]);
            right++
        }
    }

    return res;

}

 
function isLeftCloser(left, right, nums, target) {
    if (left < 0) { 
        return false;
    }
    if (right > nums.length - 1) { 
        return true;
    }
    return target - nums[left] < nums[right] - target;

 }
//123    46   78
function findClosetUpper(num, target) {
    let left = 0, right = num.length - 1;
    while (left < right - 1) { 
        let mid = Math.floor((left + right) / 2);
        if (num[mid]=== target) {
            return mid;
        }
        if (num[mid] > target) {
            right = mid;
        } else { 
            left = mid;
        }
    }
    if (num[left] >= target) return left;
    if (num[right] >= target) return right;

}
 
//    12345321 找到最大值
// 旋转数组 最小值  45123
// 旋转数组 找到指定值
