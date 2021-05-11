//旋转数组求最小值  45123 找到1


function findMin(nums: number[]) {
    let start = 0, end = nums.length - 1, right = nums[nums.length - 1];
    while (start < end - 1) { 
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] <= right) {
            end = mid;
        } else { 
            start = mid;
        }

    }
    if (nums[start] < nums[end]) return nums[start];
    return nums[end];
}


// 排序数组求最接近target的K个数字

function findClosestK(nums: number[], target: number,k:number) {
    let right = findUpperClosest(nums, target);
    let left = right - 1;
    let result = [];
    while (result.length < k) { 
        if (isLeftCloser(nums, left, right, target)) {
            result.push(nums[left])
            left--;
        }
        else { 
            result.push(nums[right])
            right++;
        }
    }
    return result;

 

}

function isLeftCloser(nums: number[], left: number, right: number, target: number) {
    if (left < 0) { 
        return false;
    }
    if (right > nums.length - 1) { 
        return true;
    }
    return  target- nums[left]<nums[right] -target
 }
function findUpperClosest(nums:number[],target:number) {
    let left = nums[0], right = nums.length - 1;
    while (left < right - 1) { 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid;
        } else { 
            left = mid;
        }
    }
    if (nums[left] >= target) {
        return left;
    }
    return right;

}


 

// 旋转数组找指定值
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


function findPeak(nums: number[]) { 
    let left = 0, right = nums.length - 1;
    while (left < right - 1) { 
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid - 1]) {
            left = mid;
        } else if (nums[mid] < nums[mid - 1]) {
            right = mid;
        } else { 
            return mid;
        }
    }
    if (nums[left] > nums[right]) {
        return left;
    } else { 
        return right;
    }
    
}

function WoodCut(nums, k) {

    let left = 1, right = Math.min(Math.max(...nums), Math.floor(sum(nums) / k));
    while (left < right - 1) { 
        let mid = Math.floor((right + left) / 2);
        if (getPieces(mid, nums) >= k) {
            left = mid
        } else { 
            right = mid;
        }
    }
    if (getPieces(right, nums) >= k) return right;
    if (getPieces(left, nums) >= k) return left;
    return 0;
}
 

function getPieces(i, nums) {
    return sum(nums.map(num => Math.floor(num / i)));
}
function sum(nums) { 
    return nums.reduce((a,b) => a+b,0)
}
console.log(findTarget(2,[4,5,6,1,2,3]))
