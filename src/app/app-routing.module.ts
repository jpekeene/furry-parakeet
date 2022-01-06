import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'feedback',
        pathMatch: 'full',
    },
    {
        path: 'feedback',
        component: FeedbackComponent,
    },
    {
        path: 'thankyou',
        component: ThankYouComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
