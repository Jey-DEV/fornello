import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
const GALLERY_URL = 'assets/data/gallery.json';


@Injectable()
export class GalleryService {
  constructor(private http: HttpClient){}
  public getAllImages(): Observable<any> {
    return this.http.get(GALLERY_URL);
  }
}
