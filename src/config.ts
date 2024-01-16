import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.HELLO)

export default { 
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'tareasdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASS: process.env.MONGO_PASS || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT 
}