import { Component } from 'angular2/core';

import { MarkdownService } from '../../services/markdown.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'markdown-editor',
  bindings: [MarkdownService],
  templateUrl: '/app/components/editor/editor.component.html'
})
export class MarkdownEditorComponent {
  public html: string;
  public initVal: string;

  private md: MarkdownService;
  private postService: PostService;
  private titleKey: string = 'title';

  constructor(PostService: PostService, MarkdownService: MarkdownService) {
    this.postService = PostService;
    this.html = '';
    this.md = MarkdownService;

    var text = this.postService.getPost(this.titleKey);
    this.initVal = text && text.text ? text.text : '';

    this.updateValue(this.initVal);
  }

  public updateValue(val) {
    this.html = this.md.convert(val);
  }

  public savePost(val) {
    this.postService.savePost(this.titleKey, { text: val });
  }

  public deletePost() {
    this.postService.savePost(this.titleKey, {});
  }
}