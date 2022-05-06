import {Component, OnInit} from "@angular/core";
import { isMobileLayout } from "./app.component";

class Sight{
    constructor(name: string, link: string, picture: string, paragraphs: string[]) {
        this.name = name;
        this.link = link;
        this.picture = picture;
        this.paragraphs = paragraphs;
    }
    name : string;
    link: string;
    picture: string;
    paragraphs: string[];
}

class SightOrdered extends Sight{
    constructor(index: number, sight : Sight) {
        super(sight.name, sight.link, sight.picture, sight.paragraphs);
        this.index = index;
        this.rotate = (index % 2 ? -1 : 1) * (Math.random() * (2.5 - 0.5 ) + 0.5);
        console.log(this.rotate);
    }
    index : number;
    rotate: number;
}

const sights : Sight[] = [
    {
        name: 'Будва – старый город',
        link: 'https://goo.gl/maps/Zj3UzxqYDmAxGtxM7',
        picture: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/3-Budva_Old_Town-e1518997485630.jpg',
        paragraphs: [
            "Находится эта достопримечательность Черногории в самом сердце Адриатики. Населенный пункт славится своей древней историей, теплыми пляжами с песком, средневековой архитектурой.",
            "Старый город, выдающийся в море, до сих пор окружден остатками крепостной стены, а на его узких улочках стоят здания в средневековом стиле.",
            "Жемчужиной старой Будвы считают цитадель"
        ]
    },
    {
        name: 'Которский залив',
        link:'https://goo.gl/maps/vUsrufoecFdf28J98',
        picture: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/11-Kotor_Bay-e1519003204843.jpg',
        paragraphs: [
            'Знаменитый, похожий на фьорд залив, на скалистых берегах которого расположен Котор и другие старинные города.',
            'На всей Адриатике Боко-Которская бухта считается самой крупной. Она включает в себя глубокую узкую долину, образованную после размытия рекой.'
        ]
    },
    {
        name: 'Старый город Котор',
        link: 'https://goo.gl/maps/xxVPvHE7qZxHostk8',
        picture: 'https://lh5.googleusercontent.com/p/AF1QipP8qOlKg3A-zOVwqo7l0ahENKdsIt5ED4xHtS19=w408-h543-k-no',
        paragraphs: [
            'Котор знаменит своим старым городом в венецианском стиле, который очень хорошо сохранился. Древнюю его часть окружают стены, а внутри старинных зданий, стоящих на колоритных узких улочках, есть множество ресторанов, специализирующихся на подчае рыбных и мясных блюд.',
            'Кроме того, в Которе много котов.'
        ]
    },
    {
        name: 'Черное озеро (Црно-Езеро)',
        link: 'https://goo.gl/maps/r5Q2Tp4w4rG4gxda6',
        picture: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/12-Black_Lake-e1519003539177.jpg',
        paragraphs: [
            'На самом деле, это целых два озера, соединенных узкой протокой. В весеннее время года можно увидеть, как между ними переливается вода, за счет чего создается своеобразный водопад. Летом канал между ними пересыхает, и они становятся двумя отдельными озерами.',
            'Название озера связано не с цветом воды (она там очень прозрачная), а с тем, что на берегах стоят густые заросли леса и кустарников, кооторые, отражаясь от воды, и придают её тёмный цвет.'
        ]
    },
    {
        name: 'Каньон реки Тара',
        link: 'https://goo.gl/maps/BpoD1j6KAtELnwT98',
        picture: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/14-Tara_River_Canyon-e1519004610178.jpg',
        paragraphs: [
            'Водоем относится к числу самых длинных на территории страны, вдоль него имеется ущелье глубиной 1300 м, длиной 80 км. ',
            'Вода переливается от лазурного до пенисто-белого цвета, а флора и фауна очень богаты.',
            'Рейтинг этой достопримечательности достаточно высокий, что обусловлено ее окружающими красотами. Река в горах, но в достаточно широкие промежутки года по неё могут сплавться даже простые туристы, любуясь окрыжающими их краостами.'
        ]
    },
    {
        name: 'Национальный парк Дурмитор',
        link: 'https://goo.gl/maps/HFAdaVRD1P7o5JiK8',
        picture: 'https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/16-Durmitor_National_Park-e1519005180520.jpg',
        paragraphs: [
            'Вышеупомянутые озеро и каьон реки Тара являются чустью Национального парка Дурмитор, который ЮНЕСКО объявила жемчужиной богатсва биосферы. И действительно, здесь нащитывается порядка 7 различных экосистем.',
            'Также примечательным местом является небольшая ледяная пещера высоко над уровнем моря.'
        ]
    }
]
@Component({
    selector: 'sights-component',
    template: `
        <div style="display: flex; flex-direction: column; padding: 100px 50px 100px 50px; gap: 90px;">
            <div *ngFor="let sight of sightBlocks" class="block {{isMobileLayout ? 'mobile' : (sight.index % 2 ? 'right' : 'left')}}" [style.transform]="'rotate(' + sight.rotate + 'deg)'">
                <div>
                    <div style="display: flex; flex-direction: row; align-items: center; gap: 20px;">
                        <h1 style="line-height: 46px; font-family: Georgia,serif">#{{sight.index + 1}}: {{sight.name}}</h1>
                        <a href="{{sight.link}}"><img style="height: 46px" alt="place-icon" src="https://img.icons8.com/color-glass/96/fa314a/map-marker.png"></a>
                    </div>
                    <p style="font-size: 24pt; font-family: Garamond,serif; font-weight: 530" *ngFor="let paragraph of sight.paragraphs">{{paragraph}}</p>
                </div>
                <img [style.transform]="'rotate(' + (-sight.rotate * 0.5) + 'deg)'" [style.transform-origin]="sight.index % 2 ? 'top left' : 'top right'" alt="picture" src="{{sight.picture}}">
            </div>
        </div>
    `,
    styles: [
        `.block {display: flex; gap: 20px; box-shadow: 0 0 8px rgb(0 0 0 / 20%), inset 0 0 300px rgb(222 198 122 / 70%); background: white; padding: 40px; }`,
        `.right {flex-direction: row-reverse; align-self: flex-end;}`,
        `.left {flex-direction: row; align-self: flex-start;}`,
        `.mobile {flex-direction: column; align-self: center;}`
    ]
})
export class SightsComponent implements OnInit{
    sightBlocks : Array<SightOrdered> = new Array<SightOrdered>();

    isMobileLayout : boolean = isMobileLayout;

    ngOnInit() {
        for (let i = 0; i < sights.length; i++) this.sightBlocks.push(new SightOrdered(i, sights[i]));
    }
}