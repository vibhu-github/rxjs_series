import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
subs1?:Subscription
subs2?:Subscription
msg1?:string
msg2?:any
  constructor(private _designutilities:DesignUtilityService) { }

  ngOnInit(): void {
    //example-1
    const broadcastVideos=interval(1000);
    this.subs1=broadcastVideos.pipe(
      map(data=>
        'video '+data
      )
    ).subscribe(res=>{
     this.msg1=res
    })
    setTimeout(() => {
      this.subs1?.unsubscribe();
    }, 10000);

    //example-02
    this.subs2=broadcastVideos.pipe(
      map(data=>
        data*3
      )
    ).subscribe(res=>{
      this.msg2=res
    })
    setTimeout(() => {
this.subs2?.unsubscribe();
      
    }, 10000);
    //example-03
    const members=from([
      {id:1,name:'Pikachu'},
      {id:2,name:'Oswald'},
      {id:3,name:'Noddy'},
      {id:4,name:'GummyBear'},
      {id:5,name:'Albert'},
      {id:6,name:'Minnie'},
      {id:7,name:'Bob'}
    ])
    // let memObs=from(members)
    members.pipe(
      map(data=>data.name)
    ).subscribe(res=>{
      // console.log(res)
      
        this._designutilities.print(res,'elContainer')
      
      
    })
  }

}
