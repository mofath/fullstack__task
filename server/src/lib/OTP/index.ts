import { Service, Inject } from 'typedi';
import { generateRandomNum } from '../../utils';
import 'reflect-metadata';

@Service()
class OTP {
  constructor(@Inject('redisClient') private redisClient: any) {}

  generate(): number {
    const randomCode = generateRandomNum(6);
    this.redisClient.set(`otp${randomCode}`, randomCode);
    this.redisClient.expire(`otp${randomCode}`, 60 * 10); // live for two minutes
    return randomCode;
  }

  consume(otp: number, callback: any) {
    this.redisClient.get(`otp${otp}`, (err, result) => {
      if (err) return callback(err);
      if (!result) return callback(null, false);

      this.redisClient.del(`otp${otp}`);

      return callback(null, true);
    });
  }
}

export default OTP;
