import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './component/observable/all/all.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { PromiseComponent } from './component/promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observables', component: ObservableComponent, children: [
      { path: '', component: AllComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      {path:'of-from',component:OfFromComponent}

    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
