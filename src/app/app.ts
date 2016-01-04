import 'angular2/bundles/angular2-polyfills';

import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { LocalStorageService } from './services/localStorage.service';

import * as marked from 'marked';

@Component({
  selector: 'markdown-app', //html selector <markdown-app></markdown-app>
  templateUrl: '/app/markdownApp.html' //can also specify templateUrl
})

class MarkdownAppComponent {
    public html = '';
    //public md: MarkedStatic; //not sure why but that's the Marked type
    
    private localStorage: LocalStorageService;
    private storageKey: 'markdown-app';
    
    constructor(LocalStorageService: LocalStorageService) {
        this.localStorage = LocalStorageService;
        this.html = '';
        //this.md = marked;
    }
    
    public updateValue(val) {
        // if (!val) { return '';}
        //this.html = this.md.parse(val);
        
        this.html = val;
    }
}

bootstrap(MarkdownAppComponent, [LocalStorageService]);