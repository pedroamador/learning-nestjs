import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';

export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(userDTO.id, userDTO.name, userDTO.lastName);
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(userEntity.userId, userEntity.name, userEntity.lastName);
  }
}
