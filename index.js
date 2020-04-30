// Your code here
let mapToNegativize = function(sourceArray){
    let newarr = []
    sourceArray.forEach(function(num){
        newarr.push(num * -1)
    })
    return newarr
}

let mapToNoChange = function(sourceArray){
    let newarr = []
    sourceArray.forEach(function(num){
        newarr.push(num)
    })
    return newarr
}

let mapToDouble = function(sourceArray){
    let newarr = []
    sourceArray.forEach(function(num){
        newarr.push(num * 2)
    })
    return newarr
}

let mapToSquare = function(sourceArray){
    let newarr = []
    sourceArray.forEach(function(num){
        newarr.push(num * num)
    })
    return newarr
}


let reduceToTotal = function(sourceArray, startingPoint = 0){
    sourceArray.forEach(function(num){
        startingPoint += num
    })
    return startingPoint
}

let reduceToAllTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]){
            return false
        }
      }
      return true
}

let reduceToAnyTrue = function(sourceArray){
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]){
            return true
        }
      }
      return false
}

