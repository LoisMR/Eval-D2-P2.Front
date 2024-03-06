import { Component } from '@angular/core';
import { EventEntity } from '../../../model/event';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  events: EventEntity[] = [];
  isLoading: boolean = true;
  errorMessage: String = '';

  constructor(
    private eventService: EventService,
    private router: Router
  ) {}


  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.isLoading = true;

    this.eventService.getAll().subscribe({
      next: (data: EventEntity[]) => {
        this.events = data;
      },
      error: (response) => {
        this.errorMessage = response.error;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
