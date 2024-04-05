import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  selectedCountry: string = "Russia";
  isVisible: boolean = false;
  countryList = ["India", "Russia", "Srilanka", "Japan"];

  printData() {
    console.log("Click event triggered.......");

  }

  printChange() {
    console.log("Change event triggered................." + this.selectedCountry);
  }

  showOrHide() {
    this.isVisible = !this.isVisible
  }
}
