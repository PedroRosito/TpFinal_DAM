import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiegosPage } from './riegos.page';

describe('RiegosPage', () => {
  let component: RiegosPage;
  let fixture: ComponentFixture<RiegosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiegosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiegosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
