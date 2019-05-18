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
  firstValue = 0.0;
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
    this.firstValue = 0.0;
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
        this.firstValue+= +this.displayValue;
        break;
      case "-":
          if (this.displayValue == "") {
            this.displayValue="0";
          }
          if (!this.firstValueInputed) {
            this.firstValue = +this.displayValue;
            this.clearDisplay = true;
          }
          else{
            this.firstValue-= +this.displayValue;
          }
          break;
      
      case "X":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.firstValue = +this.displayValue;
          this.clearDisplay = true;
        }
        else{
          this.firstValue*= +this.displayValue;
        }
      break;
      
      case "÷":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.firstValue = +this.displayValue;
          this.clearDisplay = true;
        }
        else{
          this.firstValue/= +this.displayValue;
        }
      break;

      case "%":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        if (!this.firstValueInputed) {
          this.firstValue = +this.displayValue;
          this.clearDisplay = true;
        }
        else{
          this.firstValue%= +this.displayValue;
        }
      break;
      default:      
      this.firstValue=+this.displayValue;
      this.clearDisplay = true;
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
    this.displayValue=this.firstValue.toString();
    this.clearDisplay = true;
  }

  public ComplexOperation(operation){
    switch (operation) {
      case "√":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = Math.sqrt(+this.displayValue).toString();
        break;
      case "x²":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = (+this.displayValue * +this.displayValue).toString();
      break;
      case "x³":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = (+this.displayValue * +this.displayValue * +this.displayValue).toString();
      break;
      
      case "1/X":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = (1 / +this.displayValue).toString();
      break;
      
      case "±":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.displayValue = (+this.displayValue * -1).toString();
      break;
      case "◄":
        this.displayValue = this.displayValue.substring(0, this.displayValue.length-1)
      break;
      
    
      default:
        break;
    }
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      console.log(event);
    }
  }
}
