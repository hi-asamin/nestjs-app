import { Test, TestingModule } from '@nestjs/testing';
import { ResponseHistoryController } from '../response-history.controller';

describe('ResponseHistory Controller', () => {
  let controller: ResponseHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponseHistoryController],
    }).compile();

    controller = module.get<ResponseHistoryController>(ResponseHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
