
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
 
    _addFormListeners() {
        this.view.addButton.addEventListener('click', () => {
            try {
                this.model.addStudent(this.view.input.value);
                this.updateStudents();                    
            } catch (error) {
                console.log(error.message);
                if (error.message == 'Duplicate name. No repeat allowed') {
                   alert("����� ������� ��� ���� � ������!");
                    // alert("Such student already exist in a list!");
                }
                
            }
        });
    
        this.view.removeButton.addEventListener('click', () => {
            try {
                this.model.removeStudent(this.view.input.value);
                this.updateStudents();    
            } catch (e) {
               alert("������ �������� ��� � ������!");
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
                if (e.message == 'Duplicate name. No repeat allowed' ) {
                    alert(`���������� ��������.
                    ���������� ������� ��� � ������!`);
                } else if (e.message == 'Check student name') {
                alert(`���������� ��������.
                    ���������� �������� ��� � ������!`);
                }
                
            }
        });

        console.log(this.view.dropDown, this.view.bottomContainer.studentsListbox, this.view.studentsListbox);
        

        this.view.dropDown.addEventListener('change', () => {
            console.log("value", this.view.dropDown.value);
            
        })

    }
 
    showStudents() {
        console.log(this.model.DB)
        this.view.createList(this.model.DB);
    }
   
    updateStudents() {
        this.view.updateList(this.model.DB);
    }
 }
 