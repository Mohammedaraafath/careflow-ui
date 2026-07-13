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
// bookNow() {
//   window.open('https://www.airbnb.com/', '_blank');
// }
bookNow() {
  window.location.href =
    'https://www.airbnb.co.in/rooms/1584710333921147469';
}

  }
