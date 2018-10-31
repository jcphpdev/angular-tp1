import {
  Component,
  OnInit
} from '@angular/core';
import {
  PostService
} from '../post.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];
  post = {
    title: "",
    body: ""
  }
  onAddPost: boolean = false;
  onUpdatePost: boolean = false;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  favorit() {
    alert("ok");
  }

  getPosts() {
    this.postService._getPosts().subscribe((Response) => {
      this.posts = Response.json()
      console.log(Response.json())
    });
  }

  persistePost(f) {
    if (f.valid) {
      this.postService._persistePost(this.post).subscribe(response => {
        //pour fermer le formulaire
        this.onAddPost = false;

        //Pour ajouter le post dans le tableau_
        this.posts.unshift(response.json())

        //pour intialiser la variable de la laison de données

        this.post = {
          title: "",
          body: ""
        }

      });
    } else {
      alert("Sir tan3ass!");
    }

  }

  showForm() {
    this.onAddPost = !this.onAddPost;
    //pour initialiser la variable de la lision de données
    this.post = {
      title: "",
      body: ""
    }
  }

  editPost(post) {
    this.post = post;
    this.onAddPost = true;
    this.onUpdatePost = true;

  }

  updatePost(f) {
    if (f.valid) {
      this.postService._updatePost(this.post).subscribe(response => {
        console.log(response.json())
        this.onAddPost = false;
        this.onUpdatePost = false;
      });
    } else {
      alert("3a9na bik!");
    }

  }

  deletePost(i, id) {

    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.postService._deletePost(id).subscribe(response => {
          console.log(response.json())
          this.posts.splice(i, 1);
        })

        Swal(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      }
    })
  }

}
