import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const username = this.form.controls['username'].value;
      const password = this.form.controls['password'].value;
      //console.log("Username: ", username, " pass:", password);

      // Call the authentication service's login method
      if (this.authService.login(username, password)) {
        // Navigate to the ProductListComponent upon successful login
       this.router.navigate(['home']);
       sessionStorage.setItem("islogedIn","true");
      } else {
        // Handle authentication error (show error message, etc.)
        sessionStorage.setItem("islogedIn","false");
        alert("Wrong Username and Password");
       // console.error('Authentication failed');
        //console.log("Authentication failed..X")
      }
    }
  }
}
