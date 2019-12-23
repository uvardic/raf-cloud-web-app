import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.components';
import { AppRouterModule } from './app-router.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AlertModule.forRoot(),
        BrowserModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
