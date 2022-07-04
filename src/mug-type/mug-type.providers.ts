import { MugType } from './entities/mug-type.entity';
import { DataSource } from 'typeorm';

export const mugTypeProviders = [
  {
    provide: 'MUG_TYPE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MugType),
    inject: ['DATA_SOURCE'],
  },
];
