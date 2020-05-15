import { Component, OnInit } from '@angular/core';
import{UploadService} from '../../app/services/upload_service/upload.service'
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {


  
  uploadfile:File;
  filename:string;
  filePresent:boolean;
  s3uploadResult = '';

  progress: { percentage: number } = { percentage: 0 };



  constructor(private uploadService:UploadService,private http:HttpClient) { }

  ngOnInit() {
    this.filePresent = false;
  }

  upload(){

    this.progress.percentage = 0;
    this.s3uploadResult = '';

     this.uploadService.pushFileToStorage(this.uploadfile).subscribe(event => {
       this.uploadfile = undefined;
       this.filePresent = false;
       this.filename = '';
       console.log(event);
       this.s3uploadResult = "Uploaded Successfully";
     });
  }

  public onChange(fileList: FileList): void {

    this.s3uploadResult = '';
    
    if(fileList.length > 0) 
  {
    console.log(fileList[0].name);
    this.uploadfile = fileList[0];
    this.filename = fileList[0].name;
    this.filePresent = true;
  }
  }

}
