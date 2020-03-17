import * as express from "express";

const router = express.Router();

router.get("/hello", (_req,res) => {
    const dummyJson = {
        code: 200,
        msg: 'hello'
    };
    res.json(dummyJson);
});

export default router;