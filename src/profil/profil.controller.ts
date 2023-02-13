import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('profil')
export class ProfilController {
  constructor(@InjectDataSource() private bdd: DataSource) { }

  @Post()
  create(@Body() createProfilDto) {
    this.bdd.query("INSERT INTO profil (pseudo, dateInscription, email, password) VALUES (?, ?, ?, ?)", [createProfilDto.pseudo, createProfilDto.dateInscription, createProfilDto.email, createProfilDto.password]);
    return "Todo";
  }

  @Get()
  findAll() {
    this.bdd.query("SELECT * FROM profil");
    return "Todo";
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return "Todo";
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilDto) {
    return "Todo";
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Todo";
  }
}