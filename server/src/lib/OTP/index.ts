import { Service, Inject } from 'typedi';
import { generateRandomNum } from '../../utils';
import 'reflect-metadata';
import { IObjectKeys } from '../../types/general';

@Service()
class OTP {
  constructor(@Inject('redisClient') private redisClient: any) {}

  generate(value: IObjectKeys): number {
    const randomCode = generateRandomNum(6);
    this.redisClient.set(
      `otp-${randomCode}`,
      JSON.stringify({ ...value, code: randomCode })
    );
    this.redisClient.expire(`otp-${randomCode}`, 60 * 2000);
    return randomCode;
  }

  consume(code: string) {
    return new Promise((reject, resolve) => {
      this.redisClient.get(`otp-${code}`, (err, result) => {        
        if (err) return reject(err);
        else return resolve(result);
      });
    });
  }
}

export default OTP;
