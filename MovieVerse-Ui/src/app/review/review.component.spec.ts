/*import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReviewComponent } from './review.component';


describe('ReviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        ReviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'reviewdashboard'`, () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('reviewdashboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('reviewdashboard app is running!');
  });
});
*/

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReviewComponent } from './review.component';

describe('ReviewComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ReviewComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'studentdashboard'`, () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('studentdashboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('studentdashboard app is running!');
  });
});
