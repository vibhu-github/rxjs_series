import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, switchAll, switchMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private _du:DesignUtilityService) { }

  getData(data: string){
    return of(data + ' video uploaded').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source=from(['Tech','News','Entertainment']);
     //ex01
  source.pipe(
    map(data=>this.getData(data))
  ).subscribe(res=>res.subscribe(res2=>{console.log(res2)
    this._du.print(res2,'elContainer1')})
  )

  //ex01-single subscribe
  source.pipe(
    map(data=>this.getData(data))
  ).subscribe(res=>{console.log(res)
    this._du.print(res,'elContainer1')})
  
//exm02
source.pipe(
  map(data=>this.getData(data)),switchAll()
).subscribe(res=>{console.log(res)
  this._du.print(res,'elContainer2')})
  //ex03
  source.pipe(
    switchMap(data=>this.getData(data))
  ).subscribe(res=>{console.log(res)
    this._du.print(res,'elContainer3')})
  }
 

}
