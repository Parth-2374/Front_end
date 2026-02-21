import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header-component/header-component';
import { FooterComponent } from '../../common/footer-component/footer-component';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  fromCity = '';
  toCity = '';
  passengers = '';

  busList: any[] = [];
  searched = false;

  constructor(private http: HttpClient) {}

  searchBus() {

    if (!this.fromCity || !this.toCity || !this.passengers) {
      alert('Please select all fields');
      return;
    }

    this.http.get<any[]>('http://localhost:3000/buses')
      .subscribe(data => {
        console.log('API DATA:', data);
        
        this.busList = data.filter(bus =>
          bus.from === this.fromCity &&
          bus.to === this.toCity &&
          bus.seats >= +this.passengers
        );

        this.searched = true;
      });
  }
}
