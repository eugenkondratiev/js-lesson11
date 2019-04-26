


class StudentsController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
 
    setViewContext(context) {
        this.view.createForm(context);
        this.updateStudents();
        this._addFormListeners();
    }


    _addFormListener(element, action) {

    }


    
    _addFormListeners() {
        this.view.form.addButton.addEventListener('click', () => {
            try {
//                console.log(this.model, this.model.DB, this.model.StudsDB);
                console.log(this.model.addStudent(this.view.form.input.value));
                this.updateStudents();                    
            } catch (error) {
                console.log(error.message);
                if (error.message == DUPLICATE_NAME_ERROR) {
                   alert(SUCH_STUDENT_EXIST);
                }
                
            }
        });
    
        this.view.form.removeButton.addEventListener('click', () => {
            try {               
                this.model.removeStudent(this.view.form.input.value);
                this.updateStudents();    
            } catch (e) {
               alert(NO_SUCH_STUDENT);
                console.log(e.message);
                
            }
        });

        this.view.form.substituteButton.addEventListener('click', () => {
            try {
            console.log(this.view.form.newStudent.value  , "  to " , this.view.form.dropDown.value);
            // console.log("this.view = ",this.view);
            // console.log("this= ",this);
            this.model.substituteStudent( this.view.form.newStudent.value, this.view.form.dropDown.value);
                
                this.updateStudents();                    
            } catch (e) {
                console.log(e.message);
                if (e.message == SUCH_STUDENT_EXIST ) {
                    alert(NO_SUBSTITUTE_STUDENT_EXIST);
                } else if (e.message == 'Check student name') {
                alert(NO_SUBSTITUTE_NO_SUCH_STUDENT);
                }
                
            }
        });

        this.view.form.dropDown.addEventListener('change', () => {
            console.log("value", this.view.form.dropDown.value);
            
        })

    }
 
    showStudents() {
        this.view.createList(this.model.StudsDB);        
    }

    logStudents() {
        console.log(this.model.StudsDB)
    }

    updateStudents() {
        this.view.updateList(this.model.StudsDB);
    }
 }
 