import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  componentName: string = 'AboutUs';
  aboutsUs: string =
    'Wiki Education serves as the bridge between academia and Wikipedia. A small 501(c)(3) nonprofit, we run programs that seek to build connections between universities and Wikipedia and other Wikimedia projects in the United States and Canada.' +
    'In our most established program, Wiki Education supports the Wikipedia Education Program in the United States and Canada. Since 2010, university instructors participating in the program have assigned their students to add content to course-related articles on Wikipedia. Students gain key 21st century skills like media literacy, writing and research development, and critical thinking, while content gaps on Wikipedia get filled thanks to students’ efforts.' +
    'Formed in 2013, Wiki Education is a spin-off of the Wikimedia Foundation, the nonprofit organization that runs Wikipedia.';
}
