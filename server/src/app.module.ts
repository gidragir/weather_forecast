import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppGateway } from './app/app.gateway';
import { PrismaService } from './prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path'
import { resolvers } from './index';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
    }),
    AppModule
  ],
  controllers: [AppController],
  providers: resolvers,
})
export class AppModule {}