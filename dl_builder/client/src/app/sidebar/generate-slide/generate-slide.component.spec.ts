import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSlideComponent } from './generate-slide.component';

describe('GenerateSlideComponent', () => {
  let component: GenerateSlideComponent;
  let fixture: ComponentFixture<GenerateSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
