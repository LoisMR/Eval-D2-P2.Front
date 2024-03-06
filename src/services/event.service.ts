import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { map } from 'rxjs/operators';
import { EventEntity } from '../model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<EventEntity[]> {
    return this.http.get(`${environment.apiUrl}events`).pipe(
      map((data: any) => data.events as EventEntity[])
    );
  }
}
