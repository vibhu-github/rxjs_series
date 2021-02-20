import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*observable stream can be created in many ways
:1)with user input(like button click event)
:2)http request
:3)Arrray
:4)object

things observable handles when subscribed:(subscribe takes three arguments)
1)data
2)error
3)completion


.subscribe((data)=>{console.log(data)}
,(error)=>{console.log(error)},
()=>{console.log('complete')})
 */