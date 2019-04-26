
class StudentsView {
    constructor(context) {
       this.container = document.querySelector(context);
   }

   createList(students) {
//       console.log(students);
       const listTitle = document.createElement('h3');
       listTitle.textContent = 'Students';

       this.list = document.createElement('ol');
        this.list = this._fillList(this.list);

    //    students.forEach((student) => {
    //        const li = document.createElement('li');
    //        li.textContent = student;
    //        this.list.appendChild(li);
    //    });

       this.container.appendChild(listTitle);
       this.container.appendChild(this.list);
   }

   updateListBox(students) {
    // while (this.studentsListBox.firstChild) {
    //     this.studentsListBox.removeChild(this.studentsListBox.firstChild);
    // }
    this.studentsListBox =  this._clearList(this.studentsListBox);
    this._fillListBox(this.studentsListBox, students);

    // students.forEach( (student) => {
    //     const option = document.createElement('option');
    //     option.textContent = student;
    //     option.value = student;
    //     this.studentsListBox.appendChild(option);
    // });
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
//       console.log(students);
      
    //    while (this.list.firstChild) {
    //        this.list.removeChild(this.list.firstChild);
    //    }
       this.list = this._clearList(this.list);


    //    students.forEach((student) => {
    //        const li = document.createElement('li');
    //        li.textContent = student;
    //        this.list.appendChild(li);
    //    });
    this.list = this._fillList(this.list, students);

       this.updateListBox(students);

   }


   createForm(context) {
       const container = document.createElement('div');
    //   this.input = document.createElement('input');

    // this.addButton = document.createElement('button');
    //    this.removeButton = document.createElement('button');
    //        this.newStudent = document.createElement('input');
    // this.substituteButton = document.createElement('button');


    this.input = (new NameInput()).getInput();
    this.newStudent = (new NameInput()).getInput();

    this.addButton = (new DefaultButton('ADD STUDENT')).getBtn();
    this.removeButton =  (new DefaultButton('REMOVE STUDENT')).getBtn();
    this.substituteButton = (new DefaultButton('SUBSTITUTE ON STUDENT')).getBtn();

    this.bottomContainer = document.createElement('div');
    this.studentsListBox = document.createElement('select');


       container.style.border = '1px solid black';
       container.style.borderRadius = '5px';
       container.style.display = 'inline-block';



       this.studentsListBox.style.height = defaultHeight;
       this.studentsListBox.style.width = '150px';

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

    getInput() {
        return this.input;
    }



}



class DefaultButton {
    constructor(caption) {
        this.btn = document.createElement('button');
        this.btn.textContent = caption;
        this.btn.style.height = defaultButtonStyle.height;
        this.btn.style.margin = defaultButtonStyle.margin;
    }

    getBtn() {
        return this.btn;
    }


}
