import * as express from "express";
import Book from "../models/books";

const router = express.Router();

router.get("/books", (_req, res) => {
    Book.find((err, books) => {
        if(err) {
            res.status(500).send({error: 'database failure'});
        }
        res.json(books);
    });
});

router.post("/books", (_req, res) => {
    const book = new Book({
        title: 'testing title',
        author: 'gwanwoodev'
    });

    book.save(err => {
        if(err) {
            res.json({result: 0});
        }
        res.json({result: 1});
    })
});

export default router;