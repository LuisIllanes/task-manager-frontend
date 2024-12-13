import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,

        RouterModule.forRoot([]) // Add your routes here

    ],

    providers: [],

    bootstrap: [AppComponent]

})

export class AppModule { }