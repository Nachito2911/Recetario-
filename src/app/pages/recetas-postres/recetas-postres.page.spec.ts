import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasPostresPage } from './recetas-postres.page';

describe('RecetasPostresPage', () => {
  let component: RecetasPostresPage;
  let fixture: ComponentFixture<RecetasPostresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetasPostresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
