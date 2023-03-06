import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAzureComponent } from './tabla-azure.component';

describe('TablaAzureComponent', () => {
  let component: TablaAzureComponent;
  let fixture: ComponentFixture<TablaAzureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAzureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
