import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { LoggerModule } from './modules/logger.module';
import { UsersModule } from './modules/users.module';
import { ResponseHistoryModule } from './modules/response-history.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LoggerModule,
    UsersModule,
    ResponseHistoryModule
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
