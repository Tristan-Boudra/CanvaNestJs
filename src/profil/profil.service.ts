import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfilService {
  create(createProfilDto) {
    return 'This action adds a new profil';
  }

  findAll() {
    return `This action returns all profil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profil`;
  }

  update(id: number, updateProfilDto) {
    return `This action updates a #${id} profil`;
  }

  remove(id: number) {
    return `This action removes a #${id} profil`;
  }
}
