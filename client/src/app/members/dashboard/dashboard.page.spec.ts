import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { dashboardPage } from './dashboard.page';

describe('dashboardPage', () => {
  let component: dashboardPage;
  let fixture: ComponentFixture<dashboardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [dashboardPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(dashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
