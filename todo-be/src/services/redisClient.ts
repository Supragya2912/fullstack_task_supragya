import dotenv from 'dotenv';
dotenv.config();
import redis from 'ioredis';


const redisClient = new redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});

const redis_key = process.env.REDIS_KEY || "FULLSTACK_TASK_Supragya";

export const addToCache = async (item: string) => {
  await redisClient.rpush(redis_key,item);
}

export const getFromCache = async (): Promise<string[]> => {
  return await redisClient.lrange(redis_key, 0, -1);
};

export const flushCache = async () => {
  await redisClient.del(redis_key);
};
