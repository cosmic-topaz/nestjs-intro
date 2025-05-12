import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    // Injecting Auth Service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public finadALL(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    // Check if the user is authenticated
    const isAuth = this.authService.isAuth();
    console.log('isAuth', isAuth);
    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /*
   *  find a user by ID
   */

  public findOneById(id: string) {
    return {
      id: 1234,
      firstNAme: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
