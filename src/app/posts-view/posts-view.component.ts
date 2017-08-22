import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NativeWindow } from '../window';
import { Post } from '../post';

@Component({
  templateUrl: './posts-view.component.html'
})
export class PostsViewComponent implements OnInit {

  posts: Post[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window) { }

  ngOnInit(): void {
    this._activatedRoute
        .data
        .subscribe((data: { posts: Post[] }) => {
          this.posts = data.posts;
          this._window.scrollTo(0, 0);
        });
  }

}
