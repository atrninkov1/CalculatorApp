import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  displayValue = "";
  firstValue = 0;
  clearDisplay = false;
  firstValueInputed = false;
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
    this.displayValue="";
  }

  public Operation(operation){
    switch (operation) {
      case "+":
        if (this.displayValue == "") {
          this.displayValue="0";
        }
        this.firstValue+= +this.displayValue;
        this.displayValue=this.firstValue.toString();
        this.clearDisplay = true;
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
            this.displayValue=this.firstValue.toString();
            this.clearDisplay = true;
          }
          break;
      
      case "X":
          if (this.displayValue == "") {
            this.displayValue="0";
          }
          this.firstValue*= +this.displayValue;
          this.displayValue=this.firstValue.toString();
          this.clearDisplay = true;
          break;
      
      case "÷":
          if (this.displayValue == "") {
            this.displayValue="0";
          }
          this.firstValue/= +this.displayValue;
          this.displayValue=this.firstValue.toString();
          this.clearDisplay = true;
          break;
      default:
        break;
    }
    this.firstValueInputed = true;
  }
}
