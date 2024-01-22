import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [GreetingsComponent]
    });
    fixture = await TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the mensaje property to the default value', () => {
    expect(fixture.debugElement.query(By.css('.mensaje')).nativeElement.textContent).toBe('Valor por defecto');
  });
});
