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
        it('removes all duplicate integers from unsorted array', () => {
            const array = [0, 0, 1, 1, 23, 211, 2, 5, 5, 211, 23]
            const expected = [0, 1, 23, 211, 2, 5]
            const result = Calculate.removeDuplicatesNonDestructively(array)
            assert.deepEqual(result, expected)
        })
    })
    describe('.removeDuplicatesDesctructively', () => {
        it('modifies the original array', () => {
            const array = [0, 0, 1, 1, 1, 2, 2, 2, 2]
            const expected = [0, 1, 2]
            const result = Calculate.removeDuplicatesDestructively(array)
            assert.equal(result.length, expected.length)
        })
        it('removes all duplicate integers from array', () => {
            const array = [0, 0, 1, 1, 1, 2, 2, 2, 2]
            const expected = [0, 1, 2]
            const result = Calculate.removeDuplicatesDestructively(array)
            assert.deepEqual(result, expected)
        })
        it('removes all duplicate integers from a non-sorted array', () => {
            const array = [0, 0, 1, 1, 23, 211, 2, 5, 5, 211, 23]
            const expected = [0, 1, 2, 5, 23, 211]
            const result = Calculate.removeDuplicatesDestructively(array)
            assert.deepEqual(result, expected)
        })
    })
    describe('.rotateArray', () => {
        it('rotates the array (destructively) 3 times', () => {
            const array = [1, 2, 3, 4, 5]
            const expected = [3, 4, 5, 1, 2]
            const result = Calculate.rotateArray(array, 3)
            assert.deepEqual(result, expected)
        })
        it('rotates the array (destructively) 0 times', () => {
            const array = [1, 2, 3, 4, 5]
            const expected = [1, 2, 3, 4, 5]
            const result = Calculate.rotateArray(array, 0)
            assert.deepEqual(result, expected)
        })
        it('properly rotates an array (desctructively), if array has a length of 1', () => {
            const array = [1]
            const expected = [1]
            const result = Calculate.rotateArray(array, 4)
            assert.deepEqual(result, expected)
        })
        it('handles being passed an empty array', () => {
            const array = []
            const expected = []
            const result = Calculate.rotateArray(array, 3)
            assert.deepEqual(result, expected)
        })
    })
    describe('.valuesFromNestedObject', () => {
        it('returns an array with all values from deeply nested object', () => {
            const obj = {
                name: 'it me jb',
                address: {
                    city: 'brooklyn',
                    state: 'new york',
                    street: 'your mom',                    
                },
                numbers: {
                    1: {
                        2: {
                            finally: 'one two scadoo'
                        }
                    }
                }
            }
            const expected = ['it me jb', 'brooklyn', 'new york', 'your mom', 'one two scadoo']
            const result = Calculate.valuesFromNestedObject(obj, values = [])
            assert.deepEqual(result, expected)
        })
        it('can tell the difference between arrays and objects', () => {
            const obj = {
                name: 'it me jb',
                address: {
                    city: 'brooklyn',
                    state: 'new york',
                    street: 'your mom',                    
                },                
                numbers: {
                    1: {
                        2: {
                            finally: 'one two scadoo'
                        }
                    }
                },
                more: ['sick', 'ya', 'dud'],
            }
            const expected = ['it me jb', 'brooklyn', 'new york', 'your mom', 'one two scadoo', 'sick', 'ya', 'dud']
            const result = Calculate.valuesFromNestedObject(obj, values = [])
            assert.deepEqual(result, expected)
        })
    })
    describe('.lengthOfLongestSubstring', () => {
        it('returns the length of the longest substring that doesn\'t have any repeating characters', () => {
            const string = 'abcabcbb'
            const expected = 3
            const result = Calculate.lengthOfLongestSubstring(string)
            assert.equal(result, expected)
        })
        it('handles a string of all the same characters', () => {
            const string = 'bbbbbbbb'
            const expected = 1
            const result = Calculate.lengthOfLongestSubstring(string)
            assert.equal(result, expected)
        })
        it('handles an empty string', () => {
            const string = ''
            const expected = 0
            const result = Calculate.lengthOfLongestSubstring(string)
            assert.equal(result, expected)
        })
    })
    describe('.formatStringByArrayColumnOrder', () => {
        it('takes an array as an argument', () => {

        })
        it('takes an array filled with equal length arrays', () => {

        })
        it('formats a string by the column order of the internal arrays', () => {
            const array = [
                ['', '', 'jb'],
                ['it', '', ''],
                ['', 'me', '']
            ]
            const expected = 'it me jb'
            const result = Calculate.formatStringByArrayColumnOrder(array)
            assert.equal(result, expected)
        })
    })
})