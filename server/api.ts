import * as express from "express";
import passport from "passport";
import Content from "../models/content";
import uploader from "./uploader";

const router = express.Router();

/* APIs */

router.get("/content", uploader.none(), (_req, res, _next) => {
    Content.find((err, contents) => {
        err ? res.status(500).json({msg: 'error'})
            : res.status(200).json(contents)
    });
});

router.post("/content", uploader.single('thumbnail'), (req, res, _next) => {
    const {title, preview, directLink} = req.body;
    const thumbnailPath = `${req.file.filename}`;
    const newContent = new Content({title, preview, thumbnail: thumbnailPath, directLink});
    newContent.save(err => {
        err ? res.status(500).json({msg: 'error'})
            : res.status(200).json({msg: 'success'})
    });
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: true
}), (req, res, _next) => {
    res.send(req.user);
});

export default router;