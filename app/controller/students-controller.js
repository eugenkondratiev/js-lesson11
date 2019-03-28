
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
                    alert("Such student already exist in a list!");
                }
                
            }
        });
    
        this.view.removeButton.addEventListener('click', () => {
            try {
                this.model.removeStudent(this.view.input.value);
                this.updateStudents();    
            } catch (e) {
                alert("No such student in the list!");
                console.log(e.message);
                
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
 