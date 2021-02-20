import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Button } from 'protractor';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  constructor(private _designUtility:DesignUtilityService) { }
 @ViewChild('addBtn') addBtn?:ElementRef;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    let count=1;
    
    fromEvent(this.addBtn?.nativeElement,'click').subscribe(res=>{
      let countVal='video '+ count++;
     
      console.log(countVal)
    this._designUtility.print(countVal,'elContainer')
    this._designUtility.print(countVal,'elContainer2')
     
     
      
    })
  }

}
