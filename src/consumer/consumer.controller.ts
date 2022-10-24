import { Controller } from "@nestjs/common";
import { Crud } from '@nestjsx/crud'
import { Consumer } from "src/model/consumer.entity";
import { ConsumerService } from "./consumer.service";

@Crud({
    model: {
        type: Consumer
    },
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true
        }
    }
})
@Controller('consumers')
export class ConsumerController {
    constructor(public service: ConsumerService) {}
}