import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModelD3Module } from '@ui-model/angular-d3';

import { D3GeoMapComponent } from './d3-geo-map.component';

describe('D3GeoMapComponent', () => {
  let component: D3GeoMapComponent;
  let fixture: ComponentFixture<D3GeoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiModelD3Module.forRoot()],
      declarations: [D3GeoMapComponent],
      providers: [],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GeoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
