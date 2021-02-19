import { Component, OnInit } from '@angular/core';
import { TextMaskConfig } from 'angular2-text-mask';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
    phoneMask: TextMaskConfig = {
        mask: ['+', /\d/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/],
        placeholderChar: '_'
    };
    title = 'Clubhouse';
    showRequisites = false;
    loading = false;
    code: number = Math.floor(Math.random() * 10000);
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

    scrollToElement($element: any): void {
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
        const regexp = /^[A-Za-z0-9]{2,15}$/;
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

    navSlide(): void {
        const burger = document.querySelector('burger');
        const nav = document.querySelector('nav_links');
        const navLinks = document.querySelector('nav_links li');

        // @ts-ignore
        burger.addEventListener('click', () => {
            // @ts-ignore
            nav.classList.toggle('nav-active');
        });
        // @ts-ignore
        Array.from(navLinks).forEach((link, index) => {
            // @ts-ignore
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5} s`;
        });
        // @ts-ignore
        burger.classList.toggle('toggle');
    }

    navSlider(): void{
        this.navSlide();
    }

    goToPage(): void{
        window.open('request/x54dfs456f5bf987', '_blank');
    }
}
