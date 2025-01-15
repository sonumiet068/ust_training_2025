import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeedetails',
  imports: [NgFor],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css',
})
export class EmployeedetailsComponent {
  employeeDetails = [
    {
      empNo: 100,
      empName: 'sonu',
      empDesignations: 'Co-Founder',
      empSalary: 1000000,
      isEmpPermanent: true,
    },
    {
      empNo: 101,
      empName: 'Rahul',
      empDesignations: 'Manager',
      empSalary: 5000,
      isEmpPermanent: true,
    },
    {
      empNo: 102,
      empName: 'Rakesh',
      empDesignations: 'Manager',
      empSalary: 3000,
      isEmpPermanent: false,
    },
    {
      empNo: 103,
      empName: 'Rajesh',
      empDesignations: 'Developer',
      empSalary: 10000,
      isEmpPermanent: true,
    },
    {
      empNo: 104,
      empName: 'Niraj',
      empDesignations: 'Developer',
      empSalary: 80000,
      isEmpPermanent: true,
    },
    {
      empNo: 105,
      empName: 'Ankit',
      empDesignations: 'Developer',
      empSalary: 100000,
      isEmpPermanent: false,
    },
    {
      empNo: 106,
      empName: 'Riya',
      empDesignations: 'Developer',
      empSalary: 309393,
      isEmpPermanent: false,
    },
  ];
  totalEmployes = this.employeeDetails.length;
  permanetEmployes = this.employeeDetails.filter((emp) => emp.isEmpPermanent)
    .length;
  tempEmployees = this.employeeDetails.filter((emp) => !emp.isEmpPermanent)
    .length;
  totalSalary = this.employeeDetails.reduce(
    (total, emp) => total + emp.empSalary,
    0
  );
}
