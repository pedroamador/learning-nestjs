import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';

@Injectable()
export class ValIdDogPipe implements PipeTransform {
  constructor(
    @InjectRepository(UserEntity)
    public dogsRepository: Repository<UserEntity>,
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      await this.dogsRepository.findOneOrFail(value);
    } catch (err) {
      throw new BadRequestException('Id no existe');
    }

    return value;
  }
}
