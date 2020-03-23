import multer from "multer";

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, "uploads/");
    },
    filename: (_req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});

export default multer({storage: storage});