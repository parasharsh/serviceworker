import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private http: HttpClient
  ) {}
  title = 'angular-starter';
  ngOnInit() {          
    return this.http.get(`https://hn.algolia.com/api/v1/search_by_date?query=node&tags=story`).pipe(
      map((res) => { console.log(res); this.title = 'success' })).subscribe();
}
}
