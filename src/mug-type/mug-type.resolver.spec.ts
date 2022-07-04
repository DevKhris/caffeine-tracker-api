import { Test, TestingModule } from '@nestjs/testing';
import { MugTypeResolver } from './mug-type.resolver';
import { MugTypeService } from './mug-type.service';

describe('MugTypeResolver', () => {
  let resolver: MugTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugTypeResolver, MugTypeService],
    }).compile();

    resolver = module.get<MugTypeResolver>(MugTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
