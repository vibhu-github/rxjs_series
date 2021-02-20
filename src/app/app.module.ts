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
    OfFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
