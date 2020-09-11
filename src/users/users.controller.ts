import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Auth } from 'src/auth/auth.decorator';
import { UserDTO } from './user.dto';
import { UsersService } from './users.service';
import { UserIdValid } from './users.validation.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers(): Promise<UserDTO[]> {
    return await this.usersService.getAllUsers();
  }

  @Get('/me')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getUserById(@Auth() { id }: UserDTO): Promise<UserDTO> {
    return await this.usersService.getUserById(id);
  }

  @Post()
  async newUser(@Body() user: UserDTO): Promise<UserDTO> {
    return await this.usersService.newUser(user);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async updateUser(
    @Param('id', UserIdValid) id: string,
    @Body() user: UserDTO,
  ): Promise<UserDTO> {
    return await this.usersService.updateUser(id, user);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Param('id') id: string): Promise<void> {
    return await this.usersService.deleteUser(id);
  }
}
