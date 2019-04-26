class StudentsData {
    constructor(startStudentsArray) {
        this._defaultData = startStudentsArray;
        this._DB = this._createDB();
    }

    _createDB() {
        return this._defaultData || [];
    }
 
     get DB() {
         return this._DB;
     }
 
     logDB () {
         console.log(this._DB);
     }
 
/*
=====================================================================
*/
      
}
class StudentsDBHandler extends StudentsData{
    constructor(startStudentsArray) {
        super(startStudentsArray);

    }

    checkStudent(student) {
    //        console.log(student, this._DB.includes(student))
        return this._DB.includes(student);
        
       }
    
    findStudent (student) {
        return /*some handler*/ this._DB.indexOf(student);
    }

    appendStudent(student) {
        this._DB.push(student);
        return this._DB.length; 
    }

    deleteStudent(student) {
        this._DB.splice(this.findStudent(student), 1);
    }

    updateStudent(student, handler) {
        ;
    }
}
/*
=====================================================================
*/

/*
=====================================================================
*/
class Students {
    constructor(startStudentsArray) {
       this._DB = new StudentsDBHandler(startStudentsArray);
   
    }
    
    get StudsDB() {
        return this._DB.DB;
    }

    _formAddStudentMessage(student) {
        return `Студент ${student} добавлен в список.`
    }

    _formDeleteStudentMessage(student) {
        return `Студент ${student} удален из списка.`

    }

    _formSubstituteStudentMessage(studentIn, studentOut) {
        return `Студент ${studentOut} заменен на ${studentIn}.`

    }
   addStudent(student) {
       if (!this._DB.checkStudent(student)) {           
//        if (checkNameInput(student) != "") {
        if (student != "") {
            this._DB.appendStudent(student);
            this._DB.logDB();
            return this._formAddStudentMessage(student)
        } else {
            return "";
        }
        
        
       } else {
        throw new Error(DUPLICATE_NAME_ERROR);
       }
   }

   removeStudent(student) {
       if (this._DB.checkStudent(student)) {
           this._DB.deleteStudent(student);
           this._DB.logDB();      
           return this._formDeleteStudentMessage(student)
       } else {
       throw new Error(CHECK_STUDENT_ERROR);
       }
   }

   substituteStudent(studentIn, studentOut) {
       if (!this._DB.checkStudent(studentOut)) {
         throw new Error(CHECK_STUDENT_ERROR);
       } else if (this._DB.checkStudent(studentIn)) {
        throw new Error(DUPLICATE_NAME_ERROR);         
       } else {
//           this._DB[this._DB.indexOf(studentOut)] = studentIn;

        this._DB.logDB();
        return this._formSubstituteStudentMessage(studentIn, studentOut);            
       }
       
   }

}
