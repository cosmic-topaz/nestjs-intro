import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public finadALL(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
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

  public findOneById(id: number) {
    return {
      id: 1234,
      firstNAme: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
