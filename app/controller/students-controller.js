


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
        this.view.addButton.addEventListener('click', () => {
            try {
//                console.log(this.model, this.model.DB, this.model.StudsDB);

                console.log(this.model.addStudent(this.view.input.value));
                this.updateStudents();                    
            } catch (error) {
                console.log(error.message);
                if (error.message == DUPLICATE_NAME_ERROR) {
                   alert(SUCH_STUDENT_EXIST);
                    // alert("Such student already exist in a list!");
                }
                
            }
        });
    
        this.view.removeButton.addEventListener('click', () => {
            try {
                
                this.model.removeStudent(this.view.input.value);
                this.updateStudents();    
            } catch (e) {
               alert(NO_SUCH_STUDENT);
                // alert("No such student in the list!");
                console.log(e.message);
                
            }
        });

        this.view.substituteButton.addEventListener('click', () => {
            try {
            console.log(this.view.newStudent.value  , "  to " , this.view.dropDown.value);
                this.model.substituteStudent( this.view.newStudent.value, this.view.dropDown.value);
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

        console.log(this.view.dropDown, this.view.bottomContainer.studentsListBox, this.view.studentsListBox);
        

        this.view.dropDown.addEventListener('change', () => {
            console.log("value", this.view.dropDown.value);
            
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
 