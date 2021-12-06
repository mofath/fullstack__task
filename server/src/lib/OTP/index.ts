import { Service, Inject } from 'typedi';
import { generateRandomNum } from '../../utils';

@Service()
class OTP {
  constructor(@Inject('redisClient') private redisClient: any) {}

  generate(): number {
    const otp = generateRandomNum(6);
    this.redisClient.set(`otp${otp}`, otp);
    this.redisClient.expire(`otp${otp}`, 60 * 10); // live for two minutes
    return otp;
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
