import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Post } from "../models/post";
import { PostService } from "./post.service";

@Injectable()
export class PostDetailsResolve implements Resolve<Post> {

    constructor(private _postService: PostService) { }
    
    resolve(route: ActivatedRouteSnapshot): Observable<Post> {
        return this._postService.getPostDetails(+route.params["postId"]);
    }
}
