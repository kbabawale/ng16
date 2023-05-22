import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListComponent],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const mm = [
      {
        name: 'dog',
        color: 'blue',
      },
      {
        name: 'cat',
        color: 'green',
      },
      {
        name: 'lion',
        color: 'yellow',
      },
    ];
    jest.spyOn(component, 'sdf').mockReturnValue(mm);
    const res = component.sdf();
    expect(component).toBeTruthy();
    expect(typeof res).toBe('array');
    expect(res).toEqual(mm);
    expect(res.length).toEqual(3);
  });
});
