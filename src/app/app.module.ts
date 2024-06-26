import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basics/basic/basic.component';
import { DirectivesComponent } from './basics/directives/directives.component';
import { DataBindingComponent } from './basics/data-binding/data-binding.component';
import { PipesComponent } from './basics/pipes/pipes.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { SiblingComponent } from './component-communication/sibling/sibling.component';
import { FormsModule } from '@angular/forms';
import { Sibling02Component } from './component-communication/sibling02/sibling02.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    DirectivesComponent,
    DataBindingComponent,
    PipesComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent,
    Sibling02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
