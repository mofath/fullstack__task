import { IsInt, IsDefined } from 'class-validator';

export class VerifyRegisterDTO {
  constructor(verificationCode: string, email: string, password: string) {
    this.verificationCode = verificationCode;
  }

  @IsDefined({ message: 'Verification Code is required' })
  @IsInt({ message: 'Verification Code must be numeric' })
  verificationCode: string;
}
