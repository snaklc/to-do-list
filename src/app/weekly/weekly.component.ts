import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss'],
  providers: [DatePipe]
})
export class WeeklyComponent implements OnInit {
  todos;
  currentDate;
  startDay;
  endDay;
  selectedToDos = [];
  weekNumber;
  currentWeekNumber;
  currentMonthName;
  item;
  changeText;


  weeklyArray = [];
  constructor(private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentWeekNumber = this.datePipe.transform(this.currentDate, 'w');
    this.todos = this.dataService.toDos;

    this.startDay = this.currentDate;
    this.endDay = this.currentDate.setDate(this.currentDate.getDate() - 28);

    this.selectedToDos = this.dataService.toDos.filter(td =>{ 
     return td.date > this.endDay
    });
    console.log('selected todos', this.selectedToDos)

    this.selectedToDos.sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });

    this.selectedToDos.find((data) => {
      this.weekNumber = this.datePipe.transform(data.date, 'w');
      console.log('hafta numarası', this.weekNumber)
      
    })

    for (let i = this.currentWeekNumber; i >= this.currentWeekNumber - 4; i--) {
        const weekObj = {
          week: i,
          data: this.selectedToDos.filter((todo) => {
            const weekNumber = this.datePipe.transform(todo.date, 'w');
            if(weekNumber == i) {
              return todo;
            }
          })
        }
        console.log('this.weekObj: ',weekObj);

        this.weeklyArray.push(weekObj);
    }
    console.log('this.weeklyArray: ',this.weeklyArray);
    
    
  }

  deleteToDo(todo) {
    const index = this.selectedToDos.indexOf(todo);
    console.log(index);
    

  }

}
