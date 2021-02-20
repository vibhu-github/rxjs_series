import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  constructor(private _designUtility:DesignUtilityService) { }

  ngOnInit(): void {
    //of
    const obs1=of('vibhu','Jatin','Manisha','Sugu','Shivani');
    obs1.subscribe(res=>{
      console.log(res)
      this._designUtility.print(res,'elContainer')
    })
    
    const obs2=of({a:'vibhu',b:'Jatin',c:'Manisha',d:'Sugu',e:'Shivani'});
    obs2.subscribe(res=>{
      console.log(res)
      // this._designUtility.print(res,'elContainer')
    })
    
  }

}
