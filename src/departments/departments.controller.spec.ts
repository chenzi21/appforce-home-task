import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { response } from 'express';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';
import { Repository } from 'typeorm';
import { createMock } from '@golevelup/ts-jest';
import { isUUID } from 'class-validator';

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

  it('insert HR', async () => {
    const res = await controller.create({ name: "HR", description: "manages human resources" });

    expect(isUUID(res.id)).toBeTruthy();
  });

  it('find all', async () => {
    expect(await controller.findAll()).toHaveReturned();
  });

  it('insert and delete Engineeering', async () => {
    const result = await controller.create({ name: "Engineering", description: "the engineering department" })
    expect(controller.remove(result.id)).toHaveReturned();

    expect(await controller.remove("bad_input")).toThrow();
  });
});
