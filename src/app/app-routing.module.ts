import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from '../app/home/home.component';
import{UploadComponent} from '../app/upload/upload.component';
import{PdfviewerComponent} from '../app/pdfviewer/pdfviewer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'upload',component:UploadComponent},
  {path:'pdf',component:PdfviewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
