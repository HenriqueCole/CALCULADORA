import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  constructor() { }
  @Input() button;
  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
  }

  clickedOnDiv(){
    this.onClick.emit(this.button)
  }

}
