import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      'From Nest App' : new Date()
    }
  }
}
