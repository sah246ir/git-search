import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent,RepositoriesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gitsearch';
}
