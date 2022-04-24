import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {FooterComponent} from "./footer.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./about.component";
import {HeaderComponent} from "./header.component";
import {SightsComponent} from "./sightsComponent";
import {CultureComponent} from "./culture.component";

export const appRoutes: Routes = [
    {path: 'about', component: AboutComponent, data: ['Главная']},
    {path: 'sights', component: SightsComponent, data: ['Достопримечательности']},
    {path: 'culture', component: CultureComponent, data: ['Культура и религия']},
    {path: '**', redirectTo: '/about'}
]

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, FooterComponent, HeaderComponent, AboutComponent, SightsComponent, CultureComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }