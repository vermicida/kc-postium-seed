import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Category } from '../category';
import { NativeWindow } from '../window';
import { Post } from '../post';

@Component({
  templateUrl: './posts-by-category.component.html',
  styleUrls: ['./posts-by-category.component.css']
})
export class PostsByCategoryComponent implements OnInit {

  posts: Post[];
  category: Category;

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(NativeWindow) private _window) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { posts: Post[] }) => this.posts = data.posts);
    this._activatedRoute.data.subscribe((data: { category: Category }) => this.category = data.category);
    this._window.scrollTo(0, 0);
  }

}
