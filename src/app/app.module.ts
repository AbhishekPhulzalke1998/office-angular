import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { PracticeService } from './practice.service';
import { SelectComponent } from './select/select.component';
import { ExpandComponent } from './expand/expand.component';
import { NewComponent } from './new/new.component';
import { ExpselcomComponent } from './expselcom/expselcom.component';
import { RelationshipcomponentComponent } from './relationshipcomponent/relationshipcomponent.component';
import { MethodComponent } from './method/method.component';
import { AddpartComponent } from './addpart/addpart.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {DialogComponent} from './dailog/dailog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateComponent } from './update/update.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { NewupdateComponent } from './newupdate/newupdate.component';
import { NewpopUpComponent } from './newpop-up/newpop-up.component';
import { NewpopUp1Component } from './newpop-up1/newpop-up1.component';
import { DeleteComponent } from './delete/delete.component';
import { GetserviceService } from './getservice.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataComponent,
    NewComponent,
    SelectComponent,
    ExpandComponent,
    ExpselcomComponent,
    RelationshipcomponentComponent,
    MethodComponent,
    AddpartComponent,
    DialogComponent,
    UpdateComponent,
    PopUpComponent,
    NewupdateComponent,
    NewpopUpComponent,
    NewpopUp1Component,
    DeleteComponent,
    
     


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule


    

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: MatDialogRef,
      useValue: {}
    },
    GetserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
