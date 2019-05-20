import { Component, OnInit, HostBinding, HostListener, Directive, Input} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @HostBinding('tabindex') tabIndex = 1;
  @HostListener('keyup', ['$event'])
  onKeyUp(kbdEvent: any): void {
    if (+kbdEvent.key) {
      this.PressNum(kbdEvent.key)      
    }
    switch (kbdEvent.key) {
      case "Enter":
          this.Operation("");        
      break;
      case "+":
          this.Operation("+");        
      break;
      case "-":
          this.Operation("-");        
      break;
      case "/":
          this.Operation("÷");        
      break;
      case "*":
          this.Operation("X");        
      break;
      case "%":
          this.Operation("%");        
      break;
      case "c":
          this.Clear();        
      break;
      case "Backspace":
          this.ComplexOperation("◄");        
      break;
      case "Backspace":
          this.ComplexOperation("◄");        
      break;
      case "0":
          this.PressNum(0);        
      break;
      case ".":
          this.PressNum(".");        
      break;
      case "s":
        this.ComplexOperation("√");
        break;
      case "S":
        this.ComplexOperation("x²");
        break;
      case "C":
        this.ComplexOperation("x³");
      break;      
      case "i":
        this.ComplexOperation("1/X");
      break;
      default:
        break;
    }
  }
 


  displayValue = "";
  value = 0.0;
  clearDisplay = false;
  firstValueInputed = false;
  lastOperation = "";
  previousDisplay = "";
  historicDisplay = "";
  constructor() { }

  ngOnInit() {
  }

  public PressNum(number) {
    if (this.clearDisplay) {
      this.displayValue = "";
      this.clearDisplay = false;
    }
    this.displayValue+=number;
  }

  public Clear(){
    this.displayValue = "";
    this.value = 0.0;
    this.clearDisplay = false;
    this.firstValueInputed = false;
    this.lastOperation = "";
    this.previousDisplay = "";
  }

  public ClearEntry(){
    this.displayValue = "";
  }

  public Operation(operation){
    switch (this.lastOperation) {
      case "+":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.value = this.Add(+this.displayValue, this.value);
      break;
      case "-":
          if (this.displayValue == "") {
            this.displayValue="0";
          }
          if (!this.firstValueInputed) {
            this.value = +this.displayValue;
          }
          else{
            this.value= this.Subtract(this.value, +this.displayValue);
          }
      break;      
      case "X":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.value = +this.displayValue;
        }
        else{
          this.value= this.Multiply(this.value, +this.displayValue);
        }
      break;
      
      case "÷":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.value = +this.displayValue;
        }
        else{
          this.value= this.Divide(this.value, +this.displayValue);
        }
      break;

      case "%":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.value = +this.displayValue;
        }
        else{
          this.value= this.Modulus(this.value, +this.displayValue);
        }
      break;
      default:      
        this.value=+this.displayValue;
      break;
    }
    this.firstValueInputed = true;
    this.lastOperation = operation;
    var previous = this.displayValue + this.lastOperation;
    this.previousDisplay += previous;
    if (operation == "") {      
      this.historicDisplay += (this.previousDisplay + "\n");
      this.previousDisplay = "";
    }
    this.displayValue=this.value.toString();
    this.clearDisplay = true;
  }

  public ComplexOperation(operation){
    switch (operation) {
      case "√":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = this.SquareRoot(+this.displayValue).toString();
        break;
      case "x²":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = this.Square(+this.displayValue).toString();
      break;
      case "x³":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = this.Cube(+this.displayValue).toString();
      break;
      
      case "1/X":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = this.Inverse(+this.displayValue).toString();
      break;
      
      case "±":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = this.SwitchSign(+this.displayValue).toString();
      break;
      case "◄":
        this.displayValue = this.Backspace(this.displayValue).toString();
      break;   
      default:
      break;
    }
  }

  public Add(num1:number, num2:number):number{
    return num1 + num2;
  }

  public Subtract(num1:number, num2:number):number{
    return num1 - num2;
  }

  public Multiply(num1:number, num2:number):number{
    return num1 * num2;
  }

  public Divide(num1:number, num2:number):number{
    return num1 / num2;
  }

  public Modulus(num1:number, num2:number):number{
    return num1 % num2;
  }

  public SquareRoot(num1:number):number{
    return Math.sqrt(num1);
  }

  public Square(num1:number):number{
    return num1 * num1;
  }

  public Cube(num1:number):number{
    return num1 * num1 * num1;
  }

  public Inverse(num1:number):number{
    return 1 / num1;
  }

  public SwitchSign(num1:number):number{
    return num1 * -1;
  }

  public Backspace(num1Text:string):string{    
    return num1Text.substring(0, num1Text.length-1)
  }
}
