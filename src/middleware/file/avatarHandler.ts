import multer from 'koa-multer'

import { filePath } from '../../constants/filePath'

const upload = multer({
  dest: filePath.AVATAR
})

const avatarHandler = upload.single('avatar')

export default avatarHandler
