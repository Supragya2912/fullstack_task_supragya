import dotenv from 'dotenv';
dotenv.config();
import redis from 'ioredis';

export const redisClient = new redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
});

export const getJSONValue = async (key: string) => {
  const value = await redisClient.get(key);
  return value ? JSON.parse(value) : null;
};

export const setJSONValue = async (key: string, value: object) => {
  await redisClient.set(key, JSON.stringify(value));
};
