import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentsController } from './departments.controller';
import { DepartmentsService } from './departments.service';
import { response } from 'express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departments } from './entities/department.entity';

describe('DepartmentsController', () => {
  let controller: DepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Departments])],
      controllers: [DepartmentsController],
      providers: [DepartmentsService],
    }).compile();

    controller = module.get<DepartmentsController>(DepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('insert HR', () => {
    expect(controller.create({ name: "HR", description: "manages human resources" })).toHaveReturned();
  });

  it('find all', () => {
    expect(controller.findAll()).toHaveReturned();
  });

  it('insert and delete Engineeering', async () => {
    const { id } = await controller.create({ name: "Engineering", description: "the engineering department" })
    if (typeof id !== "string") throw new Error;
    expect(controller.remove(response, id)).toHaveReturned();

    const res = response;
    await controller.remove(res, "bad_input");
    expect(res.statusCode).toEqual(422);
  });
});
