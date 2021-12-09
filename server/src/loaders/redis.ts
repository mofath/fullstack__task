import { createClient } from 'redis';

const redisLoader = async (logger) => {
  try {
    const client = createClient();

    client.on('connect', function () {
      logger.info('Redis client connected');
    });

    client.on('error', function (err) {
      logger.error(`Something went wrong ${err}`);
    });

    await client.connect();

    const read = (key) => {
      return new Promise((resolve, reject) => {
        client.get(key, (err, reply) => {
          if (err) {
            reject(err);
            return;
          }
          if (reply === null) {
            resolve(null);
            return;
          }
          resolve(JSON.parse(reply));
        });
      });
    };

    const write = (key, value, ttl) => {
      return new Promise((resolve, reject) => {
        let handler = (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve('');
        };

        client.set(key, JSON.stringify(value), handler);
        if (ttl) client.expiry(key, ttl);
      });
    };

    return {
      read,
      write,
    };
  } catch (error) {
    logger.error('Failed to load redis client');
    throw new Error(error);
  }
};

export default redisLoader;
