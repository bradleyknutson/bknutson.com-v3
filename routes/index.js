const express = require(`express`);
const router = express.Router();

/* GET home page. */
router.get(`/`, (req, res, next) => {
    res.render(`index`);
});

router.get(`/blog/`, (req, res, next) => {
    res.render(`blog`);
});

module.exports = router;
