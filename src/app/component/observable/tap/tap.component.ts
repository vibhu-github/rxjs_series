import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  mycolor:string=''

  constructor(private _designutility: DesignUtilityService) { }

  ngOnInit(): void {
    //ex-01
    const arr = ['pikachu', 'simba', 'pumba', 'oswald', 'dexter']
    const source = interval(2000);
    let obs: Subscription
    obs = source.pipe(
      tap(res=>{
        console.log('tap =>' +res)
        if (res == 5) {
          obs.unsubscribe()
        }
      }),
      map(data => 
        arr[data]
        
      )
    ).subscribe(res => {
      console.log(res)
      this._designutility.print(res, 'elContainer1')
    })
    //example02
  
    const arr1 = ['red', 'green', 'yellow', 'blue', 'violet']
    const source1 = interval(2000);
    let obs1: Subscription
    obs1 = source1.pipe(
      tap(res=>{
        console.log('tap before map=>' +res)
        this.mycolor=arr1[res]
        if (res == 5) {
          obs1.unsubscribe()
        }
      }),
      map(data => 
        arr1[data]
        
      ),tap(res=>{
        console.log('tap after map=>',res)
      })
    ).subscribe(res => {
      console.log(res)
      this._designutility.print(res, 'elContainer2')
    })
  }

}
