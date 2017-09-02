
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

/*----------------------------------------------------------|
 | ~~~ Blue Path ~~~                                        |
 |----------------------------------------------------------|
 | Importa FromNowPipe para poder usarlo en este documento. |
 |----------------------------------------------------------*/

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AutoGrowDirective } from './auto-grow.directive';
import { CategoryBoxComponent } from './category-box/category-box.component';
import { CategoryResolveService } from './category-resolve.service';
import { CategoryService } from './category.service';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NativeWindowProvider } from './window';
import { NewStoryComponent } from './new-story/new-story.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostDetailsResolveService } from './post-details-resolve.service';
import { PostFormComponent } from './post-form/post-form.component';
import { PostPreviewComponent } from './post-preview/post-preview.component';
import { PostsByAuthorComponent } from './posts-by-author/posts-by-author.component';
import { PostsByCategoryComponent } from './posts-by-category/posts-by-category.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsResolveService } from './posts-resolve.service';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostService } from './post.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  /*=========================================================================|
  | Blue Path                                                                |
  |==========================================================================|
  | No olvides declarar FromNowPipe en el módulo.                            |
  |=========================================================================*/

  declarations: [
    AppComponent,
    AutoGrowDirective,
    CategoryBoxComponent,
    HeaderBarComponent,
    NewStoryComponent,
    PostDetailsComponent,
    PostFormComponent,
    PostPreviewComponent,
    PostsByAuthorComponent,
    PostsByCategoryComponent,
    PostsListComponent,
    PostsViewComponent,
    SearchBoxComponent
  ],
  providers: [
    CategoryResolveService,
    CategoryService,
    NativeWindowProvider,
    PostDetailsResolveService,
    PostService,
    PostsResolveService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
