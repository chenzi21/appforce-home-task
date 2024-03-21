import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { Repository } from 'typeorm';
import { createMock } from '@golevelup/ts-jest';

describe('DepartmentsController', () => {
  let controller: DepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentsService,
        {
          provide: getRepositoryToken(Departments),
          useValue: createMock<Repository<Departments>>(),
        },
      ],
      controllers: [DepartmentsController]
    }).compile();

    controller = module.get<DepartmentsController>(DepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
