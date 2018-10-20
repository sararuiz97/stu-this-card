import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./services/user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    DashboardComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
