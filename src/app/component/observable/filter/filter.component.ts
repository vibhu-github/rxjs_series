import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data:any
  data1:any
  data2:any
dataArr=[
  {id:1,name:'rachel',gender:'female'},
  {id:2,name:'chandler',gender:'male'},
  {id:3,name:'monica',gender:'female'},
  {id:4,name:'phoebe',gender:'female'},
  {id:5,name:'ross',gender:'male'},
  {id:6,name:'joey',gender:'male'}
]
  constructor() { }

  ngOnInit(): void {
    const source=from(this.dataArr)

    //example-1-filter by length
    source.pipe(
      filter(data=>data.name.length<6),toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data=res
    })
    //example-02 filter by gender
    
    source.pipe(
      filter(data=>data.gender=='female'),toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data1=res
    })
    //example-03 filter nth item
    
    source.pipe(
      filter(data=>data.id <=4),toArray()
    ).subscribe(res=>{
      console.log(res)
      this.data2=res
    })
  }

}
