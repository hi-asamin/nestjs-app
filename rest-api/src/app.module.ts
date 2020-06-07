import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ResponseHistoryModule } from './modules/response-history/response-history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    ResponseHistoryModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
