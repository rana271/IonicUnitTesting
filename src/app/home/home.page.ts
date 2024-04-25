import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  Todos=[{ code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
  { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
  { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
  { code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }];
  constructor(private dataservice:DataService) {


  }
  loadTodos(){
    this.Todos=this.dataservice.getTodos();
  }
}
