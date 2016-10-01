/**
 * Created by smiracle on 9/29/16.
 */
import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from "./app/modules/home/home.component";
import {App} from "./app/app";
import {ContentService} from "./app/services/content.service";


const appRoutes: Routes = [
    { path: "", component: Home, pathMatch: "full", data: { contentUrl: 'content.json' } },
    { path: "about", component: Home, pathMatch: "full", data: { contentUrl: 'content.json'} }
];

export const appRoutingProviders: any[] = [


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    declarations: [ Home, App ],
    bootstrap: [ App ],
    providers: [ appRoutingProviders, ContentService ],
    imports: [ Routing ]
})

export class RouteModule{ }

