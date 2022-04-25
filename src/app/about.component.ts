import {Component} from "@angular/core";
import { isMobileLayout } from "./app.component";
import {BasicInfo, BasicInfoItem} from "./BasicInfoItem";

@Component({
    selector: 'about-component',
    template: `
        <div class="main-div" style="padding: 90px 7vw 90px 7vw; display: flex; gap: 80px; max-width: 80vw" [style.flex-direction]="isMobile ? 'column' : 'row'">
            <div style="display: flex; flex-direction: column; flex: 0 1 55%; gap: 30px;">
                <div>
                    <p class="main-p"><b>Черногория</b> - государство в Юго-Восточной Европе, на западе Балканского полуострова. Наименьшее по площади и по населению среди славянских государств, а также на Балканском полуострове (без учёта частично признанного Косова).</p>
                    <p class="main-p">С юго-запада омывается Адриатическим морем, имеет сухопутные границы с Хорватией на западе, Боснией и Герцеговиной — на северо-западе, Сербией — на северо-востоке, частично признанной Республикой Косово — на востоке и Албанией на юго-востоке.</p>
                    <p class="main-p">До провозглашения полной независимости 3 июня 2006 года страна была частью конфедеративного Государственного Союза Сербии и Черногории, занимая 13,5 % его совокупной территории. В 2010 году приобрела официальный статус страны — кандидата в члены Евросоюза. С 2017 года — член НАТО. Использует евро, не входя в Еврозону.</p>
                    <p class="main-p">Одна из столиц и крупнейший город — Подгорица. Исторической и культурной столицей Черногории является город Цетине.</p>
                </div>
                <div style="display: flex; gap: 50px; flex-wrap: wrap;" [style.flex-direction]="isMobile ? 'column' : 'row'">
                    <div *ngFor="let item of info" class="table-cell" title="{{item.name}}">
                        <img class="table-icon" alt="icon" src="{{item.image}}"/>
                        <p>{{item.value}}</p>
                    </div>
                </div>
            </div>
            <div class="item" [style.order]='isMobile ? -1 : 0'>
                <img style="max-width: 40vw;" alt="map" src="https://i.pinimg.com/originals/31/f8/d5/31f8d5007654812b8a434b8e62b45c66.jpg">
                <div style="display: flex; flex-direction: row; align-items: center; gap: 60px">
                    <img style="text-align: center;" alt="flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/160px-Flag_of_Montenegro.svg.png">
                    <img style="text-align: center;" alt="gerb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Coat_of_arms_of_Montenegro.svg/90px-Coat_of_arms_of_Montenegro.svg.png">
                </div>
            </div>
        </div>
    `,
    styles:[
        `.table-cell {display: flex; flex-direction: row; align-items: center; white-space: nowrap; font-size: 24pt; line-height: 64px}`,
        `.table-icon {height: 64px; margin-right: 15px;}`,
        `.main-p {font-size: 18pt; font-family: Georgia, serif;}`,
        `.item {flex: 1 0.8 45%; display: flex; flex-direction: column; align-items: center; gap: 30px; }`
    ]
})
export class AboutComponent {
    info : BasicInfoItem[] = BasicInfo;
    isMobile : boolean = isMobileLayout;
}