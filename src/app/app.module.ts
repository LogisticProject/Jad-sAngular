import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProviderComponent } from './provider/provider.component';
import { ShipmentAppPipePipe } from './shipment-app-pipe.pipe';
import { ShipmentAppdirectiveDirective } from './shipment-appdirective.directive';
import { HttpClientModule } from '@angular/common/http';
// import { ContactComponent } from './contact/contact.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { JwtModule } from "@auth0/angular-jwt";
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { EditProviderComponent } from './edit-provider/edit-provider.component';
import { DeleteProviderComponent } from './delete-provider/delete-provider.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component'
export function tokenGetter(){
  return localStorage.getItem("jwt");
}

 @NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    ProviderComponent,
    ShipmentAppPipePipe,
    ShipmentAppdirectiveDirective,
    // ContactComponent,
    ProviderDetailsComponent,
    AddContactComponent,
    EditContactComponent,
    EditProviderComponent,
    DeleteProviderComponent,
    DeleteContactComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({

      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains:["localhost:4200"],
        blacklistedRoutes: []
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
