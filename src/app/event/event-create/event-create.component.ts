import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { EventService } from '../../../services/event.service';
import { EventEntity } from '../../../model/event';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.css'
})
export class EventCreateComponent {
  isDivVisible = false;
  formSubmitted = false;
  errorMessage: String = '';
  eventForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required],
    Location: ['', Validators.required],
  });


  constructor(private eventService: EventService, private fb: FormBuilder, private router: Router) { }

  createEvent() {
    this.formSubmitted = true;
    if (this.eventForm.valid) {
      let event = this.eventForm.value as EventEntity;
      this.eventService.createEvent(event)
        .subscribe({
          next: (response) => {
            this.router.navigate(['']);
          },
          error: (response) => {
            this.errorMessage = response.error;
          }
        });
    }
  }
}

