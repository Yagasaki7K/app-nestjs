import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      version: '1.0.0',
      description: 'CRUD com NestJS e NestJSX'
    };
  }
}