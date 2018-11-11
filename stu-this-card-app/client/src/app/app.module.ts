import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card/card.service';
import { CollectionService } from './services/collection/collection.service';
import { WebglDashboardComponent } from './components/webgl-dashboard/webgl-dashboard.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { FormsModule } from '@angular/forms';

import { ValidateService } from './services/validate/validate.service';
import { AuthService } from './services/auth/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth/auth.guard';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '3d',
    component: WebglDashboardComponent,
  },
  {path:'', component: LoginComponent},

  {path:'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    DashboardComponent,
    NavbarComponent,
    MainComponent,
    RegisterComponent,
    WebglDashboardComponent,
    ThreeSceneComponent,
    CardViewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot()
  ],
  providers: [CardService, CollectionService, ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
