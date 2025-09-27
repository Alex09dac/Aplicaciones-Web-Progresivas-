import { Component, signal } from '@angular/core';
import { ITask } from '../../core/interfaces';

@Component({
  selector: 'app-data-binding-page',
  imports: [],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {

  // define vaiables to hold the task and the list of tasks
  title = 'Data Binding Page';
  text_field = signal('');
  messageError = signal('');
  Tasks = signal<ITask[]>([]);
 

 //Define 

 resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

  deleteTask(id: number) {
    this.Tasks.update(tasks => tasks.filter(tasks => tasks.id !== id));
  }

  addTask() {
    if (!this.text_field().trim()) {
      this.messageError.set('The task name is required');
      return;
    }
    const newTask: ITask = {
      id: this.Tasks().length + 1,
      name: this.text_field()
    };
    this.Tasks.update(tasks => [...tasks, newTask]);
    this.resetTask();
  }
}