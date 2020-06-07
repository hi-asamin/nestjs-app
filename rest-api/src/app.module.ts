import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UsersModule } from './modules/users.module';
import { ResponseHistoryModule } from './modules/response-history.module';

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
