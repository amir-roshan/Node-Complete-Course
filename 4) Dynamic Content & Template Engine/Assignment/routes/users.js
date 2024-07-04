import express from "express";
import { names } from "./home.js";

const router = express.Router();

router.get("/users", (req, res, next) => {
    res.render("users", {
        pageTitle: "Users",
        users: names,
    });
});

export { router as users };