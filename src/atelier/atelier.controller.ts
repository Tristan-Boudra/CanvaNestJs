import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Controller('atelier')
export class AtelierController {
  constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() createAtelierDto) {
    this.bdd.query(
      'INSERT INTO atelier (idAtelier, title_atelier, description, est_realisee, date_de_creation, echeance) VALUES (?, ?, ?, ?, ?, ?)',
      [
        createAtelierDto.idAtelier,
        createAtelierDto.title_atelier,
        createAtelierDto.description,
        createAtelierDto.est_realisee,
        createAtelierDto.date_de_creation,
        createAtelierDto.echeance,
      ],
    );
    return 'TODO';
  }

  @Get()
  findAll() {
    this.bdd.query('SELECT * FROM atelier');
    return 'TODO';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.bdd.query(
      'SELECT title_atelier, description, est_realisee, date_de_creation, echeance FROM atelier WHERE idAtelier = ?',
      [id],
    );
    return 'TODO';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtelierDto) {
    this.bdd.query(
      'UPDATE atelier SET title_atelier = ?, description = ?, est_realisee = ?, date_de_creation = ?, echeance = ?',
      [
        updateAtelierDto.idAtelier,
        updateAtelierDto.title_atelier,
        updateAtelierDto.description,
        updateAtelierDto.est_realisee,
        updateAtelierDto.date_de_creation,
        updateAtelierDto.echeance,
      ],
    );
    return 'TODO';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.bdd.query('DELETE FROM atelier WHERE idAtelier = ?', [id]);
    return 'TODO';
  }
}
