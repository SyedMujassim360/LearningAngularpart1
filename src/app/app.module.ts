import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HeaderComponent} from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DadComponent } from './dad/dad.component';
import { SonComponent } from './son/son.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { CcodePipe } from '../pipes/ccode.pipe';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    UsersComponent,
    DadComponent,
    SonComponent,
    HighlightDirective,
    CcodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
