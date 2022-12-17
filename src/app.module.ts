import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomReactionsModule } from './random-reactions/random-reactions.module';
import { HuminModule } from './humin/humin.module';

@Module({
  imports: [RandomReactionsModule, HuminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}