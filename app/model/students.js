
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
       }
   }

   removeStudent(student) {
       if (this.checkStudent(student)) {
           this._DB.splice(this._DB.indexOf(student), 1);
           return 'student has been removed'
       } else {
           throw new Error('Check student name');
       }
   }

   get DB() {
       return this._DB;
   }
}
