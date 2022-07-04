import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MugModule } from './mug/mug.module';
import { MugTypeModule } from './mug-type/mug-type.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: process.env.NODE_ENV === 'develop' ? false : true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: './src/schema.gql',
    }),
    MugModule,
    MugTypeModule,
    AuthzModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
