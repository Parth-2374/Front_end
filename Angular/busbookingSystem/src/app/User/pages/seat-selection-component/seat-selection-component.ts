import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-selection-component',
  imports: [],
  templateUrl: './seat-selection-component.html',
  styleUrl: './seat-selection-component.css',
})
export class SeatSelectionComponent {
  bus: any;
  seats: number[] = [];
  selectedSeats: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Bus ID = 1 (example)
    this.http.get('http://localhost:3000/buses/1')
      .subscribe((data: any) => {
        this.bus = data;
        this.seats = Array.from({ length: 25 }, (_, i) => i + 1);
      });
  }

  toggleSeat(seat: number) {

    if (this.bus.bookedSeats.includes(seat)) return;

    if (this.selectedSeats.includes(seat)) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat);
    } else {
      if (this.selectedSeats.length >= 5) {
        alert('Max 5 seats allowed');
        return;
      }
      this.selectedSeats.push(seat);
    }
  }

  bookSeats() {
    const updatedSeats = [...this.bus.bookedSeats, ...this.selectedSeats];

    this.http.patch(`http://localhost:3000/buses/${this.bus.id}`, {
      bookedSeats: updatedSeats
    }).subscribe(() => {
      alert('Seats booked successfully');
      this.bus.bookedSeats = updatedSeats;
      this.selectedSeats = [];
    });
  }
}
