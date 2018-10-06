const Calculate = {
    factorial(num) {
        if (num < 1) {
            return 1
        } else {
            return num * Calculate.factorial(num - 1)
        }
    },

    sum(array) {
        if (!array.length) {
            return 0
        } else {
            return array.reduce((acc, val) => acc + val)
        }
    },

    highestNum(array) {        
        const arrayCopy = [...array]
        const sortedArray = arrayCopy.sort((a, b) => b - a)
        return sortedArray[0] ? sortedArray[0] : []
    },

    fibonacci(num) {
        if (num <= 1) {
            return num        
        } 
        return Calculate.fibonacci(num - 1) + Calculate.fibonacci(num - 2)
    },

    palindrome(string) {
        const strippedLowerCaseWord = string.replace(/\W/g, '').toLowerCase()   
        const reversedWord = string.split('').reverse().join('').toLowerCase().replace(/\s+/g, '')           
        return strippedLowerCaseWord === reversedWord ? true : false
    },

    binaryGap(num) {
        const binary = num.toString(2)
        // console.log(binary)
        
        let indexArray = []
        binary.split('').forEach((digit, index) => {
            if (digit === '1') {
                indexArray.push(index)
            }
        })
    
        // console.log(indexArray)
        let biggestGap = 0
        indexArray.forEach((digit, index) => {
            if (indexArray[index + 1] - digit > biggestGap) {
                biggestGap = indexArray[index + 1] - digit
            }
        })
        return indexArray.length > 1 ? biggestGap - 1 : 0
    },

    removeDuplicatesNonDestructively(nums) {
        const trimmed = nums.reduce((acc, val) => {
            if (!acc.includes(val)) {
                acc.push(val)
            }
            return acc
        }, [])
        // console.log(trimmed)
        return trimmed
    }

}

module.exports = Calculate