import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactusComponent {
  customerCare = 18001234567;
  email: String = 'abcde@gmail.com';
  desktopSupport: String = 'https://www.google.como';
  desktopSupportNumber: number = 465949494;
}
