
class InputChecker {
    constructor(checkFunction) {
        this.check = checkFunction || isLetters;
    

    isLetters(input) {
        const lettersExp = /[A-Za-z�-ߨ�-��������]+)/g;
        const matchResult = input.match(lettersExp);

        return matchResult[0] == input  ? input : "";
    }
    
}


// class NameInputChecker extends InputChecker {
//     constructor() {
//         super(function(stringInput) {

//         })
//     }


// }
/*
=====================================================================
*/


function checkNameInput(input) {
    const nameMatch = input.match(wordRegExp); 
    return nameMatch[0] == input  ? input : "";
}
