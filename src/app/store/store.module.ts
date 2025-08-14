
import { ProjectComponent } from './project.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { skillComponent } from './skill.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';

import { StoreComponent } from './store.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    StoreComponent,
ProjectComponent,
    skillComponent
  ],
  exports: [
    StoreComponent,
    ProjectComponent,
    skillComponent


  ],
})
export class StoreModule {}
