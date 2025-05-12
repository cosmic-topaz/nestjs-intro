import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    // Injecting Auth Aservice
    private readonly authService: AuthService,
  ) {}
}
