

class StudentsForm {
    constructor(context){
       this.container = document.querySelector(context);

        const container = document.createElement('div');
        //   this.input = document.createElement('input');
    
        // this.addButton = document.createElement('button');
        //    this.removeButton = document.createElement('button');
        //        this.newStudent = document.createElement('input');
        // this.substituteButton = document.createElement('button');
    
    
        this.input = (new NameInput()).name;
        this.newStudent = (new NameInput()).name;
    
        this.addButton = (new DefaultButton('ADD STUDENT')).defaultBtn;
        this.removeButton =  (new DefaultButton('REMOVE STUDENT')).defaultBtn;
        this.substituteButton = (new DefaultButton('SUBSTITUTE ON STUDENT')).defaultBtn;
        
        this.bottomContainer = document.createElement('div');
        this.studentsListBox = document.createElement('select');
        
    
           container.style.border = '1px solid black';
           container.style.borderRadius = '5px';
           container.style.display = 'inline-block';
    
    
    
           this.studentsListBox.style.height = defaultHeight;
           this.studentsListBox.style.width = defaultWidth;
    
           container.appendChild(this.input);
           container.appendChild(this.addButton);
           container.appendChild(this.removeButton);
    
           this.bottomContainer.appendChild(this.studentsListBox);
           this.bottomContainer.appendChild(this.substituteButton);
           this.bottomContainer.appendChild(this.newStudent);
           
            container.appendChild(this.bottomContainer);

           (document.querySelector(context) || this.container).appendChild(container);
    
    
           this.dropDown = document.getElementsByTagName('select')[0];
    
    }

    getForm() { 
        return this.container;
    }
}


class StudentsView {//extends StudentsForm{
    constructor(context) {
       this.container = document.querySelector(context);
   }

   createList(students) {
       const listTitle = document.createElement('h3');
       listTitle.textContent = 'Students';

        this.list = document.createElement('ol');
        this.list = this._fillList(this.list, students);

       this.container.appendChild(listTitle);
       this.container.appendChild(this.list);
      
   }


   _fillList(list, students) {
        students.forEach((student) => {
            const li = document.createElement('li');
            li.textContent = student;
            list.appendChild(li);
        });
        return list
   }

   _fillListBox(listBox, students) {
        students.forEach( (student) => {
            const option = document.createElement('option');
            option.textContent = student;
            option.value = student;
            listBox.appendChild(option);
        });
        return listBox;    
   }

   _clearList(list) {
        while (list.firstChild) {
            list.removeChild(list.firstChild);          
        }
        return list;
    }

   updateList(students) {
        this.list = this._clearList(this.list);
        this.list = this._fillList(this.list, students);

        this.updateListBox(students);

   }

   updateListBox(students) {
        this.form.studentsListBox =  this._clearList(this.form.studentsListBox);
        this._fillListBox(this.form.studentsListBox, students);
   }


   createForm(context) {
       this.form = new StudentsForm(context);
   }
   
}


class NameInput {
    constructor() {
        this.input = document.createElement('input');
        this.input.style.width = defaultInputStyle.width;
        this.input.style.height = defaultInputStyle.height;
        this.input.style.margin = defaultInputStyle.margin;
        
        this.input.addEventListener('blur', function() {
            this.value = checkNameInput(this.value);
        })
    }

    get name() {
        return this.input;
    }

    set name(_input) {
        this.input = _input;
    }
}



class DefaultButton {
    constructor(caption) {
        this.btn = document.createElement('button');
        this.btn.textContent = caption;
        this.btn.style.height = defaultButtonStyle.height;
        this.btn.style.margin = defaultButtonStyle.margin;
    }

    get defaultBtn() {
        return this.btn;
    }


    set defaultBtn(_button) {
        this.btn = _button;
    }
}
