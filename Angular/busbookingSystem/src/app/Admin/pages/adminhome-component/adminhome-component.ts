import { Component } from '@angular/core';
import { AdminheaderComponent } from '../../common/adminheader-component/adminheader-component';
import { AdminfooterComponent } from '../../common/adminfooter-component/adminfooter-component';

@Component({
  selector: 'app-adminhome-component',
  imports: [AdminheaderComponent,AdminfooterComponent],
  templateUrl: './adminhome-component.html',
  styleUrl: './adminhome-component.css',
})
export class AdminhomeComponent {

}
