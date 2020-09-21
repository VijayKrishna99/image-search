import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class ImagesearchService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=10";

  constructor(private _http : HttpClient) {  }

  getImage(query){
    return this._http.get(this.URL+query+this.perPage)
                .catch(this.httpErrorResponse);
                
  }

  httpErrorResponse(error: HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
      
  }

}
