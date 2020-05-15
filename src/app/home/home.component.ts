import { Component, OnInit } from '@angular/core';
import{UploadService} from '../../app/services/upload_service/upload.service'
import{HttpClient} from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {



  notesList:[string];
  filename;
  fileUrl = 'https://amanpersonal.s3.ap-south-1.amazonaws.com/notes/';


  
  constructor(private uploadService:UploadService,private http:HttpClient,private sanitizer: DomSanitizer) { 
    this.filename = 'AMAN_BATHLA.pdf';
  }

  ngOnInit() {
    this.uploadService.getAllFilesFromStorage().subscribe((res:[string])=>{
        this.notesList = res;
        console.log(res);
    },
    (err)=>{
      console.log(err);
    }
    )
  }


  downloadNotes(filename:string) {
    console.log(filename);
    this.filename = filename;
    this.fileUrl = this.fileUrl + filename;
  // this.uploadService.getPDFaws(filename)
  //     .subscribe(x => {
  //         // It is necessary to create a new blob object with mime-type explicitly set
  //         // otherwise only Chrome works like it should
  //         var newBlob = new Blob([x], { type: "application/pdf" });

  //             var url = window.URL.createObjectURL(newBlob);
  //             var anchor = document.createElement("a");
  //             anchor.download = this.filename;
  //             anchor.href = url;
  //             anchor.click();
        
          

  //     }, (error: any) => {
      
  //       console.log('Error downloading the file');
  //     }
  //   );
   
}



 

}
