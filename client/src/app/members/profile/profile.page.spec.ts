import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { profilePage } from './profile.page';

describe('profilePage', () => {
  let component: profilePage;
  let fixture: ComponentFixture<profilePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [profilePage],
      imports: [IonicModule.forRoot(),]
    }).compileComponents();

    fixture = TestBed.createComponent(profilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
