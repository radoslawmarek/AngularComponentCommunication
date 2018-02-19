import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-component',
    templateUrl: './child.component.html',
    styles: [`
        .child-container {
            padding: 16px;
        }

        .rates-container {
            display: flex;
            flex-directionL row;
            flex-wrap: nowrap;
            margine-top: 8px;
        }

        .rate-box {
            display: flex;
            width: 36px;
            height: 36px;
            background-color: lightblue;
            margin: 4px;
            justify-content: center;
            align-items: center;
        }

        .rate-box-selected {
            background-color: red;
        }
    `]
})
export class ChildComponent {
    @Input() questionText = '';
    @Input() selectedRate = -1;
    @Output() rateChange: EventEmitter<number> = new EventEmitter<number>();
    answerRates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    selectRate(rate: number): void {
        this.selectedRate = rate;
        this.rateChange.emit(this.selectedRate);
        console.log('Selected rate: ' + this.selectedRate);
    }
}