import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from '../../../services/event.service';
import { EventEntity } from '../../../model/event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrl: './event-edit.component.css'
})
export class EventEditComponent {
  eventId: String = '';
  formSubmitted = false;
  isDivVisible = false;
  errorMessage: String = '';
  eventForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required],
    Location: ['', Validators.required],
  });

  constructor(private eventService: EventService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params['id'];
    });
  }

  editEvent() {
    this.formSubmitted = true;
    if (this.eventForm.valid) {
      let event = this.eventForm.value as EventEntity;
      this.eventService.editEvent(event, this.eventId)
        .subscribe({
          next: () => {
            this.router.navigate(['']);
          },
          error: (response) => {
            this.errorMessage = response.error;
          }
        });
    }
  }
}
