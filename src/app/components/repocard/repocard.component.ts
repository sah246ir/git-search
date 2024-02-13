import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repocard',
  standalone: true,
  imports: [],
  templateUrl: './repocard.component.html',
  styleUrl: './repocard.component.css'
})
export class RepocardComponent {
  @Input() loading: boolean = false;
  constructor (){ 
  }
  ngOnInit() {
    console.log(this.loading);
    // Now, you can see the correct value of loading after it has been initialized
  }
}
