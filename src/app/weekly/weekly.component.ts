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
  currentDate;
  startDay;
  endDay;
  selectedToDos = [];
  weeklyArray = [];
  currentWeekNumber;

  constructor(private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentWeekNumber = this.datePipe.transform(this.currentDate, 'w');
    this.startDay = this.currentDate;
    this.endDay = this.currentDate.setDate(this.currentDate.getDate() - 30);
    // Şuanki tarihten 30 gün öncesine kadar filtrele
    this.selectedToDos = this.dataService.toDos.filter(td => {
      return td.date > this.endDay
    });
    // Hafta numarasına bulup objeye ekleme
    for (let i = this.currentWeekNumber; i >= this.currentWeekNumber - 4; i--) {
      const weekObj = {
        week: i,
        data: this.selectedToDos.filter((todo) => {
          const weekNumber = this.datePipe.transform(todo.date, 'w');
          if (weekNumber == i) {
            return todo;
          }
        })
      }
      this.weeklyArray.push(weekObj);
    }
    // console.log(this.weeklyArray)
  }

  deleteToDo(todo) {
    console.log('weekly array',this.weeklyArray)
    const index = this.weeklyArray.indexOf(todo);
    this.weeklyArray.splice(index, 1);    
    console.log(index);
  }
}
