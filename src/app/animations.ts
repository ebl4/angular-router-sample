import { 
    animate, animateChild, group, query, 
    style, transition, trigger 
} from "@angular/animations";

export const slideInAnimation = 
    trigger('routeAnimation', [
        transition('heroes <=> hero', [
            style({ position: 'relative'}),
            query(':enter :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    with: '100%'
                })
            ]),
            query(':enter', [
                style({left: '-100%'})
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('300ms ease-out', style({left: '100%'}))
                ]),
                query(':enter', [
                    animate('300ms ease-out', style({ left: '0%'}))
                  ])
            ]),
            query(':enter', animateChild()),
        ])
    ]);