import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseHistory } from 'src/entities/response-history.entity';
import { ResponseHistoryController } from 'src/controllers/response-history/response-history.controller';
import { ResponseHistoryService } from 'src/services/response-history/response-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResponseHistory])],
  exports: [TypeOrmModule],
  controllers: [ResponseHistoryController],
  providers: [ResponseHistoryService]
})
export class ResponseHistoryModule {}
