import { Component } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component'; 
import { RepocardComponent } from '../repocard/repocard.component';
@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [PaginationComponent,RepocardComponent],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent {

}
