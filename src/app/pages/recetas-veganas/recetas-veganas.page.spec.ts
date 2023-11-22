import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasVeganasPage } from './recetas-veganas.page';

describe('RecetasVeganasPage', () => {
  let component: RecetasVeganasPage;
  let fixture: ComponentFixture<RecetasVeganasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetasVeganasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
