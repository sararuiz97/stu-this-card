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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidateService } from './services/validate/validate.service';
import { AuthService } from './services/auth/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/collection.reducer';
import { AddCollectionComponent } from './components/add-collection/add-collection.component';
import { CollectionNavbarComponent } from './components/collection-navbar/collection-navbar.component';
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addcard',
    component: AddCardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '3d',
    component: WebglDashboardComponent,
  },
  {path: '', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  {
    path: 'add',
    component: AddCardComponent,
  },
  {
    path: 'addCollection',
    component: AddCollectionComponent,
  },
  {
    path: 'quiz',
    component: QuizViewComponent,
  },
  {
    path: '',
    redirectTo: '',
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
    RegisterComponent,
    WebglDashboardComponent,
    ThreeSceneComponent,
    CardViewComponent,
    RegisterComponent,
    AddCardComponent,
    CollectionsComponent,
    AddCollectionComponent,
    CollectionNavbarComponent,
    QuizViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule.forRoot(),
    StoreModule.forRoot({
      collection: reducer
    }),
  ],
  providers: [CardService, CollectionService, ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}
