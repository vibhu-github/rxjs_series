import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray,take} from 'rxjs/operators';
@Component({
  selector: 'app-toarray',
  templateUrl: './toarray.component.html',
  styleUrls: ['./toarray.component.scss']
})
export class ToarrayComponent implements OnInit {
sourceSubscription?:Subscription;
users=[{name:'Vibhu',skill:'Angular'},
{name:'Jatin',skill:'ReactJs'},
{name:'Manisha',skill:'SQL'},
{name:'Ravi',skill:'Salesforce'},
]
  constructor() { }

  ngOnInit(): void {
    //example1
    const source=interval(1000)
   this.sourceSubscription= source.pipe(take(5),toArray())
   .subscribe(res=>{
      console.log(res)
      // if(res>=7){
      //   this.sourceSubscription?.unsubscribe()
      
      // }
    })
    //example2
    const source2=from(this.users);
    source2.pipe(toArray()).subscribe(res=>{
      console.log(res)
    })
   //example3
   const source3=of('vibhu','jatin','manisha','ravi')
   source3.pipe(toArray()).subscribe(res=>console.log(res))
  }

}
