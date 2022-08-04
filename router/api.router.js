const router = require('express').Router();

const userRouter = require('./user.router');
const authRouter = require('./auth.router');


// router.use('/auth', authRouter);
// router.use('/users', userRouter);

router.get("/", (req, res ) => {res.json({"6": "bit"})})


module.exports = router;