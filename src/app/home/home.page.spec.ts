import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [HomePage],
  //     imports: [IonicModule.forRoot(), ReactiveFormsModule],
  //     //teardown: { destroyAfterEach: false }
  // }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have expected <h3> text', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('h3'));
    const h3 = de.nativeElement;
    expect(h3.innerText).toMatch(/ionic/i,
      '<h3> should say something about "Ionic"');
  });
  it('should get arrary result', () => {
    const arr=[
      { code: "e001", name: 'Tom', gender: 'Male', anualSalary: 5500, dateofBirth: '25/6/1988' },
          { code: "e002", name: 'Sam', gender: 'Male', anualSalary: 6700, dateofBirth: '25/11/1980' },
          { code: "e003", name: 'Ravi', gender: 'Male', anualSalary: 8900, dateofBirth: '27/11/1980' },
          { code: "e001", name: 'Kaveri', gender: 'Female', anualSalary: 9000, dateofBirth: '9/6/1991' }
  
  ];
    component.loadTodos();
    expect(component.Todos).toEqual(arr);
  });
});
