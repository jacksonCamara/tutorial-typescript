import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
         public valorRepetido: Array<[number, number]> = new Array();
         // frequenciaObservaveis.map(([a,b]) => a + b)
}
