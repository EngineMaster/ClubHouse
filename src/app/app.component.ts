import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'Clubhouse';
    showRequisites = false;
    loading = false;
    code: number = Math.floor(Math.random() * 31000);

    goToPayment(): void {
        this.loading = true;
        setTimeout(() => {
            this.loading = false;
            this.showRequisites = true;
        }, 3000);
    }
}
