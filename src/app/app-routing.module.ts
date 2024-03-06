import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event/event.component';
import { EventCreateComponent } from './event/event-create/event-create.component';

const routes: Routes = [
  {
    path: '',
    component: EventComponent
  },
  {
    path: 'create',
    component: EventCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
