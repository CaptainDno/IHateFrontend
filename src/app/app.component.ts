import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <header-component></header-component>
        <router-outlet></router-outlet>
        <footer-component style="margin-top: auto;"></footer-component>`
})
export class AppComponent {

}