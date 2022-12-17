import { Test, TestingModule } from '@nestjs/testing';
import { HuminService } from './humin.service';

describe('HuminService', () => {
  let service: HuminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HuminService],
    }).compile();

    service = module.get<HuminService>(HuminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
