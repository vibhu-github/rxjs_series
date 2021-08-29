import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit,OnDestroy {
  userName:string='vibhu';

  constructor(private _du:DesignUtilityService) { 
  this._du.userName.subscribe(res=>{
      this.userName=res
      console.log('response is',res)
    })
  }
  ngOnDestroy(): void {
   this._du.exclusive.next(false)
  }

  ngOnInit(): void {
    this._du.exclusive.next(true);
  }

}
