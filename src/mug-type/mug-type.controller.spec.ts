import { Test, TestingModule } from '@nestjs/testing';
import { MugTypeController } from './mug-type.controller';

describe('MugTypeController', () => {
  let controller: MugTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MugTypeController],
    }).compile();

    controller = module.get<MugTypeController>(MugTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
