import * as express from "express";
import Content from "../models/content";
const router = express.Router();

/* APIs */

router.get("/content", (_req, res) => {
    Content.find((err, contents) => {
        err ? res.status(500).json({msg: 'error'})
            : res.status(200).json(contents)
    });
});

router.post("/content", (req, res) => {
    const {title, preview, thumbnail} = req.body;

    const newContent = new Content({title, preview, thumbnail});
    newContent.save(err => {
        err ? res.status(500).json({msg: 'error'})
            : res.status(200).json({msg: 'success'})
    });
});

export default router;