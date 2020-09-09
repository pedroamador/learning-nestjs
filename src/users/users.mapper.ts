import { UserDTO } from './user.dto';
import { UserEntity } from './users.entity';

export class UserMapper {
  dtoToEntity(userDTO: UserDTO): UserEntity {
    return new UserEntity(userDTO.id, userDTO.name);
  }

  entityToDto(userEntity: UserEntity): UserDTO {
    return new UserDTO(userEntity.userId, userEntity.name);
  }
}
