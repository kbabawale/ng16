import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-b.component.html',
  styleUrls: ['./list-b.component.scss'],
})
export class ListBComponent {
  @Input({ required: true }) set animal(value: string) {
    if (!value) return;
    this._animal = value.toUpperCase();
  }

  _animal!: string;
}
