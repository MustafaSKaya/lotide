const args = process.argv.slice(2);

const pigLatin = (arguments) => {
    let arrOfArgs = [];
    for (let i = 0; i < arguments.length; i++) {    
        arrOfArgs.push(arguments[i].split(''))
    };

    let arrOfStrings = [];
    for (let j = 0; j < arrOfArgs.length; j++) {
        arrOfArgs[j].push(arrOfArgs[j][0], "ay");
        arrOfArgs[j].shift();
        arrOfStrings.push(arrOfArgs[j].join(""));
    };

    return arrOfStrings.join(" ");
};

console.log(pigLatin(args));

/*

Expected Outcomes

node pig-latin.js pig latin
igpay atinlay

node pig-latin.js this is all just gibberish
histay siay llaay ustjay ibberishgay

*/