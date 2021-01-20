// Code your solution here!

const printString = string => {
    console.log(string[0])
    if (string.length > 1) {
        let substring = string.substring(1, string.length)
        printString(substring)
    } else {
        return true
    }
}

const reverseString = str => {
    if (str === '') {
        return ''
    } else {
        return reverseString(str.substring(1,str.length)) + str.charAt(0)
    }
}

const isPalindrome = str => {
    if (str.length <= 1) return true
    let [firstLetter] = str
    let lastLetter = str[str.length-1]
    if (firstLetter === lastLetter) {
        return isPalindrome(str.substring(1, str.length-1))
    } else return false
}