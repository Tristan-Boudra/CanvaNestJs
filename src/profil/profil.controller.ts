import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('profil')
export class ProfilController {
  // constructor(@InjectDataSource() private bdd: DataSource) {}

  @Post()
  create(@Body() createProfilDto) {
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
  update(@Param('id') id: string, @Body() updateProfilDto) {
    return "Todo";
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return "Todo";
  }
}