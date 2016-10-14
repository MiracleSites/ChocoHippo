import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';
import {RouteModule} from './config/app.routing';
import {App} from "./app/app";

@NgModule({
  bootstrap: [ App ],
  imports: [
    UniversalModule, // NodeModule, NodeHttpModule, and NodeJsonpModule are included
    FormsModule,
    RouteModule
  ]
})


export class MainModule {

}
