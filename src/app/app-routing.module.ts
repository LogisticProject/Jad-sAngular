import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent } from'./log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component'
import { AddContactComponent } from'./add-contact/add-contact.component';
import{ ProviderDetailsComponent } from'./provider-details/provider-details.component';
import {DeleteContactComponent} from'./delete-contact/delete-contact.component';
import { EditProviderComponent } from'./edit-provider/edit-provider.component';
import { DeleteProviderComponent } from'./delete-provider/delete-provider.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'LogIn', component:  LogInComponent},
  { path: 'Provider', component:  ProviderComponent},
  { path: 'addContact', component:  AddContactComponent},
  { path: 'Provider/:Id', component:  ProviderDetailsComponent},
  { path: 'delete/:id', component: DeleteContactComponent},
  { path: 'Provider/:Id/EditProvider', component: EditProviderComponent},
  { path: 'Provider/:Id/DeleteProvider', component: DeleteProviderComponent}






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
