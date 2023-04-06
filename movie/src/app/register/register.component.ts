import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  

  registerData = { firstName: '', lastName: '', email: '', password: '' };
  errorMessage: string | null = null

  constructor(private http: HttpClient, private router: Router) { }
  
  
  API = 'localhost:5855/api/v1/auth/register';

  onRegister() {  
    this.http.post<any>('http://localhost:5859/api/v1/auth/register', this.registerData)
      .subscribe(
        data => {
          console.log(data);
          // handle successful registration
          this.router.navigate(['/Login']);
        },
        error => {
          console.log(error);
          this.errorMessage = 'Registration failed';
        }
      );
  }
  

}
