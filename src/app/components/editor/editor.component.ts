import { Component, Input } from 'angular2/core';

import { MarkdownService } from '../../services/markdown.service';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'markdown-editor',
    bindings: [MarkdownService],
    templateUrl: '/app/components/editor/editor.component.html'
})
export class MarkdownEditorComponent {
    @Input() title: string;

    public html: string;
    public initVal: string;

    private md: MarkdownService;
    private postService: PostService;
    private titleKey: string = 'title';

    ngAfterContentChecked() {
        var text = this.postService.getPost(this.title);
        this.initVal = (text && text.text) ? text.text : '';
        
        this.updateValue(this.initVal);
    }
    
    constructor(PostService: PostService, MarkdownService: MarkdownService) {
        this.postService = PostService;
        this.md = MarkdownService;
        
        this.html = '';
        this.initVal = '';
    }

    public updateValue(val) {
        if (!val) {
            return '';
        }
        
        this.html = this.md.convert(val);
    }

    public savePost(val) {
        this.postService.savePost(this.title, { text: val });
    }

    public deletePost() {
        this.postService.deletePost(this.title);
    }
}