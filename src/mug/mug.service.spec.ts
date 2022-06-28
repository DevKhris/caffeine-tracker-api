import { Test, TestingModule } from '@nestjs/testing';
import { MugService } from './mug.service';

describe('MugService', () => {
  let service: MugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugService],
    }).compile();

    service = module.get<MugService>(MugService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
