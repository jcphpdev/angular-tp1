import { PostsComponent } from './posts/posts.component';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: Http) { }

  _getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  _persistePost(post) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

  _updatePost(post) {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/'+post.id,post);
  }

  _deletePost(id) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
