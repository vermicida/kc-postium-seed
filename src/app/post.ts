import { User } from './user';
import { Category } from './category';

export interface Post {
  id?: number;
  title?: string;
  intro?: string;
  body?: string;
  media?: string;
  publicationDate?: number;
  categories?: Category[];
  author?: User;
  likes?: number[];
}
