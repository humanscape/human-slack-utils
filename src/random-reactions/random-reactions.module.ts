import { Module } from '@nestjs/common';
import { RandomReactionsController } from './random-reactions.controller';
import { RandomReactionsService } from './random-reactions.service';

@Module({
  controllers: [RandomReactionsController],
  providers: [RandomReactionsService]
})
export class RandomReactionsModule {}
