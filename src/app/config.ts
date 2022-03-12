import dotenv from 'dotenv'

import type { Ienv } from './types'

dotenv.config()

const env: Ienv = process.env

export default env
