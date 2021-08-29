import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PromiseComponent } from './component/promise/promise.component';
import { ObservableComponent } from './component/observable/observable.component';
import { ObservablesComponent } from './component/observables/observables.component';
import { AllComponent } from './component/observable/all/all.component';
import { FromEventComponent } from './component/observable/from-event/from-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ToarrayComponent } from './component/observable/toarray/toarray.component';
import { CustomComponent } from './component/observable/custom/custom.component';
import { MapComponent } from './component/observable/map/map.component';
import { PluckComponent } from './component/observable/pluck/pluck.component';
import { FilterComponent } from './component/observable/filter/filter.component';
import { TapComponent } from './component/observable/tap/tap.component';
import { TakeComponent } from './component/observable/take/take.component';
import { RetryComponent } from './component/observable/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './component/observable/debounce/debounce.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { SubjectComponent } from './component/observable/subject/subject.component';
import { Comp1Component } from './comp/comp1/comp1.component';
import { Comp2Component } from './comp/comp2/comp2.component';
import { Comp3Component } from './comp/comp3/comp3.component';
import { ReplaySubjectComponent } from './component/observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './component/observable/async-subject/async-subject.component';
import { SwitchMapComponent } from './component/observable/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './component/observable/switch-map-search/switch-map-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    ObservablesComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToarrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    SwitchMapComponent,
    SwitchMapSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarRouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
