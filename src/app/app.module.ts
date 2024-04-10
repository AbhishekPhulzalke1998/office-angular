import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { PracticeService } from './practice.service';
import { SelectComponent } from './select/select.component';
import { ExpandComponent } from './expand/expand.component';

import { NewComponent } from './new/new.component';
import { ExpselcomComponent } from './expselcom/expselcom.component';
import { RelationshipcomponentComponent } from './relationshipcomponent/relationshipcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
    NewComponent,
    SelectComponent,
    ExpandComponent,

    ExpselcomComponent,
      RelationshipcomponentComponent
    // ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
