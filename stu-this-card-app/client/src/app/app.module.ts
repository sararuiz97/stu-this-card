import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { CardService } from './services/card/card.service';
import { CollectionService } from './services/collection/collection.service';
import { WebglDashboardComponent } from './components/webgl-dashboard/webgl-dashboard.component';
import { ThreeSceneComponent } from './components/three-scene/three-scene.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { AddCardComponent } from './components/add-card/add-card.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '3d',
    component: WebglDashboardComponent,
  },
  {
    path: 'add',
    component: AddCardComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardComponent,
    DashboardComponent,
    NavbarComponent,
    MainComponent,
    WebglDashboardComponent,
    ThreeSceneComponent,
    CardViewComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [UserService, CardService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
