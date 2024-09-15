import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  title='This is Interpolation (One-Way Data Binding)'
name:string='Sandeep Gupta (Interpolation)'
//disable=true
disable=false

// counter example
count=0
counter(type:string):void{
  //this.count++;
type==='add' ? this.count++:this.count--;
}
}
