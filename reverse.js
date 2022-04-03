const args = process.argv.slice(2);

const reverse = (arguments) => {
    
    for(let i = 0; i<arguments.length; i++) {
        if(typeof arguments[i] === "string") {
            
            let resultString = "";
            for (let j = arguments[i].length-1; j >= 0; j--) {
                resultString += arguments[i][j];
            }
            console.log(resultString);
        } else {
            console.log(arguments[i])
        }
    };
    
};

reverse(args);

/*
Expected Results

node reverse.js hello goodbye
olleh
eybdoog

node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/