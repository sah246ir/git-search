import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component'; 
import { RepocardComponent } from '../repocard/repocard.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [PaginationComponent,RepocardComponent,HttpClientModule],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent implements OnInit {
  http = inject(HttpClient)
  data:any[] = []

  ngOnInit(): void {
    this.fetchdata();
   }

  fetchdata(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data:any)=>{ 
      this.data = data.slice(1,5)
    })
  }

}
