import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FooterComponent} from "./footer.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {HeaderComponent} from "./header.component";
import {SightsComponent} from "./sightsComponent";
import {CultureComponent} from "./culture.component";
import { MeComponent } from "./me.component"
import { LayoutModule } from '@angular/cdk/layout';

export const appRoutes: Routes = [
    {path: 'about', component: AboutComponent, data: ['Главная']},
    {path: 'sights', component: SightsComponent, data: ['Достопримечательности']},
    {path: 'culture', component: CultureComponent, data: ['Культура и религия']},
    {path: 'about-me', component: MeComponent, data: ['Обо мне']},
    {path: '**', redirectTo: '/about'}
]

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), LayoutModule],
    declarations: [AppComponent, FooterComponent, HeaderComponent, AboutComponent, SightsComponent, CultureComponent, MeComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }