const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 기본 주소: localhost:PORT/user

// GET / => localhost:PORT/user
router.get("/", controller.main);

// 회원가입
// GET /siginup => localhost:PORT/user/signup
router.get("/signup", controller.signup);
// POST /siginup => localhost:PORT/user/signup
router.post("/signup", controller.signupPost);

// 로그인
// GET /signin => localhost:PORT/user/signin
router.get("/signin", controller.signin);
// POST /signin => localhost:PORT/user/signin
router.post("/signin", controller.signinPost);

// 프로필
// POST /profile => localhost:PORT/user/profile
router.post("/profile", controller.profile);
// POST /profile/edit => localhost:PORT/user/profile/edit
router.post("/profile/edit", controller.profileEdit);
// DELETE /profile/delete => localhost:PORT/user/profile/delete
router.post("/profile/delete", controller.profileDelete);

module.exports = router;
