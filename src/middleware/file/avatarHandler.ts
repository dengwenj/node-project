import multer from 'koa-multer'

const upload = multer({
  dest: './upload/avatar'
})

const avatarHandler = upload.single('avatar')

export default avatarHandler
