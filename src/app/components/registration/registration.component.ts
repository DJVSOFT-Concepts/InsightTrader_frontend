import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  standalone:true,
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgIf,
  ]
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    // this.authService.register(this.registrationForm.value).subscribe(
    //   (response) => {
    //     this.successMessage = 'Registration successful!';
    //     this.errorMessage = '';
    //     this.registrationForm.reset();
    //   },
    //   (error) => {
    //     this.errorMessage = 'Registration failed. Try again.';
    //     this.successMessage = '';
    //   }
    // );
  }
}
