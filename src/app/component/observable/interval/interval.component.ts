import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
obsMsg:any;
videoSubscription?:Subscription;
  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    // const broadCastVideos=interval(1000);
    const broadCastVideos=timer(5000,1000)//will take two arguments-1st is delay and second is interval
    this.videoSubscription=broadCastVideos.subscribe(res=>{
      console.log(res)
      this.obsMsg='video '+ res;
      this._designUtility.print(this.obsMsg,'elContainer1')
      this._designUtility.print(this.obsMsg,'elContainer2')
      this._designUtility.print(this.obsMsg,'elContainer3')
      if(res>=5){
        this.videoSubscription?.unsubscribe()
      }
    })
    
  }

}
