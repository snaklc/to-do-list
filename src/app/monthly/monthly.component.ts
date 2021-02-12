import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../service/data.service';
import { WeeklyComponent } from '../weekly/weekly.component';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss'],
  providers: [DatePipe]
})
export class MonthlyComponent implements OnInit {
  todos;
  currentDate;
  startDay;
  endDay;
  selectedToDos = [];
  monthlyArray = [];
  weeklyArray = [];
  weekNumber;
  monthNumber;
  currentWeekNumber;
  currentMonthNumber;
  currentMonthName;
  constructor(private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.currentDate = new Date();
    this.currentWeekNumber = this.datePipe.transform(this.currentDate, 'w');
    this.todos = this.dataService.toDos;
    this.currentMonthName = monthNames[this.currentDate.getMonth()];
    this.currentMonthNumber = this.currentDate.getMonth();
    console.log('current month', this.currentMonthNumber);
    this.startDay = this.currentDate;
    this.endDay = this.currentDate.setDate(this.currentDate.getDate() - 60);

    this.selectedToDos = this.dataService.toDos.filter(td => td.date > this.startDay && this.endDay);
    // console.log('selected todos', this.selectedToDos);

    this.selectedToDos.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

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
      // this.weeklyArray.push(weekObj);
    }

    for (let i = this.currentMonthNumber; i > -1; i--) {
        const monthObj = {
          month: monthNames[i],
          data: this.selectedToDos.filter((todo) => {
            const mNumber = todo.date.getMonth()

            // console.log('mNumber', mNumber)
            if (mNumber == i) {
              return todo;
            }
          })
        }
        this.monthlyArray.push(monthObj);
        console.log('month array' , this.monthlyArray)
    }

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
    console.log('weeklyArray', this.weeklyArray)
   }



}

