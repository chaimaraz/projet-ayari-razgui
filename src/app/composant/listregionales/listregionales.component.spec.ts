import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListregionalesComponent } from './listregionales.component';

describe('ListregionalesComponent', () => {
  let component: ListregionalesComponent;
  let fixture: ComponentFixture<ListregionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListregionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListregionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
