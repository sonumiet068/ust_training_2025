import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquityComponent } from './components/equity/equity.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EquityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolioManagement';
}
