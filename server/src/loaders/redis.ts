import { createClient } from 'redis';

const redisLoader = async (logger: any) => {
  try {
    const client = createClient();

    client.on('connect', function () {
      logger.info('Redis client connected');
    });

    client.on('error', function (err) {
      logger.error(`Something went wrong ${err}`);
    });

    await client.connect();

    return client;
  } catch (error: any) {
    logger.error('Failed to load redis client');
    throw new Error(error);
  }
};

export default redisLoader;
