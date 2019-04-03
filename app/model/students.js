
class Students {
    constructor() {
       this._defaultData = ['Ivan', 'Oleg'];
       this._DB = this._createDB();
   }

   _createDB() {
       return this._defaultData || [];
   }

   checkStudent(student) {
    return this._DB.includes(student);
   }

   addStudent(student) {
       if (!this.checkStudent(student)) {
        this._DB.push(student);
        console.log(this._DB)
       } else {
        throw new Error('Duplicate name. No repeat allowed');
        // throw new Error('Такой студент уже есть.');
       }
   }

   removeStudent(student) {
       if (this.checkStudent(student)) {
           this._DB.splice(this._DB.indexOf(student), 1);
        //    return 'Такой студент не был удален из списка'
          return 'student has been removed'
       } else {
       throw new Error('Check student name');
        // throw new Error('Проверьте введенное имя студнета');
       }
   }

   substituteStudent(studentIn, studentOut) {
       if (!this.checkStudent(studentOut)) {
         throw new Error('Check student name');
       } else if (this.checkStudent(studentIn)) {
        throw new Error('Duplicate name. No repeat allowed');         
       } else {
           this.DB[this._DB.indexOf(studentOut)] = studentIn;
       }
       
   }
   get DB() {
       return this._DB;
   }
}
