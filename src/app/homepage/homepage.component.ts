import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  description;
  displayToDos = [];
  counter = this.dataService.toDos.length;
  startItem = 0;
  endItem = 5;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.sortByDateTodos();
    this.displayItems();
  }
  addToDo() {
    if (this.description !== '') {
      this.dataService.toDos.push({ id: this.counter++, description: this.description, date: new Date, status: 'do' })
      this.description = '';
      this.sortByDateTodos();
    }
    else {
      alert('Write something before click to add button!')
    }
    this.displayItems();
  }
  sortByDateTodos() {
    this.dataService.toDos.sort((a: any, b: any) => {
      return b.date - a.date;
    })
  }
  displayItems() {
    this.displayToDos = this.dataService.toDos.slice(this.startItem, this.endItem);
  }
  deleteToDo(todo) {
    const index = this.displayToDos.indexOf(todo);
    this.displayToDos.splice(index, 1);
  }
  clickedToDo(todo) {
    this.dataService.toDos.forEach((data: any) => {
      if (data.id === todo.id) {
        if (data.status === 'done') {
          data.status = 'do';
        }
        else {
          data.status = 'done';
        }
      }
    })
  }
}
