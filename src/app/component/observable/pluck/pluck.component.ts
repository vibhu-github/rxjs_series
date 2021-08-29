import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  data:any
  data1:any
  users=[{
    name:'pikachu',
    skills:'angular',
    job:{
      title:'front end developer',
      exp:'2 years'
    }

  },{
    name:'nobita',
    skills:'react',
    job:{
      title:'react developer',
      exp:'3 years'
    }

  },{
    name:'ranger',
    skills:'html',
    job:{
      title:'html developer',
      exp:'1 years'
    }

  },{
    name:'appu',
    skills:'css',
    job:{
      title:'css developer',
      exp:'5 years'
    }

  }]
  constructor() { }

  ngOnInit(): void {
    //example-01
    from(this.users).pipe(
      pluck('name'),toArray()
    ).subscribe(res=>{
      this.data=res
    })
    //example02
    from(this.users).pipe(
      pluck('job','title'),toArray()
    ).subscribe(res=>
      this.data1=res)
 
  }

}
