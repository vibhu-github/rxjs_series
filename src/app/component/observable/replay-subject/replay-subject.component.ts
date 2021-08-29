import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
userList1=['Angular 1','Angular 2'];
userList2=[] as  any;
userList3=[] as  any;
//subscription
subscription2?:Subscription
subscription3?:Subscription
//toggle properties
methodInterval:boolean=false

//subscribe modes
subscribeMode2:boolean=false;
subscribeMode3:boolean=false;

intsub?:Subscription

  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    this._du.videoEmit.subscribe(
      res=>{
        console.log(res)
        this.userList1.push(res);
       
      }

    )
  }
  OnVideoAdd(video: any){
    console.log(video.value)
    this._du.videoEmit.next(video.value)

  }
  user2subscribe(){
    if(this.subscribeMode2){
      this.subscription2?.unsubscribe()
    }
    else{
      this.subscription2=  this._du.videoEmit.subscribe(res=>{
        this.userList2.push(res);
     })
    }
  
    this.subscribeMode2=!this.subscribeMode2
  }
  user3subscribe(){
    if(this.subscribeMode3){
      this.subscription3?.unsubscribe()
    }
    else{
      this.subscription3=  this._du.videoEmit.subscribe(res=>{
        this.userList3.push(res);
     })}
    this.subscribeMode3=!this.subscribeMode3
  }
  toggleMethod(){
    const broadcastVideos=interval(1000)
    if(!this.methodInterval){
      this.intsub= broadcastVideos.subscribe(res=>
        this._du.videoEmit.next('video '+res))

    }else{
     this.intsub?.unsubscribe()
     
    }
   
this.methodInterval=!this.methodInterval
  }

}
