import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LaunchCardDetailsComponent } from './components/launch-card/launch-card-details/launch-card-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'launch-details/:id', component: LaunchCardDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  bootstrap: [AppComponent],
})
export class AppRoutingModule {}
