import { Test, TestingModule } from '@nestjs/testing';
import { HuminController } from './humin.controller';

describe('HuminController', () => {
  let controller: HuminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuminController],
    }).compile();

    controller = module.get<HuminController>(HuminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
