import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Home} from "../app/modules/home/home.component";
import {App} from "../app/app";
import {PageDataContentService} from "../app/services/pagedata.content.service";


const appRoutes: Routes = [
    { path: "", component: Home, pathMatch: "full", data: { path: '/' } },
    { path: "about", component: Home, pathMatch: "full", data: { path: "/about"} }
];

export const appRoutingProviders: any[] = [


];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


@NgModule({
    declarations: [ Home, App ],
    bootstrap: [ App ],
    providers: [ appRoutingProviders, PageDataContentService ],
    imports: [ Routing ]
})

export class RouteModule{ }

