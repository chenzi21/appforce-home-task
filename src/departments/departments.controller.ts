import { Controller, Post, Body, Param, Delete, Get, Res } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { isUUID } from 'class-validator';
import { Response } from 'express';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) { }
  @Get()
  findAll() {
    return this.departmentsService.findAll();
  }

  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.insert(createDepartmentDto);
  }

  @Delete(':id')
  remove(@Res({ passthrough: true }) res: Response, @Param('id') id: string) {
    if (!isUUID(id)) {
      // data is understood, but not valid, so returning 422 (Unprocessable Entity) status code
      res.status(422).send();
      return;
    }
    return this.departmentsService.delete(id);
  }
}
