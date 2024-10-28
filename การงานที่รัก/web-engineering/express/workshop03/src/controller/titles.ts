import { Router, Request, Response } from "express";
import multer from "multer";
import { uploadFile } from "../models/titles";

const upload = multer({ dest: "uploads/" });
const router = Router();

router.post("/avatar", upload.single("avatar"), function (req: Request, res: Response, next) {
  const file = req.file;
  console.log(file);
  if (file) {
    console.log(`File uploaded: ${file.originalname}`);
    uploadFile(file.originalname);
  }

  res.send(`File uploaded: ${file?.originalname}`);
});

export default router;
