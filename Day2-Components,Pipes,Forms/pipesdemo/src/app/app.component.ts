import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingsPipe } from './pipes/greetings.pipe';
import { SalutationPipe } from './pipes/salutation.pipe';
import { BonusPipe } from './pipes/bonus.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    GreetingsPipe,
    SalutationPipe,
    BonusPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName = 'Sonu Singh';
  city = 'Mumbai';
  empDetails = {
    empNo: 101,
    empName: 'Sonu',
    empCity: 'Mumbai',
    empDesignation: 'Developer',
  };
  employeeDetails = [
    {
      empNo: 100,
      empName: 'sonu',
      empDesignations: 'Co-Founder',
      empSalary: 1000000,
      gender: 'M',
      isEmpPermanent: true,
    },
    {
      empNo: 101,
      empName: 'Rahul',
      empDesignations: 'Manager',
      empSalary: 5000,
      gender: 'M',
      isEmpPermanent: true,
    },
    {
      empNo: 102,
      empName: 'Rakesh',
      empDesignations: 'Manager',
      empSalary: 3000,
      gender: 'M',
      isEmpPermanent: false,
    },
    {
      empNo: 103,
      empName: 'Rajesh',
      empDesignations: 'Developer',
      empSalary: 10000,
      gender: 'M',
      isEmpPermanent: true,
    },
    {
      empNo: 104,
      empName: 'Niraj',
      empDesignations: 'Developer',
      empSalary: 80000,
      gender: 'M',
      isEmpPermanent: true,
    },
    {
      empNo: 105,
      empName: 'Ankit',
      empDesignations: 'Developer',
      empSalary: 100000,
      gender: 'M',
      isEmpPermanent: false,
    },
    {
      empNo: 106,
      empName: 'Riya',
      empDesignations: 'Developer',
      empSalary: 309393,
      gender: 'F',
      isEmpPermanent: false,
    },
  ];
  dateofJoining = new Date();
}
