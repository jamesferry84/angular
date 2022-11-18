import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { Post } from "../../models/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit {

  postForm: FormGroup;

  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient, private postService: PostService) {
  }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(''),
      'content': new FormControl('')
    });

    this.getPosts();
  }

  onSubmit() {
    this.postService.createAndStorePost(this.postForm.get('title').value, this.postForm.get('content').value);
  }

  clearAllPosts() {
    console.log('clearing all posts');
    this.isLoading = true;
    this.postService.deleteAllPosts().subscribe(data => {
      this.isLoading = false;
      this.loadedPosts = [];
    });
  }

  getPosts() {
    this.isLoading = true;
    this.postService.fetchPosts().subscribe( posts => {
      this.isLoading = false;
      this.loadedPosts = posts;
    });
  }

}
