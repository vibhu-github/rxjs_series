import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AllComponent } from './component/observable/all/all.component';
import { AsyncSubjectComponent } from './component/observable/async-subject/async-subject.component';
import { CustomComponent } from './component/observable/custom/custom.component';
import { DebounceComponent } from './component/observable/debounce/debounce.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { MapComponent } from './component/observable/map/map.component';
import { ObservableComponent } from './component/observable/observable.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './component/observable/replay-subject/replay-subject.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { SubjectComponent } from './component/observable/subject/subject.component';
import { SwitchMapSearchComponent } from './component/observable/switch-map-search/switch-map-search.component';
import { SwitchMapComponent } from './component/observable/switch-map/switch-map.component';
import { TakeComponent } from './component/observable/take/take.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { ToarrayComponent } from './component/observable/toarray/toarray.component';
import { PromiseComponent } from './component/promise/promise.component';

const routes: Routes = [
  
  { path: 'promise', component: PromiseComponent },
  {
    path: 'observables', component: ObservableComponent, children: [
      { path: '', component: AllComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      {path:'of-from',component:OfFromComponent},
      {path:'toArray',component:ToarrayComponent},
      {path:'custom',component:CustomComponent},
      {path:'map',component:MapComponent},
      {path:'pluck',component:PluckComponent},
      {path:'filter',component:FilterComponent},
      {path:'tap',component:TapComponent},
      {path:'take',component:TakeComponent},
      {path:'retry',component:RetryComponent},
      {path:'debounce',component:DebounceComponent},
      {path:'subject',component:SubjectComponent},
      {path:'replaySubject',component:ReplaySubjectComponent},
      {path:'asyncSubject',component:AsyncSubjectComponent},
      {path:'switchMap',component:SwitchMapComponent},
      {path:'switchMapSearch',component:SwitchMapSearchComponent}

    ]
  },
  { path: '**', redirectTo: 'promise' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
