import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  onAddPost = false;
  post = {
    title: "",
    body: ""
  };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  showForm() {
    this.onAddPost = !this.onAddPost;
  }

  getPosts() {
    this.postService._getPosts().subscribe(
      (response) => {
        this.posts = response.json();
        //console.log(response.json());
      }
    )
  }

  persistPost() {
    this.postService._persistPost(this.post).subscribe(
      (response) => {
        this.onAddPost = false;

        this.posts.unshift(response.json());

        this.post = {
          title: "",
          body: ""
        };
        //console.log(response.json());
      }
    )
  }

}
