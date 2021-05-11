const print = (matrix) => { 
  let startX = 0, startY = 0
  const result =[]
  let endX = matrix.length-1, endY = matrix[0].length-1
  let nums =  matrix.length* matrix[0].length
  while (true) { 
    let i = startX, j = startY
    if (startX == endX && startY == endY) { 
      result.push(matrix[i][j])
      return result
    }
      while (j <endY) { 
      result.push(matrix[i][j])
       if(result.length==nums ) return result
        j++;
      }
    while (i <endX) { 
      result.push(matrix[i][j])
      if(result.length==nums ) return result
        i++
       
    }
    while (j > startY) { 
      result.push(matrix[i][j])
      if(result.length==nums ) return result
        j--
      
      }
    while (i >startX) { 
      result.push(matrix[i][j])
      if(result.length==nums ) return result
        i--;
    }  
      startX++;
      startY++;
      endX--;
      endY--;
  
  }
 
}


console.log(print([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

// 1 2 3 
// 4 5 6
//7 8 9
// 


let s = 's '


var reverseWords = function(s) {
  let strArr = s.trim().split(' ').filter(str=>str.length)
  
  strArr.reverse()
  return strArr.join(' ')
};
console.log(reverseWords("a good   example"))
