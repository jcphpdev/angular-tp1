import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  _getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  _persistPost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
