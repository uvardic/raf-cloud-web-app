import {NgModule} from '@angular/core';
import {AlertModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.components';
import {AppRouterModule} from './app-router.module';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MachinesComponent} from './machines/machines.component';
import {MenuComponent} from './menu/menu.component';
import {UserService} from './service/user.service';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        MachinesComponent,
        MenuComponent
    ],
    imports: [
        AlertModule.forRoot(),
        BrowserModule,
        AppRouterModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [UserService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
