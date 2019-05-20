import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 2 + 2 and return 4',() =>{
    expect(component.Add(2,2)).toBe(4);
  });

  it('should subtract 5 - 3 and return 2',() =>{
    expect(component.Subtract(5,3)).toBe(2);
  });

  it('should multiply 2 * 3 and return 6',() =>{
    expect(component.Multiply(2,3)).toBe(6);
  });

  it('should divide 10 / 2 and return 5',() =>{
    expect(component.Divide(10,2)).toBe(5);
  });

  it('should modulus 10 % 3 and return 1',() =>{
    expect(component.Modulus(10,3)).toBe(1);
  });

  it('should Square root 16 and return 4',() =>{
    expect(component.SquareRoot(16)).toBe(4);
  });

  it('should square 4 and return 16',() =>{
    expect(component.Square(4)).toBe(16);
  });

  it('should cube 4 and return 64',() =>{
    expect(component.Cube(4)).toBe(64);
  });

  it('should inverse 2 and return 0.5',() =>{
    expect(component.Inverse(2)).toBe(0.5);
  });

  it('should switch sign of 64 and return -64',() =>{
    expect(component.SwitchSign(64)).toBe(-64);
  });

  it('should remove last number of "256" returning 25',() =>{
    expect(component.Backspace("256")).toBe("25");
  });
});
