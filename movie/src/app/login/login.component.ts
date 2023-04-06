/*
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent {

  

  loginData = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  API = 'http://localhost:5859/api/v1/auth/authenticate' ;

  onLogin() {
    this.http.post<any>('http://localhost:5859/api/v1/auth/authenticate', this.loginData)
      .subscribe(
        data => {
          console.log(data);
          // handle successful login
          this.router.navigate([`{Movie}`]);
        },
        error => {
          console.log(error);
          this.errorMessage = 'Invalid email or password';
        }
      );
  }

}



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  API = 'http://localhost:5859/api/v1/auth/authenticate';

  onLogin() {
    this.http.post<any>(this.API, this.loginData).subscribe(
      (data) => {
        console.log(data);
        // handle successful login
        this.router.navigate(['/movie']);

      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}

*/


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginData = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  API = 'http://localhost:5859/api/v1/auth/authenticate' ;

  onLogin() {
    this.http.post<any>('http://localhost:5859/api/v1/auth/authenticate', this.loginData)
      .subscribe(
        data => {
          console.log(data);
          // handle successful login
        },
        error => {
          console.log(error);
          this.errorMessage = 'Invalid email or password';
        }
      );
  }

  goToMovie() {
    this.router.navigate(['/movie']);
  }
}
