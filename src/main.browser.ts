import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import { Home } from './app/modules/home/home.component';
import {appRoutingProviders, RouteModule} from "./app.routing";

@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  providers: [ appRoutingProviders ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouteModule
  ]
})
export class MainModule {

}
