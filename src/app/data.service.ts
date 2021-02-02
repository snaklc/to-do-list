import { Injectable } from '@angular/core';
export interface ToDos{
    description: string,
    date: Date,
    status:'do',
    id:number
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
 toDos: ToDos [] = [
  
 ]
}
