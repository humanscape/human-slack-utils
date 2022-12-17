import { Test, TestingModule } from '@nestjs/testing';
import { RandomReactionsService } from './random-reactions.service';

describe('RandomReactionsService', () => {
  let service: RandomReactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomReactionsService],
    }).compile();

    service = module.get<RandomReactionsService>(RandomReactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
