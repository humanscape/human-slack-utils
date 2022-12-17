import { Module } from '@nestjs/common';
import { HuminController } from './humin.controller';
import { HuminService } from './humin.service';

@Module({
  controllers: [HuminController],
  providers: [HuminService]
})
export class HuminModule {}
