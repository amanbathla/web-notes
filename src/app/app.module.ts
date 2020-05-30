import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { PdfviewerComponent } from './pdfviewer/pdfviewer.component';
import { AngularFileViewerModule } from '@taldor-ltd/angular-file-viewer';
import{PdfService} from '../app/services/viewpdf/pdf.service';
import{UploadService} from '../app/services/upload_service/upload.service';
import { BotComponent } from './bot/bot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    PdfviewerComponent,
    BotComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AngularFileViewerModule
  ],
  providers: [PdfService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
