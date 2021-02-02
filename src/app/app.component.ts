import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { ToDos } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list';
  description = '';
  toDos;
  sayac = 0;

  @ViewChild('list') list: ElementRef;
  constructor(private dataService: DataService) {

  }

  addToDo(event) {
    if (this.description !== '') {
      this.dataService.toDos.push({ id: this.sayac++, description: this.description, date: new Date, status: 'do' })
      this.toDos = this.dataService.toDos;
      console.log(this.toDos)
      this.description = '';
    }
    else {
      alert('Write something before click add button!')
    }
  }

  deleteToDo(todo) {
    const index = this.dataService.toDos.indexOf(todo);
    this.dataService.toDos.splice(index, 1);
  }

  clickedToDo(todo) {
    console.log('clickedtodo', todo)
    this.dataService.toDos.forEach((data: any) => {
      if (data.id === todo.id) {
        if (data.status === 'done') {
          data.status = 'do';
          // this.list.nativeElement.setAttribute('style', 'text-decoration: none')
        }
        else {
          data.status = 'done';
          // this.list.nativeElement.setAttribute('style', 'text-decoration: line-through')
        }
      }
    })

  }
}
