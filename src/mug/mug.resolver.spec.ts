import { Test, TestingModule } from '@nestjs/testing';
import { MugResolver } from './mug.resolver';
import { MugService } from './mug.service';

describe('MugResolver', () => {
  let resolver: MugResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugResolver, MugService],
    }).compile();

    resolver = module.get<MugResolver>(MugResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
