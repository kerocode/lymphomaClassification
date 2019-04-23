import { trigger, animation, style, state, transition, animate } from '@angular/animations';

export const fadeinAnimation = animation([
    trigger('enterTrigger', [
        state('fadeIn', style({
            opacity: '1',
        })),
        transition('*=>fadeIn', [style({ opacity: '0' }), animate('300ms')])
    ]),
    trigger('checkMark', [
        state(':done', style({
            transform: 'rotate(0deg) scale(1)'
        })),
        transition(':enter', [style({ transform: 'rotate(20deg) scale(1.2)' }), animate('500ms')])
    ]),
]);