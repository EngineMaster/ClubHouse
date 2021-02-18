import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { PageComponent } from './page/page.component';

@NgModule({
    declarations: [
        AppComponent,
        PageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
