import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUserCreateComponent } from './blog-user-create.component';

describe('BlogUserCreateComponent', () => {
  let component: BlogUserCreateComponent;
  let fixture: ComponentFixture<BlogUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogUserCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
