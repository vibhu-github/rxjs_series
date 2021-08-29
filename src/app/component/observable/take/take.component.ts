import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { map, take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  arr=['hey','how','are','you','?','I','am','good','how','about','you','?']
  constructor(private _du:DesignUtilityService) { }

  ngOnInit(): void {
    
    const nameSource=from(this.arr)
    const source=interval(1000);
    let condition1=timer(6000);
    let condition2=fromEvent(document,'click')
   
    //ex-01 eith take 
    nameSource.pipe(
      take(5)
    ).subscribe(res=>{
      console.log(res)
      this._du.print(res,'elContainer1')
    })
    //example -02 with take last
    nameSource.pipe(
      takeLast(5)
    ).subscribe(res=>{
      console.log(res)
      this._du.print(res,'elContainer2')
    })

     //example -03 with take last
     source.pipe(
     map(res=>'number ' + res),takeUntil(condition2)
    ).subscribe(res=>{
      console.log(res)
      this._du.print(res,'elContainer3')
    })
    // //example -03 with take until
    // nameSource.pipe(
    //   takeLast(5)
    // ).subscribe(res=>{
    //   console.log(res)
    //   this._du.print(res,'elContainer3')
    // })
  }

}
