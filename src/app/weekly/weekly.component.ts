import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss'],
  providers: [DatePipe]
})
export class WeeklyComponent implements OnInit {
  todos;
  firstWeek = [];
  secondWeek = [];
  thirdWeek = [];
  forthWeek = [];
  fifthWeek = [];
  currentDate;
  startDay;
  endDay;
  selectedToDos = [];
  weekNumber;
  currentWeekNumber;
  constructor(private dataService: DataService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentWeekNumber = this.datePipe.transform(this.currentDate, 'w');

    console.log(this.currentWeekNumber)
    this.todos = this.dataService.toDos;

    this.startDay = this.currentDate;
    this.endDay = this.currentDate.setDate(this.currentDate.getDate() - 28);
    this.selectedToDos = this.dataService.toDos.filter( td => td.date > this.startDay && this.endDay);
    console.log('selected todos', this.selectedToDos)

    this.selectedToDos.find((data)=>{
      this.weekNumber = this.datePipe.transform(data.date, 'w');
      console.log('hafta numarası', this.weekNumber)
      if(this.currentWeekNumber - 4 < 0){
        console.log(data.date)

      }
      if(this.currentWeekNumber - 4 > 0){
        
      }


      // if(this.weekNumber == 1){
      //   this.firstWeek.push(data)
      // }
      // if(this.weekNumber == 2){
      //   this.secondWeek.push(data)
      // }
      // if(this.weekNumber == 3){
      //   this.thirdWeek.push(data)
      // }
      // if(this.weekNumber == 4){
      //   this.forthWeek.push(data)
      // }
      // if(this.weekNumber == 5){
      //   this.fifthWeek.push(data)
      // }
    })
  }

}
