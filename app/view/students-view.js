
class StudentsView {
    constructor(context) {
       this.container = document.querySelector(context);
   }

   createList(students) {
       console.log(students);
       const listTitle = document.createElement('h3');
       listTitle.textContent = 'Students';

       this.list = document.createElement('ol');
       students.forEach((student) => {
           const li = document.createElement('li');
           li.textContent = student;
           this.list.appendChild(li);
       });

       this.container.appendChild(listTitle);
       this.container.appendChild(this.list);
   }

   updateListBox(students) {
    while (this.studentsListBox.firstChild) {
        this.studentsListBox.removeChild(this.studentsListBox.firstChild);
    }
    students.forEach( (student) => {
        const option = document.createElement('option');
        option.textContent = student;
        option.value = student;
        this.studentsListBox.appendChild(option);
    });
   }

   updateList(students) {
       console.log(students);
      
       while (this.list.firstChild) {
           this.list.removeChild(this.list.firstChild);
       }

       students.forEach((student) => {
           const li = document.createElement('li');
           li.textContent = student;
           this.list.appendChild(li);
       });

       this.updateListBox(students);

   }


   createForm(context) {
       const container = document.createElement('div');
       this.input = document.createElement('input');
       this.addButton = document.createElement('button');
       this.removeButton = document.createElement('button');

       this.bottomContainer = document.createElement('div');
        this.substituteButton = document.createElement('button');
        this.newStudent = document.createElement('input');
        this.studentsListBox = document.createElement('select');


       container.style.border = '1px solid black';
       container.style.borderRadius = '5px';
       container.style.display = 'inline-block';


       container.style.border = '1px solid black';
       container.style.borderRadius = '5px';
       container.style.display = 'inline-block';

       this.input.style.width = '150px';
       this.input.style.height = '40px';
       this.input.style.margin = '5px';

       this.addButton.textContent = 'ADD STUDENT';
       this.addButton.style.height = '40px';
       this.addButton.style.margin = '5px';


       this.newStudent.style.width = '150px';
       this.newStudent.style.height = '40px';
       this.newStudent.style.margin = '5px';

       this.substituteButton.textContent = 'SUBSTITUTE ON STUDENT';
       this.substituteButton.style.height = '40px';
       this.substituteButton.style.margin = '5px';

       this.studentsListBox.style.height = '40px'
       this.studentsListBox.style.width = '150px';


       this.removeButton.textContent = 'REMOVE STUDENT';
       this.removeButton.style.height = '40px';
       this.removeButton.style.margin = '5px';

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
