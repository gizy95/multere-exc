import express from 'express';
import path from 'path';
import { postPicture } from '../controllers/pictureController.js';
import { pictureMiddleware } from '../middleware/picture.js';
import multer from 'multer';

const pictureRoutes = express.Router();
const upload = multer({
    dest: 'uploads/',
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            const extension = path.extname(file.originalname);
            cb(null, Date.now() + extension);
        }
    })
});

pictureRoutes.post("/upload-profile-pic", upload.single('profilePic'), pictureMiddleware, postPicture);


export default pictureRoutes;