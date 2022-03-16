import multer from "koa-multer"

import { filePath } from "../../constants/filePath"

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, filePath.PICTURE)
//     console.log(req);
    
//   },
//   filename(req, file, cb) {
//     // cb(null, file.originalname)
//   }
// })

// const upload = multer({
//   storage
// })

const upload = multer({
  dest: filePath.PICTURE
})

const pictureHandler = upload.array('picture', 9)

export default pictureHandler 
