import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDeatilsComponent } from './pet-deatils.component';

describe('PetDeatilsComponent', () => {
  let component: PetDeatilsComponent;
  let fixture: ComponentFixture<PetDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
