const { render } = require("ejs");
const User = require("../model/User");

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render("index");
};

// GET /signup => localhost:PORT/user/signup
exports.signup = (req, res) => {
  res.render("signup");
};

// POST /signup => localhost:PORT/user/signup
exports.signupPost = (req, res) => {
  User.signupPost(req.body, (result) => {
    console.log("Cuser.js: ", result);
    res.send({
      id: result, // pk(id)
      userid: req.body.userid, // 폼에 입력한 userid
      pw: req.body.pw, // 폼에 입력한 pw
      name: req.body.name, // 폼에 입력한 name
    });
  });
};

// GET /signin => localhost:PORT/signin
exports.signin = (req, res) => {
  res.render("signin");
};

// POST /signin => localhost:PORT/signin
exports.signinPost = (req, res) => {
  User.signinPost(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST /profile => localhost:PORT/user/profile
exports.profile = (req, res) => {
  User.profile(req.body.userid, (result) => {
    if (result.length > 0) {
      res.render("profile", { data: result[0] });
    }
    // POST /user/profile
    // 로그인이 성공되어야만 수행하는 요청이기 때문에 else문 필요 x
  });
};

// POST /profile/edit => localhost:PORT/user/profile/edit
exports.profileEdit = (req, res) => {
  User.profileEdit(req.body, () => {
    res.send("회원정보 수정 성공!");
  });
};

// POST /profile/delete => localhost:PORT/user/profile/delete
exports.profileDelete = (req, res) => {
  User.profileDelete(req.body.id, () => {
    res.send("회원 탈퇴 성공!");
  });
};
