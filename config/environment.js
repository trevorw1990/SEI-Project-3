import dotenv from 'dotenv'
dotenv.config()

export const dbURI = process.env.MONGODB_URI || 'mongodb+srv://trevorwhitehurst:7x4cDZhM7MUAkgpB@tcw-sei.nyqaa.mongodb.net/porj3X?retryWrites=true&w=majority'
export const port = process.env.PORT || 3001
export const secret = process.env.SECRET || 'trev'