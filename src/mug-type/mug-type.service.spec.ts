import { Test, TestingModule } from '@nestjs/testing';
import { MugTypeService } from './mug-type.service';

describe('MugTypeService', () => {
  let service: MugTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugTypeService],
    }).compile();

    service = module.get<MugTypeService>(MugTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
