const args = process.argv.slice(2);

const obfuscator = (argument) => {
    let string = argument.toString();
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            newString += "4";
        } else if (string[i] === "e") {
            newString += "3";
        } else if (string[i] === "o") {
            newString += "0";
        } else if (string[i] === "l") {
            newString += "1";
        } else {
            newString += string[i];
        }
    };

    return newString;
};

console.log(obfuscator(args));

/*

Expected Outcome

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).

node password.js password
p4ssw0rd
node password.js abracadabra
4br4c4d4br4
node password.js audaciously
4ud4ci0us1y

*/