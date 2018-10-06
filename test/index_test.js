const assert = require('assert')
const Calculate = require('../index')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('calculates the factorial of a given number', () => {
            const expected = 720
            const num = 6
            const result = Calculate.factorial(num)
            assert.equal(result, expected)
        })
        it('return 1 when given input of zero', () => {
            const expected = 1
            const num = 0
            const result = Calculate.factorial(num)
            assert.equal(result, expected)
        })
    })
    describe('.sum', () => {
        it('calculates the sum of an array of numbers', () => {
            const expected = 6
            const array = [1, 2, 3]
            const result = Calculate.sum(array)
            assert.equal(result, expected)
        })
        it('returns zero if passed an empty array', () => {
            const array = []
            const expected = 0
            const result = Calculate.sum(array)
            assert.equal(result, expected)
        })
    })
    describe('.highestNum', () => {
        it('finds the highest value from an array of numbers', () => {
            const array = [12, 19192, 552, 1]
            const expected = 19192
            const result = Calculate.highestNum(array)
            assert.equal(result, expected)
        })
        it('returns empty array if passed empty array', () => {
            const array = []            
            const result = Calculate.highestNum(array)
            assert.deepEqual(result, array)
        })
    })
    describe('.fibonacci', () => {
        it('calculates the fibonacci value of 6', () => {
            const expected = 8
            const result = Calculate.fibonacci(6)
            assert.equal(result, expected)
        })
        it('calculates the fibonacci value of 10', () => {
            const expected = 55
            const result = Calculate.fibonacci(10)
            assert.equal(result, expected)
        })
    })
    describe('.palindrome', () => {
        it('returns true if the word is a palindrome', () => {
            const word = 'racecar'
            const result = Calculate.palindrome(word)
            assert.ok(result)
        })
        it('returns true with complex palindrome cases', () => {
            const sentencePalindrome = 'Never odd or even'
            const result = Calculate.palindrome(sentencePalindrome)
            assert.ok(result)
        })        
        it('returns false if the word isn\'t a palindrome', () => {
            const word = 'donkey'
            const result = Calculate.palindrome(word)
            assert.ok(!result)
        })
    })
    describe('.binaryGap', () => {
        it('calculates the biggest gap (made up of zeros) between ones in a binary sequence', () => {
            const num = 1041
            const expected = 5
            const result = Calculate.binaryGap(num)
            assert.equal(result, expected)
        })
        it('retuns 0 if there are no binary gaps because there are no zeros', () => {
            const num = 15
            const expected = 0
            const result = Calculate.binaryGap(num)
            assert.equal(result, expected)
        })
        it('returns 0 if there are no binary gaps because of unclosed trailing zeros', () => {
            const num = 32
            const expected = 0
            const result = Calculate.binaryGap(num)
            assert.equal(result, expected)
        })
    })
    describe('.removeDuplicatesNonDestructively', () => {
        it('does not modify the original array', () => {
            const array = [0, 0, 1, 1, 2]
            const result = Calculate.removeDuplicatesNonDestructively(array)
            assert.equal(array.length, 5)
        })
        it('removes duplicate integers from array', () => {
            const array = [0, 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 4, 4]
            const expected = [0, 1, 2, 3, 4]
            const result = Calculate.removeDuplicatesNonDestructively(array)
            assert.deepEqual(result, expected)
        })
    })
})