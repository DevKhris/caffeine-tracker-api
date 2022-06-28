import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): string {
    return 'Welcome to Coffeine Tracker API';
  }

  health(): object {
    return { status: 'OK', code: '200' };
  }
}
