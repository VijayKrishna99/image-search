import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagelist',
  template: `<p>Search for your images</p>`,
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor() { }
  images : object;
  error:any;
  ngOnInit(): void {}

/*  public searchImages(query:string){
     this._imageService.getImage(query).subscribe(data => this.images=data,
                                                    err=> this.error=err,
                                                     ()=> console.log("Request Complete!"));
  }
  */

}
