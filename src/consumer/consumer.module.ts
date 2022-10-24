import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumer } from 'src/model/consumer.entity';
import { ConsumerController} from './consumer.controller';
import { ConsumerService} from './consumer.service';

@Module({
    imports: [ TypeOrmModule.forFeature([Consumer])],
    controllers: [ConsumerController],
    providers: [ConsumerService]
})
export class ConsumerModule {}