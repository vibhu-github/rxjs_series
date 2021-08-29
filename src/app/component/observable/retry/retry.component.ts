import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person?:any
  fetching:boolean=false;
  status?='No data'

  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {
    
  }
fetchDetaile(){
  this.fetching=true;
  this.httpclient.get('https://global-1bb0f.firebaseio.com/user.json').pipe(
    // retry(4)
    retryWhen(error=>error.pipe(
      delay(3000),
      scan((retryCount)=>{
        if(retryCount>=5){
          throw error;
        }else{
          retryCount=retryCount+1
          console.log('retryCount=> ',retryCount)
          this.status='retrying attempt #' + retryCount
          return retryCount;
        }
      },0)
    ))
  ).subscribe(res=>{
    console.log(res)
    this.person=res
    this.status='data fetched'
    this.fetching=false
  },error=>{
    console.log(error)
    this.status='problem fetching data'
    this.fetching=false
  })
}
}
