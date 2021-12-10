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
    this.showNumbers += evento
    console.log('Meu número é: ', evento)
    console.log("My screen: ", this.showNumbers)
  }
  
  showResult() {
    this.showNumbers = eval(this.showNumbers)
  }

  deleteNumbers(){
    this.showNumbers = ""
  }


}
