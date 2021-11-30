import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

export class UserError {
  public static handleUserError(error) {
    switch (error.code) {
      case '23505':
        this.duplicatedName();
      default:
        this.internalServerError();
    }
  }

  public static duplicatedName(): string {
    throw new ConflictException('Email already used');
  }

  public static internalServerError(): string {
    throw new InternalServerErrorException('Something went wrong... :(');
  }
}
