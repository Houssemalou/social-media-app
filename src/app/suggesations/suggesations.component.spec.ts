import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggesationsComponent } from './suggesations.component';

describe('SuggesationsComponent', () => {
  let component: SuggesationsComponent;
  let fixture: ComponentFixture<SuggesationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggesationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuggesationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
