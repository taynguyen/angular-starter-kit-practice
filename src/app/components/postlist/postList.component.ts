import 'angular2/bundles/angular2-polyfills';

import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-list',
  templateUrl: '/app/markdownApp.html',
  directives: [ROUTER_DIRECTIVES ,NgFor],
})
export class PostListComponent { 
  public titles: Array<string>;
  
  constructor(PostService: PostService) {
      this.titles = PostService.getTitles() || [];
  }
  
  public addPost(title: string) {
      this.titles.push(title);
  }
}