import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  userName:string='vibhu'

  constructor(private _du:DesignUtilityService) {
    this._du.userName.subscribe(res=>{
      this.userName=res
      console.log('response is',res)
    })
    
   }

  ngOnInit(): void {
  }
  onChange(uname: any){
    console.log(uname.value)
    this._du.userName.next(uname.value)

  }

}
