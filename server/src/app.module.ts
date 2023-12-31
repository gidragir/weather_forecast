import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { resolvers } from './index'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      buildSchemaOptions: { dateScalarMode: 'timestamp' }
    }),
  ],
  controllers: [AppController],
  providers: resolvers,
})
export class AppModule {}