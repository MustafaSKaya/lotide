const isPalindrome = (argument) => {
    let argWithoutSpaces = argument.replace(/\s/g, '').toLowerCase();
    let reversedArg = "";

    for (let i = argWithoutSpaces.length-1; i >= 0; i--) {
        reversedArg += argWithoutSpaces[i];
    };

    if (argWithoutSpaces === reversedArg) {
        return true;
    } else {
        return false;
    }

};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("No lemon no melon"));
console.log(isPalindrome("melon"));