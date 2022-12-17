import { Test, TestingModule } from '@nestjs/testing';
import { RandomReactionsController } from './random-reactions.controller';

describe('RandomReactionsController', () => {
  let controller: RandomReactionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomReactionsController],
    }).compile();

    controller = module.get<RandomReactionsController>(RandomReactionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
