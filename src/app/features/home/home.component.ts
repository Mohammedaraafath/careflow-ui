import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
showContact = false;
showAppointment = false;
bookNow() {
  window.open('https://www.airbnb.com/', '_blank');
}

  }
