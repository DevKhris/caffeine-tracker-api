import { Test, TestingModule } from '@nestjs/testing';
import { MugController } from './mug.controller';

describe('MugController', () => {
  let controller: MugController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MugController],
    }).compile();

    controller = module.get<MugController>(MugController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
