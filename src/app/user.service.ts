import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {

  private readonly DEFAULT_USER = {
    id: 1,
    name: 'KeepCoder',
    username: 'keepcoder',
    email: 'keepcoder@postium.com',
    avatar: 'assets/images/keepcoder.jpg'
  };

  getDefaultUser(): User {
    return { ...this.DEFAULT_USER };
  }

}
