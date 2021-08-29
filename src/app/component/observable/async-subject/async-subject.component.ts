import { Component, OnInit } from '@angular/core';

import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
 asyncVideo?:any;

 

constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.async_videoEmit.subscribe(res=>
    this.asyncVideo=res)
}
  OnVideoAdd(video: any){
    console.log(video.value)
  this._du.async_videoEmit.next(video.value)

  }
  
  
  onComplete(){
    this._du.async_videoEmit.complete();

  }
  

}
