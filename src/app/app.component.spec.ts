import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {BrowserTestingModule} from '@angular/platform-browser/testing';
import {AppRoutingModule} from './app-routing.module';

xdescribe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTestingModule,
        AngularStickyThingsModule
      ],
      declarations: [
        AppComponent,
        AppRoutingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
