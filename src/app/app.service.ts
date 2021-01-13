import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class HackerNewsService {
  constructor (
    private http: HttpClient
  ) {}
 
  // Calling the Hackernews API using GET method.
  getNews() {
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=node&tags=story`).pipe(
    map((res) => res));
  }
}