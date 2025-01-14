import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MahaKumbh 2025';
  applicationName: string = 'MahaKumbh Mela';
  framework: string = 'Angular';
  developerName: string = 'Prabhu';
  teamSize: number = 20;
  isLive: boolean = false;

  greenUser() {
    alert('Hello Devotee');
  }
  changeAppName() {
    this.applicationName = 'MahaKumbh Mela 2025';
  }
}
