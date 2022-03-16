import multer from "koa-multer"

import { filePath } from "../../constants/filePath"

const upload = multer({
  dest: filePath.PICTURE
})

const pictureHandler = upload.array('picture', 9)

export default pictureHandler 
