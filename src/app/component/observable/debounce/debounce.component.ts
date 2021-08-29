import {  Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit {

  unsbs?:Subscription
  reqdata:any=null;
  reqdata2:any=null;
  constructor(private loadingbar:LoadingBarService){}
  @ViewChild('myinput') myinput?:ElementRef
  @ViewChild('myinput2')myinput2?:ElementRef
  ngAfterViewInit(): void {
    //example 1-debounce time
  const searchTerm=fromEvent<any>(this.myinput?.nativeElement,'keyup').pipe(
     
      map(event=>event.target.value)
      ,debounceTime(1000)
     
    )

    // console.log(this.myinput)
    this.unsbs= searchTerm.subscribe(res=>{
      console.log(res)
      this.reqdata=res;
      this.loadingbar.start()
      
      setTimeout(() => {
        this.reqdata=null;
        this.loadingbar.stop()
      }, 2000);
    })
    //example 2-debounce time
  const searchTerm2=fromEvent<any>(this.myinput2?.nativeElement,'keyup').pipe(
     
    map(event=>event.target.value)
   
   ,debounceTime(500) ,
   distinctUntilChanged()
   
  );

  // console.log(this.myinput)
   searchTerm2.subscribe(res=>{
    console.log(res)
    this.reqdata2=res;
    this.loadingbar.start()
    
    setTimeout(() => {
      this.reqdata2=null;
      this.loadingbar.stop()
    }, 2000);
  })
    
    
  }
  
  
 

  
    
    
 
  

  
  

}
