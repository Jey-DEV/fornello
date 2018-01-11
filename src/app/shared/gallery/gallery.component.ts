import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [ GalleryService ]
})
export class GalleryComponent implements OnInit {
  images: any;

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.galleryService.getAllImages().subscribe(data => this.images = data );
  }
}
