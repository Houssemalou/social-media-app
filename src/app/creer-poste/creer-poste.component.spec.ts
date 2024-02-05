import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPosteComponent } from './creer-poste.component';

describe('CreerPosteComponent', () => {
  let component: CreerPosteComponent;
  let fixture: ComponentFixture<CreerPosteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerPosteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
