import { Component, OnInit, inject } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component'; 
import { RepocardComponent } from '../repocard/repocard.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../profile/profile.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [PaginationComponent,RepocardComponent,HttpClientModule,CommonModule,ProfileComponent],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.css'
})
export class RepositoriesComponent implements OnInit {
  http = inject(HttpClient)
  route = inject(ActivatedRoute)
  data:any[] = []
  loading = true

  ngOnInit(): void {
    this.loading = true
    this.fetchdata();
    console.log(this.route.snapshot.params)
   }

  fetchdata(){
    setTimeout(() => {
      this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((data: any) => { 
        this.data = data.slice(1, 5);
        console.log(this.data);
        this.loading = false;
      });
    }, 3000);
  }

}
