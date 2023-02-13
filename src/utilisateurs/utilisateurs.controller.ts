import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('Utilisateurs')
export class UtilisateursController {
  constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() createUtilisateursDto) {
    this.bdd.query("INSERT INTO Utilisateurs (id_utilisateur, status ) VALUES (?, ?)", [createUtilisateursDto.id_utilisateur, createUtilisateursDto.status]);
    return "Todo";
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
  update(@Param('id') id: string, @Body() updateUtilisateursDto) {
    return "Todo";
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Todo";
  }
}