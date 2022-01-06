import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface FeedbackForm {
    name: string;
    companyName: string;
    jobTitle: string;
    yearsInRole: number;
    whatDoYouLike: string;
}

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnDestroy {
    public form: FormGroup;
    public minNameCharacters = 5;
    public minYearsInRole = 1;
    public maxYearsInRole = 49;
    private demoKeyWord = 'example';
    private demoDummyText = 'Demo Entry Inc';
    private formSubscription: Subscription;

    constructor(private router: Router) {
        this.form = this.createForm();
        this.formSubscription = this.form.valueChanges.subscribe({
            next: (formValues: FeedbackForm) => {
                if (formValues.companyName.includes(this.demoKeyWord)) {
                    this.form = this.createForm(true);
                }
            },
        });
    }

    ngOnDestroy() {
        this.formSubscription.unsubscribe();
    }

    public formSubmitted() {
        this.router.navigateByUrl('/thankyou', { state: { companyName: this.form.value.companyName } });
    }

    private createForm(demoMode = false): FormGroup {
        const startingValue = demoMode ? this.demoDummyText : '';
        return new FormGroup({
            name: new FormControl(startingValue, [
                Validators.required,
                Validators.minLength(this.minNameCharacters),
                Validators.pattern(/^[A-Za-z ]+$/),
            ]),
            companyName: new FormControl(startingValue, [Validators.required]),
            jobTitle: new FormControl(startingValue, [Validators.required]),
            yearsInRole: new FormControl(demoMode ? 1 : '', [
                Validators.required,
                Validators.min(this.minYearsInRole),
                Validators.max(this.maxYearsInRole),
            ]),
            whatDoYouLike: new FormControl(startingValue, [Validators.required]),
        });
    }
}
