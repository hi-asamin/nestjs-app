import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseHistory } from 'src/entities/response-history.entity';
import { ResponseHistoryController } from 'src/controllers/response-history.controller';
import { ResponseHistoryService } from 'src/services/response-history.service';
import { ResponseHistoryRepository } from 'src/repositories/response-history.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseHistory, ResponseHistoryRepository])],
  exports: [TypeOrmModule],
  controllers: [ResponseHistoryController],
  providers: [ResponseHistoryService]
})
export class ResponseHistoryModule {}
