import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoInputPage } from './auto-input.page';

describe('AutoInputPage', () => {
  let component: AutoInputPage;
  let fixture: ComponentFixture<AutoInputPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AutoInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
