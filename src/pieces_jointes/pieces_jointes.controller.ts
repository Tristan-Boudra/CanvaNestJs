import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('pieces-jointes')
export class PiecesJointesController {
  constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() createPiecesJointeDto) {
   this.bdd.query("INSERT INTO profil (url, type) VALUES (?, ?)", [createPiecesJointeDto.url, createPiecesJointeDto.type]);
  }

  @Get()
  findAll() {
    return "Todo";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return "Todo";
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePiecesJointeDto) {
    return "Todo";
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Todo";
  }
}
