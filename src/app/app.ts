import 'angular2/bundles/angular2-polyfills';

import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

import { bootstrap } from 'angular2/platform/browser';

import { MarkdownEditorComponent } from './components/editor/editor.component';

import { LocalStorageService } from './services/localStorage.service';
import { PostService } from './services/post.service';

@Component({
  selector: 'markdown-app',
  templateUrl: '/app/markdownApp.html',
  directives: [NgFor, MarkdownEditorComponent],
})
class MarkdownAppComponent { 
  
  constructor() {
  }
}

bootstrap(MarkdownAppComponent, [LocalStorageService, PostService]);