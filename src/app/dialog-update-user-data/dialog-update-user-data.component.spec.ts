import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateUserDataComponent } from './dialog-update-user-data.component';

describe('DialogUpdateUserDataComponent', () => {
  let component: DialogUpdateUserDataComponent;
  let fixture: ComponentFixture<DialogUpdateUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogUpdateUserDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogUpdateUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
