import { Component, OnInit } from '@angular/core';
import { ImagesearchService } from '../imagesearch.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  

  query: string;
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  page: number = 1;
  pagenourl: string = '&page='+this.page

  constructor(private _imageService:ImagesearchService){}
  
  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }
  
  previousPage(){
    if(this.page!=1){
      this.page--;
      this.pagenourl='&page='+this.page;
      this.SearchImages(this.query);
    }
  }

  nextPage(){
    this.page++;
    this.pagenourl='&page='+this.page;
    this.SearchImages(this.query);
  }

  handleError(error){
    console.log(error);
  }

  SearchImages(query){
    this.searching = true;
    this.query=query;
    return this._imageService.getImage(encodeURIComponent(query)+this.pagenourl).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }
  

 
  ngOnInit(): void {
  }
  
}
