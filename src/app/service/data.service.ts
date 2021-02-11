import { Injectable } from '@angular/core';
export interface ToDos {
  description: string,
  date: Date,
  status: 'do',
  id: number
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  toDos: ToDos[] = [
    {
      date: new Date("Tue Feb 02 2021 07:44:57"),
      description: "Sabah erken uyan.",
      id: 0,
      status: "do"
    },
    {
      date: new Date("Fri Jan 10 2021 07:44:57"),
      description: "Saliha'ya bisküvi uzatılacak.",
      id: 1,
      status: "do"
    },
    {
      date: new Date("Mon Feb 1 2021 07:44:57"),
      description: "Sınava çalış.",
      id: 2,
      status: "do"
    },
    {
      date: new Date("Fri Jan 7 2021 07:44:57"),
      description: "Su iç.",
      id: 3,
      status: "do"
    },
    {
      date: new Date("Fri Dec 3 2020 07:44:57"),
      description: "Uyu.",
      id: 4,
      status: "do"
    },
    {
      date: new Date("Fri Dec 2 2020 07:44:57"),
      description: "Ödev yap.",
      id: 5,
      status: "do"
    },
    {
      date: new Date("Fri Apr 1 2020 07:44:57"),
      description: "Oyun oyna.",
      id: 6,
      status: "do"
    },
    {
      date: new Date("Fri Jan 15 2021 07:44:57"),
      description: "Alışveriş yap.",
      id: 7,
      status: "do"
    },
    {
      date: new Date("Fri Feb 8 2021 07:44:57"),
      description: "Telefon et.",
      id: 8,
      status: "do"
    },
    {
      date: new Date("Fri Jan 2 2021 07:44:57"),
      description: "Temizlik yap.",
      id: 9,
      status: "do"
    },
    {
      date: new Date("Fri Jan 9 2021 07:44:57"),
      description: "Ütü yap.",
      id: 10,
      status: "do"
    },
    {
      date: new Date("Fri Jan 28 2021 07:44:57"),
      description: "Markete git.",
      id: 11,
      status: "do"
    },
    {
      date: new Date("Wen Jan 13 2021 07:44:57"),
      description: "Cafeye git. Kahve al.",
      id: 12,
      status: "do"
    },
    {
      date: new Date("Wen Jan 13 2021 07:44:57"),
      description: "Cafeye git. Kahve al.",
      id: 13,
      status: "do"
    },
    {
      date: new Date("Wen Jan 13 2021 07:44:57"),
      description: "Cafeye git. Kahve al.",
      id: 14,
      status: "do"
    },
  ]
}

