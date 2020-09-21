import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { TestComponent } from './test/test.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ImagesearchService } from './imagesearch.service';
import { NgxMasonryModule } from 'ngx-masonry';
import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxMasonryModule,
    MaterialModule
  ],
  providers: [ImagesearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
