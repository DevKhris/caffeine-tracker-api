import { DataSource } from 'typeorm';
import { Mug } from './entities/mug.entity';

export const mugProviders = [
  {
    provide: 'MUG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Mug),
    inject: ['DATA_SOURCE'],
  },
];
