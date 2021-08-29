import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }
text1?:boolean;
  ngOnInit(): void {
    this._du.text1.subscribe(res=>{
      this.text1=res
      
      
    })
    
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