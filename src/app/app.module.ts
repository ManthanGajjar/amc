import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';

import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MovieComponent } from './movie/movie.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    MovieComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ChartsModule,
    NgbModule.forRoot(),
    ClarityModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    RouterModule.forRoot([
      {path:'',component:AComponent},
      {path:'movie',component:MovieComponent}
    
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
