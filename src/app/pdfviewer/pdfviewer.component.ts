import { Component, OnInit } from '@angular/core';

import{ PdfService} from 'src/app/services/viewpdf/pdf.service';



@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements OnInit {


  src = '../../assets/files/B134082866.pdf';
  type;
  

  constructor(private pdf:PdfService) {
    this.src = pdf.primarysrc + pdf.filename
    this.type = pdf.fileType;
   }

  ngOnInit() {

    
  }

}
