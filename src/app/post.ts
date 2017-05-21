import { User } from './user';
import { Category } from './category';

export class Post {

  private constructor(
    public id: number,
    public title: string,
    public intro: string,
    public body: string,
    public media: string,
    public publicationDate: number,
    public categories: Category[],
    public author: User,
    public likes: number[]) { }

  static fromJson(json: any): Post {
    return new Post(
      json.id,
      json.title,
      json.intro,
      json.body,
      json.media,
      json.publicationDate,
      json.categories,
      json.author,
      json.likes
    );
  }

  static fromJsonToList(json: any): Post[] {
    return (json as any[]).map((post: any): Post => Post.fromJson(post));
  }

}
