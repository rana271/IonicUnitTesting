import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('it should return an empty array', () => {
  //   expect(service.getTodos()).toEqual([]);
  // });
  it('it should return an  of object', () => {
    const arr=[
      { code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
          { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
          { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
          { code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }
  
  ];
    expect(service.getTodos()).toEqual(arr);
    expect(service.getTodos()).toHaveSize(4);
  });
});
