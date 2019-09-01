import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ContactUs', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
