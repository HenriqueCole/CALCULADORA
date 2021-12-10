import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  showNumbers = ""

  clickedOnDiv(evento){
    this.showNumbers = this.showNumbers.toString();
    console.log('Meu número é: ', evento)
    console.log("My screen: ", this.showNumbers)

    if (this.showNumbers === "+"){
      this.deleteNumbers();
    }

    if (this.showNumbers === "-"){
      this.deleteNumbers();
    }

    if (this.showNumbers === "x"){
      this.deleteNumbers();
    }

    if (this.showNumbers === "/"){
      this.deleteNumbers();
    }
    
    if (this.showNumbers.substring(this.showNumbers.length - 1) === "+" && evento === "+"){
      
    } else if (this.showNumbers.substring(this.showNumbers.length - 1) === "-" && evento === "-") {

    } else if (this.showNumbers.substring(this.showNumbers.length - 1) === "x" && evento === "x") {

    } else if (this.showNumbers.substring(this.showNumbers.length - 1) === "/" && evento === "/"){

    } else {
      this.showNumbers += evento
    }
    
    
    
    
    
    
    
  }
  
  showResult() {
    this.showNumbers = eval(this.showNumbers);
  }

  deleteNumbers(){
    this.showNumbers = ""
  }
}
