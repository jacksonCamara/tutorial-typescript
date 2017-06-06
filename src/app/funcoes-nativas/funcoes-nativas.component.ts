import { Component, OnInit } from '@angular/core';
import { FuncaoMap } from './funcao-map.model'
import { FuncaoFilter } from './funcao-filter.model'
import { FuncaoReduce } from "./funcao-reduce.model"
import { FuncaoSlice } from "./funcao-slice.model"

@Component({
  selector: 'app-funcoes-nativas',
  templateUrl: './funcoes-nativas.component.html',
  styleUrls: ['./funcoes-nativas.component.css']
})
export class FuncoesNativasComponent implements OnInit {
  public funcaoMap = new FuncaoMap();
  public funcaoFilter = new FuncaoFilter();
  public funcaoReduce = new FuncaoReduce();
  public funcaoSlice = new FuncaoSlice();
  public pessoa = [{ nome: String, sexo: String }];
  constructor() { }

  ngOnInit() {
  }

  funcaoMapMultiplica(mult: number): void {
    let resultado: Array<number> = this.funcaoMap.funcaoMapMultiplica(mult);
    console.log(resultado);
  }

  funcaoSliceArray() {
    console.log(this.funcaoSlice.funcaoSliceArray());
  }

  funcaoMapConcatenaString() {
    console.log(this.funcaoMap.funcaoMapConcatenaString());
  }

  funcaoFilterMenorQueCinco() {
    console.log(this.funcaoFilter.funcaoMenorQueCinco());
  }

  funcaoReduceSoma() {
    console.log(this.funcaoReduce.funcaoReduceSoma());
  }


}
