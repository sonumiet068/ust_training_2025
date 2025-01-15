import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculationsComponent } from './component/calculations/calculations.component';
import { LoginComponent } from './component/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculationsComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formsdemo';
}
