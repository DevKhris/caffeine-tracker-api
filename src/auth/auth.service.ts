import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  buildAuthUrl(): string {
    return `https://${process.env.AUTH0_DOMAIN}/authorize?audience=${process.env.AUTH0_AUDIENCE}}&scope=SCOPE&response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_CALLBACK}/auth/token&state=STATE?prompt=none`;
  }

  registerUser(user: { name; email; password; username; avatar }) {
    const payload = {
      client_id: '',
      name: user.name,
      email: user.email,
      password: user.password,
      connection: '',
      username: user.username,
      avatar: user.avatar,
    };
  }
}
