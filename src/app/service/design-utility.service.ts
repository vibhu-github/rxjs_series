import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive=new Subject<boolean>();
  text1=new Subject<boolean>();
  //userName=new Subject<string>();
  userName=new BehaviorSubject<string>('vibhu');
  videoEmit=new ReplaySubject<string>(3,5000)
  async_videoEmit=new AsyncSubject();

  constructor() { }

  print(val:any,containerId:string){
    let el=document.createElement('li');
    el.innerText=val;
    document.getElementById(containerId)?.appendChild(el);
   
  
  
  }
}
