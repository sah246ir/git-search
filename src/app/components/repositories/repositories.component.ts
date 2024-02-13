import { Component } from '@angular/core';
import { RepocardComponent } from '../repocard/repocard.component';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [RepocardComponent,PaginationComponent],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent {

}
