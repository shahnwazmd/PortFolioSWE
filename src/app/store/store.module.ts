
import { ProjectComponent } from './project.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { skillComponent } from './skill.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    StoreComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    skillComponent
  ],
  exports: [
    StoreComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent,
    skillComponent


  ],
})
export class StoreModule {}
