import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';
// import { modelItem } from './app.model';
// import { Item } from './app.dto';
@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}
  @Query(() => String)
  async foo(): Promise<string> {
    return '';
  }
}