import express from "express";
import multer from "multer";
import { uploadResult, listResults } from "../controllers/result.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/generate", upload.single("image"), uploadResult);
router.get("/",  listResults);

export default router;
