import { AboutComponent } from './store/about.component';
import {  ContactComponent } from './store/contact.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {  ProjectComponent } from './store/project.component';
import { skillComponent } from './store/skill.component';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,

    RouterModule.forRoot([
      {
        path: 'store',
        component: StoreComponent,
      },

      {
        path: 'about',
        component: AboutComponent,
      },

      {
        path: 'project',
        component: ProjectComponent,
      },

      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'skill',
        component: skillComponent,
      },


      { path: '**', redirectTo: '/store' },
    ]),
  ],
  providers: [
  ],
   declarations: [
    AppComponent,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
