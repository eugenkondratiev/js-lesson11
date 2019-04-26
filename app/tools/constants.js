
const startData = ['Ivan', 'Oleg'];

const DUPLICATE_NAME_ERROR = 'Duplicate name. No repeat allowed';
const NO_SUCH_STUDENT  = "Такого студента нет в списке!";
const SUCH_STUDENT_EXIST  = "Такой студент уже есть в списке!";
const CHECK_STUDENT_ERROR = 'Check student name';
const NO_SUBSTITUTE_STUDENT_EXIST = `Невозможно заменить.
Заменяемый студент уже в списке!`;
const NO_SUBSTITUTE_NO_SUCH_STUDENT = `Невозможно заменить.
Удаляемого студента нет в списке!`;


const wordRegExp = /(([A-Za-zА-ЯЁа-яёІЇЄіїє]+)\s?){1,3}/g;

const defaultHeight = '40px';
const defaultMargin = '5px';
const defaultWidth = '150px';

const defaultInputStyle = {
    width : defaultWidth,
    height : defaultHeight,
    margin : defaultMargin 
}

const defaultButtonStyle = {
   // width : '150px',
    height : defaultHeight,
    margin : defaultMargin
}


