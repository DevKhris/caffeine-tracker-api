import { Test, TestingModule } from '@nestjs/testing';
import { MugTypeProviders } fr./mug-type.providersproviders';

describe('MugProviders', () => {
  let provider: MugTypeProviders;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugTypeProviders],
    }).compile();

    provider = module.get<MugTypeProviders>(MugTypeProviders);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
