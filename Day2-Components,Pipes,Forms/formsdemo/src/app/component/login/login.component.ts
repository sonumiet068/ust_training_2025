import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginResult = '';
  loginStatus: boolean = false;
  checkedUserLogin(userDetails: any) {
    var username = userDetails.value.username ? userDetails.value.username : '';
    var password = userDetails.value.password ? userDetails.value.password : '';

    if (username == 'sonumiet068@gmail.com' && password == '1234') {
      this.loginResult = 'Login Successfully,Welcome ' + username;
      this.loginStatus = true;
      alert(this.loginStatus);
    } else {
      this.loginStatus = false;
      this.loginResult =
        'Sorry ' + username + ',Login Failed.Password is incorrect';
      alert(this.loginStatus);
    }
  }
}
