
class StudentsController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
 
    setViewContext(context) {
        this.view.createForm(context);
        this._addFormListeners();
    }
 
    _addFormListeners() {
        this.view.addButton.addEventListener('click', () => {
            try {
                this.model.addStudent(this.view.input.value);
                this.updateStudents();                    
            } catch (error) {
                console.log(error.message);
                if (error.message == 'Duplicate name. No repeat allowed') {
                   alert("Такой студент уже есть в списке!");
                    // alert("Such student already exist in a list!");
                }
                
            }
        });
    
        this.view.removeButton.addEventListener('click', () => {
            try {
                this.model.removeStudent(this.view.input.value);
                this.updateStudents();    
            } catch (e) {
               alert("Такого студента нет в списке!");
                // alert("No such student in the list!");
                console.log(e.message);
                
            }
        });

        this.view.substituteButton.addEventListener('click', () => {
            try {
                this.model.substituteStudent(this.view.newStudent.value, this.view.input.value);
                this.updateStudents();                    
            } catch (e) {
                console.log(e.message);
                if (e.message == 'Duplicate name. No repeat allowed' ) {
                    alert(`Невозможно заменить.
                    Заменяемый студент уже в списке!`);
                } else if (e.message == 'Check student name') {
                alert(`Невозможно заменить.
                    Удаляемого студента нет в списке!`);
                }
                
            }
        });

    }
 
    showStudents() {
        console.log(this.model.DB)
        this.view.createList(this.model.DB);
    }
   
    updateStudents() {
        this.view.updateList(this.model.DB);
    }
 }
 