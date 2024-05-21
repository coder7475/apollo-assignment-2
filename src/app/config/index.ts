import dotenv from 'dotenv'
import path from 'path'

const directory = path.join(process.cwd(), '.env')
dotenv.config({ path: directory })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
}
