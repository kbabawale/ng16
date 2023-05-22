import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBComponent } from '../list-b/list-b.component';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ListBComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  myService = inject(RequestService);
  route = inject(ActivatedRoute);

  myForm = new FormGroup({
    animal: new FormControl('', { nonNullable: true }),
  });

  books = signal(['Gullivers Travels']);
  school = signal('FUTA');
  counter = signal(0);

  constructor() {
    effect(() => {
      console.log(this.counter());
    });
  }

  ngOnInit() {
    // this.books.set([...this.books(), 'Oliver Twist']);
    this.school.set('UNIBEN');
    // this.counter.set(10);

    // this.books.update((currentValue) => [...currentValue, 'Oliver Twist']);
    // this.counter.update((currentValue) => currentValue * 50);

    // console.log(this.counterB);
  }

  originalAnimals = this.myService.animals;

  sdf() {
    // this.myForm.controls.animal.setValue('');
    return this.myService.getAnimals();
  }

  id = this.route.params.pipe(map((params) => params['id']));
}
