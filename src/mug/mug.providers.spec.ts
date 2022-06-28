import { Test, TestingModule } from '@nestjs/testing';
import { MugProviders } from './mug.providers';

describe('MugProviders', () => {
  let provider: MugProviders;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MugProviders],
    }).compile();

    provider = module.get<MugProviders>(MugProviders);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
