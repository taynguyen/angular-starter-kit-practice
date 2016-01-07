import 'angular2/bundles/angular2-polyfills';

import { Component, View, provide } from 'angular2/core';
import { APP_BASE_HREF ,ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, RouteParams } from 'angular2/router'

import { bootstrap } from 'angular2/platform/browser';

import { LocalStorageService } from './services/localStorage.service';
import { PostService } from './services/post.service';

//Pages
import { PostListComponent } from './components/postlist/postList.component';
import { PostComponent } from './components/post/post.component';

@Component({
    selector: 'app',
    templateUrl: '/app/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: PostListComponent, as: 'PostList'},
    { path: '/post/:name', component: PostComponent, as: 'Post'}
])
class App {
    
}

bootstrap(App, [LocalStorageService, PostService, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/'})]);