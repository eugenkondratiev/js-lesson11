
class InputChecker {
    constructor(checkFunction) {
        this.check = checkFunction || isLetters;
    }    

    isLetters(input) {
        const lettersExp = /[A-Za-zА-ЯЁа-яёІЇЄіїє]+)/g;
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


function checkNameInput(rawInput) {
    let ret;
    try {
        const input = "" + rawInput;  
        const nameMatch = input.match(wordRegExp); 
        if (!nameMatch) { 
            ret = "";
        } 
        else {
            ret =  nameMatch[0] == input ? input : "";
        }
    }
    catch(e) {

        ret = "";
    }
    finally {
        if (ret == "") {
            console.log(rawInput + " - некорректное имя");
        }
      return ret;
    }
  }
