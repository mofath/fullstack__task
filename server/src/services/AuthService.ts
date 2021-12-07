import { Service, Container } from 'typedi';
import { ConflictError } from '../errors';
import { mailer, OTP } from '../lib';
import UserRepositiory from '../repoisitory/UserRepositiory';
import { UserAttributes } from '../types/models';
import { passwordUtils } from '../utils';
import 'reflect-metadata';

@Service()
class AuthService {
  constructor(
    private readonly UserRepositiory: UserRepositiory,
    private readonly OTP: OTP
  ) {}

  /*
   * User register service
   */
  async register(user: UserAttributes) {
    try {
      const userExists = await this.UserRepositiory.findUser({
        email: user.email,
      });
      if (userExists) throw new ConflictError('Email already Exist!');

      const otp = this.OTP.generate({
        email: user.email,
      });

      // TODO: add password hashing as hook before save
      user['password'] = await passwordUtils.encodePassword(
        user.password as string
      );

      mailer().sendEmail({
        to: user.email as string,
        subject: 'Verify Your Email for CreditGo',
        html: `Hello,<br> Please Click on the link to verify your email.<br>Verfication code is: ${otp}`,
      });

      await this.UserRepositiory.save(user);
    } catch (error) {
      throw error;
    }
  }

  async verifyRegister(code: string) {
    try {
      console.log(111);
      
      const x = await this.OTP.consume(code);
      console.log(x);
      console.log(222);

    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default AuthService;
