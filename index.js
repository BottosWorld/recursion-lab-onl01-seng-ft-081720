// Code your solution here!

function printString(myString){
    console.log(myString[0])
    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(myString){
    // return myString.split("").reverse().join("")
    if (myString.length < 2){
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(myString){
    let leng = myString.length

    if (leng < 2){
        return true
    } else if (myString[leng -1] === myString[0]) {
        return isPalindrome(myString.substring(1, leng -1))
    } else {
        return false
    }
}

function addUpTo(myArray, index){
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index]
}

function maxOf(myArray){
    if (myArray.length === 1){
        return myArray[0]
    } else {
        return Math.max(myArray.shift(), maxOf(myArray))
    }
}

function includesNumber(myArray, i){
    if (!myArray.length){
        return false
    } else if (myArray[0] === i){
        return true
    } else {
        return includesNumber(myArray.slice(1), i)
    }
}
