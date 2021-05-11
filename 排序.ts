function quickSort(nums: number[]) {
    quickSortHelper(nums,0,nums.length-1)
    
}

function quickSortHelper(nums: number[], start: number, end: number) {
    if (start >= end) {
        return;
    }
    let left = start, right = end;
    let pivot = nums[Math.floor((start + end) / 2)]
    while (left <= right) { 
        while (left <= right && nums[left] < pivot) { 
            left++
        }
        while (left <= right && nums[right] > pivot) { 
            right--;
        }
        if (left <= right) { 
            [nums[left], nums[right]] = [nums[right], nums[left]] 
            left++;
            right--;
        }
        
    }
    quickSortHelper(nums, start, right )
    quickSortHelper(nums,left,end)

}

const mergeSortedArray = function (A, B) {
    let indexA=0,indexB=0;
    let result=[]
    while(indexA<A.length &&indexB<B.length){
        
        if(A[indexA]<B[indexB]){
            result.push(A[indexA]);
            indexA++
        }
        else if(A[indexA]>B[indexB]){
            result.push(B[indexB])
            indexB++
        }
        else{
            result.push(A[indexA]);
            result.push(B[indexB]);
            indexA++;
             indexB++
        }
    }
    if(indexA<A.length){
        return [...result,...A.slice(indexA)]
    }else{
         return [...result,...B.slice(indexB)]
    }
}



function kthLargestElement(k: number, nums: number[]) {
    

    return quickSelect(nums, 0, nums.length - 1, k);


}


function quickSelect(nums, start, end, k) {
    if (start === end) { 
        return nums[start]
    }
    let i = start, j = end;
    let pivot = nums[Math.floor((i + j) / 2)];
    while (i <= j) { 
        while (i <= j && nums[i] > pivot) { 
            i++;
        }
        while( i<= j && nums[j] < pivot) { 
            j--;
        }
        if (i <= j) { 
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
        if (start + k - 1 <= j) { 
            return quickSelect(nums,start,j,k)
        }
        if (start + k - i >= i) {
            return quickSelect(nums, i, end, k - (i - start));
        }
        
        return nums[j + 1];
    }
}