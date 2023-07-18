

class Task {
    constructor(name) {
        this.name = name;
    }

    static fromJSON(json){
      return new Task(json.name);
    }

  }

  class UI {
    constructor() {
      this.form = document.getElementById('form');
      this.name = document.getElementById('task');

      this.tableBody = document.getElementById('table-body');

      this.form.addEventListener('submit', (e) => this.onSubmit(e));


      this.taskList = [];

      this.loadTasksFromLocalStorage();
      this.renderTasks();
    }

    onSubmit(e){
        e.preventDefault();

        if(this.name.value == ''){
            return;
        }

        const task = new Task(this.name.value);
        this.taskList.push(task);

        this.saveTasksToLocalStorage();

        this.renderTasks();

        this.name.value = '';
    }

    renderTasks() {
        this.tableBody.innerHTML = '';
    
        for (let i = 0; i < this.taskList.length; i++) {
          const task = this.taskList[i];
    
          const tr = this.createTaskRow(task);
          this.tableBody.appendChild(tr);
        }
      }


      createTaskRow(task){
        const tr = document.createElement('tr');

        const tTask = document.createElement('td');
        const tComplete = document.createElement('td');
        const tActions = document.createElement('td');


        tTask.innerHTML = task.name;

        const completeButton = this.createCompleteButton(task);
        const deleteBut = this.createDeleteButton(task);
        tComplete.appendChild(completeButton);
        tActions.appendChild(deleteBut);


        tr.appendChild(tTask);
        tr.appendChild(tComplete);
        tr.appendChild(tActions);


        return tr;
        
      }

      createDeleteButton(task){
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'bg-red-700 text-white rounded-md');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
        this.onDeleteTaskClicked(task);
      });
      
      return deleteButton;
      }

      createCompleteButton(task){
        const radioPoint = document.createElement('input');
        radioPoint.setAttribute('type', 'radio');
        return radioPoint;
      }

      onDeleteTaskClicked(task){
        this.taskList = this.taskList.filter((x) => {
          return task.name != x.name;
        });
        this.saveTasksToLocalStorage();
        this.renderTasks();
      }

      saveTasksToLocalStorage(){
        const json = JSON.stringify(this.taskList); //Converts JavaScript calue to a JavaScript Object Notation
        localStorage.setItem('tasks', json);
  
      }
      loadTasksFromLocalStorage(){
        const json = localStorage.getItem('tasks');
        if(json){
          const taskArr = JSON.parse(json);
          this.taskList = taskArr.map((x) => Task.fromJSON(x));
        }
  
      }
}

const ui = new UI();
