/*DNA pair element*/

function pairElement(str) {
    const DNA = [];

    //function for pairing the DNA
    const saerch = function(char){
        switch (char){
            case "A":
                DNA.push(["A","T"]);
                break;
            case "T":
                DNA.push(["T","A"]);
                break;

            case "C":
                DNA.push(["C","G"]);
                break;

            case "G":
                DNA.push(["G","C"]);
                break;
        }
    };

    //loop thorugh the input and DNA
    for(let i = 0; i< str.length;i++){
        saerch(str[i]);
    }

    return DNA;
}

// test here

console.log( pairElement("GCG"));