import { Injectable } from '@angular/core';

import { FileMimeType } from '@taldor-ltd/angular-file-viewer';
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  primarysrc = '../../../assets/files/';
  filename = 'B134082866.pdf'
 
  fileType = FileMimeType.PDF; 

  
  constructor() { }

  uploadfile(file){

  }


}
