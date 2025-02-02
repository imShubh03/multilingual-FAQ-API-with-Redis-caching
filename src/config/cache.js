
import Redis from "ioredis"; 
import dotenv from "dotenv"; 

// load env variables
dotenv.config(); 

// create redis client
const redisClient = new Redis(process.env.REDIS_URI); 

// handle redis error
redisClient.on("error", (err) => console.error("Redis Error:", err)); 

// export redis client
export default redisClient; 
