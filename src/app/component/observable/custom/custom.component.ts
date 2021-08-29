import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription} from 'rxjs';
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import { DesignUtilityService } from 'src/app/service/design-utility.service';



@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit,OnDestroy{
  cusintSubscription?:Subscription
  techStatus?:string;
  techStatus2?:string;
  names:any
  nameStatus:any;
  constructor( private _design_utilty:DesignUtilityService) { }

  ngOnInit(): void {
    //example-01(manual)
    const cusObs1=Observable.create((observer: { next: (x:any) => void; error: (y:any) => void; complete: () => void; }) => {
      setTimeout(()=>{
        observer.next('Angular');

      },1000)
      setTimeout(()=>{
        observer.next('TypeScript');

      },2000)
      setTimeout(()=>{
        observer.next('Html');
        // observer.complete()
        

      },3000)
      setTimeout(()=>{
        observer.next('CSS');
        // observer.error(new Error ('limit exceeded'));
         

      },4000)
      setTimeout(()=>{
        observer.next('javascript');
         observer.complete();
        

      },5000)
      
      
      // observer.error();
      // observer.complete();
    
    });
      
    cusObs1.subscribe((res: any)=>{
      // console.log(res)
      this._design_utilty.print(res,'elContainer')
    },(error:any)=>{

      this.techStatus='error'
    },()=>{
      this.techStatus='completed'
    })
    //example02-custom interval
    const arr2=['angular','javscript','python','html and css']
    const cusobs2=Observable.create((_observer: any)=>{
      let count=0;
      setInterval(()=>{
        _observer.next(arr2[count])
        if(count>=3){
        _observer.error('error emitted');}
        
        if(count>=5){
        _observer.complete()}
        count++
      },1000)
    })
    this.cusintSubscription=cusobs2.subscribe((res:any)=>{
      // console.log(res)
      this._design_utilty.print(res,'elContainer2')
      

    },(error:any)=>{
      this.techStatus2='error'
    },()=>{
      this.techStatus2='complete'
    })
    //example 03-random names
    const arr3=['pikachu','noddy','oswald','tinfale','nobita','donald duck','bob']
    const cusObs3=Observable.create((_observer: any)=>{
      let count=0;
      setInterval(()=>{
        _observer.next(arr3[count])
        if(count>=3){
        _observer.error('error emitted');}
        
        if(count>5){
        _observer.complete()}
        count++
      },1000)
    })
    cusObs3.subscribe((res:any)=>{
      console.log(res)
      this.names=res;
    },(error:any)=>{
this.nameStatus='error'
    },()=>{
this.nameStatus='completed'
    })


    
  }
  ngOnDestroy(){
    this.cusintSubscription?.unsubscribe();
  }

}
