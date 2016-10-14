import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

import { App } from './app/app';
import {appRoutingProviders, RouteModule} from "./config/app.routing";

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
