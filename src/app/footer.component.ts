import {Component} from "@angular/core";

@Component({
    selector: 'footer-component',
    template: `<div>
        <div class="div2">
            <p>Powered by <a href="https://angular.io/">Angular</a></p>
            <p>Hosted on <a href="https://pages.github.com/">Github Pages</a></p>
            <p>Icons from <a href="https://icons8.ru/">icons8.ru</a></p>
        </div>
        <a href="https://github.com/CaptainDno/IHateFrontend"><img height="46px" alt="github-logo" src="https://img.icons8.com/material-outlined/48/ffffff/github.png"/> </a>
    </div>`,
    styles: [
        `div {
            padding: 20px 20px 20px 20px;
            background-color: dodgerblue;
            display: flex;
            flex-direction: column;
            align-items: center;
        }`,
        `.div2 {display: flex; flex-direction: row; align-items: center; gap: 30px;}`,
        `p, a {
            text-align: center;
            color: white;
            text-decoration: none;
        }`,
        `a:hover {
            text-decoration-color: whitesmoke;
            text-decoration: underline;
            color: whitesmoke;
        }`,
        `a:visited {
            color: white;
        }`
    ]
})
export class FooterComponent {

}
