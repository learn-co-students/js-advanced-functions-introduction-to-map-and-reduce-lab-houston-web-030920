// Your code here
function mapToNegativize(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        array[i] *= -1
        newArr.push(array[i])
    }
    return newArr
}

function mapToNoChange(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i])
    }
    return newArr
}

function mapToDouble(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        array[i] *= 2
        newArr.push(array[i])
    }
    return newArr
}

function mapToSquare(array){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        array[i] *= array[i]
        newArr.push(array[i])
    }
    return newArr
}

function reduceToTotal(array, startingPoint=0){
    let total = startingPoint
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == false){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == true){  
            return true
        }
    }
    return false

}