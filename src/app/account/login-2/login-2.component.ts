import { AuthService } from '@/app/services/auth.service';
import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule, Router } from '@angular/router'
import { AccountWrapper2Component } from '@auth/account-wrapper2.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-2',
  standalone: true,
  imports: [CommonModule, AccountWrapper2Component, RouterModule, FormsModule],
  templateUrl: './login-2.component.html',
  styleUrl: './login-2.component.scss',
})
export class Login2Component {
  email:string = '';
  pwd:string = '';
  validationMessage:string | null = null;

  constructor(private authService:AuthService, private router: Router) {}

  login():void {
    this.authService.login(this.email, this.pwd).subscribe((message) => {
      if(message) {
        this.validationMessage = message;
      } else {
        this.validationMessage = '';
      }
    });
  }
}
