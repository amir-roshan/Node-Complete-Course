import express from "express";

const router = express.Router();
const errorMessage = "An error occurred, please try again with a valid name.";
const names = [];

router.get("/", (req, res, next) => {
    res.render("home", {
        pageTitle: "Home",
    });
});

router.post("/", (req, res, next) => {
    if (req.body.name === undefined || req.body.name === '') {

        if (!(names[names.length - 1] === errorMessage))
            names.push(errorMessage);

        console.log(names);

        return res.redirect("/users");
    }

    if (names[names.length - 1] === errorMessage)
        names.pop();

    names.push(req.body.name);
    console.log(names);

    res.redirect("/users");
});

export { router as home, names };