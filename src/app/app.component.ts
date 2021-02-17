import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TextMaskConfig } from 'angular2-text-mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    phoneMask: TextMaskConfig = {
        mask: ['+', /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/],
        placeholderChar: '_'
    };
    title = 'Clubhouse';
    showRequisites = false;
    loading = false;
    code: number = Math.floor(Math.random() * 31000);
    showVariant1 = false;
    showVariant2 = false;
    form = this.buildForm();

    goToPayment(): void {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.showRequisites = true;
        }, 3000);
    }

    scrollToElement($element): void {
        $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }

    buildForm(): FormGroup {
        return new FormGroup({
            username: new FormControl(null, [Validators.required, this.userNameValidator]),
            phone: new FormControl(null, [Validators.required, this.phoneValidator]),
            agree: new FormControl(null, [Validators.required, Validators.requiredTrue])
        });
    }

    userNameValidator(control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
            return null;
        }
        const regexp = /^[A-Za-z0-9]{5,15}$/;
        const isValid = regexp.test(control.value);
        return isValid ? null : { letter: 'Недопустимые символы. Пожалуйста, используйте английские буквы или цифры' };
    }

    phoneValidator(control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
            return null;
        }
        const regexp = /^\+\d \(\d\d\d\) \d\d\d - \d\d - \d\d$/;
        const isValid = regexp.test(control.value);
        return isValid ? null : { letter: 'Недопустимые символы. Пожалуйста, используйте английские буквы или цифры' };
    }
}
