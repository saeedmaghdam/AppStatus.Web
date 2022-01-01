import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatStepperModule } from '@angular/material/stepper'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatBadgeModule } from '@angular/material/badge'
import { MatDialogModule } from '@angular/material/dialog'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatButtonToggleModule } from '@angular/material/button-toggle'

import { LoginComponent } from './login/login.component'
import { AppGuard } from './app-guard.guard';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggedInAppGuard } from './logged-in-app-guard.guard';
import { AuthInterceptor } from './auth.interceptor';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NewAppComponent } from './new-app/new-app.component';
import { EnumToArrayPipe } from './pipes/EnumToArrayPipe';
import { UploadComponent } from './upload/upload.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { DateDiffPipe } from './pipes/DateDiffPipe';
import { TodoDialogComponent } from './dialogs/todo-dialog/todo-dialog.component';
import { NoteDialogComponent } from './dialogs/note-dialog/note-dialog.component';
import { StateDialogComponent } from './dialogs/state-dialog/state-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DashboardComponent,
    NewAppComponent,
    EnumToArrayPipe,
    DateDiffPipe,
    UploadComponent,
    ApplicationListComponent,
    NoteDialogComponent,
    TodoDialogComponent,
    StateDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    MatSelectModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatCheckboxModule,
    MatButtonToggleModule,

    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [
    EnumToArrayPipe,
    DateDiffPipe
  ],
  providers: [AppGuard, LoggedInAppGuard,
    {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
