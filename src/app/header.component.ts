import {Component} from "@angular/core";
import {Routes} from "@angular/router";
import {appRoutes} from "./app.module";
import { isMobileLayout } from "./app.component";
@Component({
    selector: "header-component",
    template: `
        <div>
            <nav [style.flex-direction]="isMobile ? 'column' : 'row'">
                <a class="a title" routerLink="/about">Страна Черногория</a>
                <a *ngFor="let route of routes" routerLink="/{{route.path}}"><span routerLinkActive="active" >{{route.data[0]}}</span></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><span>О себе</span></a>
            </nav>
        </div>
    `,
    styles: [
        `div {background-color: dodgerblue; margin: 0 0 0 0; padding-top: 20px; padding-left: 30px; padding-bottom: 20px}`,
        `a {color: white; text-decoration: none; margin-left: 10px}`,
        `a:hover {color: white;}`,
        `.active {background-color: #57a8ff;}`,
        `nav {list-style-type: none; display: flex; margin: 0 0 0 0;}`,
        `span {padding: 7px 9px 7px 9px; border-radius: 4px; font-size: 18pt; text-transform: uppercase; font-family: sans-serif; color: white; text-decoration: none; margin-left: 10px}`,
        `span:hover {
            background-color: #57a8ff;
        }`,
        `.title {font-size: 26pt; font-family: cursive; margin-right: 20px}`
    ]
})
export class HeaderComponent{
    isMobile : boolean = isMobileLayout;
    routes : Routes = appRoutes.filter(r => r.redirectTo == undefined);
}