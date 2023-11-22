import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetasClasicasPage } from './recetas-clasicas.page';

describe('RecetasClasicasPage', () => {
  let component: RecetasClasicasPage;
  let fixture: ComponentFixture<RecetasClasicasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetasClasicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
