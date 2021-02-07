import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  description = '';
  toDos;
  displayToDos = [];
  counter = 0;
  startItem = 0;
  endItem = 5;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.displayItems();

  }

  addToDo() {
    if (this.description !== '') {
      this.dataService.toDos.push({ id: this.counter++, description: this.description, date: new Date, status: 'do' })
      this.toDos = this.dataService.toDos;
      this.description = '';
      console.log(this.dataService.toDos)
    }
    else {
      alert('Write something before click to add button!')
    }
    this.displayItems();
  }

  displayItems() {
    if (this.displayToDos.length > 4) {
      this.startItem++;
      this.endItem++;
    }
    console.log(this.displayToDos, this.startItem, this.endItem)
    this.displayToDos = this.dataService.toDos.slice(this.startItem, this.endItem);
  }

  deleteToDo(todo) {
    const index = this.displayToDos.indexOf(todo);
    this.displayToDos.splice(index, 1);

  }

  clickedToDo(todo) {
    console.log('clickedtodo', todo)
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
