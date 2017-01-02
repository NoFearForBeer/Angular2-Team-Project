import { trigger, state, animate, style, transition } from '@angular/core';

export function fadeInOut() {
  return trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(1000, style({ opacity: 1 }))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(1000, style({ opacity: 0 }))
    ])
  ]);
}
