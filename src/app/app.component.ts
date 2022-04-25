import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
export var isMobileLayout : boolean = false;
@Component({
    selector: 'app-root',
    template: `
        <header-component></header-component>
        <router-outlet></router-outlet>
        <footer-component style="margin-top: auto;"></footer-component>`
})
export class AppComponent implements OnInit{

    

    constructor(public breakpointObserver: BreakpointObserver) {}
    
    ngOnInit(): void {
        this.breakpointObserver.observe('screen and (max-width: 1000px)').subscribe((state: BreakpointState) => {
            isMobileLayout = state.matches;
            console.log(isMobileLayout);
        });
    }
}