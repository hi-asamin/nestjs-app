import { Test, TestingModule } from '@nestjs/testing';
import { ResponseHistoryService } from '../response-history.service';

describe('ResponseHistoryService', () => {
  let service: ResponseHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseHistoryService],
    }).compile();

    service = module.get<ResponseHistoryService>(ResponseHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
