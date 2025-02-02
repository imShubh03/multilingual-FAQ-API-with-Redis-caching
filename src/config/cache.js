import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = new Redis(process.env.REDIS_URI);

redisClient.on("error", (err) => console.error("Redis Error:", err));

export default redisClient;
