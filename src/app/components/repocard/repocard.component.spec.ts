import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepocardComponent } from './repocard.component';

describe('RepocardComponent', () => {
  let component: RepocardComponent;
  let fixture: ComponentFixture<RepocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepocardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
