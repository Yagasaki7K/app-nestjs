import { Injectable } from '@nestjs/common';
import { Consumer } from 'src/model/consumer.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ConsumerService extends TypeOrmCrudService<Consumer>{
    constructor(@InjectRepository(Consumer) repo) {
        super(repo)
    }
}