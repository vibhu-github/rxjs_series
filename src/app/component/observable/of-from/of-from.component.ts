import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg:any;
  obs:any

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
      this.obsMsg=res
      console.log('obsMsg',res)


      // this._designUtility.print(res,'elContainer')
    })
     //example-2:from a)array
const obs3=from(['Noddy','Pikachu','SpiderMan','Donald Duck']);
 obs3.subscribe(res=>{
   this._designUtility.print(res,'elContainer3')
  console.log(res)
 })
//from b)promise
 const promise=new Promise(resolve=>{
   setTimeout(() => {
     resolve('promise resolved')
   },3000);

 })
//  promise.then(res=>{
//    console.log(res)
//  })
 const obs4=from(promise)
 obs4.subscribe(res=>{
  this._designUtility.print(res,'elContainer4')
   console.log('from promise=>',res);
 
 })
 //c)from string
 const obs5=from('Welcome to our page')
 obs5.subscribe(res=>{
   console.log(res)
   this._designUtility.print(res,'elContainer5')

 })

  }
 

}
