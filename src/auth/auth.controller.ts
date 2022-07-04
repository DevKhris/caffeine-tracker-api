import { AuthService } from './auth.service';
import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('login')
  @Redirect('', 302)
  async login(): Promise<{ url: string }> {
    return { url: this.authService.buildAuthUrl() };
  }

  @Post('register')
  async register(@Body('user') user) {
    return this.authService.registerUser(user);
  }

  @Get('profile')
  profile() {}
}
