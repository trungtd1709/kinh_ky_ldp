import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionKinhKyComponent } from './description-kinh-ky.component';

describe('DescriptionKinhKyComponent', () => {
  let component: DescriptionKinhKyComponent;
  let fixture: ComponentFixture<DescriptionKinhKyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionKinhKyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionKinhKyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
