import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponet } from './Pages/header-componet/header-componet';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule,HeaderComponet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
