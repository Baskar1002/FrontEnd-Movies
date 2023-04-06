/*
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MovieComponent} from './movie/movie.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
     RegisterComponent,
    LoginComponent,
    MovieComponent,
    AppComponent    
    ],

   imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
      ],
  providers: [],
  bootstrap: [LoginComponent,RegisterComponent,MovieComponent,AppComponent]
})
export class AppModule { }
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movie', component: MovieComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
   exports: [RouterModule],
  providers: [],
  bootstrap: [RegisterComponent,LoginComponent,MovieComponent]
})
export class AppModule { }


/*
import { enableProdMode } from '@angular/core';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { RegisterComponent } from './register/register.component';



import { AppModule } from './app/app.module';
//import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/