import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  baseurl:string = "http://localhost:8085";

  

  constructor(private https: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', this.baseurl + '/uploadFile', data, {
    reportProgress: true,
    responseType: 'text'
    });

    return this.https.request(newRequest);

    }
   
   getAllFilesFromStorage(){
     return this.https.get(this.baseurl+'/getAllFiles')
   }


   getPDFaws(filename): Observable<Blob> {
    return this.https.get(this.baseurl + `/aws/${filename}`, { responseType: 'blob' });
   }


  
}
