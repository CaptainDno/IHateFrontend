import { Component } from "@angular/core";

@Component({
    selector: 'me-component',
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div>
            <p>Вообще здесь должен быть рикролл. Но эти требования к оформлению портят вообще всё. Так что я вынужден написать тут что-то про себя, и вариант "я - дерьмо" не прокатывает.</p>
            <p>Ну в первых самое главное: я - дерьмо; учусь на <span title="06.05.2022">данный момент</span> в 9 "В" классе. Сей сайт был сделан за два с половиной дня и он тоже дерьмо.</p>
            <p>Всё, всем спасибо, я пошел спать. Контактов тут не будет, ибо <b style="font-size: 19pt;">не надо меня доставать</b></p>
        </div>
    </div>
    `,
    styles: [
        `p {font-size: 18pt; font-family: Georgia, serif;}`
    ]
})
export class MeComponent {
    
}