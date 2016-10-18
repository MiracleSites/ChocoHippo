import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from "../app/modules/home/home.component";
import {App} from "../app/app";
import {PageData} from "../data/PageData";


const appRoutes: Routes = [
    { path: "", component: Home, pathMatch: "full", data: PageData["/"] },
    { path: "about", component: Home, pathMatch: "full", data: PageData["/about"] }
];

export const appRoutingProviders: any[] = [


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    declarations: [ Home, App ],
    bootstrap: [ App ],
    providers: [ appRoutingProviders ],
    imports: [ Routing ]
})

export class RouteModule{ }

