import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employess: any[] = [
        { code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
        { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
        { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
        { code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }

];


  constructor() { }
  getTodos():any{
   
    //Actual Result? list of array with 4 
    //what is my length of array?4
    //expected result list of arraay of same actual should be equal to expected
    //expected length that is 4 my actaul length 4 = my expected length is 4
    
    const result=this.employess;
    return result || [];
  }
}
