import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-thank-you',
    templateUrl: './thank-you.component.html',
    styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent {
    public companyName: string;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        const routerState = this.router?.getCurrentNavigation()?.extras?.state;
        this.companyName = routerState ? routerState['companyName'] : '';
    }
}
